import BoardDetail from "@/src/components/unit/board/detail/BoardDetail.container";
import CommentWriterUI from "@/src/components/unit/Comment/writer/CommentWriter.presenter";
import CommentList from "../../../src/components/unit/Comment/list/CommentList.container";

export default function BoardId() {
  return (
    <>
      <BoardDetail />
      <CommentWriterUI />
      <CommentList />
    </>
  );
}
