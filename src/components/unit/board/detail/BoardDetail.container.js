import BoardDetailUI from "./BoardDetail.presenter";
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { DELETE_BOARD, FETCH_BOARD } from "./BoardDetail.queries";

export default function BoardDetail() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.id,
    },
  });

  const [delete_board] = useMutation(DELETE_BOARD);
  const [toggle, setToggle] = useState(false);
  const [star, setStar] = useState(0);

  const onDelete = () => {
    delete_board({
      variables: {
        boardId: router.query.id,
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
      star={star}
      setStar={setStar}
      onDelete={onDelete}
      onClickMoveToEdit={onClickMoveToEdit}
      onClickMoveToList={onClickMoveToList}
    />
  );
}
