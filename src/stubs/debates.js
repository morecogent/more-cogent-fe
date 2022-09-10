import {c1, c2, c5, c3} from './concepts'

export const debates = [{
    id: '100',
    name: 'Relationship with a purpose of saving money is sufficient to reduce it’s strength',
    concepts: [],
    percentage: 87
}, {
    name: 'Capitalism is not ethical',
    concepts: [c1, c2],
    debateArguments: [
        {
            text: 'Market has sovereignty over the means of production',
            type: 'PUBLIC_REFERENCE'
        },
        {
            text: 'It\'s a system that rests on injustice and exploitation',
            type: 'INDIVIDUAL'
        },
        {
            text: 'By participating, willingly or unwillingly we are engaging in an unethical practice',
            type: 'INDIVIDUAL'
        },
        {
            text: 'The inherent drive of capitalism is to make the most amount of money from the workers - paying them as little as possible but getting them to do the most amount of work as possible',
            type: 'INDIVIDUAL'
        },
        {
            text: 'Employers have a lot of power in the wage market',
            type: 'INDIVIDUAL'
        },
        {
            text: 'Around the world, workers are exploited on wages that aren\'t nearly enough to survive day by day',
            type: 'INDIVIDUAL'
        },
        {
            text: 'In Bangladesh, female workers are paid 10 cents an hour to produce spy skill t-shirts that cost 60 pounds to buy in the UK',
            type: 'RESEARCH'
        },
        {
            text: 'Almost 10% of UK workforce aren\'t paid the national living wage',
            type: 'RESEARCH'
        },
        {
            text: 'For many people national living wage isn\'t enough to live anyway',
            type: 'RESEARCH'
        }
    ]
}, {
    id: '1',
    name: 'Sex is an extension of Love',
    concepts: [c3, c5],
    percentage: 78
}, {
    id: '2',
    name: 'Watching Pornography leads to a Selfish Sex',
    concepts: [c3, c5],
    percentage: 83
}, {
    id: '3',
    name: 'Watching Pornography makes people more Lonely',
    concepts: [c3, c5],
    percentage: 62
}, {
    id: '4',
    name: 'Banking model of education treats students like deposits for knowledge',
    concepts: [],
    percentage: 0
}, {
    id: '5',
    name: 'Banking model of education can treat students as humans',
    concepts: [],
    percentage: 0
}, {
    id: '6',
    name: 'Banking model of education leads to oppression',
    concepts: [],
    claimArguments: [
        {
            claimsID: ['4'],
            impact: 'POSITIVE'
        },
        {
            claimsID: ['5'],
            impact: 'NEGATIVE'
        }
    ],
    percentage: 0
}, {
    id: '7',
    name: 'Sex should give pleasure to both partners',
    concepts: [],
    claimArguments: [
    ],
    percentage: 83
}, {
    id: '8',
    name: 'We should create friendships to feel better in work',
    concepts: [],
    claimArguments: [
    ],
    percentage: 23
}]