import styled from "@emotion/styled";
import { css } from "@emotion/react";
import type { IPagerItemProps } from "./Pagination.types";

export const Pager = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
export const PagerButton = styled.span`
  cursor: pointer;
  img {
    vertical-align: middle;
  }
`
export const PagerItem = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #4f4f4f;
  cursor: pointer;
  img {
    vertical-align: bottom;
  }
  ${(props: IPagerItemProps) =>
    props.selected &&
    css`
      color: #ffd600;
      text-decoration: underline;
    `}
`;