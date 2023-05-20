import BoardWriteUI from "./BoardWrite.presenter";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import type { IBoardWriteUIProps, IUpdateBoardInput } from "./BoardWrite.types";
import type { IMutation, IMutationCreateBoardArgs, IMutationUpdateBoardArgs } from "@/src/commons/types/generated/types";
import type { Address } from 'react-daum-postcode';
import { useState } from "react";

export default function BoardWrite({ isEdit, data }: Pick<IBoardWriteUIProps, "isEdit" | "data">) {
  const router = useRouter();
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isOpen, setIsOpen] = useState(false);

  const [createBoard] = useMutation<Pick<IMutation, "createBoard">, IMutationCreateBoardArgs>(CREATE_BOARD);
  const [updateBoard] = useMutation<Pick<IMutation, "updateBoard">, IMutationUpdateBoardArgs>(UPDATE_BOARD);

  console.log(data)
  const onSubmit = async (data: any) => {
    const { writer, password, title, contents, zipcode, address, addressDetail } = data;
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
            }
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
    const { title, contents, zipcode, address, addressDetail } = data;

    const updateBoardInput: IUpdateBoardInput = {};
    if (title) updateBoardInput.title = title;
    if (contents) updateBoardInput.contents = contents;
    if (zipcode || address || addressDetail) {
      updateBoardInput.boardAddress = {}
      if (zipcode) updateBoardInput.boardAddress.zipcode = zipcode;
      if (address) updateBoardInput.boardAddress.address = address;
      if (addressDetail) updateBoardInput.boardAddress.addressDetail = addressDetail;
    }

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
