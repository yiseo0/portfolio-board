import type { MouseEvent, ChangeEvent } from "react";
import type { IQuery } from "@/src/commons/types/generated/types";

export interface ICommentListUIProps {
  data?: Pick<IQuery, "fetchBoardComments">;
  isModalOpen: boolean;
  onClickModalShow: (e: MouseEvent<HTMLImageElement>) => void;
  onClickModalCancel: () => void;
  onChangePassword: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickDelete: () => void;
}
