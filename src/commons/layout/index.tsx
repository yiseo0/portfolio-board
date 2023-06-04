import styled from "@emotion/styled";
import LayoutHeader from "./header/LayoutHeader.container";
import LayoutNavigation from "./navigation/LayoutNavigation.container";
import LayoutBanner from "./banner/LayoutBanner.container";

interface ILayoutProps {
  children: JSX.Element;
}

const Body = styled.div``;

export default function Layout(props: ILayoutProps) {
  return (
    <>
      <LayoutHeader />
      <LayoutBanner />
      <LayoutNavigation />
      <Body>{props.children}</Body>
    </>
  );
}
