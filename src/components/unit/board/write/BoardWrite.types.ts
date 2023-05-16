export interface IBoardWriteProps {
  isEdit: boolean;
  data: any;
}

export interface IUpdateBoardInput {
  title?: string;
  contents?: string;
}

export interface IBoardWriteUIProps {
  isEdit: boolean;
  data: any;
  register: any;
  handleSubmit: any
  errors : any;
  onSubmit : () => void;
  onSubmitUpdate : () => void;
  onClickMoveToList : () => void;
}
