import BoardDetailUI from "./BoardDetail.presenter";
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  DELETE_BOARD,
  FETCH_BOARD,
} from "./BoardDetail.queries";
import { IMutation, IMutationDeleteBoardArgs, IQuery, IQueryFetchBoardArgs } from "@/src/commons/types/generated/types";

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

  return (
    <BoardDetailUI
      data={data}
      toggle={toggle}
      setToggle={setToggle}
      onDelete={onDelete}
      onClickMoveToEdit={onClickMoveToEdit}
      onClickMoveToList={onClickMoveToList}
    />
  );
}
