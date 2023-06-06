import styled from "@emotion/styled";
import { Carousel } from "antd";
import type { ISliderImgProps } from "./LayoutBanner.types";

export const SliderWrapper = styled.div`
  position: relative;
`;
export const Slider = styled(Carousel)`
  line-height: 0;
  font-size: 0;
  img {
    width: 100%;
  }
  .slick-dots {
    bottom: 20px;
    li {
      width: auto !important;
      height: auto;
      margin: 0 8px;
      button {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        border: 1px solid #fff;
        background: transparent;
        opacity: 1;
        &::after {
          content: none;
        }
      }
    }
  }
  .slick-prev,
  .slick-next,
  .slick-prev:hover,
  .slick-next:hover {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    width: 48px;
    height: 48px;
    border: 0;
    background: transparent
      url("/images/commons/layout/banner/banner_arrow.png") no-repeat 0 / cover !important;
    font-size: 0;
    text-indent: -9999px;
  }
  .slick-prev {
    margin-left: -600px;
  }
  .slick-next,
  .slick-next:hover {
    margin-left: 600px;
    background-position-x: 100% !important;
  }
`;
export const Slide = styled.div``;
export const SlideText = styled.div`
  position: absolute;
  top: 6rem;
  left: 50%;
  transform: translateX(-50%);
  color: #ffffff;
  text-align: center;
`;
export const SlideTextTitle = styled.p`
  font-weight: 700;
  font-size: 3rem;
  line-height: 4.438rem;
  margin-bottom: 2.063rem;
`;
export const SlideTextDesc = styled.p`
  font-weight: 500;
  font-size: 0.75rem;
  line-height: 1.125rem;
  text-transform: uppercase;
`;
export const SlideImg = styled.div`
  height: 400px;
  background: url(${(props: ISliderImgProps) => props.src}) no-repeat
    center/cover;
`;
