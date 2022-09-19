import React, { useState } from 'react'
import { observer } from 'mobx-react'
import Ctrl from './NarrationPage.ctrl'
import { ProblemBody, Title, Wrapper, Author, AuthorName } from './NarrationPage.styles'
import { useParams, useNavigate } from 'react-router-dom'
import { Item } from './NarrationPage.styles'
import Button from '../../../components/Button'
import RichText from '../../../components/RichText'
import TextArea from '../../../components/TextArea'
import Gallery from '../../../components/Gallery'
import QuestElement from '../../../entities/Quest/components/QuestElement/gallery'
import { Accordion } from 'react-bootstrap'
import LinkedQuest from '../../../entities/Quest/components/LinkedQuest'

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


                    <h5>Linked quests</h5>
                    {
                        ctrl.narration.linkedQuests.map(item => (
                            <LinkedQuest quest={item.quest}
                                         onQuestClick={questId => navigate(`/quest/${questId}`)}
                                         onPropositionClick={propositionId => navigate(`/quest/${item.quest.id}/proposition/${propositionId}`)}
                                         proposition={item.proposition}
                            />
                        ))
                    }

                    <br/>
                    <h5>Additional context</h5>
                    <br/>
                    <Accordion defaultActiveKey={0}>
                        {
                            ctrl.narration.beliefs.map(belief => (
                                <Accordion.Item eventKey={0}>
                                    <Accordion.Header>
                                        {belief.question}
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        {belief.answer}
                                    </Accordion.Body>
                                </Accordion.Item>
                            ))
                        }
                    </Accordion>

                    <br/>
                    <h5>Discussion</h5>

                    <Author>
                        <AuthorName>{ctrl.narration.author.name}</AuthorName>
                        <div>
                            asked {ctrl.narration.date.toDateString()}
                        </div>
                    </Author>

                </ProblemBody>

                <h5>Advices</h5>
                {
                    ctrl.narration.advices.map((narration, index) => (
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