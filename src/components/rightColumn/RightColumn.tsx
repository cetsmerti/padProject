import styles from './RightColumn.module.css'
import { PathObjList, usePathMass } from '../../state/state'
import { IRightColumn } from './RightColumn.interface'
import { Distance } from '../distance/Distance'
import { Button } from '@mui/material'
import { MapRightColumn } from './MapRightColumn'
import { db } from '../../firebase'
import { deleteDoc, doc, updateDoc } from 'firebase/firestore/lite'
import { useEffect, useState } from 'react'

export const RightColumn = ({ }: IRightColumn): JSX.Element => {
    const activeMark = usePathMass(state => state)
    const [stateFav, setStateFav] = useState<boolean>()


    useEffect(() => {
        setStateFav(activeMark.active?.favorites)
    }, [activeMark.active])

    const addFav = async (id: string) => {
        const frankDocRef = doc(db, "Mark", id);
        if (stateFav) {
            await updateDoc(frankDocRef, {
                favorites: false
            })
            activeMark.updateMass()
            setStateFav(false)
        } else {
            await updateDoc(frankDocRef, {
                favorites: true
            })
            activeMark.updateMass()
            setStateFav(true)
        }
    }

    const deletPath = async (id: string) => {
        await deleteDoc(doc(db, "Mark", id));
        activeMark.updateMass()
    }

    return (
        <div onClick={() => console.log(activeMark.active)} className={styles.wrapper}>
            {activeMark.active &&
                <>
                    <div>
                        <div className={styles.head}>
                            <h2 className={styles.title} >{activeMark.active.title}</h2>
                            <Distance>{activeMark.active.distance}</Distance>
                        </div>
                    </div>
                    <span className={styles.fullDesc} >
                        {activeMark.active.fullDescription}
                    </span>
                    <MapRightColumn />
                    <div className={styles.buttonArr}>
                        <Button onClick={() => addFav(activeMark.active.id)} >Add to fovorites</Button>
                        <Button onClick={() => deletPath(activeMark.active.id)} color='error'>remove</Button>
                    </div>
                </>}
        </div>
    )
}

