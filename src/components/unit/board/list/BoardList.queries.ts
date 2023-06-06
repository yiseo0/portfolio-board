import { gql } from "@apollo/client";

export const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      title
      writer
      updatedAt
    }
  }
`;

export const FETCH_BOARDS_COUNT = gql`
  query {
    fetchBoardsCount
  }
`;
