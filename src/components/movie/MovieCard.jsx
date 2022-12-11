import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../button/Button';
import {tmdbAPI} from "../../config";
const MovieCard = ({data}) =>
{
    const { title, backdrop_path, release_date, vote_average,id} = data
    const Link = useNavigate();
    {/* console.log(Link); */}
    return (
        // cón list card ta sẽ cho chiều cao là auto 
        //các card phài có chiều cao full mới canh đều nhau dc 
        <div className="movie-card rounded p-3 bg-slate-800 text-white flex flex-col h-full">
            <img src={tmdbAPI.imageOriginal(backdrop_path)} alt=""
                className='w-full h-[250px] object-cover rounded-lg mb-5 '
            />
            <h3 className=' text-xl font-bold mb-3 flex-[1]'>{ title}</h3>
            <div className="flex items-center justify-between text-sm opacity-50 mb-10">
                <span>{ release_date}</span>
                <span>{ vote_average}</span>
            </div>
            {/* <button onClick={()=>Link(`/movies/${id}`)} className="rounded-lg font-medium bg-blue-100 text-blue-500 px-6 py-3 captipalize w-full mt-auto text-center" >
                watch now
            </button> */}
            <Button
                type="button"
                onClick={() => Link(`/movies/${id}`)}
                className="rounded-lg font-medium bg-blue-100 text-blue-500 px-6 py-3 captipalize w-full mt-auto text-center"
                bgColor="secondary"
            >
                Watch Now
            </Button>
        </div>
    );
};

export default MovieCard;