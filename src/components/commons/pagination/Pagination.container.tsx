import { useState } from "react";
import type { MouseEvent } from "react";
import type { IPaginationProps } from "./Pagination.types";
import PaginationUI from "./Pagination.presenter";

export default function Pagination(props: IPaginationProps) {
   const { refetch, currentPage, setCurrentPage } = props
   const [startPage, setStartPage] = useState(1)

   const lastPage = Math.ceil((props.count ??
      10) / 10)
   const viewPageLength = props.viewPageLength ?? 5

   const onClickPage = (e: MouseEvent<HTMLSpanElement>) => {
      refetch({ page: Number(e.currentTarget.innerText) })
      setCurrentPage(Number(e.currentTarget.innerText))
   }

   const onClickPagePrev = () => {
      if (startPage === 1) return

      const page = startPage - viewPageLength
      setStartPage(page)
      refetch({ page })
      setCurrentPage(page)
   }

   const onClickPageNext = () => {
      if (startPage + viewPageLength > lastPage) return

      const page = startPage + viewPageLength
      setStartPage(page)
      refetch({ page })
      setCurrentPage(page)
   }
   return (
      <PaginationUI
         startPage={startPage}
         lastPage={lastPage}
         currentPage={currentPage}
         viewPageLength={viewPageLength}
         onClickPage={onClickPage}
         onClickPagePrev={onClickPagePrev}
         onClickPageNext={onClickPageNext} />
   );
}