import React from 'react'
import { observer } from 'mobx-react'
import ctrl from './HomePage.ctrl'
import DebateGallery from '../../components/Claim/gallery'
import Gallery from '../../components/Gallery'
import { Wrapper } from '../../App.styles'
import { useNavigate } from 'react-router-dom'
import AddClaim from '../../components/AddClaim'

export default observer(() => {
        const navigate = useNavigate()

        return (
            <Wrapper>
                <h3>Claims</h3>
                <Gallery items={ctrl.claims} Component={DebateGallery} onClick={id => navigate(`/claim/${id}`)}/>
                <div style={{ marginTop: 30 }}>
                    <AddClaim />
                </div>
            </Wrapper>
        )
    }
)