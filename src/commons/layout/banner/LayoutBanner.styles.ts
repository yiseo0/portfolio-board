import styled from "@emotion/styled";
import { Carousel } from "antd";
import { ISliderImgProps } from "./LayoutBanner.types";

export const Slider = styled(Carousel)`
  line-height: 0;
  font-size: 0;
  img {
    width: 100%;
  }
`;
export const Slide = styled.div`

`;
export const SlideText = styled.div`
  position: absolute;
  top: 6rem;
  left: 50%;
  transform: translateX(-50%);
  color: #ffffff;
  text-align: center;
`;
export const SlideTextTitle = styled.div`
  font-weight: 700;
  font-size: 3rem;
  line-height: 4.438rem;
  margin-bottom: 2.063rem;
`;
export const SlideTextDesc = styled.div`
  font-weight: 500;
  font-size: 0.75rem;
  line-height: 1.125rem;
  text-transform: uppercase;
`;
export const SliderImg = styled.div`
  height: 400px;
  background: url(${(props: ISliderImgProps) => props.src}) no-repeat
    center/cover;
`;
