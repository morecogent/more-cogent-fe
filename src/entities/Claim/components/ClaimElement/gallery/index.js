import React from 'react'
import Tag from '../../../../../components/Tag'
import { Arguments, ArgumentsCount, Concepts, CounterArguments, Percentage, Strong, Wrapper } from './index.styles'

const claimGallery = ({id, name, concepts, percentage, supportingArguments, opposingArguments, onClick}) => (
    <Wrapper onClick={() => onClick(id)}>
        <Percentage>
            {percentage}%
        </Percentage>
        <div>
            <p>{name}</p>
            <ArgumentsCount>
                <Arguments><Strong>{supportingArguments.length}</Strong> arguments</Arguments>
                <CounterArguments><Strong>{opposingArguments.length}</Strong> counter-arguments</CounterArguments>
            </ArgumentsCount>
            <Concepts>
                {
                    concepts.map(concept => (
                        <Tag name={concept.name} color={concept.color} />
                    ))
                }
            </Concepts>
        </div>
    </Wrapper>
)

export default claimGallery