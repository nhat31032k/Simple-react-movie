import React from 'react';
import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import { fetcher,tmdbAPI } from '../config';
const MovieVideo = () =>
{
    const { moviesId } = useParams();
    const { data, error } = useSWR(tmdbAPI.getMovieVideo(moviesId), fetcher);
    console.log(data);
   const videos = data?.results || [];
    return (
        <div className='py-10'>
            <div className="flex flex-col gap-10">
                {videos.slice(0, 5).map(item => (
                    <div className="video-item" key={item.id}>
                        <h3 className='mb-5 text-white text-xl font-medium p-5 bg-primary inline-block'>{item.name}</h3>
                        <div className="w-full aspect-video">
                            <iframe width="762" height="480" src={`https://www.youtube.com/embed/${item.key}`}
                                title="受伤的狐狸" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullscreen
                                className='w-full h-full object-fill'
                            >
                            </iframe>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
//  <iframe width="762" height="480" src="https://www.youtube.com/embed/58gU0bS2zy0?list=RDMMK3Ro-cbvEgc"
//     title="受伤的狐狸" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//     allowfullscreen>
// </iframe> 
export default MovieVideo;