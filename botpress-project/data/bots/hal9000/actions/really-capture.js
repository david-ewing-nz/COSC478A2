async function action(state, event, { bp }) {
  // Capture the user input text and its length
  const initialText = event.payload.text || ""; // Use an empty string as a fallback
  const textLength = initialText.length;

  // Store in session (persists across nodes)
  event.state.session.initialText = initialText;
  event.state.session.textLength = textLength;

  // Log for debugging
  console.log("User input captured:", initialText);
  console.log("Text length:", textLength);
  console.dir(event.state.session, { depth: null });

  // Return the updated state
  return state;
}

return action(state, event, { bp });
