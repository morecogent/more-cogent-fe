import React  from 'react'
import { Element } from './ClaimTitle.styles'

const ClaimTitle = ({ title }) => {

    return (
        <div>
            {
                title.map(element => (
                    <span>
                        <Element key={element.text} func={element.func}>{element.text}</Element>
                        {' '}
                    </span>
                ))
            }
        </div>
    )
}

export default ClaimTitle