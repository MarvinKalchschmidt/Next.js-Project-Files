import { atom } from 'recoil'
import { Movie } from '../typings'

export const currentMovieState = atom<Movie | null>({
  key: 'movieState',
  default: null,
})