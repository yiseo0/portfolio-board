import * as S from "./LayoutHeader.styles";
import { ILayoutHeaderUIProps } from "./LayoutHeader.types";


export default function LayoutHeaderUI({ onClickLogo, onClickLogin, onClickJoin }: ILayoutHeaderUIProps) {
   return (
      <S.Wrapper>
         <S.Inner>
            <S.Logo onClick={onClickLogo}>
               <img src="/images/commons/logo.png" alt="code.camp" />
            </S.Logo>
            <div>
               <S.Button onClick={onClickLogin}>로그인</S.Button>
               <S.Button bg="#FFD600" onClick={onClickJoin}>회원가입</S.Button>
            </div>
         </S.Inner>
      </S.Wrapper>
   );
}