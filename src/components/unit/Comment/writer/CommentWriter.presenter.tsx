import * as S from "./CommentWriter.styles";
import { ICommentWriterUIProps } from "./CommentWriter.types";

export default function CommentWriterUI({ comment, setComment, onChangeComment, onClickCreateComment }: ICommentWriterUIProps) {

  return (
    <div>
      <S.Wrapper>
        <S.Header>
          <S.IconPencil src="/images/boardComment/write/icon_pencil.svg" />
          <S.HeaderTitle>댓글</S.HeaderTitle>
        </S.Header>

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
        <S.Stars star={comment.cRating}>
          {Array(5)
            .fill(0)
            .map((_, idx) => (
              <S.Star
                key={idx}
                onClick={() => setComment({ ...comment, cRating: idx + 1 })}
              />
            ))}
        </S.Stars>
        <S.Textarea
          name="cContents"
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          value={comment.cContents}
          onChange={onChangeComment}
        ></S.Textarea>
        <S.TextareaBottom>
          0/100
          <S.Button onClick={onClickCreateComment}>등록하기</S.Button>
        </S.TextareaBottom>
      </S.Wrapper>
    </div>
  );
}
