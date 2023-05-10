import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  position: relative;
  width: 1200px;
  padding: 80px 101px 100px;
  background: #fff;
  margin: 0 auto;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  color: #000;
`;

export const Write = styled.input`
  width: 100%;
  height: 52px;
  border: 1px solid #bdbdbd;
  padding: 0 14px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  outline: none;
  box-sizing: border-box;
  & + input[type="text"] {
    margin-top: 30px;
  }
  &::placeholder {
    color: #bdbdbd;
  }
`;

// 상세 페이지
export const BoardDetailHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 1px solid #bdbdbd;
`;

export const BoardDetailHeadCenter = styled.div`
  flex-grow: 1;
  margin-left: 16.67px;

  .writer {
    margin: 0;
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
  }

  .update-date {
    margin: 0;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #828282;
  }
`;

export const BoardDetailHeadRight = styled.div`
  i ~ * {
    margin-left: 20px;
  }
`;

export const BoardDetailBody = styled.div`
  padding: 80px 0 0;
  .title {
    margin-bottom: 40px;
    font-weight: 700;
    font-size: 36px;
    line-height: 53px;
  }
  .content {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
`;

export const BoardDetailButtonWrap = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding: 87px 0;
  text-align: center;
  border-bottom: 1px solid #bdbdbd;
`;

export const BoardDetailButton = styled.button`
  width: 179px;
  height: 45px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  background: transparent;
  border: 1px solid #bdbdbd;
  cursor: pointer;
  & ~ & {
    margin-left: 24px;
  }
`;

export const BoardDetailCommentWrap = styled.div`
  width: 1200px;
  margin: 0 auto 100px;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
`;

export const BoardDetailCommentTitle = styled.h4`
  margin: 0;
  padding: 40px 0 42px;
  i {
    margin-right: 14px;
  }
`;

export const CommentCreate = styled.div`
  margin-bottom: 40px;
`;

export const CommentCreateInput = styled(Write)`
  width: 180px;
  margin-right: 24px;
`;

export const CommentView = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16.5px;
  padding: 20px 0;
  border-bottom: 1px solid #bdbdbd;
`;
export const CommentViewCenter = styled.div`
  flex-grow: 1;
  .writer {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
    margin-right: 18px;
  }

  .comment {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #4f4f4f;
  }

  .update-date {
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: #bdbdbd;
  }
`;
export const CommentViewRight = styled.div`
  i ~ i {
    margin-left: 8px;
  }
`;

export const Stars = styled.span`
  position: relative;
  display: inline-flex;
  width: 120px;
  height: 24px;
  vertical-align: sub;
  background: url("/star.png") repeat-x 0 1px;

  ${(props) =>
    props.star &&
    css`
      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: ${props.star * 20}%;
        height: 100%;
        background: #fff url("/star.png") repeat-x 0 100%;
      }
    `}
`;

export const Star = styled.i`
  position: relative;
  z-index: 1;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const CommentCreateTextarea = styled.textarea`
  display: block;
  width: 100%;
  height: 108px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  margin-top: 20px;
  background: #ffffff;
  border: 1px solid #bdbdbd;
  border-bottom: 1px solid #f2f2f2;
  padding: 20px;
  box-sizing: border-box;
  resize: none;
  outline: none;
`;

export const CommentCreateTextareaBottom = styled.div`
  border: 1px solid #bdbdbd;
  border-top: none;
  display: flex;
  justify-content: space-between;
  height: 52px;
  align-items: center;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #bdbdbd;
  padding-left: 20px;
`;

export const CommentCreateTextareaButton = styled.button`
  width: 91px;
  height: 100%;
  border: 0;
  background: #000000;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  cursor: pointer;
  ${(props) =>
    props.type === "modify" &&
    css`
      color: #000;
      background: #ffd600;
    `}
`;

export const ProfileThumbDefault = styled.i`
  display: inline-block;
  width: 46.67px;
  height: 46.67px;
  background: url("/icon/icon_thumb_person.svg") no-repeat 0 0 / contain;
`;
export const LikeButtonWrap = styled.span`
  display: flex;
  justify-content: center;
  gap: 40px;
  margin: 160px auto 0;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
`;
export const LikeButton = styled.span`
  display: flex;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  ${(props) =>
    props.like === "like" &&
    css`
      color: #ffd600;
    `}
`;
export const MapTooltip = styled.div`
  position: relative;
  padding: 8px 16px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: right;
  background: #666;
  color: #fff;
  position: absolute;
  top: 20px;
  right: 118px;
  display: ${(props) => (props.state ? props.state : "none")};
  &::after {
    content: "";
    display: inline-block;
    position: absolute;
    bottom: -8px;
    right: 0;
    border-top: 8px solid #666;
    border-left: 8px solid transparent;
    border-right: 14px solid #666;
    border-bottom: 8px solid transparent;
  }
`;

// icon
export const Icon = styled.i`
  display: inline-block;
  background-repeat: no-repeat;
  background-position: 0 0;
  background-size: contain;
  vertical-align: middle;
  cursor: pointer;
`;

export const IconLink = styled(Icon)`
  width: 32px;
  height: 32px;
  background-image: url("/icon/icon_link.svg");
`;

export const IconMap = styled(Icon)`
  width: 32px;
  height: 32px;
  background-image: url("/icon/icon_location.svg");
`;

export const IconLike = styled(Icon)`
  width: 20px;
  height: 18px;
  background-image: url("/icon/icon_like.svg");
`;

export const IconUnLike = styled(Icon)`
  width: 20px;
  height: 18px;
  background-image: url("/icon/icon_unlike.svg");
`;

export const IconComment = styled(Icon)`
  width: 20px;
  height: 20px;
  background-image: url("/icon/icon_comment.svg");
`;
export const IconModify = styled(Icon)`
  width: 24px;
  height: 24px;
  background-image: url("/icon/icon_modify.svg");
`;
export const IconRemove = styled(Icon)`
  width: 24px;
  height: 24px;
  background-image: url("/icon/icon_remove.svg");
`;
