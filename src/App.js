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
import ScienceLabPage from './system-wide/pages/ScienceLab/ScienceLabPage/ScienceLabPage'
import QuestPage from './system-wide/pages/PhilosophyLab/QuestPage/QuestPage'
import PropositionPage from './system-wide/pages/PhilosophyLab/PropositionPage/PropositionPage'
import AlchemyLabPage from './system-wide/pages/AlchemyLab/AlchemyLabPage/AlchemyLabPage'
import NarrationPage from './system-wide/pages/AlchemyLab/NarrationPage/NarrationPage'
import PhilosophyLabPage from './system-wide/pages/PhilosophyLab/PhilosophyLabPage/PhilosophyLabPage'
import ClaimPage from './system-wide/pages/ScienceLab/ClaimPage/ClaimPage'
import AddQuestionPage from './system-wide/pages/AlchemyLab/AddQuestionPage/AddQuestionPage'
import LinkProblemsPage from './system-wide/pages/AlchemyLab/LinkResultsPage/LinkResultsPage'
import ArticlePage from './system-wide/pages/PhilosophyLab/ArticlePage/ArticlePage'
import './system-wide/stubs/stubs'
import 'bootstrap/dist/css/bootstrap.min.css'
import ConceptsPage from './system-wide/pages/ScienceLab/ConceptsPage/ConceptsPage'
import DesignLabPage from './system-wide/pages/DesignLab/DesignLabPage/DesignLabPage'
import DesignPage from './system-wide/pages/DesignLab/DesignPage/DesignPage'
import Modal from './system-wide/components/Modal/Modal'

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
                        <NavLink to="/design-lab" className={({ isActive }) => isActive ? " selected" : ""}>Design
                            Lab</NavLink>
                    </Navigation>
                    <Routes>
                        <Route path="/article" element={<ArticlePage/>}/>

                        <Route path="/alchemy-lab" element={<AlchemyLabPage/>}/>
                        <Route path="/narration/:id" element={<NarrationPage/>}/>
                        <Route path="/add-your-question" element={<AddQuestionPage/>}/>
                        <Route path="/link-problems" element={<LinkProblemsPage/>}/>


                        <Route path="/philosophy-lab" element={<PhilosophyLabPage/>}/>
                        <Route path="/quest/:id" element={<QuestPage/>}/>
                        <Route path="/quest/:questId/proposition/:propositionId" element={<PropositionPage/>}/>


                        <Route path="/science-lab" element={<ScienceLabPage/>}/>
                        <Route path="/claim/:id" element={<ClaimPage/>}/>
                        <Route path="/concepts" element={<ConceptsPage/>}/>

                        <Route path="/design-lab" element={<DesignLabPage/>}/>
                        <Route path="/design/:id" element={<DesignPage/>}/>


                        <Route exact path="/" element={<Navigate to="/alchemy-lab" replace/>}/>
                    </Routes>
                </Router>
                <Modal />
            </div>
        )
    }
}
