import BoardDetail from "@/src/components/unit/board/detail/BoardDetail.container";
import CommentWriter from "@/src/components/unit/Comment/writer/CommentWriter.container";
import CommentList from "../../../src/components/unit/Comment/list/CommentList.container";

export default function BoardId() {
  return (
    <>
      <BoardDetail />
      <CommentWriter />
      <CommentList />
    </>
  );
}
