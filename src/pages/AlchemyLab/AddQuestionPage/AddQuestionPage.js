import React, { useState } from 'react'
import { observer } from 'mobx-react'
import Ctrl from './AddQuestionPage.ctrl'
import { Wrapper } from './AddQuestionPage.styles'
import Button from '../../../components/Button'
import TextArea from '../../../components/TextArea'
import { useNavigate } from 'react-router-dom'

export default observer(() => {
        const navigate = useNavigate()
        const [ctrl] = useState(new Ctrl(navigate))

        return (
            <Wrapper>
                <h3>Your question</h3>

                <TextArea narration={ctrl.newNarration} items={ctrl.newNarration.text}/>

                <Button name="Ask your question" color="#7749F8" onClick={ctrl.addNarration}/>
            </Wrapper>
        )
    }
)