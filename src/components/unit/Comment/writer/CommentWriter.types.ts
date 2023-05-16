export interface ICommentState {
  cWriter: string;
  cPassword: string;
  cContents: string;
  cRating: number;
}

export interface ICommentWriterUIProps {
  comment: ICommentState;
  setComment: () => { comment: ICommentState };
  onChangeComment: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClickCreateComment: () => void;
}
