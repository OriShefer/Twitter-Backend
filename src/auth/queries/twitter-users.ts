import { gql } from 'graphql-request';

export const twitterUsers = gql`
query MyQuery {
	twitter_Users {
	  description
	  is_administrator
	  user_id
	  username
	}
  }  
`;
