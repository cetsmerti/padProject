import { OutlinedInput } from '@mui/material';
import { useNewPath } from '../../state/state';
import { ITextInputTitle } from './TextInputTitle.interface';
import styles from './TextInputTitle.module.css'

export const TextInputTitle = ({ }: ITextInputTitle): JSX.Element => {
    const state = useNewPath(state => state)
    return (
        <div className={styles.wrapper}>
            <div>Title</div>
            <OutlinedInput
                id="filled-hidden-label-normal"
                fullWidth onChange={(e) => state.setTitle(e.target.value)} value={state.title} placeholder='Text Input' type="text" />
        </div>
    )
}