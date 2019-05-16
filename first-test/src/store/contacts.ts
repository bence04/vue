export default {
    state: {
        peoples: [{
            id: 0,
            name: 'Test user',
        }, {
            id: 1,
            name: 'Test user 1',
        }],
      },
      mutations: {
        /* addNewItem(state: any, payload: any) {
            state.todos.push({
                id: (state.todos.length === 0) ? 0 : state.todos[state.todos.length - 1].id + 1,
                name: payload.name,
                checked: false,
            });
        }, */
      },
      actions: {
        /* addNewItemAction(context: any, payload: any) {
            context.commit('addNewItem', payload);
        }, */
      },
      getters: {
          /* todos: (state: any) => state.todos, */
      },
};
