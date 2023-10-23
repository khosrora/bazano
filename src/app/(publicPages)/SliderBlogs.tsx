'use client'
import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import Image from 'next/image';

function SliderBlogs() {
    return (
        <Swiper
            spaceBetween={30}
            slidesPerView={3}
            onSwiper={(swiper: any) => console.log(swiper)}
        >
            {
                [1, 2, 3, 4, 5, 6].map((i , index) =>
                    <SwiperSlide key={index}>
                        <div className="card card-compact w-96 bg-base-100 shadow-xl">
                            <figure>
                                <Image src="https://www.totalika.org/wp-content/uploads/2019/04/Safe-Workplace-has-several-teams-working-together.jpg" alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">بهترین ها</h2>
                                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
                                <div className="card-actions">
                                    <button className="btn btn-primary btn-outline w-full">مطالعه بیشتر</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                )
            }
        </Swiper>
    )
}

export default SliderBlogs