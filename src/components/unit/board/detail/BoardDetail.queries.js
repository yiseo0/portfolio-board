import { gql } from "@apollo/client";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      writer
      updatedAt
      title
      contents
    }
  }
`;

export default FETCH_BOARD;
