import { getDate } from "@/src/commons/libraries/utils";
import * as S from "./BoardDetail.styles";
import type { IBoardDetailUIProps } from "./BoardDetail.types";

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
            <S.InfoUpdatedAt>{getDate(data?.fetchBoard.updatedAt)}</S.InfoUpdatedAt>
          </S.HeaderInfo>

          <S.HeaderOption>
            <S.Icon src="/images/board/detail/icon_link.svg" />
            <S.IconMap
              src="/images/board/detail/icon_map.svg"
              onClick={() => setToggle(!toggle)}
            />
            <S.MapTooltip state={toggle}>
              {data?.fetchBoard.boardAddress?.address}
              &nbsp;
              {data?.fetchBoard.boardAddress?.addressDetail}
            </S.MapTooltip>
          </S.HeaderOption>
        </S.Header>

        <S.BoardDetailBody>
          <h3 className="title">{data?.fetchBoard.title}</h3>
          <div className="content">{data?.fetchBoard.contents}</div>

          {
            data?.fetchBoard?.youtubeUrl &&
            <S.Youtube url={data?.fetchBoard?.youtubeUrl} width={486} height={240} />
          }

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
