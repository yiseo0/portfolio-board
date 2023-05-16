import { useQuery } from "@apollo/client";
import BoardListUI from "./BoardList.presenter";
import { FETCH_BOARDS } from "./BoardList.queries";
import { useRouter } from "next/router";
import { IQuery, IQueryFetchBoardsArgs } from "@/src/commons/types/generated/types";

export default function BoardList() {
  const router = useRouter();
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(FETCH_BOARDS);

  const onClickMoveToDetail = (boardId: string) => {
    router.push(`/boards/${boardId}`);
  };
  const onClickMoveToWrite = () => {
    router.push(`/boards/new`);
  };

  return (
    <BoardListUI
      data={data}
      onClickMoveToDetail={onClickMoveToDetail}
      onClickMoveToWrite={onClickMoveToWrite}
    />
  );
}
