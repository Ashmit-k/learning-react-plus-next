import React from 'react'
import Styles from '../../Styles/utils.module.css'

type ButtonProps = {
    buttonText: string
}

const ButtonClass: React.FC<ButtonProps> = ({ buttonText }) => {
    return (
        <button className={`text-white ${Styles.commonBtn}`} >
            {buttonText}
        </button>
    )
}

export default ButtonClass
