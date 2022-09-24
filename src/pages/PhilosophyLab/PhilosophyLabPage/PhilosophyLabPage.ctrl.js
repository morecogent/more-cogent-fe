import { action, computed, makeObservable, observable } from 'mobx'
import narrations from '../../../entities/Story/Narrations.store'
import questsStore from '../../../entities/Quest/Quests.store'

export default class PhilosophyLabPageCtrl {

    constructor(navigate, searchParams) {
        this.navigate = navigate
        this.searchParams = searchParams

        makeObservable(this, {
            navigate: observable,
            searchParams: observable,
            quests: computed,
            linkQuestToStory: action
        })
    }

    get quests(){
        if(this.searchParams.get('linking') === null){
            return questsStore.items
        } else {
            const storyId = this.searchParams.get('linking')
            const story = narrations.items.find(el => el.id === storyId)
            const storyQuests = story.linkedQuests.map(el => el.questId)

            return questsStore.items.filter(el => !storyQuests.includes(el.id))
        }
    }

    onQuestSelect(questId){
        if(this.searchParams.get('linking') === null){
            this.navigate(`/quest/${questId}`)
        } else {
            this.linkQuestToStory(questId)
        }

    }

    linkQuestToStory(questId){
        const storyId = this.searchParams.get('linking')
        const story = narrations.items.find(el => el.id === storyId)
        story.addQuest(questId)
        this.navigate(`/narration/${storyId}`)
    }
}