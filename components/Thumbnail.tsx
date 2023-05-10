import Image from 'next/image'
import { Movie } from '../typings'
import { currentMovieState } from '../atoms/movieStateAtom'
import { useRecoilState } from 'recoil'

interface Props {
  movie: Movie 
}

function Thumbnail({movie }: Props) {
  const [currentMovie, setCurrentMovie] = useRecoilState(currentMovieState)

  return (
    <div
      className={`relative w-full h-28 md:h-44 md:max-w-[320px] aspect-video cursor-pointer md:hover:scale-105 transition duration-200 ease-out`}
      onClick={() => {
        setCurrentMovie(movie)
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
