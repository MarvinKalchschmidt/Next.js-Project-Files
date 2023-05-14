/*Related to Exercise 4*/
import { atom } from 'recoil'

export const accountState = atom({
    key: 'accountState',
    default: 'Vivi',
})