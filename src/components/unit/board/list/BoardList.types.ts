import type { MouseEvent } from "react";
import type { IQuery } from "@/src/commons/types/generated/types";

export interface IBoardListUIProps {
  data?: Pick<IQuery, "fetchBoards">;
  onClickMoveToDetail: (e: MouseEvent<HTMLDivElement>) => void;
  onClickMoveToWrite: () => void;
}

export interface IPagingItemProps {
  active?: string;
}
