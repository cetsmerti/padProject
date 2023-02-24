
import { useEffect, useState } from 'react'
import { ReactSVG } from 'react-svg'
import { ILiElement } from './LiElement.interface'
// @ts-ignore
import mapIcon from './map.svg'
import styles from './LiElement.module.css'
import { usePathMass, PathObjList } from '../../state/state'
import { Distance } from '../distance/Distance'
import { StarFilled, StarOutlined, StarTwoTone } from '@ant-design/icons'

export const LiElement = ({ }: ILiElement): JSX.Element => {
    const [stateActiveId, setStateActiveId] = useState('')
    const pathMass = usePathMass(state => state)
    useEffect(() => {
        pathMass.updateMass()
    }, [])
    const clickEvent = (item: PathObjList) => {
        pathMass.updateMass()
        pathMass.setActiv(item)
        setStateActiveId(item.id as string)
    }

    return (
        <ul>
            {pathMass.massPath.length ? pathMass.filtMassPath.map((item) => {
                const { distance, title, shortDescription, id } = item
                return (
                    <li onClick={() => clickEvent(item)} className={item.id === stateActiveId ? styles.activeLi : styles.li} key={id}>
                        <ReactSVG className={styles.svg} src={mapIcon} />
                        <div className={styles.texts}>
                            <h3 className={styles.title}> {item.favorites && <StarTwoTone />}{title}</h3>
                            <div className={styles.descr}>{shortDescription}</div>
                        </div>
                        <Distance arow={true}>{distance}</Distance>
                    </li>
                )
            }) : <span>Данных,нет</span>}
        </ul>
    )
}
