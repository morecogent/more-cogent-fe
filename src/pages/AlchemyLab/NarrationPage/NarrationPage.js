import React, { useState } from 'react'
import { observer } from 'mobx-react'
import Ctrl from './NarrationPage.ctrl'
import {
    ProblemBody,
    Title,
    Wrapper,
    Author,
    AuthorName,
    Problems
} from './NarrationPage.styles'
import { useParams, useNavigate } from 'react-router-dom'
import { Item } from './NarrationPage.styles'
import Button from '../../../components/Button'
import RichText from '../../../components/RichText'
import TextArea from '../../../components/TextArea/TextArea'
import { Accordion } from 'react-bootstrap'
import LinkedQuest from '../../../entities/Quest/components/LinkedQuest'
import Discussion from '../../../entities/Story/components/Discussion'
import Link from '../../../components/Link'
import LinkedResult from '../../../entities/Result/components/LinkedResult'

export default observer(() => {
        const { id } = useParams()
        const navigate = useNavigate()
        const [ctrl] = useState(new Ctrl(id))

        return (
            <Wrapper>

                <ProblemBody>
                    <Title>{ctrl.narration.title}</Title>

                    <h5>Story</h5>
                    <div>
                        <RichText items={ctrl.narration.text}/>
                    </div>


                    <h5>Problem(s)</h5>
                    <Problems>
                        {
                            ctrl.narration.linkedProblems.map(el => (
                                <LinkedResult result={el.problem}
                                              onRemove={problemId => ctrl.narration.unlinkProblem(problemId)}/>
                            ))
                        }
                    </Problems>
                    <Link title={`Add a problem`} onClick={() => navigate(`/link-problems?linking=${ctrl.narration.id}`)}/>

                    <br/>
                    <h5>Author's choice(s)</h5>
                    {
                        ctrl.narration.linkedQuests.map(item => (
                            <LinkedQuest quest={item.quest}
                                         onQuestClick={questId => navigate(`/quest/${questId}`)}
                                         onPropositionClick={propositionId => navigate(`/quest/${item.quest.id}/proposition/${propositionId}`)}
                                         onLinkPropositionClick={questId => navigate(`/quest/${questId}?linking=${ctrl.narration.id}`)}
                                         proposition={item.proposition}
                            />
                        ))
                    }
                    <Link title={`Add a choice`} onClick={() => navigate(`/philosophy-lab?linking=${ctrl.narration.id}`)}/>


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
                    <Discussion messages={ctrl.narration.discussion}/>

                    <Author>
                        <AuthorName>{ctrl.narration.author.name}</AuthorName>
                        <div>
                            asked {ctrl.narration.date.toDateString()}
                        </div>
                    </Author>

                </ProblemBody>

                <h5>Advices</h5>
                {
                    ctrl.narration.advices.map((advice, index) => (
                        <Item key={index}>
                            <RichText items={advice.text}/>
                            <h5>Additional context</h5>
                            <Discussion messages={advice.discussion}/>
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