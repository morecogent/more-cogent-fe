import { c3, c4 } from './concepts'

const advices = [{
    id: '1',
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
    ],
    discussion: [
        {
            author: {
                name: 'JohnyBravo12'
            },
            text: 'By saying that she doesn’t have pleasure from sex, she could mean that she doesn’t have it WITH HIM.',
            date: '2022-08-15T16:34:00'
        },{
            author: {
                name: 'Mike123'
            },
            text: 'But this is exactly my point.',
            date: '2022-08-15T16:34:00'
        }
    ]
}]

export const narrations = [{
    id: '1',
    title: 'No sex in the relationship',
    text: [
        {
            type: 'paragraph',
            children: [
                {
                    type: 'span',
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
                }]
        }
    ],
    concepts: [c3, c4],
    advices: [advices[0]],
    linkedQuests: [{
        questId: '1',
        propositionId: '6'
    }, {
        questId: '2'
    }],
    beliefs: [
        {
            question: 'Why you wanted this relationship in the first place?',
            answer: 'I wanted to have someone with who I could share my successes and have sex'
        }
    ],
    author: {
        name: 'Casanova310'
    },
    discussion: [
        {
            author: {
                name: 'JohnyBravo12'
            },
            text: 'The fact that sex in your previous relationship was perfect for you doesn’t mean there is no problem with you.',
            date: '2022-08-15T16:34:00'
        },{
            author: {
                name: 'Casanova310'
            },
            text: 'Why not?',
            date: '2022-08-15T16:34:00'
        },{
            author: {
                name: 'JohnyBravo12'
            },
            text: 'Because you are not the same person you were a year ago, also your situation changed including that you are with a different woman. Her attitudes could trigger different attitudes within you which then could lead to a series of events that made her lose apetite in sex with you.',
            date: '2022-08-15T16:34:00'
        },
    ],
    date: '2022-08-15T16:34:00'
}]