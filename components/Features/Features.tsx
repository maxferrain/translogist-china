import styles from './Features.module.scss'

import FeatureCard from './FeatureCard/FeatureCard'
import {featuresData, IFeaturePropsType} from '@/infoData/featuresData'
import {Button} from 'antd'
import React from 'react'
import cn from 'classnames'

const {questionsBlock, title, questionsContainer} = styles
const Features = () => {
    return (
        <div className={questionsBlock}>
        <div className={cn('container', questionsContainer)} id="features">
                <h2 className={title}>Всю работу возьмем <span>на себя</span></h2>

                <div>
                    {featuresData.map(({name, description, id, icon, styleClass}: IFeaturePropsType) =>
                        <FeatureCard key={id} name={name} description={description} icon={icon} styleClass={styleClass}/>)}
                </div>

                <Button href="#contactUs" type="primary">
                    Оставить заявку
                </Button>

            </div>
        </div>
    )
}

export default Features
