  const fallbackResponses = [
    "I'm sorry, I didn't quite catch that.",
    'Could you please rephrase?',
    "Hmm, I didn't understand. Could you try again?",
    "I'm here to help, but I didn’t quite follow that.",
    "Let's try that again. What would you like to know?",
    "I'm having trouble understanding. Can you say it differently?",
    'Oops, I missed that. Could you repeat it?',
    'I’m not sure I understand. Please clarify.',
    'Could you provide more details?',
    'Sorry, that didn’t make sense to me.'
  ]

  async function action(state, event, { bp }) {
    const randomResponse = fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)]
    bp.events.replyToEvent(event, [{ type: 'text', text: randomResponse }])
  }

  return run(state, event, { bp })