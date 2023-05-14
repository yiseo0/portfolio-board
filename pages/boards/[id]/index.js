import BoardDetail from "@/src/components/unit/board/detail/BoardDetail.container";
import BoardCommentWriter from "../../../src/components/unit/boardComment/writer/BoardCommentWriter.container";
import BoardCommentList from "../../../src/components/unit/boardComment/list/BoardCommentList.container";

export default function BoardId() {
  return (
    <>
      <BoardDetail />
      <BoardCommentWriter/>
      <BoardCommentList/>
    </>
  );
}
