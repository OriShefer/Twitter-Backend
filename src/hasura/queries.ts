import { gql } from 'graphql-tag';

export const FETCH_DATA_QUERY = `mutation {
  insert_twitter_Users(objects: [
    {
      user_id: 10,
      username: "ori 123123",
      password: "123",
      join_date: "10.11.2023",
      is_administrator: false
    }
  ]) {
    affected_rows
  }
}`;

