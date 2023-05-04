import { Form, Button, WriteWrapper, Title, Wrapper, Write, WritePassword, WriteContent, WriteAddress, Label, Upload, RadioLabel, Radio, CustomRadio, ButtonSubmit } from "@/styles/emotion";
import AddSharpIcon from '@mui/icons-material/AddSharp';
export default function BoardNew() {
   return (
      <Wrapper>
         <Title>게시물 등록</Title>
         <Form method="POST">
            <WriteWrapper row="2">
               <Label htmlFor="">작성자</Label>
               <Write type="text" placeholder="이름을 적어주세요." />
            </WriteWrapper>
            <WriteWrapper row="2">
               <Label htmlFor="">비밀번호</Label>
               <Write type="password" placeholder="비밀번호를 입력해주세요." />
            </WriteWrapper>
            <WriteWrapper>
               <Label htmlFor="">제목</Label>
               <Write type="text" placeholder="제목을 작성해주세요." />
            </WriteWrapper>
            <WriteWrapper>
               <Label htmlFor="">내용</Label>
               <WriteContent type="text" placeholder="내용을 작성해주세요." />
            </WriteWrapper>
            <WriteWrapper>
               <Label htmlFor="">주소</Label>
               <WriteAddress type="text" placeholder="07250" />
               <Button color="white" type="button" value="우편번호 검색" />
               <Write type="text" />
               <Write type="text" />
            </WriteWrapper>
            <WriteWrapper>
               <Label htmlFor="">유튜브</Label>
               <Write type="text" placeholder="링크를 복사해주세요." />
            </WriteWrapper>
            <WriteWrapper>
               <Label htmlFor="">사진 첨부</Label>
               <Upload><AddSharpIcon /><div>Upload</div></Upload>
               <Upload><AddSharpIcon /><div>Upload</div></Upload>
               <Upload><AddSharpIcon /><div>Upload</div></Upload>
            </WriteWrapper>
            <WriteWrapper>
               <Label htmlFor="">메인 설정</Label>
               <RadioLabel htmlFor="youtube">
                  <Radio type="radio" name="mainChk" id="youtube" />
                  <i></i>
                  유튜브
               </RadioLabel>
               <RadioLabel htmlFor="picture">
                  <Radio type="radio" name="mainChk" id="picture" />
                  <i></i>
                  사진
               </RadioLabel>
            </WriteWrapper>
            <ButtonSubmit bg="#FFD600" type="submit" value="등록하기" />
         </Form>
      </Wrapper>
   );
} ``