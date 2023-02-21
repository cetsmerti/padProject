import { TextField } from '@mui/material';
import { useNewPath } from '../../state/state';
import { ITextInputFullDes } from './TextInputFullDes.interface';
import styles from './TextInputFullDes.module.css'

export const TextInputFullDes = ({ }: ITextInputFullDes): JSX.Element => {
    const state = useNewPath(state => state)
    return (
        <div className={styles.wareper}>
            <div>Full description</div>
            <TextField
                sx={{
                    height: '89%',
                    overflow: 'scroll'
                }}
                maxRows={10}
                fullWidth
                multiline
                className={styles.input}
                id="filled-hidden-label-normal"
                onChange={(e) => state.setFullDescription(e.target.value)}
                value={state.fullDescription}
                placeholder='Text Full description' />
        </div>
    )
}