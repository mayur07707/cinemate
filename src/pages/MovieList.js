//eslint-disable-next-line
import styles from "../index.css"
import { Card } from "../components/index"
import { useFetch, useTitle } from "../hooks/index"

export const MovieList = ({ apiPath , title }) => {
    const { data : movies } = useFetch(apiPath)
    //eslint-disable-next-line
    const pageTitle = useTitle(title);

  return (
    <main>
        <section className="max-w-7xl mx-auto py-7">
          <div className="flex justify-start flex-wrap other:justify-evenly">

            { movies.map((movie)=>{
                 return <Card key={movie.id} movie={movie}/>
            })}
            
          </div>
        </section>
    </main>
  )
}
