import {c3, c4} from './concepts'

export const narrations = [{
    id: '1',
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
    concepts: [c3, c4]
}, {
    id: '3',
    text: [
        {
            type: 'paragraph',
            children: [
                {
                    type: 'span',
                    content: 'I don\t feel pleasure from sex even though '
                },{
                    type: 'claim',
                    content: '7'
                },{
                    type: 'span',
                    content: ' what can I do about it?'
                }]
        }
    ],
    concepts: [c3, c4]
},{
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
}, {
    id: '4',
    text: [
        {
            type: 'paragraph',
            children: [
                {
                    type: 'span',
                    content: 'In my previous job I had a friend. We had a lot of common topics and we supported each other.'
                }]
        },{
            type: 'paragraph',
            children: [
                {
                    type: 'span',
                    content: 'This friendship survived after we left the company and we started to meet out of work occasionally.'
                }]
        },{
            type: 'paragraph',
            children: [
                {
                    type: 'span',
                    content: 'As we got further in life, though, we\'ve became interested in different things, our choices were different, so do our worldviews.'
                }]
        },{
            type: 'paragraph',
            children: [
                {
                    type: 'span',
                    content: 'Now I feel like I would like to continue this relationship, but it feels like we don\'t have much to talk about and sometimes I can\'t even share what I really think. Since my friend has already made a choice, it would only make him feel bad because what is the point of telling him that I would act differently if he cannot change it anymore.'
                }]
        },{
            type: 'paragraph',
            children: [
                {
                    type: 'span',
                    content: 'What do you think I should do?'
                }]
        },
    ],
    concepts: [],
    beliefs: [
        {
            question: 'Why did you want this relationship in the first place?',
            answer: 'Work felt better this way.',
            linked: ['8']
        }
    ]
}]