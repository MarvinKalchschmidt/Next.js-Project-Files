import { useEffect, useState } from "react"
import { PlusIcon, ThumbUpIcon, VolumeOffIcon, VolumeUpIcon, XIcon, } from "@heroicons/react/outline"
import { FaPlay } from "react-icons/fa"
import { useRecoilState, useSetRecoilState } from "recoil"
import { modalState } from "atoms/modalStateAtom"
import { currentMovieState } from "atoms/movieStateAtom"
import { Genre, Element } from "typings"
import ReactPlayer from "react-player/lazy"
import Link from "next/link"


type Props = {
    open: boolean,
}

export default function Modal({ open }: Props) {
    const [trailer, setTrailer] = useState("")
    const setShowModal = useSetRecoilState(modalState)
    const [movie, setMovie] = useRecoilState(currentMovieState)
    const [muted, setMuted] = useState(true)
    const [genres, setGenres] = useState<Genre[]>([])

    useEffect(() => {
        if (!movie) return

        async function fetchMovie() {
          const data = await fetch(
            `https://api.themoviedb.org/3/movie/${movie?.id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&append_to_response=videos`)
            .then((response) => response.json())
          if (data?.videos) {
            const index = data.videos.results.findIndex(
              (element: Element) => element.type === 'Trailer'
            )
            setTrailer(data.videos?.results[index]?.key)
          }
          if (data?.genres) {
            setGenres(data.genres)
          }
        }

        fetchMovie()
    }, [movie])

    const handleClose = () => {
        setShowModal(false)
        setMovie(null)
    }

    return (
        <div className={`w-full h-full fixed transition-colors flex justify-center overflow-y-scroll scrollbar-hide z-30 ${open ? "visible bg-black/70" : "invisible"}`}>
            <div className={`absolute w-full md:w-[750px] xl:w-[850px] top-[3em] overflow-hidden rounded-lg bg-[#181818] shadow transition-all ${open ? "scale-100 opacity-100" : "scale-50 opacity-0"}`}>
                <button className="modalButton absolute z-30 right-5 top-5 h-9 w-9 border-none bg-[#181818] hover:bg-backgroundGray" onClick={() => handleClose()}>
                    <XIcon className="h-6 w-6" />
                </button>

                <div className="relative overflow-hidden">
                    <div className="aspect-video">
                        {open && <ReactPlayer
                            url={`https://www.youtube.com/watch?v=${trailer}`}
                            width={"100%"}
                            height={"100%"}
                            style={{ position: 'absolute', top: '0', left: '0', objectFit: 'cover'}}
                            playing={true}
                            controls={false}
                            muted={muted}
                        />}
                    </div>
                    
                   <div className="absolute top-0 w-full h-full bg-test-gradient opacity-100"></div>
                    <div className="absolute bottom-10 flex w-full items-center justify-between px-14">
                        <div className="flex gap-3">
                            <Link href={`/watch/movie/${movie?.id}`}>
                                <button className="modalPlayButton bg-white text-black transition hover:bg-[#e6e6e6]">
                                    <FaPlay className="h-7 w-7 text-black" />
                                    Play
                                </button>
                            </Link>
                            <button className="modalButton">
                                <PlusIcon className="h-7 w-7" />
                            </button>
                            <button className="modalButton">
                                <ThumbUpIcon className="h-6 w-6" />
                            </button>
                        </div>
                        <button className="modalButton" onClick={() => setMuted(!muted)}>
                            {muted ? (
                                <VolumeOffIcon className="h-6 w-6" />
                            ) : (
                                <VolumeUpIcon className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div> 

                {/* Exercise 4: Add the missing TailwindCSS using Tailwind's flex classes (flex, flex-col, flex-row, flex-wrap).*/}           
                <div className="flex flex-col px-6 gap-6 mb-10 bg-[#181818] md:px-14 ">                                   
                    <div className="flex flex-wrap items-center gap-2.5 text-base">
                        <span className="font-semibold text-green-400">97% Match</span>
                        <span className="font-semibold">{movie?.release_date || movie?.first_air_date}</span>
                        <span className="border border-white/40 rounded-[3px] px-2 text-xs">HD</span>
                    </div>
                    <div className="flex flex-col justify-between gap-10 md:flex-row font-medium">
                        <p className="basis-3/4 ">{movie?.overview}</p>
                        <div className="basis-1/4 flex flex-col gap-3 text-base">
                            <div>
                                <span className="text-[gray]">Genres:</span>{' '}
                                {genres.map((genre) => genre.name).join(', ')}
                            </div>

                            <div>
                                <span className="text-[gray]">Original language:</span>{' '}
                                {movie?.original_language}
                            </div>

                            <div>
                                <span className="text-[gray]">Total votes:</span>{' '}
                                {movie?.vote_count}
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    )
}