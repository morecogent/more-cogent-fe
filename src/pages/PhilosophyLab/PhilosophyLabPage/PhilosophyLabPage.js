import React, { useState } from 'react'
import { observer } from 'mobx-react'
import { Wrapper } from './PhilosophyLabPage.styles'
import Gallery from '../../../components/Gallery'
import QuestElement from '../../../entities/Quest/components/QuestElement/gallery'
import { useNavigate, useSearchParams } from 'react-router-dom'
import Ctrl from './PhilosophyLabPage.ctrl'

export default observer(() => {
        const navigate = useNavigate()
        const [searchParams] = useSearchParams()
        const [ctrl] = useState(new Ctrl(navigate, searchParams))

        return (
            <Wrapper>
                <h3>Relationships</h3>
                <Gallery items={ctrl.quests} Component={QuestElement} onClick={id => ctrl.onQuestSelect(id)}/>
            </Wrapper>
        )
    }
)