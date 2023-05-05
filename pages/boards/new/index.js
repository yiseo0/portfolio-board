import { Form, Button, WriteBox, Title, Wrapper, Write, WriteContent, WriteAddress, Label, Upload, RadioLabel, Radio, ButtonSubmit, Error } from "@/styles/emotion";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function BoardNew() {
   const [data, setData] = useState({
      name: '',
      password: '',
      title: '',
      content: '',
   })
   const [errorName, setErrorName] = useState('')
   const [errorPw, setErrorPw] = useState('')
   const [errorTitle, setErrorTitle] = useState('')
   const [errorContent, setErrorContent] = useState('')

   const { name, password, title, content } = data


   const onChange = e => {
      const { name, value } = e.target
      setData(data => ({
         ...data,
         [name]: value
      }))
      if (name) {
         setErrorName('')
      }
      if (password) {
         setErrorPw('')
      }
      if (title) {
         setErrorTitle('')
      }
      if (content) {
         setErrorContent('')
      }
   }

   const onSubmit = e => {
      e.preventDefault()
      if (!name) {
         setErrorName('이름을 입력해주세요.')
      }
      if (!password) {
         setErrorPw('비밀번호를 입력해주세요.')
      }
      if (!title) {
         setErrorTitle('제목을 작성해주세요.')
      }
      if (!content) {
         setErrorContent('내용을 작성해주세요.')
      }
   }

   return (
      <Wrapper>
         <Title>게시물 등록</Title>
         <Form method="POST" onSubmit={onSubmit}>
            <WriteBox row="2">
               <Label htmlFor="">작성자</Label>
               <Write type="text" placeholder="이름을 입력해주세요." name="name" value={name} onChange={onChange} />
               <Error>{errorName}</Error>
            </WriteBox>
            <WriteBox row="2">
               <Label htmlFor="">비밀번호</Label>
               <Write type="password" placeholder="비밀번호를 입력해주세요." name="password" value={password} onChange={onChange} />
               <Error>{errorPw}</Error>
            </WriteBox>
            <WriteBox>
               <Label htmlFor="">제목</Label>
               <Write type="text" placeholder="제목을 작성해주세요." name="title" value={title} onChange={onChange} />
               <Error>{errorTitle}</Error>
            </WriteBox>
            <WriteBox>
               <Label htmlFor="">내용</Label>
               <WriteContent type="text" placeholder="내용을 작성해주세요." name="content" value={content} onChange={onChange} />
               <Error>{errorContent}</Error>
            </WriteBox>
            <WriteBox>
               <Label htmlFor="">주소</Label>
               <WriteAddress type="text" placeholder="07250" />
               <Button color="white" type="button" value="우편번호 검색" />
               <Write type="text" />
               <Write type="text" />
            </WriteBox>
            <WriteBox>
               <Label htmlFor="">유튜브</Label>
               <Write type="text" placeholder="링크를 복사해주세요." />
            </WriteBox>
            <WriteBox>
               <Label htmlFor="">사진 첨부</Label>
               <Upload><div>Upload</div></Upload>
               <Upload><div>Upload</div></Upload>
               <Upload><div>Upload</div></Upload>
            </WriteBox>
            <WriteBox>
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
            </WriteBox>
            <ButtonSubmit bg="#FFD600" type="submit" value="등록하기" />
         </Form>
      </Wrapper>
   );
} ``