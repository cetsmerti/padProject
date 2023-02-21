import { MonitorOutlined } from '@ant-design/icons'
import { OutlinedInput, TextField } from '@mui/material'
import { useDeferredValue, useEffect, useState } from 'react'
import { usePathMass } from '../../state/state'
import styles from './Search.module.css'

export const Seach = (): JSX.Element => {
    const state = usePathMass(state => state)
    const [input, setinput] = useState('')
    const val = useDeferredValue(input)

    useEffect(() => {
        const filtmass = state.massPath.filter(({ title, fullDescription }) => {
            if (title.toLowerCase().includes(input.toLowerCase())) {
                return title.toLowerCase().includes(input.toLowerCase())
            } else {
                return fullDescription.toLowerCase().includes(input.toLowerCase())
            }
        })
        state.seach(filtmass)
    }, [val])
    return (
        <div onClick={() => console.log(input)} className={styles.wrapper} >
            <OutlinedInput
                id="filled-hidden-label-normal"
                fullWidth
                placeholder="Search"
                value={input}
                onChange={(e) => setinput(e.target.value)}
            />
            <MonitorOutlined className={styles.icon} />
        </div>
    )
}