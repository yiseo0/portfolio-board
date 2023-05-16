import CommentListUI from "./CommentList.presenter";
import {
  DELETE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
} from "./CommentList.queries";
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

export default function CommentList() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: {
      boardId: router.query.id,
    },
  });
  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);


  const onClickDelete = async (id : string) => {
    try {
      const password = prompt("비밀번호를 입력해주세요.");

      const result = await deleteBoardComment({
        variables: {
          updateBoardCommentInput: {
            contents: "",
            rating: "",
          },
          password: password,
          boardCommentId: id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: {
              boardId: router.query.id,
            },
          },
        ],
      });
      alert("댓글이 삭제되었습니다.");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <CommentListUI
      data={data}
      onClickDelete={onClickDelete}
    />
  );
}
