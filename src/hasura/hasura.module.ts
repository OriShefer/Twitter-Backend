import { Module,Global } from '@nestjs/common';
import { HasuraService } from './hasura.service';
import { HasuraResolver } from './hasura.resolver';
import { HttpModule } from '@nestjs/axios';

@Global()
@Module({
  providers: [HasuraResolver, HasuraService],
  imports:[HttpModule],
  exports: [HasuraResolver]
})
export class HasuraModule {}
