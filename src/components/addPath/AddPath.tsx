// import { IAddPath } from './addPath.iterface'
import { useModal } from './../../state/state'
import { Form } from '../form/Form'
import { MapPath } from '../mapPath/MapPath'
import styles from './AddPath.module.css'
import { Button } from '@mui/material'

export const AddPath = (): JSX.Element => {
    const setStatePath = useModal((state) => state.changePath)

    return (
        <div className={styles.addPath}>
            <div className={styles.head}>
                <div className={styles.title}>Add new path</div>
                <Button sx={{ mr: "20px" }} variant="contained" onClick={() => setStatePath()} >x</Button>
            </div>
            <div className={styles.column}>
                <Form />
                <MapPath />
            </div>
        </div>
    )
}