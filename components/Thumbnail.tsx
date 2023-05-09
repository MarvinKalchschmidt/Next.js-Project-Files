import Image from 'next/image'
import { Movie } from '../typings'

interface Props {
  movie: Movie 
}

function Thumbnail({ movie }: Props) {

  return (
    <div
      //className={`relative h-28 min-w-[180px] cursor-pointer md:h-36 md:min-w-[260px] md:hover:scale-105 transition duration-200 ease-out`}
      className={`relative w-full h-28 md:h-44 md:max-w-[320px] aspect-video cursor-pointer md:hover:scale-105 transition duration-200 ease-out`}
      onClick={() => {
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
