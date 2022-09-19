import questsStore from '../entities/Quest/Quests.store'

questsStore.add({
    id: '1',
    title: 'Why do we create romantic relationships?',
    propositions: [
        {
            id: '1',
            title: 'To give meaning to their life',
            problems: []
        },{
            id: '2',
            title: 'To not feel lonely',
            problems: []
        },{
            id: '3',
            title: 'To have more security',
            problems: []
        },{
            id: '4',
            title: 'To have children',
            problems: []
        },{
            id: '5',
            title: 'To have sex',
            problems: []
        },{
            id: '6',
            title: 'To save on the cost of living',
            problems: [
                {
                    id: '1',
                    title: 'The relationship can break as soon as one of the partners find someone who can help them to save on cost of living more.',
                    stories: ['1'],
                    claims: ['100']
                },{
                    id: '2',
                    title: 'The relationship can break due to mismatched expectations and willingness to compromise',
                }
            ]
        },
    ]
})

questsStore.add({
    id: '2',
    title: 'Why do we make sex?',
    propositions: [
        {
            id: '1',
            title: 'To give pleasure to our partner',
            problems: []
        },{
            id: '2',
            title: 'For our own pleasure',
            problems: []
        },{
            id: '3',
            title: 'To have children',
            problems: []
        },{
            id: '4',
            title: 'Out of fear of break-up',
            problems: []
        }
    ]
})

questsStore.add({
    id: '3',
    title: 'Why some people don\'t want sex?',
    propositions: [
        {
            id: '1',
            title: 'Because they feel judged',
            problems: []
        },{
            id: '2',
            title: 'Because they don\'t have pleasure from it',
            problems: []
        }
    ]
})