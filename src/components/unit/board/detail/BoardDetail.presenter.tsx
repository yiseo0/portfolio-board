import * as S from "./BoardDetail.styles";
import { IBoardDetailUIProps } from "./BoardDetail.types";

export default function BoardDetailUI(props: IBoardDetailUIProps) {
  const {
    data,
    toggle,
    setToggle,
    onDelete,
    onClickMoveToEdit,
    onClickMoveToList,
    onClickLike,
    onClickDislike,
  } = props
  return (
    <>
      <S.Wrapper>
        <S.Header>
          <S.Avatar src="/images/commons/avatar.svg" />

          <S.HeaderInfo>
            <S.InfoWriter>{data?.fetchBoard.writer}</S.InfoWriter>
            <S.InfoUpdatedAt>{data?.fetchBoard.updatedAt}</S.InfoUpdatedAt>
          </S.HeaderInfo>

          <S.HeaderOption>
            <S.Icon src="/images/board/detail/icon_link.svg" />
            <S.IconMap
              src="/images/board/detail/icon_map.svg"
              onClick={(toggle) => setToggle(!toggle)}
            />
            <S.MapTooltip state={toggle}>
              서울특별시 영등포구 양산로 200
              <br />
              (영등포동5가, 영등포시장역) 영등포 타임스퀘어 2층
            </S.MapTooltip>
          </S.HeaderOption>
        </S.Header>

        <S.BoardDetailBody>
          <h3 className="title">{data?.fetchBoard.title}</h3>
          <div className="content">{data?.fetchBoard.contents}</div>

          <S.LikeButtonWrap >
            <S.LikeButton onClick={onClickLike}>
              <S.LikeIcon src="/images/board/detail/icon_Like.svg" />
              {data?.fetchBoard.likeCount}
            </S.LikeButton>
            <S.LikeButton dislike={true} id="dislike" onClick={onClickDislike}>
              <S.DislikeIcon src="/images/board/detail/icon_disLike.svg" />
              {data?.fetchBoard.dislikeCount}
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
    </>
  );
}
