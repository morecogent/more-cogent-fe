import React from 'react'
import { Arrow, Link, Proposition, Quest, Wrapper } from './index.styles'
import {BsArrowRight} from 'react-icons/bs'

const linkedQuest = ({quest, proposition, onQuestClick, onPropositionClick}) => (
    <Wrapper>
        <Quest onClick={() => onQuestClick(quest.id)}>
            {quest.title}
        </Quest>
        <Arrow>
            <BsArrowRight />
        </Arrow>
        {
            !!proposition ?
                <Proposition onClick={() => onPropositionClick(proposition.id)}>
                    {proposition.title}
                </Proposition> :
                <Link>Link author's choice</Link>

        }
    </Wrapper>
)

export default linkedQuest