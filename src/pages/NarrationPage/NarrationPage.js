import React, { useState } from 'react'
import { observer } from 'mobx-react'
import Ctrl from './NarrationPage.ctrl'
import { Wrapper } from './NarrationPage.styles'
import { useParams } from 'react-router-dom'
import { Item } from './NarrationPage.styles'
import Button from '../../components/Button'
import RichText from '../../components/RichText'

export default observer(() => {
        const { id } = useParams()
        const [ctrl] = useState(new Ctrl(id))

        return (
            <Wrapper>
                <div>
                    <RichText text={ctrl.narration.text}/>
                </div>

                {
                    ctrl.narrationResponses.map(narration => (
                        <Item>
                            <RichText text={narration.text}/>
                        </Item>
                    ))
                }
                <textarea rows={10}
                          value={ctrl.newNarration.text}
                          onChange={e => ctrl.changeName(e.target.value)}/>
                <Button name="Reply" color="#7749F8" onClick={ctrl.addNarration}/>
                {/*<Gallery items={ctrl.narrations} Component={NarrationGallery} onClick={id => navigate(`/narration/${id}`)} />*/}
                {/*<NewItem>*/}

                {/*</NewItem>*/}
            </Wrapper>
        )
    }
)