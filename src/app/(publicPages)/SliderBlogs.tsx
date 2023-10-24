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
            breakpoints={{
                0: {
                    slidesPerView: 1,
                },
                900: {
                    slidesPerView: 2,
                },
                1000: {
                    slidesPerView: 3
                },
                1500: {
                    slidesPerView: 4
                },
                1700: {
                    slidesPerView: 5
                }
            }}
        // onSwiper={(swiper: any) => console.log(swiper)}
        >
            {
                [1, 2, 3, 4, 5, 6].map((i, index) =>
                    <SwiperSlide key={index}>
                        <div className="card card-compact bg-base-100">
                            <figure>
                                <img
                                    className='w-full h-[200px]'
                                    src="https://blog.hubspot.com/hs-fs/hubfs/teamwork-quotes-2.jpg?width=595&height=400&name=teamwork-quotes-2.jpg"
                                    alt="Shoes"
                                    width={200}
                                    height={200}
                                />
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