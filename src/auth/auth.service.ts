import { Inject, Injectable } from "@nestjs/common";
import { AuthDto } from "./dto";
import * as argon from 'argon2';
import { GRAPHQL_CLIENT } from "src/nest-graphql-client/src/constants";
import { GraphQLClient } from "graphql-request";
import { findUser, insertTwitterUsers } from "./queries/twitter-users";



@Injectable()
export class AuthService{

  constructor(@Inject(GRAPHQL_CLIENT) private readonly graphqlClient: GraphQLClient){}

    async signup(dto: AuthDto){

      try{
        //generate the password hash
      dto.password = await argon.hash(dto.password);

      
      //save the new user in the db
      const user = await this.graphqlClient.request<string>(insertTwitterUsers, {...dto});

      //return the saved user
      console.log(user)

      }
      catch(error){
        console.log(error)
      }

      
      
      return { msg: 'i am signed up'}
    }

    async signin(dto: AuthDto){

      const user = await this.graphqlClient.request<string>(findUser);



      return { msg: 'i am signed in'}
    }

    


}