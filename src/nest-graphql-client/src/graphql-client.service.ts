import { Inject, Injectable } from '@nestjs/common';
import { GraphQLClient } from 'graphql-request';
import { MODULE_OPTIONS_TOKEN } from './graphql-client.module-definition';
import { GraphqlOptions } from './types';

@Injectable()
export class GraphqlClientService {
	constructor(@Inject(MODULE_OPTIONS_TOKEN) private readonly graphqlOptions: GraphqlOptions) {}

	private readonly client = new GraphQLClient(this.graphqlOptions.graphqlEndpoint, {
		headers: {
			'content-type': 'application/json',
			'x-hasura-admin-secret': this.graphqlOptions.hasuraSecret,
		},
	});

	async request<T>(
		query: string,
		variables?: Record<string, unknown>,
		requestHeaders?: Record<string, string>
	): Promise<T> {
		return this.client.request(query, variables, requestHeaders);
	}

	setHeader(key: string, value: string): void {
		this.client.setHeader(key, value);
	}
}
