import styled from "@emotion/styled";
import LayoutHeader from "./header/LayoutHeader.container";

interface ILayoutProps {
   children: JSX.Element;
}

const Body = styled.div`
   
`

export default function Layout(props: ILayoutProps) {
   return (
      <>
         <LayoutHeader />
         {/* <LayoutBanner /> */}
         {/* <LayoutNavigation /> */}
         <Body>{props.children}</Body>
      </>
   );
}