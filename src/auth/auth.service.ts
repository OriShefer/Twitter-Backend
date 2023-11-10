import { Injectable } from "@nestjs/common";
import axios from "axios";

@Injectable()
export class AuthService{

    signin(){
        return { msg: 'i am signed in'}
    }

    signup(){
        return { msg: 'i am signed up'}
    }
    

    /*

    async fetchDataFromHasura(){
        const hasuraEndpoint = 'https://large-muskrat-86.hasura.app/v1/graphql';
        const hasuraQuery = `mutation {
            insert_twitter_Users(objects: [
              {
                user_id: 2,
                username: "ori shefer",
                password: "123",
                join_date: "10.11.2023",
                is_administrator: false
              }
            ]) {
              affected_rows
            }
          }`

          const headers = {
            'Content-Type': 'application/json',
            'x-hasura-admin-secret': "47yrZkJdGXnqOkShjD9A8PO9Y9PCL5PE2BPlDugPHKVu70cwmNcGv8gFymTshtAM",
          };
            
          const response = await axios.post(hasuraEndpoint, { query: hasuraQuery }, { headers });        
      
        
    return response;
    }

    */

}