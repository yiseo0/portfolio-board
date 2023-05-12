import Link from "next/link";
import * as S from "./BoardList.style";
import { getDate } from "@/src/commons/libraries/utils";

export default function BoardListUI({ data, onClickMoveToDetail, onClickMoveToWrite }) {
  console.log(data);
  return (
    <S.Wrapper>
      <S.Search>
        <S.SearchTextBox>
          <img src="/icon/icon_search.svg" alt="검색" />
          <input type="text" name="search" placeholder="제목을 검색해주세요." />
        </S.SearchTextBox>
        <S.SearchDate type="date" placeholder="YYYY. MM.DD ~ YYYY. MM.DD" />
        <S.SearchButton>검색하기</S.SearchButton>
      </S.Search>

      <S.Table>
        <colgroup>
          <col width="114" />
          <col width="auto" />
          <col width="205" />
          <col width="160" />
        </colgroup>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
            <th>날짜</th>
          </tr>
        </thead>
        <tbody>
          {data?.fetchBoards.map((list, idx) => (
            <tr key={list._id}>
              <td>{data.fetchBoards.length - idx}</td>
              <S.ColumnTitle onClick={() => onClickMoveToDetail(list._id)}>
                {list.title}
              </S.ColumnTitle>
              <td>{list.writer}</td>
              <td>{getDate(list.updatedAt)}</td>
            </tr>
          ))}
        </tbody>
      </S.Table>
      <S.TableBottom>
        <S.Paging>
          <S.PagingItem>
            <img src="/icon/icon_navi_before.svg" alt="" />
          </S.PagingItem>
          <S.PagingItem active="active">1</S.PagingItem>
          <S.PagingItem>2</S.PagingItem>
          <S.PagingItem>
            <img src="/icon/icon_navi_next.svg" alt="" />
          </S.PagingItem>
        </S.Paging>
        <S.ButtonWrite onClick={onClickMoveToWrite}>
          <img src="/icon/icon_create.svg" alt="" />
          게시물 등록하기
        </S.ButtonWrite>
      </S.TableBottom>
    </S.Wrapper>
  );
}
