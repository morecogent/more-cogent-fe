import React, { useState } from 'react'
import { Container, Label, TextSpan, TextInput, Wrapper, TemporaryConcept } from './TextArea.styles'
import Ctrl from './TextArea.ctrl'
import ClaimTag from '../../entities/Claim/components/ClaimTag'
import { observer } from 'mobx-react'
import ClaimsPopover from '../../entities/Claim/components/ClaimPopover'
import PropTypes from 'prop-types'

const Paragraph = observer(({ items }) => {
    const [ctrl] = useState(new Ctrl({ items }))

    return (
        <TextInput itemsLength={ctrl.items.length}>
            {
                ctrl.items.map(({ type, value, ref }, index) => {
                    switch (type) {
                        case 'TEXT':
                        case 'span':
                            return <TextSpan key={index}
                                             ref={ref}
                                             last={index === ctrl.items.length - 1}
                                             suppressContentEditableWarning
                                             onKeyDown={e => ctrl.onKeyPress(e, index)}
                                             contentEditable placeholder={'Type something here...'}
                                             onBlur={e => ctrl.updateText(e, items[index])}>{value}</TextSpan>
                        case 'claim':
                            return <ClaimTag key={index} id={content} ref={ref}/>
                        case 'CONCEPT':
                            return <TemporaryConcept key={index} ref={ref}>{value.name}</TemporaryConcept>
                    }
                })
            }
            {
                ctrl.popover &&
                <ClaimsPopover
                    filter={ctrl.searchText}
                    items={ctrl.popoverItems}
                    onSelect={item => ctrl.replaceSlash(item)}/>
            }
        </TextInput>
    )
})

const TextAreaContainer = ({ items }) => (
    <Container>
        <Wrapper>
            <Paragraph items={items}/>
        </Wrapper>
        <Label>Type your text below:</Label>
    </Container>
)

TextAreaContainer.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            type: PropTypes.oneOf(['TEXT', 'CONCEPT']),
            value: PropTypes.any
        })
    )
}

export default TextAreaContainer