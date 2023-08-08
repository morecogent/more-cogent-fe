import { action, computed, makeObservable } from 'mobx'
import ArticleModel from '../../../system-wide/entities/Article/Article.model'
import { articles } from '../../../system-wide/stubs/articles'

export default class ArticlePageCtrl {
    constructor() {

        makeObservable(this, {
            article: computed
        })
    }

    get article() {
        return new ArticleModel(articles[0])
    }
}