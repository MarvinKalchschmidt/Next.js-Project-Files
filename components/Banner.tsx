import { InformationCircleIcon } from '@heroicons/react/outline'
import { useEffect, useState } from 'react'
import { baseUrl } from '../constants/movie'
import { Movie } from '../typings'
import { FaPlay } from 'react-icons/fa'
import Image from 'next/image'

/*Related to Exercise 2*/
import { currentMovieState } from '../atoms/movieStateAtom'
import { useSetRecoilState } from 'recoil'
import { modalState } from 'atoms/modalStateAtom'
import Link from 'next/link'

type Props = {
  nextflixOriginals: Movie[]
}

function Banner({ nextflixOriginals }: Props) {
  const [movie, setMovie] = useState<Movie | null>(null)

  {/*TODO Exercise 2: Implement const setCurrentMovie here, see Recoil useSetRecoilState hook*/} 
  const setCurrentMovie = useSetRecoilState(currentMovieState)
  const showModal = useSetRecoilState(modalState)


  useEffect(() => {
    setMovie(
      nextflixOriginals[Math.floor(Math.random() * nextflixOriginals.length)]
    )
  }, [nextflixOriginals])

  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[75vh] lg:justify-end lg:pb-12">
      <div className="absolute top-0 left-0 -z-10 h-[95vh] w-full">
        <Image
          src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
          fill={true}
          style={{ objectFit: "cover" }} 
          alt={'Banner image'}        
        />
      </div>

      <h1 className="text-2xl font-bold md:max-w-4xl md:text-4xl lg:text-7xl">
        {movie?.title || movie?.name || movie?.original_name}
      </h1>
      <p className="max-w-xs text-xs text-shadow-md md:max-w-lg md:text-lg lg:max-w-4xl lg:text-2xl">
        {movie?.overview}
      </p>
      <div className="flex space-x-3">
        <Link href={`/watch/movie/${movie?.id}`}>
          <button className="bannerButton bg-white text-black">     
            <FaPlay className="h-4 w-4 text-black md:h-7 md:w-7" />
            Play
          </button>
        </Link>
        <button
          className="bannerButton bg-[gray]/70"
          onClick={() => {
            {/*TODO Exercise 2: Call setCurrentMovie to update currentMovieState with the Thumbnail's movie*/}
            setCurrentMovie(movie)
            showModal(true)
          }}
        >
          <InformationCircleIcon className="h-5 w-5 md:h-8 md:w-8" /> More Info
        </button>
      </div>
    </div>
  )
}

export default Banner
