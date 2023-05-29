import { makeObservable, observable } from 'mobx'
import { v4 } from 'uuid'

class ChildModel {

    constructor({ id, text }) {
        this.id = id || v4()
        this.text = text // {content, link}
    }

}

export default class ArticleModel {

    constructor({ id, name, children = [] }) {
        this.id = id || v4()
        this.title = name || ''
        console.log(children.length);
        this.children = children
            .filter(child => child.type !== 'synced_block')
            .map(child => {
                return child[child.type]["rich_text"].map(child => {
                    if(child.type === 'text'){
                        return new ChildModel({text: child.text})
                    }
                })

            })

        // makeObservable(this, {
        //     title: observable,
        //     propositions: observable
        // })
    }

}
