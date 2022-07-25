import React, { useState } from 'react'
import { observer } from 'mobx-react'
import Ctrl from './NarrationPage.ctrl'
import { Wrapper } from './NarrationPage.styles'
import { useParams } from 'react-router-dom'
import { Item } from './NarrationPage.styles'
import Button from '../../components/Button'
import RichText from '../../components/RichText'
import TextArea from '../../components/TextArea'

export default observer(() => {
        const { id } = useParams()
        const [ctrl] = useState(new Ctrl(id))

        return (
            <Wrapper>
                <h3>Question</h3>

                <div>
                    <RichText items={ctrl.narration.text}/>
                </div>

                {
                    ctrl.narrationResponses.map((narration, index) => (
                        <Item key={index}>
                            <RichText items={narration.text}/>
                        </Item>
                    ))
                }


                <br/><br/>
                <h5>Reply</h5>
                <TextArea items={ctrl.newNarration.text} />

                <Button name="Reply" color="#7749F8" onClick={ctrl.addNarration}/>
            </Wrapper>
        )
    }
)