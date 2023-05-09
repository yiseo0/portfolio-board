import {
  BoardDetailBody,
  BoardDetailButton,
  BoardDetailButtonWrap,
  BoardDetailCommentTitle,
  BoardDetailCommentWrap,
  BoardDetailHead,
  BoardDetailHeadCenter,
  BoardDetailHeadRight,
  CommentCreate,
  CommentCreateInput,
  CommentCreateTextarea,
  CommentCreateTextareaBottom,
  CommentCreateTextareaButton,
  CommentView,
  CommentViewCenter,
  CommentViewRight,
  IconComment,
  IconLike,
  IconLink,
  IconMap,
  IconModify,
  IconRemove,
  IconUnLike,
  LikeButton,
  LikeButtonWrap,
  MapTooltip,
  MapTooltipMessage,
  ProfileThumbDefault,
  Star,
  Stars,
  Wrapper,
} from "@/styles/emotion";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      writer
      updatedAt
      title
      contents
    }
  }
`;

export default function BoardDetail() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.id,
    },
  });
  const [toggle, setToggle] = useState(false);
  const [star, setStar] = useState(0);

  return (
    <>
      <Wrapper>
        <BoardDetailHead>
          <ProfileThumbDefault />

          <BoardDetailHeadCenter>
            <p className="writer">{data?.fetchBoard.writer}</p>
            <p className="update-date">{data?.fetchBoard.updatedAt}</p>
          </BoardDetailHeadCenter>

          <BoardDetailHeadRight>
            <IconLink />
            <IconMap onClick={() => setToggle(!toggle)} />
            <MapTooltip state={toggle && "block"}>
              서울특별시 영등포구 양산로 200
              <br />
              (영등포동5가, 영등포시장역) 영등포 타임스퀘어 2층
            </MapTooltip>
          </BoardDetailHeadRight>
        </BoardDetailHead>

        <BoardDetailBody>
          <h3 className="title">{data?.fetchBoard.title}</h3>
          <div className="content">{data?.fetchBoard.contents}</div>

          <LikeButtonWrap>
            <LikeButton like="like">
              <IconLike />
              1920
            </LikeButton>
            <LikeButton>
              <IconUnLike />
              1920
            </LikeButton>
          </LikeButtonWrap>
        </BoardDetailBody>
      </Wrapper>
      <BoardDetailButtonWrap>
        <BoardDetailButton>목록으로</BoardDetailButton>
        <BoardDetailButton>수정하기</BoardDetailButton>
        <BoardDetailButton>삭제하기</BoardDetailButton>
      </BoardDetailButtonWrap>

      <BoardDetailCommentWrap>
        <BoardDetailCommentTitle>
          <IconComment />
          댓글
        </BoardDetailCommentTitle>

        {/* 쓰기 */}
        <CommentCreate>
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
            <CommentCreateTextareaButton>등록하기</CommentCreateTextareaButton>
          </CommentCreateTextareaBottom>
        </CommentCreate>

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

        <CommentView>
          <ProfileThumbDefault />
          <CommentViewCenter>
            <div>
              <span className="writer">닉네임</span>
              <Stars />
            </div>
            <p className="comment">comment</p>
            <p className="update-date">2021.02.22</p>
          </CommentViewCenter>

          <CommentViewRight>
            <IconModify />
            <IconRemove />
          </CommentViewRight>
        </CommentView>

        <CommentView>
          <ProfileThumbDefault />
          <CommentViewCenter>
            <div>
              <span className="writer">닉네임</span>
              <Stars />
            </div>
            <p className="comment">comment</p>
            <p className="update-date">2021.02.22</p>
          </CommentViewCenter>

          <CommentViewRight>
            <IconModify />
            <IconRemove />
          </CommentViewRight>
        </CommentView>
      </BoardDetailCommentWrap>
    </>
  );
}
