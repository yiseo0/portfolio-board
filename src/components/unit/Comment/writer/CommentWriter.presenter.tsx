import { Rate } from "antd";
import * as S from "./CommentWriter.styles";
import type { ICommentWriterUIProps } from "./CommentWriter.types";

export default function CommentWriterUI({ comment, setComment, onChangeComment, onClickCreateComment }: ICommentWriterUIProps) {

  return (
    <div>
      <S.Wrapper>
        <S.Header>
          <S.IconPencil src="/images/boardComment/write/icon_pencil.svg" />
          <S.HeaderTitle>댓글</S.HeaderTitle>
        </S.Header>

        <S.InputWrapper>
          <S.Input
            type="text"
            name="cWriter"
            placeholder="작성자"
            value={comment.cWriter}
            onChange={onChangeComment}
          />
          <S.Input
            type="password"
            name="cPassword"
            placeholder="비밀번호"
            value={comment.cPassword}
            onChange={onChangeComment}
          />

          <Rate value={comment.cRating} onChange={(value) => setComment({ ...comment, cRating: value })} />
        </S.InputWrapper>

        <S.Textarea
          maxLength={100}
          name="cContents"
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          value={comment.cContents}
          onChange={onChangeComment}
        ></S.Textarea>
        <S.TextareaBottom>
          {comment.cContents.length}/100
          <S.Button onClick={onClickCreateComment}>등록하기</S.Button>
        </S.TextareaBottom>
      </S.Wrapper>
    </div>
  );
}
