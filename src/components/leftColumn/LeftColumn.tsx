import { LiElement } from '../liElement/LiElement'
import { Seach } from '../search/Search'
import { ILeftColumn } from './LeftColumn.interface'

import styles from './LeftColumn.module.css'

export const LeftColumn = ({ }: ILeftColumn): JSX.Element => {


    return (
        <div className={styles.wrapper}>
            <Seach />
            <LiElement />
        </div>
    )
}