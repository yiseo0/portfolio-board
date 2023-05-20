import type { IQuery } from "@/src/commons/types/generated/types";
import type { Address } from "react-daum-postcode";

interface boardAddress {
  zipcode?: string;
  address?: string;
  addressDetail?: string;
}

export interface IUpdateBoardInput {
  title?: string;
  contents?: string;
  boardAddress?: boardAddress;
}

export interface IBoardWriteUIProps {
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard">;
  register: any;
  handleSubmit: any;
  errors: any;
  isOpen: boolean;
  onSubmit: (data: any) => void;
  onSubmitUpdate: (data: any) => void;
  onClickMoveToList: () => void;
  onClickAddressSearch: () => void;
  onCompleteAddressSearch: (address: Address) => void;
}

export interface IWriteBoxProps {
  row?: string;
}

export interface IButtonProps {
  bg?: string;
}
