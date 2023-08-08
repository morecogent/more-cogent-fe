import React from 'react'
import { Arrow, Proposition, Quest, Wrapper } from './index.styles'
import {BsArrowRight} from 'react-icons/bs'
import Link from '../../../../components/Link'

const linkedQuest = ({quest, proposition, onQuestClick, onPropositionClick, onLinkPropositionClick}) => (
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
                <Link title={`Link author's choice`} onClick={() => onLinkPropositionClick(quest.id)} />

        }
    </Wrapper>
)

export default linkedQuest