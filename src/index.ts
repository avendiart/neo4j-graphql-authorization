import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { schema } from './neo4j/schema.js'

const server = new ApolloServer({
  schema,
})

await startStandaloneServer(server, {
  listen: {
    port: 4444,
  },
  context: async ({ req }) => {
    return {
      token: req.headers.authorization,
    }
  },
}).then(({ url }) => {
  console.log(`Server ready at ${url}`)
})
