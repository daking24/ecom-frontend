import "../Styles/components/CusReports.scss"
import { FiChevronRight } from 'react-icons/fi';
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";


const CusReports = () => {
  return (
		<div className="CusReports">
			<div className="heading">
				<div className="heading__title">Our Customers Says</div>
				<button className="heading__button">
					Button
					<FiChevronRight className="heading__button__icon" />
				</button>
			</div>
			<div className="swiper">
				<Swiper
					slidesPerView={4}
					spaceBetween={30}
					slidesPerGroup={6}
					loop={true}
					loopFillGroupWithBlank={false}
					pagination={false}
					navigation={true}
					modules={[Pagination, Navigation]}
					className="mySwiper"
				>
					<SwiperSlide className="card">
                        <div className="card__content">
                            “ This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here “
                        </div>
                        <div className="card__header">
                            Name and Surname
                        </div>
                        <div className="card__avatar"></div>
                    </SwiperSlide>
					<SwiperSlide className="card">
                        <div className="card__content">
                            “ This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here “
                        </div>
                        <div className="card__header">
                            Name and Surname
                        </div>
                        <div className="card__avatar"></div>
                    </SwiperSlide>
					<SwiperSlide className="card">
                        <div className="card__content">
                            “ This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here “
                        </div>
                        <div className="card__header">
                            Name and Surname
                        </div>
                        <div className="card__avatar"></div>
                    </SwiperSlide>
					<SwiperSlide className="card">
                        <div className="card__content">
                            “ This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here “
                        </div>
                        <div className="card__header">
                            Name and Surname
                        </div>
                        <div className="card__avatar"></div>
                    </SwiperSlide>
					<SwiperSlide className="card">
                        <div className="card__content">
                            “ This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here “
                        </div>
                        <div className="card__header">
                            Name and Surname
                        </div>
                        <div className="card__avatar"></div>
                    </SwiperSlide>
					<SwiperSlide className="card">
                        <div className="card__content">
                            “ This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here “
                        </div>
                        <div className="card__header">
                            Name and Surname
                        </div>
                        <div className="card__avatar"></div>
                    </SwiperSlide>
					<SwiperSlide className="card">
                        <div className="card__content">
                            “ This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here “
                        </div>
                        <div className="card__header">
                            Name and Surname
                        </div>
                        <div className="card__avatar"></div>
                    </SwiperSlide>
					<SwiperSlide className="card">
                        <div className="card__content">
                            “ This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here “
                        </div>
                        <div className="card__header">
                            Name and Surname
                        </div>
                        <div className="card__avatar"></div>
                    </SwiperSlide>
					<SwiperSlide className="card">
                        <div className="card__content">
                            “ This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here “
                        </div>
                        <div className="card__header">
                            Name and Surname
                        </div>
                        <div className="card__avatar"></div>
                    </SwiperSlide>
				</Swiper>
			</div>
		</div>
	);
}

export default CusReports