const ActionType = {
  SET_FILTER: 'SET_FILTER',
};

function setFilterAction(value) {
  return {
    type: ActionType.SET_FILTER,
    payload: value,
  };
}

export {
  ActionType,
  setFilterAction,
};
