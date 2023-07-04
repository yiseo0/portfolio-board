import type { MouseEvent, Dispatch, SetStateAction } from "react";

export interface IPaginationProps {
   refetch: any;
   count?: number
   viewPageLength?: number
   currentPage: number;
   setCurrentPage: Dispatch<SetStateAction<number>>;
}
export interface IPaginationUIProps {
   startPage: number;
   lastPage: number;
   currentPage: number;
   viewPageLength: number;
   onClickPage: (e: MouseEvent<HTMLSpanElement>) => void;
   onClickPagePrev: () => void;
   onClickPageNext: () => void;
}
export interface IPagerItemProps {
   selected: boolean;
}