import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import { fetcher,tmdbAPI } from '../../config';
import useDebounce from '../../hooks/useDebounce';
const SearchMovie = ({...props}) =>
{
    // const [filter, setFilter] = useState("");
    // const [url,setUrl] = useState(tmdbAPI.getMovieList(type="popular"));
    //  const [url, setUrl] = useState(tmdbAPI.getMovieList('popular', nextPage));
    // const { data, error } = useSWR(url, fetcher);
    // const filterDebouce = useDebounce(filter, 500);
    // const handleChance = (e) =>
    // { 
    //     setFilter(e.target.value);
    // }
    // useEffect(() => {
    //     if (filterDebouce) {
    //         setUrl(`https://api.themoviedb.org/3/search/movie?api_key=33ca101e71974821d244c04ed6f31284&query=${filterDebouce}`);
    //     } else {
    //         setUrl("https://api.themoviedb.org/3/movie/popular?api_key=33ca101e71974821d244c04ed6f31284");
    //     }
    // }, [filterDebouce]);
    return (
        // <section className='mb-10'>
        //     <div className="w-full max-w-[400px] mx-auto">
        //         <input type="text" className='w-[400px] inline p-2 rounded-lg border border-purple-500 outline-none shadow-[0px_0px_0px_3px_rgba(125,_106,_255,_0.2)] ' placeholder='Search movie....'
        //         onChange={handleChance}
        //         />
        //     </div>
        // </section>
        <input
            type={props.type}
            className={props.className}
            placeholder={props.placeholder}
            onChange={props.onChange}
        />
    );
};

export default SearchMovie;