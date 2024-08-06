import { Neo4jGraphQL } from '@neo4j/graphql'
import { driver } from './driver.js'
import { typeDefs } from './typedefs.js'
import { writeSchema } from './schema/write.js'

export const neo4j = new Neo4jGraphQL({
  typeDefs,
  driver,
  debug: true,
  features: {
    authorization: {
      key: 'secret',
    },
    excludeDeprecatedFields: {
      bookmark: true,
      negationFilters: true,
      stringAggregation: true,
      aggregationFilters: true,
      arrayFilters: true,
    },
  },
})

export const schema = await neo4j.getSchema()

await neo4j.assertIndexesAndConstraints()

await writeSchema(schema)
