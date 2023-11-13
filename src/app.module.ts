import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { HasuraModule } from './hasura/hasura.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    AuthModule, 
    UserModule, 
    HasuraModule],
})
export class AppModule {}
