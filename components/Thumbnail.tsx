import Image from 'next/image'
import { Movie } from '../typings'

/*Related to Exercise 2*/
import { currentMovieState } from '../atoms/movieStateAtom'
import { useSetRecoilState } from 'recoil'
import { modalState } from 'atoms/modalStateAtom'

type Props =  {
  movie: Movie 
}

function Thumbnail({movie }: Props) {
  {/*TODO Exercise 2 (Bonus): Implement const setCurrentMovie here, see Recoil useSetRecoilState hook*/} 
  const setCurrentMovie = useSetRecoilState(currentMovieState)
  const showModal = useSetRecoilState(modalState)

  return (
    <div
      className={`relative w-full h-28 md:h-44 md:max-w-[320px] aspect-video cursor-pointer md:hover:scale-105 transition duration-200 ease-out`}
      onClick={() => {
        {/*TODO Exercise 2 (Bonus): Call setCurrentMovie to update currentMovieState with the Thumbnail's movie*/}
        setCurrentMovie(movie)
        showModal(true)
      }}
    >
      <Image
        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path || movie.poster_path}`}
        className="rounded-md object-cover"
        alt={'Thumbnail image'}      
        fill={true}
        />
    </div>
  )
}

export default Thumbnail
