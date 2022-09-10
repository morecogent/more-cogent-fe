import React, { useState } from 'react'
import { observer } from 'mobx-react'
import Ctrl from './QuestPage.ctrl'
import PropositionGallery from '../../../entities/Quest/components/PropositionElement/gallery'
import List from '../../../components/List'
import { Wrapper } from '../../../App.styles'
import { useNavigate, useParams } from 'react-router-dom'
import AddClaim from '../../../entities/Claim/components/AddClaim'

export default observer(() => {
        const { id } = useParams()
        const navigate = useNavigate()
        const [ctrl] = useState(new Ctrl(id))

        return (
            <Wrapper>
                <h3>Quest: {ctrl.quest.title}</h3>
                <br/>
                <List items={ctrl.propositions} Component={PropositionGallery}
                      onClick={propositionId => navigate(`/quest/${id}/proposition/${propositionId}`)}
                />
                <div style={{ marginTop: 30 }}>
                    <AddClaim/>
                </div>
            </Wrapper>
        )
    }
)