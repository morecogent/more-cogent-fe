import React from 'react'
import { Wrapper } from './Modal.styles'
import { observer } from 'mobx-react'
import appCtrl from '../../controllers/App.ctrl'

const Modal = () => {
    if(!appCtrl.modal) return null

    const ComponentToRender = appCtrl.modal.component
    return (
        <Wrapper>
            <ComponentToRender />
        </Wrapper>
    )
}

export default observer(Modal)