import React from 'react'
import { ArgumentsCount, Concepts, Percentage, Wrapper } from './index.styles'

// TODO - those Styled Components are copied and should be cleaned up

const questPropositionGallery = ({id, title, problems, onClick}) => (
    <Wrapper onClick={() => onClick(id)}>
        <Percentage>
            100%
        </Percentage>
        <div>
            <p>{title}</p>
            <ArgumentsCount>
            </ArgumentsCount>
            <Concepts>
                <b>{problems.length}</b>&nbsp;problem(s)
            </Concepts>
        </div>
    </Wrapper>
)

export default questPropositionGallery