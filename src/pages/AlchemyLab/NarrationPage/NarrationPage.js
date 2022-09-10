import React, { useState } from 'react'
import { observer } from 'mobx-react'
import Ctrl from './NarrationPage.ctrl'
import { ProblemBody, Title, Wrapper } from './NarrationPage.styles'
import { useParams, useNavigate } from 'react-router-dom'
import { Item } from './NarrationPage.styles'
import Button from '../../../components/Button'
import RichText from '../../../components/RichText'
import TextArea from '../../../components/TextArea'
import List from '../../../components/List'
import Claim from '../../../components/Claim/list'

export default observer(() => {
        const { id } = useParams()
        const navigate = useNavigate()
        const [ctrl] = useState(new Ctrl(id))

        return (
            <Wrapper>

                <ProblemBody>
                    <Title>{ctrl.narration.title}</Title>

                    <div>
                        <RichText items={ctrl.narration.text}/>
                    </div>

                    <h5>Linked debates</h5>

                    <h5>Additional context</h5>
                    {
                        ctrl.narration.beliefs.map(belief => (
                            <div>
                                <p>Question: {belief.question}</p>
                                <p>Answer: {belief.answer}</p>
                                <List items={ctrl.getLinkedClaims(belief.linked)}
                                      onClick={id => navigate(`/claim/${id}`)}
                                      Component={Claim}/>
                            </div>
                        ))
                    }

                    <h5>Discussion</h5>
                </ProblemBody>

                <h5>Advices</h5>
                {
                    ctrl.narrationResponses.map((narration, index) => (
                        <Item key={index}>
                            <RichText items={narration.text}/>
                            <h5>Additional context</h5>
                            <h5>Discussion</h5>
                        </Item>
                    ))
                }

                <br/><br/>
                <h5>Reply</h5>
                <TextArea items={ctrl.newNarration.text}/>

                <Button name="Reply" color="#7749F8" onClick={ctrl.addNarration}/>
            </Wrapper>
        )
    }
)