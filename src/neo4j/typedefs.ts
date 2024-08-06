import { gql } from 'graphql-tag'

export const typeDefs = gql`
  type User {
    id: ID! @id
  }

  type Post
    @authorization(
      validate: [{ where: { node: { author: { id: "$jwt.sub" } } } }]
    ) {
    title: String!
    content: String!
    author: User! @relationship(type: "AUTHORED", direction: IN)
  }
`
