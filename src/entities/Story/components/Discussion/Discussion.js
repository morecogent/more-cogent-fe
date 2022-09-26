import React from 'react'
import {
    AuthorName,
    Discussion,
    Message,
    MessageDate
} from './Discussion.styles'

const discussion = ({messages}) => (
    <Discussion>
        <h5>Discussion</h5>
        {
            messages.map(message => (
                <Message>
                    <MessageDate>
                        {message.date.toDateString() + ' '}
                    </MessageDate>
                    <AuthorName>{message.author.name}: </AuthorName>
                    {message.text}
                </Message>
            ))
        }
    </Discussion>
)

export default discussion