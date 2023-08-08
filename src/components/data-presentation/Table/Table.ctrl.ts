import { action, computed, makeObservable, observable } from 'mobx'

type Attribute = {
    label: string,
    valueKey: string
}

export default class TableCtrl {
    items = []

    constructor(items: any, private _schema: Attribute[]) {
        this.items = items

        makeObservable(this, {
            items: observable,
            labels: computed,
            valueKeys: computed
        })
    }

    get labels(): string[] {
        return this._schema.map(attr => attr.label)
    }

    get valueKeys(): string[] {
        return this._schema.map(attr => attr.valueKey)
    }
}