import React from 'react'
import { ArgumentsCount, Concepts, Percentage, Wrapper } from './index.styles'

// TODO - those Styled Components are copied and should be cleaned up

const claimGallery = ({id, title, propositions, onClick}) => (
    <Wrapper onClick={() => onClick(id)}>
        <div>
            <p>{title}</p>
            <ArgumentsCount>
            </ArgumentsCount>
            <Concepts>
                <b>{propositions.length}</b>&nbsp;proposition(s)
            </Concepts>
        </div>
    </Wrapper>
)

export default claimGallery