import { gql } from 'graphql-request';


export const insertTwitterUsers = gql`
mutation InsertTwitterUsers(
    $username: String!,
    $password: String!,
	$description: String,
    $joinDate: date!,
    $isAdministrator: Boolean!
  ) {
    insert_twitter_Users(
      objects: {
        username: $username,
        password: $password,
		description: $description,
        join_date: $joinDate,
        is_administrator: $isAdministrator,
      }
    ) {
      affected_rows
      returning {
        username
        user_id
        password
        join_date
        is_administrator
      }
    }
  }
`;

export const findUser = gql`
query MyQuery {
	twitterUser(username: "ori") {
	  username
	}
  }
`;
