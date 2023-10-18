import React from 'react'
import { useSearchParams } from 'react-router-dom';
import { useFetch , useTitle } from '../hooks/index';
import { Card } from '../components/index';

export const Search = ({apiPath}) => {
  const [searchParams] = useSearchParams();
  const queryterm = searchParams.get("q")
  const {data : movies} = useFetch(apiPath , queryterm);

  const pageTitle = useTitle(`Search Results for ${queryterm}`)

  return (
    <main>
      <section className='py-7'>
        <p className='text-3xl text-gray-700 dark:text-white'>{movies.length === 0 ? `No result found for '${queryterm}' `:`Results for '${queryterm}' `}</p>
      </section>
      <section className="max-w-7xl mx-auto py-7">
          <div className="flex justify-start flex-wrap">
            
            { movies.map((movie)=>{
                 return <Card key={movie.id} movie={movie}/>
            })}
            
          </div>
        </section>
    </main>
  )
}
