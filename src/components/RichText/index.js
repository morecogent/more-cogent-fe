import React from 'react'
import ClaimTag from '../ClaimTag'

const RichText = ({ text }) => {
    return text.map(({type, content}) => {
        switch (type){
            case 'text':
                return <span>{content}</span>
            case 'claim':
                return <ClaimTag id={content}/>
        }
    })
}

export default RichText