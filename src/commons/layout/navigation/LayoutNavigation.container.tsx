import { useRouter } from "next/router";
import { MouseEvent } from "react";
import LayoutNavigationUI from "./LayoutNavigation.presenter";

export default function LayoutNavigation() {
    const router =  useRouter()
    const onClickMenu = (e: MouseEvent<HTMLDivElement>) => {
      router.push(e.target.id);
    };
    return <LayoutNavigationUI onClickMenu={onClickMenu} />;
}
