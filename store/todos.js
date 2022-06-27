export const state = () => ({
  list: [],
})

export const getters = {
  doneTodos: (state) => {
    return state.list.filter((list) => list.done)
  },
  doneTodosCount: (state, getters) => {
    return getters.doneTodos.length
  },
  getTodos: (state) => {
    return state.list
  },
  getLastTask(state) {
    return state.list[state.list.length - 1]
  },
}

export const mutations = {
  add(state, task) {
    state.list.push({
      id: state.list.length + 1,
      title: task.title,
      description: task.description,
      done: false,
    })
    console.log('task added')
  },
  remove(state, task) {
    state.list.splice(state.list.indexOf(task), 1)
  },
  toggle(state, task) {
    task.done = !task.done
  },
}

export const actions = {
  async add({ commit, dispatch }, todo) {
    await commit('add', todo)
    await dispatch('saveTask')
      .then(() => {
        console.log('task saved')
      })
      .catch((err) => {
        throw err
      })
  },
  remove({ commit }, todo) {
    commit('remove', todo)
  },
  toggle({ commit }, todo) {
    commit('toggle', todo)
  },

  async saveTask({ getters }) {
    console.log('saving task to database....')
    const task = await getters.getLastTask;
    const { uid } = await this.$fire.auth.currentUser;

    await this.$fire.firestore
      .collection('users')
      .doc(uid)
      .collection('todos')
      .add(task)
      .catch((err) => {
        throw err
      })
  },
}
