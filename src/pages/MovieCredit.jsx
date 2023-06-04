import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import { fetcher,tmdbAPI } from '../config';

const MovieCredit = () =>
{
    const { moviesId } = useParams();
    const { data, error } = useSWR(tmdbAPI.getMovieCredit(moviesId), fetcher);
    console.log(data);
    // const {cast} = data;
    // if (!data) return null
    // if (!cast || cast.length <= 0) return null
    const casts = data?.cast || [];
    console.log(casts);
    return (
        <Fragment>
            <h2 className="text-white text-center text-2xl pb-10">Casts</h2>
            <div className="grid grid-cols-4 gap-5">
                {casts.slice(0,4).map(item => (
                    <div className="cast-item" key={item.id}>
                        <img src={`https://image.tmdb.org/t/p/original${item.profile_path}`} alt="" className="w-full h-[500px] object-cover rounded-lg pb-10" />
                        <h3 className="item-name text-center text-white text-2xl">{item.name}</h3>
                    </div>
                ))}

            </div>
        </Fragment>
    );
};

export default MovieCredit;