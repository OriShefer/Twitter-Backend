import { Inject, Injectable } from "@nestjs/common";
import { AuthDto } from "./dto";
import * as argon from 'argon2';
import { GRAPHQL_CLIENT } from "src/nest-graphql-client/src/constants";
import { GraphQLClient } from "graphql-request";
import { twitterUsers } from "./queries/twitter-users";



@Injectable()
export class AuthService{

  constructor(@Inject(GRAPHQL_CLIENT) private readonly graphqlClient: GraphQLClient){}

    async signup(dto: AuthDto){

      //generate the password hash
      const hash = argon.hash(dto.password);

      //save the new user in the db
      const user = await this.graphqlClient.request<string>(twitterUsers);
      //return the saved user

      console.log(user)
      
      return { msg: 'i am signed up'}
    }

    signin(){
        return { msg: 'i am signed in'}
    }

    


}