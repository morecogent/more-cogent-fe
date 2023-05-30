import React from 'react'
import { Item, Wrapper } from './ClaimPopover.styles'
import Ctrl from './ClaimPopover.ctrl'
import { observer } from 'mobx-react'

const ClaimsPopover = ({items, onSelect, filter}) => {
    const ctrl = new Ctrl(items, filter)

    return (
        <Wrapper>
            {
                ctrl.items.map(item => (
                    <Item onClick={() => onSelect(item)}>
                        {item.name}
                    </Item>
                ))
            }
        </Wrapper>
    )
}

export default observer(ClaimsPopover)