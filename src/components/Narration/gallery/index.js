import React from 'react'
import Tag from '../../Tag'
import RichText from '../../RichText'
import { Concepts, Wrapper } from './index.styles'

const narrationGallery = ({id, text, concepts, onClick}) => (
    <Wrapper onClick={() => onClick(id)}>
        <RichText items={text} />
        <Concepts>
            {
                concepts.map(concept => (
                    <Tag name={concept.name} color={concept.color} />
                ))
            }
        </Concepts>
    </Wrapper>
)

export default narrationGallery