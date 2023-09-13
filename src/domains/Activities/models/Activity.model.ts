import DesignTreeItem from "../../Design/models/DesignTreeItem.model"
import {computed, makeObservable, observable} from "mobx";
import {IDesignTreeItemProperties} from "../../Design/models/DesignTreeItem.types";

interface IActivity {
    name: string
    type: 'HABIT' | 'SINGLE'
}

interface ActivityProperties extends IDesignTreeItemProperties {
    name: string
    type?: 'HABIT' | 'SINGLE'
}

export default class Activity extends DesignTreeItem implements IActivity {
    name
    type

    constructor({id, name, parentId, justificationIds, type}: ActivityProperties) {
        super({id, parentId, justificationIds})
        this.name = name
        this.type = type || 'SINGLE'


        makeObservable(this, {
            name: observable
        })
    }

    changeName(name){
        this.name = name
    }
}