import { Module } from '@nestjs/common';
import { GraphQLClient } from 'graphql-request';
import { GRAPHQL_CLIENT } from './constants';
import { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN } from './graphql-client.module-definition';
import { GraphqlOptions } from './types';

@Module({
	providers: [
		{
			provide: GRAPHQL_CLIENT,
			useFactory: ({ graphqlEndpoint, hasuraSecret }: GraphqlOptions) =>
				new GraphQLClient(graphqlEndpoint, {
					headers: {
						'content-type': 'application/json',
						'x-hasura-admin-secret': hasuraSecret,
					},
				}),
			inject: [MODULE_OPTIONS_TOKEN],
		},
	],
	exports: [GRAPHQL_CLIENT],
})
export class GraphqlClientModule extends ConfigurableModuleClass {}
