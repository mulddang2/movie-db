import Image from 'next/image';

export default async function MoviePage({ params }) {
  const movieId = params.id;
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=ko-KR`
  );
  const movie = await res.json();
  return (
    <div className='w-full'>
      <div className='flex flex-col content-center max-w-6xl p-4 mx-auto md:pt-8 md:flex-row md:space-x-6'>
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            movie.backdrop_path || movie.poster_path
          }`}
          width={500}
          height={300}
          className='rounded-lg'
          alt={`${movie.title} 포스터 이미지`}
          style={{ maxWidth: '100%', maxHeight: '100%' }}
        ></Image>
        <div className='p-2'>
          <h2 className='mb-3 text-lg font-bold'>
            {movie.title || movie.name}
          </h2>
          <p className='mb-3 text-lg'>
            {movie.overview ? movie.overview : '상세 정보 준비 중...'}
          </p>
          <p>
            <span className='mr-1 font-semibold'>Date Released:</span>
            {movie.release_date || movie.first_air_date}
          </p>

          <p>
            <span className='mr-1 font-semibold'>Rating:</span>
            {movie.vote_count}
          </p>
        </div>
      </div>
    </div>
  );
}
