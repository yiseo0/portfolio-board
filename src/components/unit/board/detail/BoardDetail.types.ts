export interface IBoardDetailUIProps {
  data: any;
  toggle: boolean;
  setToggle: (toggle: boolean) => boolean;
  onDelete: () => void;
  onClickMoveToEdit: () => void;
  onClickMoveToList: () => void;
}
