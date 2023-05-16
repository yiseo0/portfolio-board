import { IQuery, IQueryFetchBoardArgs } from "@/src/commons/types/generated/types";
import BoardWrite from "@/src/components/unit/board/write/BoardWrite.container";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

export const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      contents
      title
    }
  }
`;

export default function BoardEditPage() {
  const router = useRouter();

  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(FETCH_BOARD, {
    variables: {
      boardId: String(router.query.id)
    },
  });


  return <BoardWrite isEdit={true} data={data} />;
}
