import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config/dist';
import {FETCH_DATA_QUERY} from './queries'
import axios from 'axios';

@Injectable()
export class HasuraService {
  private readonly hasuraEndpoint: string;

  constructor(private readonly httpService: HttpService, private config: ConfigService) {
    this.hasuraEndpoint = config.get('DATABASE_URL');
  }

  

  async fetchData() {

    const hasuraQuery = FETCH_DATA_QUERY

      const headers = {
        'Content-Type': 'application/json',
        'x-hasura-admin-secret': this.config.get('SECRET'),
      };
        
      const response = await axios.post(this.hasuraEndpoint, { query: hasuraQuery }, { headers });        
  
    
        return response;
    }
}


/*
    const headers = {
        'Content-Type': 'application/json',
        'x-hasura-admin-secret': "47yrZkJdGXnqOkShjD9A8PO9Y9PCL5PE2BPlDugPHKVu70cwmNcGv8gFymTshtAM",
      };
        
    const response = await axios.post(this.hasuraEndpoint, { query: gql`
    ${FETCH_DATA_QUERY}
  ` }, { headers });  
    

    console.log(response)
    return response;
  }
*/
   

