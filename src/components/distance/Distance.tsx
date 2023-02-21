import { RightOutlined } from '@ant-design/icons';
import { IDistance } from './Distance.interface';
import styles from './Distance.module.css'


export const Distance = ({ children, arow }: IDistance) => {
    return (
        <div className={styles.distance}>{children} {arow && <RightOutlined className={styles.arow} />}</div>
    )
}