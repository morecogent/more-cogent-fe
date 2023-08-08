import React, { useState } from 'react'
import { observer } from 'mobx-react'
import Ctrl from './LinkResultsPage.ctrl'
import {
    Title,
    Wrapper
} from './LinkResultsPage.styles'
import { useNavigate, useSearchParams } from 'react-router-dom'
import Table from 'react-bootstrap/Table'
import LinkingButton from '../../../system-wide/components/LinkingButton'

export default observer(() => {
        const navigate = useNavigate()
        const [searchParams] = useSearchParams()
        const [ctrl] = useState(new Ctrl(navigate, searchParams))

        return (
            <Wrapper>
                <Title>Results</Title>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        ctrl.results.map(result => (
                            <tr>
                                <td>
                                    {result.id}
                                </td>
                                <td>
                                    {result.title}
                                </td>
                                <td>
                                    <LinkingButton onClick={() => ctrl.linkResultToStory(result.id)}/>
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </Table>

            </Wrapper>
        )
    }
)