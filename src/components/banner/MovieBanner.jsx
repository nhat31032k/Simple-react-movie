import React from 'react';
import { SwiperSlide, Swiper } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";
import useSWR from 'swr'
import { fetcher,tmdbAPI } from '../../config';
import BannerItem from './BannerItem';
const MovieBanner = () =>
{
    const { data, error } = useSWR(tmdbAPI.getMovieList("upcoming"), fetcher);
    console.log(data);
    const banners = data?.results || [];
    console.log(banners);
    return (
        <section className="banner h-[800px] page-container mb-20">
            <Swiper
                grabCursor={"true"}
                spaceBetween={40}
                slidesPerView={"auto"}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
            >
                {banners.length > 0 && banners.map((item, index) => (
                    <SwiperSlide key={item.id}>
                        <BannerItem data={item} />
                    </SwiperSlide>
                ))}
            </Swiper>


        </section>
    );
};

export default MovieBanner;