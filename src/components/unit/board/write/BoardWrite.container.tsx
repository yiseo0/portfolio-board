import BoardWriteUI from "./BoardWrite.presenter";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import type { IBoardWriteUIProps, IUpdateBoardInput } from "./BoardWrite.types";
import type { IMutation, IMutationCreateBoardArgs, IMutationUpdateBoardArgs } from "@/src/commons/types/generated/types";

export default function BoardWrite({ isEdit, data }: Pick<IBoardWriteUIProps, "isEdit" | "data">) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [createBoard] = useMutation<Pick<IMutation, "createBoard">, IMutationCreateBoardArgs>(CREATE_BOARD);
  const [updateBoard] = useMutation<Pick<IMutation, "updateBoard">, IMutationUpdateBoardArgs>(UPDATE_BOARD);

  const onSubmit = async (data: any) => {
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
      console.log(result)
      void router.push(`/boards/${String(result.data?.createBoard._id)}`);
    } catch (error: any) {
      alert(error.message);
    }
  };

  const onSubmitUpdate = async (data: any) => {
    const { title, contents } = data;

    const updateBoardInput: IUpdateBoardInput = {};
    if (title) updateBoardInput.title = title;
    if (contents) updateBoardInput.contents = contents;

    try {
      await updateBoard({
        variables: {
          updateBoardInput,
          password: data.password,
          boardId: String(router.query.id),
        },
      });
      alert("게시물 수정이 완료되었습니다.");
      void router.push(`/boards/${String(router.query.id)}`);
    } catch (error: any) {
      alert(error.message);
    }
  };

  const onClickMoveToList = () => {
    void router.push('/boards')
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
