import { Pager, PagerButton, PagerItem } from "./Pagination.styles";
import type { IPaginationUIProps } from "./Pagination.types";

export default function PaginationUI(props: IPaginationUIProps) {
   const { startPage, lastPage, currentPage, viewPageLength, onClickPage, onClickPagePrev, onClickPageNext } = props
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