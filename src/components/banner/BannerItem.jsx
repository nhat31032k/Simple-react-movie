import React from 'react';
import { NavLink,useNavigate } from 'react-router-dom';
import Button from '../button/Button';
import { tmdbAPI } from '../../config';
const BannerItem = ({data}) => {
    const { title, backdrop_path, genres, id } = data
    // console.log(data);
    const link = useNavigate();
    return (
        <div className="w-full h-full rounded-lg relative" onClick={()=>link(`/movies/${id}`)}>
                <div className="absolute inset-0 z-40   bg-gradient-to-t overlay from-[rgba(0,0,0,0.3)] to-[rgba(0,0,0,0.3)] rounded-lg"></div>
                <img src={tmdbAPI.imageOriginal(backdrop_path)}
                    alt=""
                    className='w-full h-full object-cover rounded-lg'
                />
                <div className="absolute left-5 bottom-5 w-full text-white">
                <h2 className='font-bold text-3xl mb-3'>{title}</h2>
                <div className="flex items-center gap-x-3 mb-8">
                    
                        <span className='py-2 px-4 border border-white rounded-md'>Adventure</span>
                        <span className='py-2 px-4 border border-white rounded-md'>action</span>
                        <span className='py-2 px-4 border border-white rounded-md'>Dramma</span>
                        <span className='py-2 px-4 border border-white rounded-md'>History</span>
                </div>
                <Button type="button" className=" items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[60px]">Watch Now</Button>
                    {/* <button className=" items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[60px]">
                        Watch Now
                    </button> */}
                </div>
            </div>
    );
};

export default BannerItem;