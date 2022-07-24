import React from 'react'
import { observer } from 'mobx-react'
import ctrl from './QuestionsPage.ctrl'
import NarrationGallery from '../../components/Narration/gallery'
import List from '../../components/List'
import {Wrapper} from '../../App.styles'
import { useNavigate } from 'react-router-dom'
import {NewItem} from './QuestionsPage.styles'

export default observer(() => {
    const navigate = useNavigate()

    return (
            <Wrapper>
                <h3>Questions</h3>
                <List items={ctrl.narrations} Component={NarrationGallery} onClick={id => navigate(`/narration/${id}`)} />
                <NewItem>
                    <textarea rows={10}
                              value={ctrl.newNarration.text}
                              onChange={e => ctrl.changeName(e.target.value)}/>
                    <button onClick={ctrl.addNarration}>Add narration</button>
                </NewItem>
            </Wrapper>
        )
    }
)