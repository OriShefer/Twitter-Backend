import { Injectable } from "@nestjs/common";
import { AuthDto } from "./dto";
import * as argon from 'argon2';
import { HasuraResolver } from "src/hasura/hasura.resolver";



@Injectable()
export class AuthService{

  constructor(private hasuraResolver: HasuraResolver){}

    async signup(dto: AuthDto){

      //generate the password hash
      const hash = argon.hash(dto.password);

      //save the new user in the db
      const user = await this.hasuraResolver.yourQuery();
      //return the saved user

      console.log(user)
      
      return { msg: 'i am signed up'}
    }

    signin(){
        return { msg: 'i am signed in'}
    }

    


}