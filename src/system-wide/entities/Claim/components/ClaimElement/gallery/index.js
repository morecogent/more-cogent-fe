import React from 'react'
import { Arguments, ArgumentsCount, CounterArguments, Percentage, Strong, Wrapper } from './index.styles'
import ClaimTitle from '../../ClaimTitle'

const claimGallery = ({id, name, nameArr, percentage, supportingArguments, opposingArguments, onClick}) => (
    <Wrapper onClick={() => onClick(id)}>
        <Percentage>
            {percentage}%
        </Percentage>
        <div>
            <p>
                {
                    nameArr.length > 0 ? <ClaimTitle title={nameArr} /> : name
                }
            </p>
            <ArgumentsCount>
                <Arguments><Strong>{supportingArguments.length}</Strong> arguments</Arguments>
                <CounterArguments><Strong>{opposingArguments.length}</Strong> counter-arguments</CounterArguments>
            </ArgumentsCount>
        </div>
    </Wrapper>
)

export default claimGallery