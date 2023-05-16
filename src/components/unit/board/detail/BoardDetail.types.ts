export interface IBoardDetailUIProps {
  data: any;
  toggle: boolean;
  setToggle: (toggle: boolean) => void;
  onDelete: () => void;
  onClickMoveToEdit: () => void;
  onClickMoveToList: () => void;
}
