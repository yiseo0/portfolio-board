import styled from "@emotion/styled";
import { Rate } from "antd";

export const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16.5px;
  width: 1200px;
  padding: 20px 0;
  margin: 0 auto;
  border-bottom: 1px solid #bdbdbd;
`;
export const Avatar = styled.img``;
export const MainWrapper = styled.div`
  flex-grow: 1;
  .writer {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
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
export const Star = styled(Rate)`
  padding-left: 20px;
`;
export const OptionWrapper = styled.div`
  i ~ i {
    margin-left: 8px;
  }
`;
export const Icon = styled.img`
  display: inline-block;
  vertical-align: middle;
  cursor: pointer;
`;
export const DeleteIcon = styled(Icon)`
  margin-left: 8px;
`;
export const UpdateIcon = styled(Icon)``;
