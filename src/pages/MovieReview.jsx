import React from 'react';
import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import { fetcher, tmdbAPI } from '../config';

const MovieReview = () =>
{
    const { moviesId } = useParams();
    const { data, error } = useSWR(tmdbAPI.getMovieReview(moviesId), fetcher);
    console.log(data);
    const comments = data?.results || [];
    return (
        <div className='mb-10'>
            {comments.length > 0 && <h3 className="text-white text-center text-2xl p-10 ">Comments</h3>}
            <div className="flex flex-col">
                {comments.length > 0 && comments.map((item, index) => (
                    <div className="border bg-slate-800 w-[800px] h-auto rounded-lg mx-auto mb-10" key={item.id}>
                        <div className="comment_author flex p-[10px_15px] items-center">
                            <img src= {tmdbAPI.imageOriginal(item.author_details.avatar_path)} className='w-[60px] h-[60px] border rounded-[50%]' />
                            <h3 className='text-white ml-5 text-2xl'>{item.author_details.username}</h3>
                        </div>
                        <div>
                            <p className='text-white p-5 text-xl font-medium leading-8'>{item.content}</p>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default MovieReview;