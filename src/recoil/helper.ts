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
    block: boolean
}

export const firstHelperState = atom<IFirstHelperTypes>({
    key: 'firstHelper',
    default: {
        company: '',
        work: '',
        question: '',
        experience: '',
        isFilled: false,
        block: false,
    },
})

type ISecondHelperTypes = {
    work: string
    question: string
    contents: string
    isFilled: boolean
    counts: number
    block: boolean
}

export const secondHelperState = atom<ISecondHelperTypes>({
    key: 'secondHelper',
    default: {
        work: '',
        question: '',
        contents: '',
        counts: 0,
        isFilled: false,
        block: false,
    },
})

type IThirdHelperTypes = {
    contents: string
    isFilled: boolean
    counts: number
    block: boolean
}

export const thirdHelperState = atom<IThirdHelperTypes>({
    key: 'thirdHelper',
    default: {
        contents: '',
        counts: 0,
        isFilled: false,
        block: false,
    },
})

export const fourthHelperState = atom<IThirdHelperTypes>({
    key: 'fourthHelper',
    default: {
        contents: '',
        counts: 0,
        isFilled: false,
        block: false,
    },
})

type IAnswerTypes = {
    answer: string
    waiting: boolean
    error: boolean
}

export const FirstAnswerState = atom<IAnswerTypes>({
    key: 'firstAnswer',
    default: {
        answer: '',
        waiting: false,
        error: false,
    },
})

export const SecondAnswerState = atom<IAnswerTypes>({
    key: 'secondAnswer',
    default: {
        answer: '',
        waiting: false,
        error: false,
    },
})

export const ThirdAnswerState = atom<IAnswerTypes>({
    key: 'thirdAnswer',
    default: {
        answer: '',
        waiting: false,
        error: false,
    },
})
export const FourthAnswerState = atom<IAnswerTypes>({
    key: 'fourthAnswer',
    default: {
        answer: '',
        waiting: false,
        error: false,
    },
})
