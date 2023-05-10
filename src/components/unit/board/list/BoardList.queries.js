import { gql } from "@apollo/client";

export const FETCH_BOARDS = gql`
  query {
    fetchBoards {
      _id
      title
      writer
      updatedAt
    }
  }
`;
