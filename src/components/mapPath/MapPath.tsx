

import Maps from '../map/Map'
import styles from './MapPath.module.css'

export const MapPath = (): JSX.Element => {
    return (
        <div className={styles.wrapper}>
            <Maps />
        </div>
    )
}