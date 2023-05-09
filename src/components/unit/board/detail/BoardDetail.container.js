import BoardDetailUI from "./BoardDetail.presenter";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import FETCH_BOARD from "./BoardDetail.queries";

export default function BoardDetail() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.id,
    },
  });
  const [toggle, setToggle] = useState(false);
  const [star, setStar] = useState(0);

  return (
    <BoardDetailUI
      data={data}
      toggle={toggle}
      setToggle={setToggle}
      star={star}
      setStar={setStar}
    />
  );
}
