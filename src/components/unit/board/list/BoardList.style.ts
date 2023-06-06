import styled from "@emotion/styled";

export const Wrapper = styled.div`
  position: relative;
  width: 1200px;
  margin: 0 auto;
`;

export const Search = styled.form`
  display: flex;
  justify-content: space-between;
  gap: 44px;
  margin-bottom: 40px;
`;
export const SearchTextBox = styled.div`
  display: flex;
  gap: 8px;
  width: 776px;
  height: 52px;
  padding: 14px 16px;
  box-sizing: border-box;
  background: #f2f2f2;
  border-radius: 10px;

  input[type="text"] {
    flex-grow: 1;
    background: none;
    border: 0;
    outline: 0;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
  }
`;
export const SearchDate = styled.input`
  width: 244px;
  height: 52px;
  background: #ffffff;
  border: 1px solid #bdbdbd;
  outline: 0;
  color: #bdbdbd;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  padding: 0 16px;
`;
export const SearchButton = styled.button`
  background: #000000;
  border-radius: 10px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #ffffff;
  height: 52px;
  padding: 0 16px;
  flex-shrink: 0;
`;
export const Table = styled.table`
  width: 100%;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  color: #000000;
  border-collapse: collapse;
  margin-bottom: 57px;

  th,
  td {
    height: 52px;
  }
  td {
    border-top: 1px solid #bdbdbd;
    text-align: center;
  }
`;
export const TableBottom = styled.div`
  position: relative;
`;

export const ColumnTitle = styled.td`
  cursor: pointer;
`;

export const ButtonWrite = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #000000;
  padding: 14px 16px;
  border: 1px solid #f2f2f2;
  border-radius: 10px;
  background: none;
  cursor: pointer;

  img {
    vertical-align: sub;
    margin-right: 8px;
  }
`;
