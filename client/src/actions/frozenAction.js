export default (operation, index) => {
  console.log('Updating the frozen inventory (operation, index): ', operation, index);
  return {
    type: 'updateFrozen',
    payload: {
      operation,
      index
    }
  }
}