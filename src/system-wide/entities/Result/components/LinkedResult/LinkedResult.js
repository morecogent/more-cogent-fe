import React from 'react'
import { Wrapper, RemoveBtn, RemoveDefaultIcon, RemoveActiveIcon } from './LinkedResult.styles'
import { BsXCircleFill, BsXCircle } from 'react-icons/bs'

const linkedResult = ({ result, onClick, onRemove }) => (
    <Wrapper>
        <div onClick={() => onClick(result.id)}>
            {result.title}
        </div>
        <RemoveBtn onClick={() => onRemove(result.id)}>
            <RemoveDefaultIcon><BsXCircle/></RemoveDefaultIcon>
            <RemoveActiveIcon><BsXCircleFill/></RemoveActiveIcon>
        </RemoveBtn>
    </Wrapper>
)

export default linkedResult