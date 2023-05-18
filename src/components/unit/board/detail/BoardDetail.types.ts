import { IQuery } from "@/src/commons/types/generated/types";

export interface IBoardDetailUIProps {
  data?: Pick<IQuery, "fetchBoard">;
  toggle: boolean;
  setToggle: (toggle: boolean) => void;
  onDelete: () => void;
  onClickMoveToEdit: () => void;
  onClickMoveToList: () => void;
  onClickLike: () => void;
  onClickDislike: () => void;
}

export interface ILikeButtonProps {
  dislike?: boolean;
}

export interface IMapTooltipProps {
  state?: boolean;
}
