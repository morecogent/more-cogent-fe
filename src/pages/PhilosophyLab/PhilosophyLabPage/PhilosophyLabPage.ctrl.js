import { action, computed, makeObservable, observable } from 'mobx'
import questsStore from '../../../entities/Quest/Quests.store'

class PhilosophyLabPageCtrl {

    quests = questsStore.items

    constructor() {
        makeObservable(this, {
            quests: observable
        })
    }
}

export default new PhilosophyLabPageCtrl()