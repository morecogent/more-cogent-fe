import conceptsStore from './stores/Concepts.store'
import debatesStore from './stores/Debates.store'
import narrationsStore from './stores/Narrations.store'

const c1 = conceptsStore.add({ name: 'capitalism' })
const c2 = conceptsStore.add({ name: 'ethics' })
const c3 = conceptsStore.add({ name: 'sex' })
const c4 = conceptsStore.add({ name: 'romantic relationships' })
const c5 = conceptsStore.add({ name: 'love' })

debatesStore.add({
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
})

debatesStore.add({
    id: '1',
    name: 'Sex is an extension of Love',
    concepts: [c3, c5],
    percentage: 78
})

debatesStore.add({
    id: '2',
    name: 'Watching Pornography leads to a Selfish Sex',
    concepts: [c3, c5],
    percentage: 83
})

debatesStore.add({
    id: '3',
    name: 'Watching Pornography makes people more Lonely',
    concepts: [c3, c5],
    percentage: 62
})

narrationsStore.add({
    id: '1',
    text: [
        {
            type: 'paragraph',
            content: 'Hi. I’m 23, she is 21. I’m with her for over 3 years. ' +
                'On the beginning everything was fine, frequency of sex was adjusted to my' +
                ' needs and desire. After some time, we had sex only once a month. ' +
                'Later we broke up, talked (she wanted to come back) and again sex was good ' +
                'for 2-3 weeks and suddenly once per two months. I tried to talk to her but ' +
                'she said she doesn’t feel like she want to do it neither it gives her pleasure. ' +
                'When we have sex - no creativity, 2 positions and she want to end. ' +
                'She is taking pills. I’ve asked her to talk to the ginecologist that ' +
                'something is wrong and she didn’t do even that. She said that something ' +
                'will change and even we sleep in a single bed nothing changes just excuses ' +
                'that she doesn’t feel well. Sex was perfect in my previous relationship so ' +
                'it’s not a problem with me.'
        }
    ],
    concepts: [c3, c4]
})
narrationsStore.add({
    id: '2',
    parentNarrationId: '1',
    text: [
        {
            type: 'paragraph',
            children: [
                {
                    type: 'span',
                    content: 'She mentioned that she doesn’t have pleasure from it. ' +
                        'It seems like you treat sex as something for your own pleasure, ' +
                        'whereas '
                },
                {
                    type: 'claim',
                    content: '1'
                }, {
                    type: 'span',
                    content: '. Do you watch porn? Because '
                },
                {
                    type: 'claim',
                    content: '2'
                },
                {
                    type: 'span',
                    content: ' and '
                },
                {
                    type: 'claim',
                    content: '3'
                },
                {
                    type: 'span',
                    content: '.'
                }
            ]
        }
    ]
})