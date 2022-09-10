import React, { useState } from 'react'
import { observer } from 'mobx-react'
import Ctrl from './PropositionPage.ctrl'
import { Wrapper } from '../../App.styles'
import { useNavigate, useParams } from 'react-router-dom'
import StoriesList from '../../components/Story/list'
import List from '../../components/List'

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
                                <List items={problem.storiesIds} Component={StoriesList}
                                      onClick={propositionId => navigate(`/quest/${questId}/proposition/${propositionId}`)}
                                />
                            </div>
                        ))
                    }
                </div>
            </Wrapper>
        )
    }
)