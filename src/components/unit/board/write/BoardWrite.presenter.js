import * as S from "./BoardWrite.styles";

export default function BoardWriteUI({
  register,
  handleSubmit,
  errors,
  onSubmit,
}) {
  return (
    <S.Wrapper>
      <S.Title>게시물 등록</S.Title>
      <S.Form method="POST" onSubmit={handleSubmit(onSubmit)}>
        <S.WriteBox row="2">
          <S.Label htmlFor="">작성자</S.Label>
          <S.Write
            type="text"
            {...register("writer", { required: "이름을 입력해주세요." })}
          />
          <S.Error>{errors.writer?.message}</S.Error>
        </S.WriteBox>
        <S.WriteBox row="2">
          <S.Label htmlFor="">비밀번호</S.Label>
          <S.Write
            type="password"
            placeholder="비밀번호를 입력해주세요."
            {...register("password", { required: "비밀번호를 입력해주세요." })}
          />
          <S.Error>{errors.password?.message}</S.Error>
        </S.WriteBox>
        <S.WriteBox>
          <S.Label htmlFor="">제목</S.Label>
          <S.Write
            type="text"
            placeholder="제목을 작성해주세요."
            {...register("title", { required: "제목을 작성해주세요." })}
          />
          <S.Error>{errors.title?.message}</S.Error>
        </S.WriteBox>
        <S.WriteBox>
          <S.Label htmlFor="">내용</S.Label>
          <S.WriteContent
            type="text"
            placeholder="내용을 작성해주세요."
            {...register("contents", { required: "내용을 작성해주세요." })}
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
            {...register("youtube")}
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
        <S.ButtonSubmit bg="#FFD600" type="submit" value="등록하기" />
      </S.Form>
    </S.Wrapper>
  );
}
