import styles from './FeatureCard.module.scss'
import {IFeaturePropsType} from '@/infoData/featuresData'
import cn from 'classnames'
import Image from 'next/image'

const {card, overlay, circle} = styles
const FeatureCard = ({name, icon, description, styleClass}: IFeaturePropsType) => {

    return (
        <span className={cn(card, styleClass)}>
            <div className={overlay}></div>
            <div className={circle}><Image src={icon} alt=""/></div>

            <p>{name}</p>
            <span>{description}</span>
        </span>
    )
}

export default FeatureCard
