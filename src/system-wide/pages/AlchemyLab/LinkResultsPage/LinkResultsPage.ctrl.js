import { action, computed, makeObservable, observable } from 'mobx'
import results from '../../../entities/Result/Results.store'
import stories from '../../../entities/Story/Narrations.store'

export default class LinkResultsPageCtrl {

  results = results.items

  constructor(navigate, searchParams) {

    this.navigate = navigate
    this.searchParams = searchParams

    makeObservable(this, {
      results: observable,
      linkResultToStory: action
    })
  }

  linkResultToStory(resultId){
    const storyId = this.searchParams.get('linking')
    const story = stories.items.find(el => el.id === storyId)
    story.linkProblem(resultId)
    this.navigate(`/narration/${storyId}`)
  }
}