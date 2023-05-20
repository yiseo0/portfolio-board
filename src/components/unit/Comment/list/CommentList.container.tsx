import { useState } from "react";
import type { MouseEvent, ChangeEvent } from "react";

import type { IMutation, IMutationDeleteBoardCommentArgs, IQuery, IQueryFetchBoardCommentsArgs } from "@/src/commons/types/generated/types";
import CommentListUI from "./CommentList.presenter";
import {
  DELETE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
} from "./CommentList.queries";
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

export default function CommentList() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteComment, setDeleteComment] = useState({
    id: "",
    password: ""
  })


  const { data } = useQuery<Pick<IQuery, "fetchBoardComments">, IQueryFetchBoardCommentsArgs>(FETCH_BOARD_COMMENTS, {
    variables: {
      boardId: String(router.query.id),
    },
  });
  const [deleteBoardComment] = useMutation<Pick<IMutation, "deleteBoardComment">, IMutationDeleteBoardCommentArgs>(DELETE_BOARD_COMMENT);

  const onClickModalShow = (e: MouseEvent<HTMLImageElement>) => {
    console.log(e.currentTarget.id)
    setIsModalOpen(true);
    setDeleteComment({ ...deleteComment, id: e.currentTarget.id })
  };

  const onClickModalCancel = () => {
    setIsModalOpen(false);
  };

  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setDeleteComment({ ...deleteComment, password: e.target.value })
  }

  const onClickDelete = async () => {
    try {
      await deleteBoardComment({
        variables: {
          boardCommentId: deleteComment.id,
          password: deleteComment.password
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
      onClickModalCancel()
    } catch (error) {
      if (error instanceof Error) alert(error.message)
    }
  };

  return (
    <CommentListUI
      data={data}
      isModalOpen={isModalOpen}
      onClickModalShow={onClickModalShow}
      onClickModalCancel={onClickModalCancel}
      onChangePassword={onChangePassword}
      onClickDelete={onClickDelete}
    />
  );
}
