import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  margin: 0 auto 40px;
`;

export const Header = styled.div`
  padding: 40px 0;
`;

export const IconPencil = styled.img`
  margin-right: 14px;
  vertical-align: middle;
`;

export const HeaderTitle = styled.span`
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  color: #000;
`;

export const Input = styled.input`
  width: 180px;
  height: 52px;
  margin-right: 24px;
  padding: 0 20px;
  border: 1px solid #bdbdbd;
  outline: 0;
  box-sizing: border-box;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
`;

interface IStars {
  star: number;
}

export const Stars = styled.span`
  position: relative;
  display: inline-flex;
  width: 120px;
  height: 24px;
  vertical-align: sub;
  background: url("/star.png") repeat-x 0 1px;

  ${(props: IStars) =>
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

export const Textarea = styled.textarea`
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

export const TextareaBottom = styled.div`
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

interface IButton {
  type: string;
}

export const Button = styled.button`
  width: 91px;
  height: 100%;
  border: 0;
  background: #000000;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  cursor: pointer;
  ${(props: IButton) =>
    props.type === "modify" &&
    css`
      color: #000;
      background: #ffd600;
    `}
`;
