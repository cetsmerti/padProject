import { collection, getDocs } from 'firebase/firestore/lite'
import { useDeferredValue } from 'react'
import { create } from 'zustand'
import { db } from '../firebase'

interface IModal {
    OpenPath: boolean
    changePath: () => void
}
interface IObjectPath {
    title: string
    shortDescription: string
    fullDescription: string
    distance: string
    directionsResponse: unknown,
    markMass: markInfo[]
    dopMark: IDopMark[]
    id?: string
}
export interface PathObjList extends IObjectPath {
    id: string
    favorites: boolean,
}

interface IUsePath extends IObjectPath {

    setTitle: (title: string) => void
    setShortDescription: (short: string) => void
    setFullDescription: (descr: string) => void

    setDistance: (distance: string) => void
    setDirectionsResponse: (distance: unknown) => void
    setMarkMass: (markInfo: markInfo) => void
    setDopMark: (dopMark: IDopMark) => void

    pathDone: () => void
}
interface markInfo {
    lat: number,
    lng: number
}
interface IDopMark {
    location: {
        lat: number,
        lng: number
    }
}

export const useModal = create<IModal>((set) => ({
    OpenPath: false,
    changePath: () => set((state) => ({ OpenPath: !state.OpenPath }))
}))

export const useNewPath = create<IUsePath>((set) => ({
    title: '',
    shortDescription: '',
    fullDescription: '',
    setTitle: (title: string) => set((state) => ({
        ...state,
        title: title
    })),
    setShortDescription: (short: string) => set((state) => ({
        ...state,
        shortDescription: short
    })),
    setFullDescription: (descr: string) => set((state) => ({
        ...state,
        fullDescription: descr
    })),
    distance: '',
    directionsResponse: '',
    markMass: [],
    dopMark: [],
    setDistance: (distance: string) => set((state) => ({
        ...state,
        distance: distance

    })),
    setDirectionsResponse: (directionsResponse: unknown) => set((state) => ({
        ...state,
        directionsResponse: directionsResponse

    })),
    setMarkMass: (markInfo: markInfo) => set((state) => ({
        ...state,
        markMass: [...state.markMass, markInfo]

    })),
    setDopMark: (dopMark: IDopMark) => set((state) => ({
        ...state,
        dopMark: [...state.dopMark, dopMark]

    })),
    pathDone: () => set(state => ({
        complit: null,
        favorites: false,
        distance: '',
        directionsResponse: '',
        markMass: [],
        dopMark: [],
        title: '',
        shortDescription: '',
        fullDescription: '',
    }))

}));

interface IUsePathMass {
    massPath: PathObjList[]
    filtMassPath: PathObjList[]
    updateMass: () => void
    setActiv: (activeMark: PathObjList) => void
    active?: PathObjList,
    seach: (fil: PathObjList[]) => void
}

export const usePathMass = create<IUsePathMass>((set) => ({
    massPath: [],
    filtMassPath: [],
    updateMass: async () => {
        const docSnap = await getDocs(collection(db, 'Mark')).catch((e: Error) => console.log(e.message))
        const data: PathObjList[] = []
        docSnap?.forEach((doc) => {
            const dat = doc.data()
            data.push(dat)
        })
        data.sort((item, item2) => {
            if (item.favorites) {
                return -1
            } else {
                return 1
            }
        })
        set(state => ({ ...state, massPath: data, filtMassPath: data }))
    },
    setActiv: (activeMark: PathObjList) => set((state) => ({
        ...state,
        active: activeMark
    })),
    seach: (fil: PathObjList[]) => set((state) => {
        return {
            ...state,
            filtMassPath: fil
        }
    })
}))