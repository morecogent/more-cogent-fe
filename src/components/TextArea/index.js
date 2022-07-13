import React, { useState } from 'react'
import { Popover, TextInput, Wrapper } from './index.styles'
import Ctrl from './ctrl'
import ClaimTag from '../ClaimTag'
import { observer } from 'mobx-react'
import ClaimsPopover from '../ClaimsPopover'



const TextArea = observer(({ items }) => {
    const [ctrl] = useState(new Ctrl())

    return (
        <div>
            {
                items.map(({ type, content, children }, index) => {
                    if (children.length) return <TextArea key={index} items={children}/>

                    // return <TextInput key={index} block contentEditable
                    //                   onBlur={e => ctrl.updateText(e, index)}>{content}</TextInput>

                    // return <textarea rows="10"
                    //                  value={content}
                    //                  onChange={e => ctrl.updateText(e, index)}
                    //                  placeholder={'Type something here...'} />

                    switch (type) {
                        case 'paragraph':
                            return <TextInput key={index}
                                              onKeyUp={e => ctrl.onKeyPress(e)}
                                              block contentEditable placeholder={'Type something here...'}
                                              onBlur={e => ctrl.updateText(e, items[index])}>{content}</TextInput>
                        case 'span':
                            return <TextInput key={index}
                                              onKeyUp={e => ctrl.onKeyPress(e)}
                                              contentEditable placeholder={'Type something here...'}
                                              onBlur={e => ctrl.updateText(e, items[index])}>{content}</TextInput>
                        case 'claim':
                            return <ClaimTag key={index} id={content}/>
                    }
                })
            }
            {
                ctrl.popover && <ClaimsPopover filter={ctrl.searchText}/>
            }
        </div>
    )
})

const TextAreaContainer = ({ items }) => (
    <Wrapper>
        <TextArea items={items}/>
    </Wrapper>
)

export default TextAreaContainer