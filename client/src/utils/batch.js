const prefix = 'BATCH';

export const batch = (store) => (next) => (action) =>
  Array.isArray(action)
    ? store.dispatch({
      type: `${prefix} [${action.map(action => action.type).join(', ')}]`,
      payload: action,
    })
    : next(action);