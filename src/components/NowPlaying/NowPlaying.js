import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";

import "swiper/swiper.min.css";
import "swiper/modules/navigation/navigation.scss";
import "swiper/modules/pagination/pagination.scss";

import classes from "./NowPlaying.module.css";
import Movie from "../Movie/Movie";
import NotFoundMessage from "../UI/NotFoundMessage/NotFoundMessage";

const NowPlaying = (props) => {
	SwiperCore.use([Navigation]);

	let content = <NotFoundMessage message="Sorry no movies in theatre" />;

	if (props.data && props.data.length) {
		content = (
			<>
				<Swiper
					breakpoints={{
						576: {
							slidesPerView: 2,
							spaceBetween: 15,
						},
						768: {
							slidesPerView: 3,
							spaceBetween: 15,
						},
						992: {
							slidesPerView: 4,
							spaceBetween: 15,
						},
						1600: {
							slidesPerView: 6,
							spaceBetween: 15,
						},
					}}
					spaceBetween={0}
					slidesPerView={1}
					navigation
				>
					{props.data.map((elem, index) => {
						return (
							<SwiperSlide key={elem.id}>
								<Movie data={elem} inMovie={true}>
									<Movie.Title {...elem} />
								</Movie>
							</SwiperSlide>
						);
					})}
				</Swiper>
			</>
		);
	}
	return <div className={classes.NowPlaying}>{content ? content : null}</div>;
};

export default NowPlaying;
