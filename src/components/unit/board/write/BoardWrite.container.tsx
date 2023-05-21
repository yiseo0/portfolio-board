import BoardWriteUI from "./BoardWrite.presenter";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import type { IBoardWriteUIProps } from "./BoardWrite.types";
import type { IMutation, IMutationCreateBoardArgs, IMutationUpdateBoardArgs } from "@/src/commons/types/generated/types";
import type { Address } from 'react-daum-postcode';
import { useEffect, useState } from "react";

export default function BoardWrite({ isEdit, data }: Pick<IBoardWriteUIProps, "isEdit" | "data">) {
  const router = useRouter();
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (isEdit) {
      setValue("title", data?.fetchBoard.title);
      setValue("contents", data?.fetchBoard.contents);
      setValue("youtubeUrl", data?.fetchBoard.youtubeUrl);
    }
  }, [data])

  const [isOpen, setIsOpen] = useState(false);

  const [createBoard] = useMutation<Pick<IMutation, "createBoard">, IMutationCreateBoardArgs>(CREATE_BOARD);
  const [updateBoard] = useMutation<Pick<IMutation, "updateBoard">, IMutationUpdateBoardArgs>(UPDATE_BOARD);

  const onSubmit = async (data: any) => {
    const { writer, password, title, contents, zipcode, address, addressDetail, youtubeUrl } = data;
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer,
            password,
            title,
            contents,
            boardAddress: {
              zipcode,
              address,
              addressDetail
            },
            youtubeUrl
          },
        },
      });

      alert("게시물 등록이 완료되었습니다.");
      console.log(result)

      if (typeof result.data?.createBoard._id !== "string") {
        alert("일시적인 오류가 있습니다. 다시 시도해주세요.")
        return;
      }
      void router.push(`/boards/${(result.data?.createBoard._id)}`);
    } catch (error: any) {
      alert(error.message);
    }
  };

  const onSubmitUpdate = async (data: any) => {
    const { title, contents, zipcode, address, addressDetail, youtubeUrl } = data;

    try {
      await updateBoard({
        variables: {
          updateBoardInput: {
            title,
            contents,
            boardAddress: {
              zipcode,
              address,
              addressDetail,
            }, youtubeUrl,
          },
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

  const onClickAddressSearch = () => {
    setIsOpen((prev: boolean) => !prev);
  };

  /**
   * 우편번호검색 팝업
  */
  const onCompleteAddressSearch = (address: Address): void => {
    setValue("zipcode", address.zonecode);
    setValue("address", address.address);
    onClickAddressSearch()
  }

  return (
    <BoardWriteUI
      isEdit={isEdit}
      data={data}
      register={register}
      handleSubmit={handleSubmit}
      errors={errors}
      isOpen={isOpen}
      onSubmit={onSubmit}
      onSubmitUpdate={onSubmitUpdate}
      onClickMoveToList={onClickMoveToList}
      onClickAddressSearch={onClickAddressSearch}
      onCompleteAddressSearch={onCompleteAddressSearch}
    />
  );
}
