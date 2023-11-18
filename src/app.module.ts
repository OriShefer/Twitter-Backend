import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphqlClientModule, GraphqlOptions } from './nest-graphql-client';

@Module({
  imports: [
    GraphqlClientModule.registerAsync({
			useFactory: (configService: ConfigService): GraphqlOptions => ({
				graphqlEndpoint: configService.get('GRAPHQL_ENDPOINT'),
				hasuraSecret: configService.get('HASURA_ADMIN_KEY'),
			}),
			inject: [ConfigService],
			isGlobal: true,
		}),
    ConfigModule.forRoot({
      isGlobal: true
    }),
    AuthModule, 
    UserModule, 
    ],
})
export class AppModule {}
