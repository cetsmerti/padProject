import { Button } from '@mui/material'

import styles from './Header.module.css'
import { IHeader } from './Header.interface'
import { useModal } from '../../state/state'
export const Header = ({ }: IHeader): JSX.Element => {
    const setStatePath = useModal((state) => state.changePath)
    return (
        <header className={styles.header}>
            <div className={styles.logo}>Test Project for VReal Soft </div>
            <Button variant="contained" onClick={() => setStatePath()}>Add patch</Button>
        </header>
    )
}