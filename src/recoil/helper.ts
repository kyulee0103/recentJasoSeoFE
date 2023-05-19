import {atom} from 'recoil'

type IHelperTypes = {
    id: number
}

export const helperState = atom<IHelperTypes>({
    key: 'helper',
    default: {
        id: 0,
    },
})

type IFirstHelperTypes = {
    company: string
    work: string
    question: string
    experience: string
    isFilled: boolean
}

export const firstHelperState = atom<IFirstHelperTypes>({
    key: 'firstHelper',
    default: {
        company: '',
        work: '',
        question: '',
        experience: '',
        isFilled: false,
    },
})

type ISecondHelperTypes = {
    title: string
    contents: string
    isFilled: boolean
    counts: number
}

export const secondHelperState = atom<ISecondHelperTypes>({
    key: 'secondHelper',
    default: {
        title: '',
        contents: '',
        counts: 0,
        isFilled: false,
    },
})

type IThirdHelperTypes = {
    contents: string
    isFilled: boolean
    counts: number
}

export const thirdHelperState = atom<IThirdHelperTypes>({
    key: 'thirdHelper',
    default: {
        contents: '',
        counts: 0,
        isFilled: false,
    },
})

export const fourthHelperState = atom<IThirdHelperTypes>({
    key: 'fourthHelper',
    default: {
        contents: '',
        counts: 0,
        isFilled: false,
    },
})
