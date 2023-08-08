import { action, computed, makeObservable, observable } from 'mobx'

class AppCtrl {

    modal = null

    constructor() {
        makeObservable(this, {
            modal: observable,
            openModal: action
        })
    }

    openModal(component){
        this.modal = {
            component: component
        }
    }

}

export default new AppCtrl()