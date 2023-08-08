import React from 'react'
import { observer } from 'mobx-react'
import ctrl from './ScienceLabPage.ctrl'
import DebateGallery from '../../../system-wide/entities/Claim/components/ClaimElement/gallery'
import Gallery from '../../../system-wide/components/Gallery'
import { Wrapper } from '../../../App.styles'
import { useNavigate } from 'react-router-dom'
import AddClaim from '../../../system-wide/entities/Claim/components/AddClaim'
import Button from 'react-bootstrap/Button'

export default observer(() => {
        const navigate = useNavigate()

        return (
            <Wrapper>
                <h3>Claims</h3>
                <Gallery items={ctrl.claims} Component={DebateGallery} onClick={id => navigate(`/claim/${id}`)}/>
                <Button onClick={() => navigate('/concepts')}>See Concepts</Button>
                <div style={{ marginTop: 30 }}>
                    <AddClaim />
                </div>
            </Wrapper>
        )
    }
)