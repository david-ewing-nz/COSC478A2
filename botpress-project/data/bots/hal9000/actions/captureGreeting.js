  async function action(bp, event) {
    console.log('Action started')
    // Capture the user's input and save it to a session variable
    const userGreeting = event.payload.text
    console.log('Captured user input:', userGreeting) // Add this line for debugging

    await bp.dialog.setVar(event, 'userGreeting', userGreeting)
    console.log('Stored userGreeting in dialog state:', userGreeting) // Add this line to confirm storage
  }

  return action(bp, event)