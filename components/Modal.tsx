import { useEffect, useState } from "react"
import { PlusIcon, ThumbUpIcon, VolumeOffIcon, VolumeUpIcon, XIcon, } from "@heroicons/react/outline"
import { FaPlay } from "react-icons/fa"
import { useRecoilState } from "recoil"
import { modalState } from "atoms/modalStateAtom"
import { currentMovieState } from "atoms/movieStateAtom"
import { Genre, Element, Movie } from "typings"
import dynamic from "next/dynamic"
import ReactPlayer from "react-player/lazy"


type Props = {
    open: boolean,
}

export default function Modal({ open }: Props) {
    const [trailer, setTrailer] = useState("")
    const [showModal, setShowModal] = useRecoilState(modalState)
    const [movie, setMovie] = useRecoilState(currentMovieState)
    const [muted, setMuted] = useState(true)
    const [genres, setGenres] = useState<Genre[]>([])

    useEffect(() => {
        if (!movie) return

        async function fetchMovie() {
            const data = await fetch(
                `https://api.themoviedb.org/3/${movie?.media_type === 'tv' ? 'tv' : 'movie'}/${movie?.id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&append_to_response=videos`)
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
            <div className={`absolute w-full md:w-[750px] 2xl:[850px] top-[3em] overflow-hidden rounded-lg bg-[#181818] shadow transition-all ${open ? "scale-100 opacity-100" : "scale-50 opacity-0"}`}>
                <button className="modalButton absolute z-30 right-5 top-5 h-9 w-9 border-none bg-[#181818] hover:bg-backgroundGray" onClick={() => handleClose()}>
                    <XIcon className="h-6 w-6" />
                </button>

                <div className="relative w-full aspect-video overflow-hidden">
                    {open && <ReactPlayer
                        url={`https://www.youtube.com/watch?v=${trailer}`}
                        width={"100%"}
                        height={"100%"}
                        style={{ position: 'absolute', top: '0', left: '0', objectFit: 'cover' }}
                        playing={true}
                        controls={false}
                        muted={muted}
                    />}
                    <div className="absolute top-0 w-full h-full bg-test-gradient opacity-100"></div>
                    <div className="absolute bottom-10 flex w-full items-center justify-between px-10">
                        <div className="flex space-x-3">
                            <button className="flex items-center gap-x-2 rounded bg-white px-12 text-xl font-bold text-black transition hover:bg-[#e6e6e6]">
                                <FaPlay className="h-7 w-7 text-black" />
                                Play
                            </button>
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

                <div className="flex space-x-16 rounded-b-md bg-[#181818] px-10">
                    <div className="space-y-8 mb-5 text-lg">
                        <div className="flex items-center space-x-2 text-base">
                            <p className="font-bold text-green-400">
                                {"95% Match"}
                            </p>
                            <p className="font-semibold">
                                {movie?.release_date || movie?.first_air_date}
                            </p>
                            <div className="flex h-4 items-center justify-center rounded border border-white/40 px-1.5 text-xs">
                                HD
                            </div>
                        </div>
                        <div className="flex flex-col justify-between gap-y-4 font-normal md:flex-row">
                            <p className="w-5/6">{movie?.overview}</p>
                            <div className="flex flex-col space-y-3 text-base font-medium">
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
        </div>
    )
}