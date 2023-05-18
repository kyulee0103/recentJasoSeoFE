import {atom} from 'recoil'

type IHelperTypes = {
    id: number
    isFilled: boolean
}

export const helperState = atom<IHelperTypes>({
    key: 'helper',
    default: {
        id: 0,
        isFilled: false,
    },
})
