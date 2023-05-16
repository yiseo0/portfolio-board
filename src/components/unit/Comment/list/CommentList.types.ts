import { IQuery } from "@/src/commons/types/generated/types";

export interface ICommentListUIProps {
  data?: Pick<IQuery, "fetchBoardComments">;
  onClickDelete: (id: string) => void;
}
