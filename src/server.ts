import dotenv from 'dotenv'
dotenv.config();

import 'reflect-metadata'
import './utils/connection'

import { buildSchema } from 'type-graphql'
import { ApolloServer } from 'apollo-server'
import CategoryResolver from './graphql/category/CategoryResolver'
import VideoResolver from './graphql/video/VideoResolver'

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [CategoryResolver, VideoResolver]
  });

  const server = new ApolloServer({
    schema
  })

  server.listen({ port: 4200 }, () => console.log('🚀 Running on http://localhost:4200'))
}

bootstrap();