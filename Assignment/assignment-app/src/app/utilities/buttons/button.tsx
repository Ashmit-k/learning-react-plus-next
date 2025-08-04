import React from 'react'

type ButtonProps = {
    buttonText: string
}

const ButtonClass: React.FC<ButtonProps> = ({ buttonText }) => {
    return (
        <button className="text-white px-4 py-2 rounded">
            {buttonText}
        </button>
    )
}

export default ButtonClass
