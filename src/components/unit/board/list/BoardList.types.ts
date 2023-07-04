import type { MouseEvent, Dispatch, SetStateAction } from "react";
import type { IQuery } from "@/src/commons/types/generated/types";

export interface IBoardListUIProps {
  data?: Pick<IQuery, "fetchBoards">;
  count?: number;
  refetch?: any;
  onClickMoveToDetail: (e: MouseEvent<HTMLDivElement>) => void;
  onClickMoveToWrite: () => void;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}
