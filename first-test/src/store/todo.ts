export default {
    state: {
        isLoading: false,
        todos: [{
          id: 0,
          name: 'first',
          checked: false,
        }],
      },
      mutations: {
        loadMutation(state: any, payload: any) {
            
            state.isLoading = true;
        },
      },
      actions: {
        loadAction(context: any, payload: any) {
            context.commit('loadMutation', payload);
        },
      },
}