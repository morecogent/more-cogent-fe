import React from 'react'
import { observer } from 'mobx-react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    NavLink,
    Navigate
} from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import { Navigation } from './App.styles'
import ScienceLabPage from './pages/ScienceLab/ScienceLabPage/ScienceLabPage'
import QuestPage from './pages/QuestPage/QuestPage'
import PropositionPage from './pages/PropositionPage/PropositionPage'
import AlchemyLabPage from './pages/AlchemyLab/AlchemyLabPage/AlchemyLabPage'
import NarrationPage from './pages/NarrationPage/NarrationPage'
import PhilosophyLabPage from './pages/PhilosophyLab/PhilosophyLabPage/PhilosophyLabPage'
import ClaimPage from './pages/ClaimPage/ClaimPage'
import AddQuestionPage from './pages/AddQuestionPage/AddQuestionPage'
import './stubs/stubs'
import 'bootstrap/dist/css/bootstrap.min.css'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 16px;

    input, textarea {
      font-weight: 100 !important;
    }
  }
`

@observer
export default class App extends React.Component {
    componentDidMount() {
        // Stubs

    }

    render() {
        return (
            <div>
                <Router>
                    <GlobalStyle/>
                    <Navigation position="static">
                        <NavLink to="/alchemy-lab" className={({ isActive }) => isActive ? " selected" : ""}>Alchemy
                            Lab</NavLink>
                        <NavLink to="/philosophy-lab" className={({ isActive }) => isActive ? " selected" : ""}>Philosophy
                            Lab</NavLink>
                        <NavLink to="/science-lab" className={({ isActive }) => isActive ? " selected" : ""}>Science
                            Lab</NavLink>
                    </Navigation>
                    <Routes>
                        <Route path="/alchemy-lab" element={<AlchemyLabPage/>}/>
                        <Route path="/philosophy-lab" element={<PhilosophyLabPage/>}/>
                        <Route path="/science-lab" element={<ScienceLabPage/>}/>

                        <Route path="/quest/:id" element={<QuestPage/>}/>
                        <Route path="/quest/:questId/proposition/:propositionId" element={<PropositionPage/>}/>
                        <Route path="/add-your-question" element={<AddQuestionPage/>}/>
                        <Route path="/claim/:id" element={<ClaimPage/>}/>
                        <Route path="/narration/:id" element={<NarrationPage/>}/>
                        <Route exact path="/" element={<Navigate to="/alchemy-lab" replace/>}/>
                    </Routes>
                </Router>
            </div>
        )
    }
}
