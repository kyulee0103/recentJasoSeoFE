import {atom} from 'recoil'

type IHelperTypes = {
    id: number
}

const storedValue = localStorage.getItem('page')
const initialValue = storedValue !== null ? parseInt(storedValue) : 0

export const helperState = atom<IHelperTypes>({
    key: 'helper',
    default: {
        id: initialValue,
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

type IAnswerTypes = {
    answer: string
    waiting: boolean
}

export const FirstAnswerState = atom<IAnswerTypes>({
    key: 'firstAnswer',
    default: {
        answer: '',
        waiting: false,
    },
})

export const SecondAnswerState = atom<IAnswerTypes>({
    key: 'secondAnswer',
    default: {
        answer: '',
        waiting: false,
    },
})

export const ThirdAnswerState = atom<IAnswerTypes>({
    key: 'thirdAnswer',
    default: {
        answer: '',
        waiting: false,
    },
})
export const FourthAnswerState = atom<IAnswerTypes>({
    key: 'fourthAnswer',
    default: {
        answer: '',
        waiting: false,
    },
})
