import { IQuery } from "./../../../../commons/types/generated/types";

export interface IBoardListUIProps {
  data?: Pick<IQuery, "fetchBoards">;
  onClickMoveToDetail: (boardId: string) => void;
  onClickMoveToWrite: () => void;
}

export interface IPagingItemProps {
  active?: string;
}
