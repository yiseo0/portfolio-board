import BoardWriteUI from "./BoardWrite.presenter";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import { IBoardWriteProps, IUpdateBoardInput } from "./BoardWrite.types";

export default function BoardWrite({ isEdit, data }: IBoardWriteProps) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  const onSubmit = async (data : any) => {
    const { writer, password, title, contents } = data;
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer,
            password,
            title,
            contents,
          },
        },
      });

      alert("게시물 등록이 완료되었습니다.");
      router.push(`/boards/${result.data.createBoard._id}`);
    } catch (error : any) {
      alert(error.message);
    }
  };

  const onSubmitUpdate = async (data : any) => {
    const { title, contents } = data;

    const updateBoardInput : IUpdateBoardInput= {};
    if (title) updateBoardInput.title = title;
    if (contents) updateBoardInput.contents = contents;

    try {
      const result = await updateBoard({
        variables: {
          updateBoardInput,
          password: data.password,
          boardId: router.query.id,
        },
      });
      alert("게시물 수정이 완료되었습니다.");
      router.push(`/boards/${result.data.updateBoard._id}`);
    } catch (error : any) {
      alert(error.message);
    }
  };

  const onClickMoveToList = () => {
    router.push('/boards')
  }

  return (
    <BoardWriteUI
      isEdit={isEdit}
      data={data}
      register={register}
      handleSubmit={handleSubmit}
      errors={errors}
      onSubmit={onSubmit}
      onSubmitUpdate={onSubmitUpdate}
      onClickMoveToList={onClickMoveToList}
    />
  );
}
