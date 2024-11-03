 
   function action(state, event, { bp }) {
    const previousQText = event.state.session.iniT;
    const initialQuery = event.payload.text;
    const QueryLength = initialQuery.length;
  
    // Store in session (persists across nodes)
    event.state.session.iniQ = initialQuery;
    event.state.session.Qlen = QueryLength;
    console.log("Retrieved user query from session:", previousQText);
    console.log('event.state.session query:', initialQuery);
    console.dir(event.state.session, { depth: null });
  
    return state; // or return event.state if using session data
    }
    return action(state, { bp })
    //return action(state, { bp })


