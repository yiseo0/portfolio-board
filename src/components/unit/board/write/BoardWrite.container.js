import BoardWriteUI from "./BoardWrite.presenter";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import CREATE_BOARD from "./BoardWrite.query";

export default function BoardWrite() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [createBoard] = useMutation(CREATE_BOARD);
  const onSubmit = async (data) => {
    try {
      const { writer, password, title, contents } = data;
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
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <BoardWriteUI
      register={register}
      handleSubmit={handleSubmit}
      errors={errors}
      onSubmit={onSubmit}
    />
  );
}
