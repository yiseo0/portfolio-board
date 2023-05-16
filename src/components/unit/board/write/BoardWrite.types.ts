import { IQuery } from "@/src/commons/types/generated/types";

export interface IUpdateBoardInput {
  title?: string;
  contents?: string;
}

export interface IBoardWriteUIProps {
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard">;
  register: any;
  handleSubmit: any;
  errors: any;
  onSubmit: (data: any) => void;
  onSubmitUpdate: (data: any) => void;
  onClickMoveToList: () => void;
}

export interface IWriteBoxProps {
  row? : string
}

export interface IButtonProps{
  bg?: string
}