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
import { IMutation, IMutationDeleteBoardArgs, IMutationDislikeBoardArgs, IMutationLikeBoardArgs, IQuery, IQueryFetchBoardArgs } from "@/src/commons/types/generated/types";

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
  const [like_board] = useMutation<Pick<IMutation, "likeBoard">, IMutationLikeBoardArgs>(LIKE_BOARD)
  const [dislike_board] = useMutation<Pick<IMutation, "dislikeBoard">, IMutationDislikeBoardArgs>(DISLIKE_BOARD)
  const [toggle, setToggle] = useState(false);

  const onDelete = () => {
    deleteBoard({
      variables: {
        boardId: String(router.query.id),
      },
    });
    alert("게시물이 삭제되었습니다.");
    router.push("/boards");
  };

  const onClickMoveToEdit = () => {
    router.push(`/boards/${router.query.id}/edit`);
  };

  const onClickMoveToList = () => {
    router.push(`/boards`);
  };

  // 좋아요
  const onClickLike = () => {
    try {
      like_board({
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
      alert(error)
    }
  }

  const onClickDislike = () => {
    try {
      dislike_board({
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
      alert(error)
    }
  }

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
