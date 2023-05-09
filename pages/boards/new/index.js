import {
  Form,
  Button,
  WriteBox,
  Title,
  Wrapper,
  Write,
  WriteContent,
  WriteAddress,
  Label,
  Upload,
  RadioLabel,
  Radio,
  ButtonSubmit,
  Error,
} from "@/styles/emotion";
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

export default function BoardNew() {
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
      console.log("게시물 등록이 완료되었습니다.");
      router.push(`/boards/${result.data.createBoard._id}`);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Wrapper>
      <Title>게시물 등록</Title>
      <Form method="POST" onSubmit={handleSubmit(onSubmit)}>
        <WriteBox row="2">
          <Label htmlFor="">작성자</Label>
          <Write
            type="text"
            {...register("writer", { required: "이름을 입력해주세요." })}
          />
          <Error>{errors.writer?.message}</Error>
        </WriteBox>
        <WriteBox row="2">
          <Label htmlFor="">비밀번호</Label>
          <Write
            type="password"
            placeholder="비밀번호를 입력해주세요."
            {...register("password", { required: "비밀번호를 입력해주세요." })}
          />
          <Error>{errors.password?.message}</Error>
        </WriteBox>
        <WriteBox>
          <Label htmlFor="">제목</Label>
          <Write
            type="text"
            placeholder="제목을 작성해주세요."
            {...register("title", { required: "제목을 작성해주세요." })}
          />
          <Error>{errors.title?.message}</Error>
        </WriteBox>
        <WriteBox>
          <Label htmlFor="">내용</Label>
          <WriteContent
            type="text"
            placeholder="내용을 작성해주세요."
            {...register("contents", { required: "내용을 작성해주세요." })}
          />
          <Error>{errors.contents?.message}</Error>
        </WriteBox>
        <WriteBox>
          <Label htmlFor="">주소</Label>
          <WriteAddress
            type="text"
            placeholder="07250"
            {...register("zipCode")}
          />
          <Button color="white" type="button" value="우편번호 검색" />
          <Write type="text" {...register("address")} />
          <Write type="text" {...register("addressDetail")} />
        </WriteBox>
        <WriteBox>
          <Label htmlFor="">유튜브</Label>
          <Write
            type="text"
            placeholder="링크를 복사해주세요."
            {...register("youtube")}
          />
        </WriteBox>
        <WriteBox>
          <Label htmlFor="">사진 첨부</Label>
          <Upload>
            <div>Upload</div>
          </Upload>
          <Upload>
            <div>Upload</div>
          </Upload>
          <Upload>
            <div>Upload</div>
          </Upload>
        </WriteBox>
        <WriteBox>
          <Label htmlFor="">메인 설정</Label>
          <RadioLabel htmlFor="youtube">
            <Radio type="radio" id="youtube" {...register("mainChk")} />
            <i></i>
            유튜브
          </RadioLabel>
          <RadioLabel htmlFor="picture">
            <Radio type="radio" id="picture" {...register("mainChk")} />
            <i></i>
            사진
          </RadioLabel>
        </WriteBox>
        <ButtonSubmit bg="#FFD600" type="submit" value="등록하기" />
      </Form>
    </Wrapper>
  );
}
