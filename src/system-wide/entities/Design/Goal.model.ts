import DesignTreeItem from "../../../domains/Design/models/DesignTreeItem.model"
import {IDesignTreeItemProperties} from "../../../domains/Design/models/DesignTreeItem.types";
import {action, computed, makeObservable, observable} from "mobx";
import conceptsStore from "../Concept/Concepts.store";

interface GoalProperties extends IDesignTreeItemProperties {
    conceptId: string
}

export default class Goal extends DesignTreeItem {

    conceptId

    constructor({id, conceptId, parentId, justificationIds}: GoalProperties) {
        super({id, parentId, justificationIds})
        this.conceptId = conceptId

        makeObservable(this, {
            name: computed,
            concept: computed,
        })
    }

    get name() {
        return this.concept.name
    }

    get concept(){
        const concepts = conceptsStore.getByIds([this.conceptId])
        return concepts[0]
    }
}