import styles from './Container.module.scss'
import React from 'react'
import Image, {StaticImageData} from 'next/image'

const {container, parameters, imageContainer, infoContainer} = styles

interface IContainerPropsType {
    name: string
    image: StaticImageData
    length: string
    width: string
    height: string
}

const Container = ({name, image, length, width, height}: IContainerPropsType) => {
    return (
        <div className={container}>
            <div className={imageContainer}>
                <Image src={image} alt=''/>
            </div>
            <div className={infoContainer}>
                <h4>{name}</h4>

                <div className={parameters}>
                    <div>Длина <p>{length} м</p></div>
                    <div>Ширина <p>{width} м</p></div>
                    <div>Высота <p>{height} м</p></div>
                </div>
            </div>

        </div>
    )
}

export default Container
