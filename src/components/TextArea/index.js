import React, { useState } from 'react'
import { Container, Label, TextSpan, TextInput, Wrapper } from './index.styles'
import Ctrl from './ctrl'
import ClaimTag from '../ClaimTag'
import { observer } from 'mobx-react'
import ClaimsPopover from '../ClaimsPopover'

const Paragraph = observer(({ items }) => {
    const [ctrl] = useState(new Ctrl())

    return (
        <TextInput>
            {
                items.map(({ type, content }, index) => {
                    switch (type) {
                        case 'span':
                            return <TextSpan key={index}
                                              onKeyUp={e => ctrl.onKeyPress(e, index)}
                                              contentEditable placeholder={'Type something here...'}
                                              onBlur={e => ctrl.updateText(e, items[index])}>{content}</TextSpan>
                        case 'claim':
                            return <ClaimTag key={index} id={content}/>
                    }
                })
            }
            {
                ctrl.popover &&
                <ClaimsPopover filter={ctrl.searchText} onSelect={claimId => ctrl.replaceSlash(claimId, items)}/>
            }
        </TextInput>
    )
})

const TextArea = observer(({ items }) => {
    return (
        <div>
            {
                items.map(({ children }, index) => (
                    <Paragraph key={index} items={children}/>
                ))
            }
        </div>
    )
})

const TextAreaContainer = ({ items }) => (
    <Container>
        <Wrapper>
            <TextArea items={items}/>
        </Wrapper>
        <Label>Type your text below:</Label>
    </Container>
)

export default TextAreaContainer