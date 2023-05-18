import { gql } from "@apollo/client";

export const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      writer
      updatedAt
      title
      contents
      likeCount
      dislikeCount
    }
  }
`;

export const DELETE_BOARD = gql`
  mutation DeleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;

// 좋아요
export const LIKE_BOARD = gql`
  mutation likeBoard($boardId: ID!) {
    likeBoard(boardId: $boardId)
  }
`;

export const DISLIKE_BOARD = gql`
  mutation dislikeBoard($boardId: ID!) {
    dislikeBoard(boardId: $boardId)
  }
`;
