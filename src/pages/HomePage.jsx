import React, { Fragment } from 'react';
import MovieBanner from '../components/banner/MovieBanner';
import MoviesList from '../components/movie/MoviesList';
import SearchMovie from '../components/movie/SearchMovie';

const HomePage = () =>
{
    return (
        <Fragment>
            <section className="movies-layout page-container pb-10">
                <h2 className='capitalize text-white mb-10 text-3xl font-bold'>Now Playing</h2>
                <MoviesList type="now_playing"></MoviesList>
            </section>
            <section className="movies-layout page-container pb-10">
                <h2 className='capitalize text-white mb-10 text-3xl font-bold'>Top Rated</h2>
                <MoviesList type="top_rated"></MoviesList>
            </section>
            <section className="movies-layout page-container pb-10">
                <h2 className='capitalize text-white mb-10 text-3xl font-bold'>Trending</h2>
                {/* grabCursor={true} là có thể kéo các card qua dc 
            spaceBetween={40} là khoảng cách giữa các card
            slidesPerView={auto} là số lượng card hiển thị trong 1 lần kéo
         */}
                <MoviesList type='popular'></MoviesList>
            </section>
        </Fragment>
    );
};

export default HomePage;