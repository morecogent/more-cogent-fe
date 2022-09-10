import React from 'react'
import Tag from '../../../../../components/Tag'
import { Concepts, Name, Percentage, Wrapper } from './index.styles'

const claimList = ({ id, name, concepts, percentage, onClick }) => (
    <Wrapper onClick={() => onClick(id)}>
        <Percentage>{percentage}%</Percentage>
        <Name>
            {name}
        </Name>
        {
            !!concepts.length &&
            <Concepts>
                {
                    concepts.map(concept => (
                        <Tag name={concept.name} color={concept.color}/>
                    ))
                }
            </Concepts>
        }
    </Wrapper>
)

export default claimList