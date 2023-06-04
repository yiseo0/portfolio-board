import styled from "@emotion/styled";

export const Wrapper = styled.div``;
export const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  height: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Logo = styled.h1`
  cursor: pointer;
`;
export const ProfileImg = styled.img``;

interface IButtonProps {
  bg?: string;
}

export const Button = styled.button`
  padding: 10px 16px;
  border: none;
  border-radius: 10px;
  background: ${(props: IButtonProps) => (props.bg ? props.bg : "white")};
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
`;
