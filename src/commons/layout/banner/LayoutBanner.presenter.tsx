import * as S from "./LayoutBanner.styles";

export default function LayoutBannerUI() {
	const onChange = (currentSlide: number) => {
		console.log(currentSlide);
	};

	return (
		<>
			<S.SliderWrapper>
				<S.Slider arrows={true} afterChange={onChange}>
					<S.SlideImg src="/images/commons/layout/banner/banner1.jpg" />
					<S.SlideImg src="/images/commons/layout/banner/banner2.jpg" />
					<S.SlideImg src="/images/commons/layout/banner/banner3.jpg" />
					<S.Slide>
						<S.SlideImg src="/images/commons/layout/banner/banner4.jpg" />
						<S.SlideText>
							<S.SlideTextTitle>carousel Design</S.SlideTextTitle>
							<S.SlideTextDesc>
								캐러셀은 이미지 로테이터, 슬라이더 등 다양한 이름으로 불리는데
								<br />
								같은 공간에 하나 이상의 콘텐츠를 보여주며, 한 번에 하나씩만 보이고
								<br />
								각각은 이미지와 약간의 텍스트로 구성되어있다고 합니다.
							</S.SlideTextDesc>
						</S.SlideText>
					</S.Slide>
				</S.Slider>
			</S.SliderWrapper>
		</>
	);
}
