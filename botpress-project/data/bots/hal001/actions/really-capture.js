  async function action(state, event, { bp }) {
    // Capture the user input text and its length
    const initialText = event.payload.text || '' // Use an empty string as a fallback
    const textLength = initialText.length
    console.dir(state, { depth: null })
    console.dir(event, { depth: null })
    console.dir(bp, { depth: null })
    // Store in session (persists across nodes)
    event.state.session.initialText = initialText
    event.state.session.textLength = textLength

    // Log for debugging
    console.log('User input captured:', initialText)
    console.log('Text length:', textLength)

    // Return the updated state
    return state
  }

  return action(event.state, event, { bp })