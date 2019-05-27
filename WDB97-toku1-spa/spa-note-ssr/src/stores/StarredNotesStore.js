import { ReduceStore } from 'flux/utils';

export default class StarredNotesStore extends ReduceStore {
  getInitialState() {
    return { notes: [] };
  }

  reduce(state, action) {
    switch (action.type) {
      case 'note/fetch/starred':
        return { notes: action.notes };
      case 'star/rehydrate':
        return action.state;
      default:
        return state;
    }
  }
}
