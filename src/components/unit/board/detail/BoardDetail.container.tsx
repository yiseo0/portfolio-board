import BoardDetailUI from "./BoardDetail.presenter";
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  DELETE_BOARD,
  DISLIKE_BOARD,
  FETCH_BOARD,
  LIKE_BOARD,
} from "./BoardDetail.queries";
import type { IMutation, IMutationDeleteBoardArgs, IMutationDislikeBoardArgs, IMutationLikeBoardArgs, IQuery, IQueryFetchBoardArgs } from "@/src/commons/types/generated/types";

export default function BoardDetail() {
  const router = useRouter();

  // if(typeof router.query.id !== "string") {
  //   router.push("/")
  //   return <></>
  // }

  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(FETCH_BOARD, {
    variables: {
      boardId: String(router.query.id),
    },
  });

  const [deleteBoard] = useMutation<Pick<IMutation, "deleteBoard">, IMutationDeleteBoardArgs>(DELETE_BOARD);
  const [likeBoard] = useMutation<Pick<IMutation, "likeBoard">, IMutationLikeBoardArgs>(LIKE_BOARD)
  const [dislikeBoard] = useMutation<Pick<IMutation, "dislikeBoard">, IMutationDislikeBoardArgs>(DISLIKE_BOARD)
  const [toggle, setToggle] = useState(false);

  const onDelete = async () => {
    try {
      await deleteBoard({
        variables: {
          boardId: String(router.query.id),
        },
      });
      alert("게시물이 삭제되었습니다.");
      void router.push("/boards");
    } catch (error) {
      if (error instanceof Error) alert(error.message)
    }
  };

  // 좋아요
  const onClickLike = async () => {
    try {
      await likeBoard({
        variables: {
          boardId: String(router.query.id)
        }, refetchQueries: [{
          query: FETCH_BOARD,
          variables: {
            boardId: String(router.query.id)
          }
        }]
      })
    } catch (error) {
      if (error instanceof Error) alert(error.message)
    }
  }

  const onClickDislike = async () => {
    try {
      await dislikeBoard({
        variables: {
          boardId: String(router.query.id)
        }, refetchQueries: [{
          query: FETCH_BOARD,
          variables: {
            boardId: String(router.query.id)
          }
        }]
      })
    } catch (error) {
      if (error instanceof Error) alert(error.message)
    }
  }

  const onClickMoveToEdit = () => {
    void router.push(`/boards/${String(router.query.id)}/edit`);
  };

  const onClickMoveToList = () => {
    void router.push(`/boards`);
  };

  return (
    <BoardDetailUI
      data={data}
      toggle={toggle}
      setToggle={setToggle}
      onDelete={onDelete}
      onClickMoveToEdit={onClickMoveToEdit}
      onClickMoveToList={onClickMoveToList}
      onClickLike={onClickLike}
      onClickDislike={onClickDislike}
    />
  );
}
