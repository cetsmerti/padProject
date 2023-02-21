
import { Alert } from '@mui/material'
import { initializeApp } from 'firebase/app'
import { collection, doc, getFirestore, setDoc } from 'firebase/firestore/lite'
import { nanoid } from 'nanoid'
import { useEffect, useState } from 'react'
import { ReactSVG } from 'react-svg'
import { db, app } from '../../firebase'
import { useModal, useNewPath, usePathMass } from '../../state/state'
import { MapLength } from '../mapLength/MapLength'
import { TextInputDes } from '../textInputDes/TextInputDes'
import { TextInputTitle } from '../textInputTitle/TextInputTitle'
import { TextInputFullDes } from '../textInputTitleFullDes/TextInputFullDes'
import check from './check.svg'
import styles from './Form.module.css'

export const Form = (): JSX.Element => {
    const [walid, setWalid] = useState<boolean | null>(null)
    const path = useNewPath(state => state)
    const modal = useModal(state => state)
    const pathMass = usePathMass(state => state)
    const donePath = async () => {
        if ((path.distance && path.title && path.shortDescription && path.fullDescription) === '') {
            setWalid(false)
        } else {
            setWalid(true)
            path.pathDone()
            await sandMasage()
            modal.changePath()
            pathMass.updateMass()
        }

    }

    const sandMasage = async () => {
        const newObjPush = JSON.parse(JSON.stringify(path))
        newObjPush.id = nanoid()
        await setDoc(doc(db, "Mark", newObjPush.id), newObjPush).then(e => console.log(e)).catch((e: Error) => console.log(e.message))
    }


    return (
        <div className={styles.form}>
            <div className={styles.textSector}>
                <TextInputTitle />
                <TextInputDes />
                <TextInputFullDes />
            </div>
            <div className={styles.wrapper}>
                {walid === false ? <Alert severity='error'>Пожалйста заполните все данные</Alert> : <MapLength />}
                <button onClick={() => donePath()} className={styles.button}> <ReactSVG className={styles.check} src={check} /> Add path</button>
            </div>
        </div>
    )
}