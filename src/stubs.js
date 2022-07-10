import conceptsStore from './stores/Concepts.store'
import debatesStore from './stores/Debates.store'

const c1 = conceptsStore.add({ name: 'capitalism' })
const c2 = conceptsStore.add({ name: 'ethics' })

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
    },
  ]
})