import React, { useState } from 'react'
import { observer } from 'mobx-react'
import Ctrl from './ArticlePage.ctrl'
import { Wrapper } from '../../../App.styles'

export default observer(() => {
        const [ctrl] = useState(new Ctrl())

        return (
            <Wrapper>
                <h1>Article: {ctrl.article.title}</h1>
                <br/>
                {
                    ctrl.article.children.map(p => (
                        <p>{
                            p.map(text => (
                                <span>{text.text.content}</span>
                            ))
                        }</p>
                    ))
                }
            </Wrapper>
        )
    }
)