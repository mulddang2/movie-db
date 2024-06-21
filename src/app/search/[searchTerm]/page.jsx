import Results from '@/components/Results';
import React from 'react';

export default async function SearchPage({ params }) {
  const searchTerm = params.searchTerm;
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&query=${searchTerm}&language=ko-KR&page=1&include_adult=false`
  );
  const data = await res.json();
  const results = data.results;
  return (
    <div>
      {results && results.length === 0 && (
        <h1 className='pt-6 text-center'>No results found</h1>
      )}
      {results && results.length > 0 && <Results results={results} />}
    </div>
  );
}
