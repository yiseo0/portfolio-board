import type { MouseEvent } from "react";
import type { IQuery } from "@/src/commons/types/generated/types";

export interface ICommentListUIProps {
  data?: Pick<IQuery, "fetchBoardComments">;
  onClickDelete: (e: MouseEvent<HTMLImageElement>) => void;
}
