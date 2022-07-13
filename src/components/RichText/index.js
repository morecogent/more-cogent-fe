import React from 'react'
import ClaimTag from '../ClaimTag'
import { observer } from 'mobx-react'

const RichText = observer(({ items }) => {
    return items.map(({ type, content, children }, index) => {
        if (children.length) return <RichText key={index} items={children} />

        switch (type) {
            case 'paragraph':
                return <div key={index}>{content}</div>
            case 'span':
                return <span key={index}>{content}</span>
            case 'claim':
                return <ClaimTag key={index} id={content}/>
        }
    })
})

export default RichText