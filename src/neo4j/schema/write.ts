import { writeFile } from 'fs/promises'
import { printSchema, type GraphQLSchema } from 'graphql'
import { dirname, resolve } from 'path'

export async function writeSchema(schema: GraphQLSchema) {
  await writeFile(
    resolve(dirname(import.meta.filename), '../../../schema.graphql'),
    printSchema(schema),
  )
}
