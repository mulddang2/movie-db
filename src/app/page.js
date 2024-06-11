import Results from '@/components/Results';

const API_KEY = process.env.API_KEY;

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || 'fetchTrending';
  const res = await fetch(
    `https://api.themoviedb.org/3${
      genre === 'fetchTopRated' ? `/movie/top_rated` : `/trending/all/week`
    }?api_key=${API_KEY}&language=ko-KR&page=1`,
    { next: { revalidate: 10000 } }
  );

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

  const data = await res.json();

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const results = data.results;
  console.log(results);

  return (
    <div>
      <Results results={results} />
    </div>
  );
}
