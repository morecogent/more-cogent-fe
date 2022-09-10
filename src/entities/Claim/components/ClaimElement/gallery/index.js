import React from 'react'
import { Arguments, ArgumentsCount, CounterArguments, Percentage, Strong, Wrapper } from './index.styles'

const claimGallery = ({id, name, percentage, supportingArguments, opposingArguments, onClick}) => (
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
        </div>
    </Wrapper>
)

export default claimGallery