import React from 'react'
import { observer } from 'mobx-react'
import ctrl from './NarrationsPage.ctrl'
import NarrationGallery from '../../components/Narration/gallery'
import Gallery from '../../components/Gallery'
import {Wrapper} from '../../App.styles'
import { useNavigate } from 'react-router-dom'
import {NewItem} from './NarrationsPage.styles'

export default observer(() => {
    const navigate = useNavigate()

    return (
            <Wrapper>
                <h3>Narrations</h3>
                <Gallery items={ctrl.narrations} Component={NarrationGallery} onClick={id => navigate(`/narration/${id}`)} />
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