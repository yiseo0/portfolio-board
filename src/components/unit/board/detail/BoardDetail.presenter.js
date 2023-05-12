import * as S from "./BoardDetail.styles";

export default function BoardDetailUI({
  data,
  toggle,
  setToggle,
  star,
  setStar,
  onDelete,
  onClickMoveToEdit,
  onClickMoveToList,
}) {
  return (
    <>
      <S.Wrapper>
        <S.BoardDetailHead>
          <S.ProfileThumbDefault />

          <S.BoardDetailHeadCenter>
            <p className="writer">{data?.fetchBoard.writer}</p>
            <p className="update-date">{data?.fetchBoard.updatedAt}</p>
          </S.BoardDetailHeadCenter>

          <S.BoardDetailHeadRight>
            <S.IconLink />
            <S.IconMap onClick={() => setToggle(!toggle)} />
            <S.MapTooltip state={toggle && "block"}>
              서울특별시 영등포구 양산로 200
              <br />
              (영등포동5가, 영등포시장역) 영등포 타임스퀘어 2층
            </S.MapTooltip>
          </S.BoardDetailHeadRight>
        </S.BoardDetailHead>

        <S.BoardDetailBody>
          <h3 className="title">{data?.fetchBoard.title}</h3>
          <div className="content">{data?.fetchBoard.contents}</div>

          <S.LikeButtonWrap>
            <S.LikeButton like="like">
              <S.IconLike />
              1920
            </S.LikeButton>
            <S.LikeButton>
              <S.IconUnLike />
              1920
            </S.LikeButton>
          </S.LikeButtonWrap>
        </S.BoardDetailBody>
      </S.Wrapper>
      <S.BoardDetailButtonWrap>
        <S.BoardDetailButton onClick={onClickMoveToList}>
          목록으로
        </S.BoardDetailButton>
        <S.BoardDetailButton onClick={onClickMoveToEdit}>
          수정하기
        </S.BoardDetailButton>
        <S.BoardDetailButton onClick={onDelete}>삭제하기</S.BoardDetailButton>
      </S.BoardDetailButtonWrap>

      <S.BoardDetailCommentWrap>
        <S.BoardDetailCommentTitle>
          <S.IconComment />
          댓글
        </S.BoardDetailCommentTitle>

        {/* 쓰기 */}
        <S.CommentCreate>
          <S.CommentCreateInput type="text" name="" placeholder="작성자" />
          <S.CommentCreateInput
            type="password"
            name=""
            placeholder="비밀번호"
          />
          <S.Stars star={star}>
            {Array(5)
              .fill(0)
              .map((_, idx) => (
                <S.Star key={idx} onClick={() => setStar(idx + 1)} />
              ))}
          </S.Stars>
          <S.CommentCreateTextarea
            cols="30"
            rows="10"
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          ></S.CommentCreateTextarea>
          <S.CommentCreateTextareaBottom>
            0/100
            <S.CommentCreateTextareaButton>
              등록하기
            </S.CommentCreateTextareaButton>
          </S.CommentCreateTextareaBottom>
        </S.CommentCreate>

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

        <S.CommentView>
          <S.ProfileThumbDefault />
          <S.CommentViewCenter>
            <div>
              <span className="writer">닉네임</span>
              <S.Stars />
            </div>
            <p className="comment">comment</p>
            <p className="update-date">2021.02.22</p>
          </S.CommentViewCenter>

          <S.CommentViewRight>
            <S.IconModify />
            <S.IconRemove />
          </S.CommentViewRight>
        </S.CommentView>

        <S.CommentView>
          <S.ProfileThumbDefault />
          <S.CommentViewCenter>
            <div>
              <span className="writer">닉네임</span>
              <S.Stars />
            </div>
            <p className="comment">comment</p>
            <p className="update-date">2021.02.22</p>
          </S.CommentViewCenter>

          <S.CommentViewRight>
            <S.IconModify />
            <S.IconRemove />
          </S.CommentViewRight>
        </S.CommentView>
      </S.BoardDetailCommentWrap>
    </>
  );
}
