import styled from "@emotion/styled";

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 64px;
	background-color: #ffd600;
`;
export const MenuItem = styled.div`
  padding-left: 20px;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  color: #ab9000;
  cursor: pointer;

  &: hover {
    color: #514400;
  }

  & ~ &::before {
    content: "";
    display: inline-block;
    width: 1px;
    height: 20px;
    margin-right: 20px;
    background: #ffffff;
    vertical-align: sub;
  }
`;
