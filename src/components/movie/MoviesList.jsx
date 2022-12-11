import React, { useEffect } from 'react';
import { SwiperSlide, Swiper } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";
import MovieCard from './MovieCard';
import useSWR from 'swr'
import { fetcher,tmdbAPI } from '../../config';
import { useState } from 'react';

const MoviesList = ({type="now_playing"}) =>
{
    // const [movies, setMovies] = useState([]);
    const { data, error } = useSWR(tmdbAPI.getMovieList(type), fetcher)
    console.log(data);
    // useEffect(() =>
    // {
    //     if (data && data.results) setMovies(data.results);
    // }, [data]);
    const movies = data?.results || [];
    return (
        <div className="movies-list">
            <Swiper
                grabCursor={"true"}
                spaceBetween={40}
                slidesPerView={"auto"}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination, Navigation]}
            >
                {movies.length > 0 && movies.map((item, index) => (
                    <SwiperSlide key={item.id}>
                        <MovieCard data={item}></MovieCard>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default MoviesList;