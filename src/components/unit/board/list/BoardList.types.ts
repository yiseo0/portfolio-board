import type { MouseEvent } from "react";
import type { IQuery } from "@/src/commons/types/generated/types";

export interface IBoardListUIProps {
  data?: Pick<IQuery, "fetchBoards">;
  refetch?: any;
  onClickMoveToDetail: (e: MouseEvent<HTMLDivElement>) => void;
  onClickMoveToWrite: () => void;
}
