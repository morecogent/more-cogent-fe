import React from 'react'
import { Item, Items, NewItemContext, NewItemName, Wrapper } from './ClaimPopover.styles'
import Ctrl from './ClaimPopover.ctrl'
import { observer } from 'mobx-react'
import {Button, ButtonGroup} from 'react-bootstrap'

const ClaimsPopover = ({items, onSelect, filter}) => {
    const ctrl = new Ctrl(items, filter)

    return (
        <Wrapper>
            <Items>
                {
                    ctrl.items.map(item => (
                        <Item
                            key={item.id}
                            onClick={() => onSelect(item)}>
                            {item.name}
                        </Item>
                    ))
                }
            </Items>
            <ButtonGroup>
                <Button variant='danger' disabled={ctrl.addingDisabled}>
                    <NewItemContext>
                        Add <NewItemName>"{filter}"</NewItemName> as a <u>Concept</u>
                    </NewItemContext>
                </Button>
                <Button variant='warning' disabled={ctrl.addingDisabled}>
                    <NewItemContext>
                        Add <NewItemName>"{filter}"</NewItemName> as a <u>Composite</u>
                    </NewItemContext>
                </Button>
            </ButtonGroup>
        </Wrapper>
    )
}

export default observer(ClaimsPopover)