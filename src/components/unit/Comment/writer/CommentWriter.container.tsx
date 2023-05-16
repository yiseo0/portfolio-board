import { useMutation } from "@apollo/client";
import CommentWriterUI from "./CommentWriter.presenter";
import {
  CREATE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
} from "./CommentWriter.queries";
import { useState } from "react";
import { useRouter } from "next/router";

export default function BoardCommentWriter() {
  const router = useRouter();

  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);
  const [comment, setComment] = useState({
    cWriter: "",
    cPassword: "",
    cContents: "",
    cRating: 0,
  });

  const onChangeComment = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setComment({
      ...comment,
      [name]: value,
    });
  };

  const onClickCreateComment = async () => {
    try {
      const result = await createBoardComment({
        variables: {
          createBoardCommentInput: {
            writer: comment.cWriter,
            password: comment.cPassword,
            contents: comment.cContents,
            rating: comment.cRating,
          },
          boardId: router.query.id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: {
              boardId: router.query.id,
            },
          },
        ],
      });

      setComment({
        cWriter: "",
        cPassword: "",
        cContents: "",
        cRating: 0,
      });
    } catch (error) {
      alert(error);
    }
  };

  return (
    <CommentWriterUI
      comment={comment}
      setComment={setComment}
      onChangeComment={onChangeComment}
      onClickCreateComment={onClickCreateComment}
    />
  );
}
