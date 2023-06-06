
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import type { MouseEvent } from 'react';
import type { IQuery, IQueryFetchBoardsArgs, IQueryFetchBoardsCountArgs } from "@/src/commons/types/generated/types";
import BoardListUI from "./BoardList.presenter";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./BoardList.queries";

export default function BoardList() {
  const router = useRouter();
  const { data, refetch } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(FETCH_BOARDS);
  const { data: dataBoardsCount } = useQuery<Pick<IQuery, "fetchBoardsCount">, IQueryFetchBoardsCountArgs>(FETCH_BOARDS_COUNT)

  const onClickMoveToDetail = (e: MouseEvent<HTMLDivElement>) => {
    void router.push(`/boards/${e.currentTarget.id}`);
  };

  const onClickMoveToWrite = () => {
    void router.push(`/boards/new`);
  };

  return (
    <BoardListUI
      data={data}
      refetch={refetch}
      count={dataBoardsCount?.fetchBoardsCount}
      onClickMoveToDetail={onClickMoveToDetail}
      onClickMoveToWrite={onClickMoveToWrite}
    />
  );
}
