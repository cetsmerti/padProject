import { TextField } from '@mui/material';
import { useNewPath } from '../../state/state';
import { ITextInputDes } from './TextInputDes.interface';
import styles from './TextInputDes.module.css'

export const TextInputDes = ({ }: ITextInputDes): JSX.Element => {
    const state = useNewPath(state => state)


    const limitText = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (e.target.value.length <= 160) {
            state.setShortDescription(e.target.value)
        }
    }

    return (
        <div className={styles.wrapper}>
            <div>Short description</div>
            <TextField
                minRows='4'
                sx={{
                    height: '65%',
                    overflow: 'scroll'
                }}
                fullWidth
                multiline onChange={(e) => limitText(e)} value={state.shortDescription} placeholder='Text description' />
            <div className={styles.limitText} >Limit {state.shortDescription.length} of 160</div>
        </div>
    )
}