  async function checkNumber(state, event, { bp }) {
    const number = parseInt(event.payload.text) // Parse the user's input as an integer
    console.log('User entered number:', number) // Log the parsed number to console

    // Set nextNode based on the number's value and store it in the event state
    if (number > 0) {
      event.state.nextNode = 'positiveNode'
    } else if (number < 0) {
      event.state.nextNode = 'negativeNode'
    } else {
      event.state.nextNode = 'zeroNode'
    }

    console.log('Determined nextNode:', event.state.nextNode) // Log the determined nextNode for debugging
    return event.state
  }

  return checkNumber(event.state, event, { bp })