import questsStore from '../stores/Quests.store'

questsStore.add({
    title: 'Why do humans create romantic relationships?',
    propositions: [
        {
            title: 'To give meaning to their life',
            problems: []
        },{
            title: 'To not feel lonely',
            problems: []
        },{
            title: 'To have more security',
            problems: []
        },{
            title: 'To have children',
            problems: []
        },{
            title: 'To save on the cost of living',
            problems: [
                {
                    title: 'The relationship can break as soon as one of the partners find someone who can help them to save on cost of living more.',
                }
            ]
        },
    ]
})