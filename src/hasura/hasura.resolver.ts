import { Query, Resolver } from '@nestjs/graphql';
import { HasuraService } from './hasura.service';

@Resolver()
export class HasuraResolver {
  constructor(private readonly hasuraService: HasuraService) {}
  
  //@Query(() => String)
    async yourQuery() {
      this.hasuraService.fetchData();
    }
}
