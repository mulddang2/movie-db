'use client';

import Results from '@/components/Results';
import { useQuery } from '@tanstack/react-query';
import Loading from './loading';

export default function Home({ searchParams }) {
  const genre = searchParams.genre || 'fetchTrending';

  const NEXT_PUBLIC_API_KEY = process.env.NEXT_PUBLIC_API_KEY;
  const {
    data: movieData,
    isLoading,
    isError,
    isSuccess,
  } = useQuery({
    queryKey: ['movies', genre],
    queryFn: () =>
      fetch(
        `https://api.themoviedb.org/3${
          genre === 'fetchTopRated'
            ? `/movie/top_rated`
            : `/trending/movie/week`
        }?api_key=${NEXT_PUBLIC_API_KEY}&language=ko-KR&page=1`
      ).then((res) => res.json()),
    cacheTime: 1000 * 60 * 30,
  });

  console.log(movieData);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <useError />;
  }

  // NOTE: loading 컴포넌트 테스트
  // const res = await new Promise((resolve) => {
  //   setTimeout(async () => {
  //     const response = await fetch(
  //       `https://api.themoviedb.org/3${
  //         genre === 'fetchTopRated' ? `/movie/top_rated` : `/trending/all/week`
  //       }?api_key=${API_KEY}&language=ko-KR&page=1`,
  //       { next: { revalidate: 10 } }
  //     );
  //     resolve(response);
  //   }, 2000);
  // });

  const results = movieData.results;

  return <div>{isSuccess && <Results results={results} />}</div>;
}
