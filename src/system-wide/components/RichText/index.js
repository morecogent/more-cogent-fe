import React from 'react'
import ClaimTag from '../../entities/Claim/components/ClaimTag'
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
        return <p><Paragraph key={index} items={children} /></p>
    })
})

export default RichText