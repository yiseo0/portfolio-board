import { IQuery } from "@/src/commons/types/generated/types";

export interface IBoardDetailUIProps {
  data?: Pick<IQuery, "fetchBoard">;
  toggle: boolean;
  setToggle: (toggle: boolean) => void;
  onDelete: () => void;
  onClickMoveToEdit: () => void;
  onClickMoveToList: () => void;
}

export interface ILikeButtonProps {
  like: string;
}

export interface IMapTooltipProps {
  state: string;
}