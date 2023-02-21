import { useNewPath } from '../../state/state'
import styles from './MapLength.module.css'
import { ReactSVG } from 'react-svg'
import map from './map.svg'
export const MapLength = (): JSX.Element => {
    const distance = useNewPath(state => state.distance)

    return (
        <div className={styles.distance}><ReactSVG src={map} className={styles.map} /><span className={styles.text}>Length:{distance}</span></div>
    )
}