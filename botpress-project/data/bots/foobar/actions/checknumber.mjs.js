  async function checkNumber(state, event, { bp }) {
    const number = parseInt(event.payload.text) // Parse the user's input as an integer
    console.log('User entered number:', number) // Log the parsed number to console
    console.dir(event.payload, { depth: null });
    state.number = number // Set key 'initialInput' in state
    // Set nextNode based on the number's value and store it in the event state
    if (number > 0) {
      event.state.nextNode = 'positiveNode'
    } else if (number < 0) {
      event.state.nextNode = 'negativeNode'
    } else {
      event.state.nextNode = 'zeroNode'
    }
    console.dir(state, { depth: null });
    return event.state
  }

  return checkNumber(event.state, event, { bp })