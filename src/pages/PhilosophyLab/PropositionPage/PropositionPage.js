import React, { useState } from 'react'
import { observer } from 'mobx-react'
import Ctrl from './PropositionPage.ctrl'
import { Wrapper } from '../../../App.styles'
import { useNavigate, useParams } from 'react-router-dom'
import StoriesList from '../../../entities/Story/components/StoryElement/list'
import ClaimsElement from '../../../entities/Claim/components/ClaimElement/gallery'
import List from '../../../components/List'
import Gallery from '../../../components/Gallery'
import { Problem, ProblemNumber, ProblemTitle, Subtitle, Title } from './PropositionPage.styles'

export default observer(() => {
        const { questId, propositionId } = useParams()
        const navigate = useNavigate()
        const [ctrl] = useState(new Ctrl(questId, propositionId))

        return (
            <Wrapper>
                <Subtitle>{ctrl.quest.title}</Subtitle>
                <Title>{ctrl.proposition.title}</Title>
                <br/>
                <h5>Problems</h5>
                <div>
                    {
                        ctrl.problems.map((problem, i) => (
                            <Problem key={problem.id}>
                                <ProblemTitle>
                                    <ProblemNumber>
                                        #<strong>{i + 1}</strong>
                                    </ProblemNumber>
                                    {problem.title}
                                </ProblemTitle>
                                <br/>
                                <h6>Real life stories</h6>
                                <List items={problem.storiesIds} Component={StoriesList}
                                      onClick={storyId => navigate(`/narration/${storyId}`)}
                                />
                                <br/>
                                <h6>Possible causes</h6>
                                <Gallery items={problem.claimsIds} Component={ClaimsElement}
                                         onClick={id => navigate(`/claim/${id}`)}
                                />

                            </Problem>
                        ))
                    }
                </div>
            </Wrapper>
        )
    }
)