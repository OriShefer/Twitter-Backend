import { ConfigurableModuleBuilder, DynamicModule } from '@nestjs/common';
import { GraphqlExtrasOptions, GraphqlOptions } from './types';

export const { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN } =
	new ConfigurableModuleBuilder<GraphqlOptions>()
		.setExtras(
			{ isGlobal: false },
			(definition: DynamicModule, { isGlobal }: GraphqlExtrasOptions): DynamicModule => ({
				...definition,
				global: isGlobal,
			})
		)
		.build();
