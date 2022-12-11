import React, { useEffect, useState } from 'react';
import MoviesList from '../components/movie/MoviesList';
import ReactPaginate from 'react-paginate';
import useSWR from 'swr'
import { fetcher,tmdbAPI} from '../config';
import MovieCard from '../components/movie/MovieCard';
import useDebounce from '../hooks/useDebounce';
import SearchMovie from '../components/movie/SearchMovie';
const itemsPerPage = 20;
const MoviePage = () =>
{
    const [nextPage, setNextPage] = useState(1);
    const [filter, setFilter] = useState("");
    const [url, setUrl] = useState(tmdbAPI.getMovieList('popular', nextPage));
    const { data, error } = useSWR(url, fetcher);
    const filterDebouce = useDebounce(filter, 500);
    const loading = !data && !error;
    const banners = data?.results || [];
    //check data with page
    const { page, total_pages } = data?.page || {};
    //******code for pagination*****//
    const [pageCount, setPageCount] = useState(0);
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() =>
    {
        if (!data || !data.total_results) return;
        // Fetch items from another resources
        setPageCount(Math.ceil(data.total_results / itemsPerPage));
    }, [data, itemOffset]);

    const handlePageClick = (event) =>
    {
        const newOffset = (event.selected * itemsPerPage) % data.total_pages;
        setItemOffset(newOffset);
        setNextPage(event.selected + 1);
    };
    //set pagecount to render pagination
    //code for pagination

    // const pageCount = 5;
    const handleChance = (e) =>
    {
        setFilter(e.target.value);
    }
    console.log(nextPage);
    useEffect(() =>
    {
        if (filterDebouce) {
            setUrl(tmdbAPI.getMovieSearch(filterDebouce,nextPage));
        } else {
            setUrl(tmdbAPI.getMovieList('popular', nextPage));
        }
    }, [filterDebouce, nextPage]);
    return (
        <>
            <section className='mb-10'>
                <div className="w-full max-w-[400px] mx-auto">
                    <SearchMovie
                        type="text"
                        className='w-[400px] inline p-2 rounded-lg border border-purple-500 outline-none shadow-[0px_0px_0px_3px_rgba(125,_106,_255,_0.2)] '
                        placeholder='Search movie....'
                        onChange={handleChance}
                    />
                </div>
            </section>
            {loading && (<div className='w-10 h-10 rounded-full border-4 border-primary border-t-transparent border-t-4 mx-auto animate-spin'></div>)}
            <div className='py-10'>
                <div className="grid grid-cols-4 gap-10">
                    {!loading && banners.length > 0 && banners.map((item, index) => (
                        <MovieCard key={item.id} data={item} />
                    ))}
                </div>
                <div className="mt-10 text-white">
                    <ReactPaginate
                        breakLabel="..."
                        nextLabel="next >"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={3}
                        pageCount={pageCount}
                        previousLabel="< previous"
                        renderOnZeroPageCount={null}
                        className='pagination'
                    />
                </div>

                {/* pagination */}
                {/* <div className="flex items-center   justify-center text-white mt-10 gap-x-5 hidden">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" onClick={() => setNextPage(nextPage - 1)}>
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                    </span>
                    {new Array(pageCount).fill(0).map((item, index) => (
                        <span className='cursor-pointer inline-block py-2 px-4 leading-none bg-white text-slate-900' onClick={() => setNextPage(index + 1)}>{index + 1}</span>
                    ))}
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" onClick={() => setNextPage(nextPage + 1)}>
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </span>
                </div> */}
                {/* pagination */}
            </div>
        </>

    );
};

export default MoviePage;