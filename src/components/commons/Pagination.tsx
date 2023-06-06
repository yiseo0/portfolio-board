import { useState } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import type { MouseEvent } from "react";

export interface IPagerItemProps {
   selected: boolean;
}
export interface IPaginationProps {
   refetch: any;
   dataTotalCount: number
   viewPageLength?: number
}

export const Pager = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
export const PagerButton = styled.span`
  cursor: pointer;
`
export const PagerItem = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #4f4f4f;
  cursor: pointer;
  img {
    vertical-align: bottom;
  }
  ${(props: IPagerItemProps) =>
      props.selected &&
      css`
      color: #ffd600;
      text-decoration: underline;
    `}
`;

export default function Pagination(props: IPaginationProps) {
   const { refetch } = props
   const [startPage, setStartPage] = useState(1)
   const [currentPage, setCurrentPage] = useState(startPage)

   const lastPage = Math.ceil((props.dataTotalCount || 10) / 10)
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
      <Pager>
         <PagerButton onClick={onClickPagePrev}>
            <img src="/icon/icon_navi_before.svg" alt="이전" />
         </PagerButton>
         {
            Array(viewPageLength).fill(0)
               .filter((_, idx) => idx + startPage <= lastPage)
               .map((_, idx) => (
                  <PagerItem
                     key={idx + startPage}
                     onClick={onClickPage}
                     selected={idx + startPage === currentPage}
                  >
                     {idx + startPage}
                  </PagerItem>
               ))
         }
         <PagerButton onClick={onClickPageNext}>
            <img src="/icon/icon_navi_next.svg" alt="다음" />
         </PagerButton>
      </Pager>
   );
}