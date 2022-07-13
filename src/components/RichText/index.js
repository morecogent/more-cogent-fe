import React from 'react'
import ClaimTag from '../ClaimTag'
import { observer } from 'mobx-react'

const Paragraph = observer(({ items }) => {
    return items.map(({ type, content }, index) => {
        switch (type) {
            case 'span':
                return <span key={index}>{content}</span>
            case 'claim':
                return <ClaimTag key={index} id={content}/>
        }
    })
})

const RichText = observer(({ items }) => {
    return items.map(({ children }, index) => {
        return <Paragraph key={index} items={children} />
    })
})

export default RichText