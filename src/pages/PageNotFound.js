import { Link } from 'react-router-dom'
import pagenotfound from '../assets/images/pagenotfound.png'
import { useTitle } from '../hooks/index'

export const PageNotFound = ({title}) => {
  //eslint-disable-next-line
  const pageTitle = useTitle(title)

  return (
    <main>
      <section className='flex flex-col justify-center px-2'>
        <div className='flex flex-col items-center my-4'>
            <p className='text-5xl font-semibold text-gray-700 dark:text-white my-10'> 404, OOPS! </p>
            <div className='max-w-lg'>
              <img className='rounded' src={pagenotfound} alt=" "/>
            </div>
        </div>

        <div className='flex justify-center my-4'>
          <Link to='/'>
            <button className='px-7 py-2 rounded font-medium dark:text-white bg-stone-500'> Back to Cinemate </button>
          </Link>
        </div>
      </section>
    </main>
  )
}
