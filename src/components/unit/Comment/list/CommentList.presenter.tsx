import { getDate } from "@/src/commons/libraries/utils";
import { Rate } from "antd";
import type { ICommentListUIProps } from "./CommentList.types";
import * as S from "./CommentList.styles";

export default function CommentListUI({ data, onClickDelete }: ICommentListUIProps) {
  return (
    <>
      {/* 수정 */}
      {/* <CommentCreate>
       <CommentCreateInput type="text" name="" placeholder="작성자" />
       <CommentCreateInput type="password" name="" placeholder="비밀번호" />
       <Stars star={star}>
         {Array(5)
           .fill(0)
           .map((_, idx) => (
             <Star key={idx} onClick={() => setStar(idx + 1)} />
           ))}
       </Stars>
       <CommentCreateTextarea
         cols="30"
         rows="10"
         placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
       ></CommentCreateTextarea>
       <CommentCreateTextareaBottom>
         0/100
         <CommentCreateTextareaButton type="modify">
           등록하기
         </CommentCreateTextareaButton>
       </CommentCreateTextareaBottom>
     </CommentCreate> */}

      {data?.fetchBoardComments.map((el: any) => (
        <S.ItemWrapper key={el._id}>
          <S.Avatar src="/images/commons/avatar.svg" width={48} height={48} />
          <S.MainWrapper>
            <>
              <span className="writer">{el.writer}</span>
              <Rate disabled defaultValue={el.rating} />
            </>
            <p className="comment">{el.contents}</p>
            <p className="update-date">{getDate(el.updatedAt)}</p>
          </S.MainWrapper>
          <S.OptionWrapper>
            <S.UpdateIcon src="/images/boardComment/list/icon_option_update.svg" />
            <S.DeleteIcon
              src="/images/boardComment/list/icon_option_delete.svg"
              id="el.id"
              onClick={onClickDelete}
            />
          </S.OptionWrapper>
        </S.ItemWrapper>
      ))}
    </>
  );
}
