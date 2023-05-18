import type { ChangeEvent } from "react";

export interface ICommentState {
  cWriter: string;
  cPassword: string;
  cContents: string;
  cRating: number;
}

export interface ICommentWriterUIProps {
  comment: ICommentState;
  setComment: any;
  onChangeComment: (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => void;
  onClickCreateComment: () => void;
}

export interface IStarsProps {
  star?: number;
}

export interface IButtonProps {
  type?: string;
}
