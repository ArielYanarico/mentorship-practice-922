import { createMachine, interpret } from 'xstate';

const requestStatusMachine = createMachine({
  id: 'requestStatus',
  initial: 'idle',
  context: {
    hasErrored: false,
    isLoading: false
  },
  states: {
    idle: {
      on: {
        IS_LOADING: 'loading'
      },
    },
    loading: {
      on: {
        HAS_SUCESS: {
          target: 'idle'
        },
        HAS_ERRORED: 'error',
      }
    },
    error: {
      type: 'final'
    }
  }
});
