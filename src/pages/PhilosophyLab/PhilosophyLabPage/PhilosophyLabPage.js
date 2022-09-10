import React from 'react'
import { observer } from 'mobx-react'
import { Wrapper } from './PhilosophyLabPage.styles'
import Gallery from '../../../components/Gallery'
import ctrl from './PhilosophyLabPage.ctrl'
import QuestElement from '../../../entities/Quest/components/QuestElement/gallery'
import { useNavigate } from 'react-router-dom'

export default observer(() => {
        const navigate = useNavigate()

        return (
            <Wrapper>
                <h3>Relationships</h3>
                <Gallery items={ctrl.quests} Component={QuestElement} onClick={id => navigate(`/quest/${id}`)}/>
            </Wrapper>
        )
    }
)