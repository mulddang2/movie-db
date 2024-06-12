import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FiThumbsUp } from 'react-icons/fi';

export default function Card({ result }) {
  return (
    <div className='cursor-pointer group sm:hover:shadow=slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200'>
      <Link href={`/movie/${result.id}`}>
        <Image
          priority={true}
          src={`https://image.tmdb.org/t/p/original/${
            result.backdrop_path || result.poster_path
          }`}
          alt={`${result.title} 포스터 이미지`}
          width={500}
          height={300}
          className='transition-opacity duration-300 sm:rounded-t-lg group-hover:opacity-75'
        ></Image>
        <div className='p-2'>
          <p className='mb-3 line-clamp-2 text-md'>{result.overview}</p>
          <h2 className='text-lg font-bold truncate'>
            {result.title || result.name}
          </h2>
          <p className='flex items-center'>
            {result.release_date || result.first_air_date}
            <FiThumbsUp className='h-5 ml-3 mr-1' />
            {result.vote_count}
          </p>
        </div>
      </Link>
    </div>
  );
}
