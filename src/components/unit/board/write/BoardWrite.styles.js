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

export const Title = styled.h3`
  font-weight: 700;
  font-size: 36px;
  text-align: center;
  line-height: 53px;
  margin: 0 0 80px 0;
`;

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const WriteBox = styled.div`
  width: ${(props) =>
    props.row ? `calc(100%/${props.row} - ${props.row * 6}px)` : "100%"};
  &:not(:last-child) {
    margin-bottom: 40px;
  }
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 16px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
`;

export const Write = styled.input`
  width: 100%;
  height: 52px;
  padding: 0 14px;
  border: 1px solid #bdbdbd;
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

export const Error = styled.small`
  color: red;
`;

export const WriteContent = styled.textarea`
  width: 100%;
  height: 480px;
  padding: 14px 16px;
  border: 1px solid #bdbdbd;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  outline: none;
  resize: none;
  box-sizing: border-box;
  &::placeholder {
    color: #bdbdbd;
  }
`;

export const WriteAddress = styled(Write)`
  width: 77px;
  margin-top: 0;
  margin-right: 16px;
  margin-bottom: 16px;
`;

export const Button = styled.input`
  background-color: ${(props) => (props.bg ? props.bg : "black")};
  color: ${(props) => (props.color ? props.color : "black")};
  padding: 14px 16px;
  cursor: pointer;
`;
export const Upload = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  width: 78px;
  height: 78px;
  background: #bdbdbd;
  color: #4f4f4f;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  cursor: pointer;
  svg {
    font-size: 14px;
  }
  & + div {
    margin-left: 24px;
  }
`;
export const Radio = styled.input`
  width: 1px;
  height: 1px;
  overflow: hidden;
  position: absolute;
  top: -1px;
  left: -1px;
  margin: 0;
  & + i {
    content: "";
    position: relative;
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 1px solid #000;
    border-radius: 50%;
    margin-right: 10px;
    vertical-align: sub;
  }

  &:checked + i {
    border: 1px solid #ffd600;
    &::after {
      content: "";
      width: 12px;
      height: 12px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 50%;
      background-color: #ffd600;
    }
  }
`;

export const RadioLabel = styled.label`
  & + label {
    padding-left: 24px;
  }
`;

export const ButtonSubmit = styled(Button)`
  width: 179px;
  margin: 0 auto;
`;
