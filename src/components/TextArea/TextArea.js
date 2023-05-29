import React, { useState } from 'react'
import { Container, Label, TextSpan, TextInput, Wrapper } from './TextArea.styles'
import Ctrl from './TextArea.ctrl'
import ClaimTag from '../../entities/Claim/components/ClaimTag'
import { observer } from 'mobx-react'
import ClaimsPopover from '../../entities/Claim/components/ClaimPopover'
import PropTypes from 'prop-types'

const Paragraph = observer(({ items, narration }) => {
    const [ctrl] = useState(new Ctrl())

    return (
        <TextInput>
            {
                items.map(({ type, content }, index) => {
                    switch (type) {
                        case 'span':
                            return <TextSpan key={index}
                                              onKeyUp={e => ctrl.onKeyPress(e, index, narration)}
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

const TextArea = observer(({ narration, items }) => {
    return (
        <div>
            {
                items.map(({ children }, index) => (
                    <Paragraph key={index} items={children} narration={narration}/>
                ))
            }
        </div>
    )
})

const TextAreaContainer = ({ narration, items }) => (
    <Container>
        <Wrapper>
            <TextArea narration={narration} items={items}/>
        </Wrapper>
        <Label>Type your text below:</Label>
    </Container>
)

TextAreaContainer.propTypes = {
    items: PropTypes.array,
    narration: PropTypes.object,
}

export default TextAreaContainer