import React, { useState } from 'react'
import { observer } from 'mobx-react'
import Ctrl from './PropositionPage.ctrl'
import { Wrapper } from '../../../App.styles'
import { useNavigate, useParams } from 'react-router-dom'
import StoriesList from '../../../entities/Story/components/StoryElement/list'
import ClaimsElement from '../../../entities/Claim/components/ClaimElement/gallery'
import List from '../../../components/List'
import Gallery from '../../../components/Gallery'

export default observer(() => {
    const { questId, propositionId } = useParams()
    const navigate = useNavigate()
    const [ctrl] = useState(new Ctrl(questId, propositionId))

        return (
            <Wrapper>
                <h5>{ctrl.quest.title}</h5>
                <h3>{ctrl.proposition.title}</h3>
                <br/>
                <div>
                    {
                        ctrl.problems.map(problem => (
                            <div key={problem.id}>
                                {problem.title}
                                <br/>
                                <br/>
                                <Gallery items={problem.claimsIds} Component={ClaimsElement}
                                      onClick={id => navigate(`/claim/${id}`)}
                                />
                                <br/>
                                <List items={problem.storiesIds} Component={StoriesList}
                                      onClick={storyId => navigate(`/narration/${storyId}`)}
                                />
                            </div>
                        ))
                    }
                </div>
            </Wrapper>
        )
    }
)