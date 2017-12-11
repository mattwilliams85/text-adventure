import { firebaseDB } from './';
import { objectToArray } from '../util/objectToArray'

const userId = 1
const path = `users/${userId}/games/`

export const storiesCtrl = {
  create(data) {
    const newStory = {
      title: data.title,
      introduction: data.introduction,
    }
    
    return firebaseDB
      .ref(path)
      .push(newStory)
  },

  remove(id) {
    return firebaseDB.ref(path + id).remove()
  },

  subscribe(dispatch, type) {
    firebaseDB.ref(path).on('value', (snap) => {
      dispatch({
        type: type,
        payload: objectToArray(snap.val())
      })
    })
  },


}