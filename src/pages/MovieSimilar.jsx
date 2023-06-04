import React from 'react';
import { useParams } from 'react-router-dom';
import { SwiperSlide,Swiper } from 'swiper/react';
import useSWR from 'swr';
import { fetcher,tmdbAPI } from '../config';
import { Autoplay, Pagination, Navigation } from "swiper";
import MovieCard from '../components/movie/MovieCard';
import MovieVideo from './MovieVideo';
const MovieSimilar = () =>
{
     const { moviesId } = useParams();
    const { data, error } = useSWR(tmdbAPI.getMovieSimilar(moviesId), fetcher);
    console.log(data);
    const Similars = data?.results || [];
    console.log(Similars)
    return (
        <div className='ppy-10'>
            <h2 className="text-3xl font-medium mb-10 text-white">Similar Movie</h2>
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
                {Similars.length > 0 && Similars.map((item, index) => (
                    <SwiperSlide key={item.id}>
                        <MovieCard data={item}></MovieCard>
                    </SwiperSlide>
                ))}
            </Swiper>
            </div>
            {/* <MovieVideo/> */}
        </div>
    );
};

export default MovieSimilar;