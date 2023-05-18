import * as S from "./BoardWrite.styles";
import type { IBoardWriteUIProps } from "./BoardWrite.types";

export default function BoardWriteUI({
  isEdit,
  data,
  register,
  handleSubmit,
  errors,
  onSubmit,
  onSubmitUpdate,
  onClickMoveToList
}: IBoardWriteUIProps) {

  return (
    <S.Wrapper>
      <S.Title>게시물 {isEdit ? "수정" : "등록"}</S.Title>
      <S.Form
        method="POST"
        onSubmit={
          isEdit ? handleSubmit(onSubmitUpdate) : handleSubmit(onSubmit)
        }
      >
        <S.WriteBox row="2">
          <S.Label htmlFor="">작성자</S.Label>
          <S.Write
            type="text"
            {...register(
              "writer",
              isEdit || { required: "이름을 입력해주세요." }
            )}
            defaultValue={data?.fetchBoard.writer}
            disabled={isEdit}
          />
          <S.Error>{errors.writer?.message}</S.Error>
        </S.WriteBox>

        <S.WriteBox row="2">
          <S.Label htmlFor="">비밀번호</S.Label>
          <S.Write
            type="password"
            placeholder="비밀번호를 입력해주세요."
            {...register("password", {
              required: "비밀번호를 입력해주세요.",
            })}
          />
          <S.Error>{errors.password?.message}</S.Error>
        </S.WriteBox>
        <S.WriteBox>
          <S.Label htmlFor="">제목</S.Label>
          <S.Write
            type="text"
            defaultValue={data?.fetchBoard.title}
            placeholder="제목을 작성해주세요."
            {...register(
              "title",
              isEdit || { required: "제목을 작성해주세요." }
            )}
          />
          <S.Error>{errors.title?.message}</S.Error>
        </S.WriteBox>
        <S.WriteBox>
          <S.Label htmlFor="">내용</S.Label>
          <S.WriteContent
            type="text"
            placeholder="내용을 작성해주세요."
            defaultValue={data?.fetchBoard.contents}
            {...register(
              "contents",
              isEdit || { required: "내용을 작성해주세요." }
            )}
          />
          <S.Error>{errors.contents?.message}</S.Error>
        </S.WriteBox>
        <S.WriteBox>
          <S.Label htmlFor="">주소</S.Label>
          <S.WriteAddress
            type="text"
            placeholder="07250"
            {...register("zipCode")}
          />
          <S.Button color="white" type="button" value="우편번호 검색" />
          <S.Write type="text" {...register("address")} />
          <S.Write type="text" {...register("addressDetail")} />
        </S.WriteBox>
        <S.WriteBox>
          <S.Label htmlFor="">유튜브</S.Label>
          <S.Write
            type="text"
            placeholder="링크를 복사해주세요."
            {...register("youtubeUrl")}
          />
        </S.WriteBox>
        <S.WriteBox>
          <S.Label htmlFor="">사진 첨부</S.Label>
          <S.Upload>
            <div>Upload</div>
          </S.Upload>
          <S.Upload>
            <div>Upload</div>
          </S.Upload>
          <S.Upload>
            <div>Upload</div>
          </S.Upload>
        </S.WriteBox>
        <S.WriteBox>
          <S.Label htmlFor="">메인 설정</S.Label>
          <S.RadioLabel htmlFor="youtube">
            <S.Radio type="radio" id="youtube" {...register("mainChk")} />
            <i></i>
            유튜브
          </S.RadioLabel>
          <S.RadioLabel htmlFor="picture">
            <S.Radio type="radio" id="picture" {...register("mainChk")} />
            <i></i>
            사진
          </S.RadioLabel>
        </S.WriteBox>
        <S.BoardBtnBox>
          {isEdit && (
            <S.BoardBtn
              type="button"
              color="#4F4F4F"
              bg="#BDBDBD"
              value="취소하기"
              onClick={onClickMoveToList}
            />
          )}
          <S.BoardBtn
            type="submit"
            bg="#FFD600"
            value={isEdit ? "수정하기" : "등록하기"}
          />
        </S.BoardBtnBox>
      </S.Form>
    </S.Wrapper>
  );
}
