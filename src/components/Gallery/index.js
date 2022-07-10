import React from 'react'
import { Wrapper } from './index.styles'

const Gallery = ({items, Component, onClick}) => (
    <Wrapper>
        {
            items.map(item => (
                <Component key={item.id} {...item} onClick={onClick} />
            ))
        }
    </Wrapper>
)

export default Gallery