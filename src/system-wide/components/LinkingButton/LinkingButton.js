import React from 'react'
import { Wrapper } from './LinkingButton.styles'
import { BsLink } from 'react-icons/bs'

const LinkingButton = ({ onClick }) => (
    <Wrapper onClick={onClick}>
        <BsLink /> link to story
    </Wrapper>
)

export default LinkingButton