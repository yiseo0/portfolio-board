import styled from "@emotion/styled";
import type { ILikeButtonProps, IMapTooltipProps } from "./BoardDetail.types";

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

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 16.67px;
  padding-bottom: 20px;
  border-bottom: 1px solid #bdbdbd;
`;

export const Avatar = styled.img``;
export const HeaderInfo = styled.div`
  flex-grow: 1;
`;

export const InfoWriter = styled.p`
  margin: 0;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
`;

export const InfoUpdatedAt = styled.p`
  margin: 0;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #828282;
`;

export const HeaderOption = styled.div`
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
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  gap: 4px;
  cursor: pointer;
  color: ${(props: ILikeButtonProps) =>
    props.dislike ? "#828282" : "#ffd600"};
`;

export const LikeIcon = styled.img``;
export const DislikeIcon = styled.img``;

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
  display: ${(props: IMapTooltipProps) => (props.state ? "block" : "none")};
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
export const Icon = styled.img`
  vertical-align: middle;
  cursor: pointer;
`;

export const IconMap = styled(Icon)`
  margin-left: 20px;
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
