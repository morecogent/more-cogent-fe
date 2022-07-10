import React from 'react'
import Tag from '../../Tag'
import { Concepts, Wrapper } from './index.styles'

const debateGallery = ({id, name, concepts, onClick}) => (
    <Wrapper onClick={() => onClick(id)}>
        {name}
        <Concepts>
            {
                concepts.map(concept => (
                    <Tag name={concept.name} color={concept.color} />
                ))
            }
        </Concepts>
    </Wrapper>
)

export default debateGallery