//const require = require("esm")(module);
const axios = require("axios"); // Import Axios for HTTP requests

async function searchGoogle(state, event, { bp }) {
  // Retrieve the query from session
  const query = event.state.session.query || "christchurch"; // Replace "christchurch" with a default or test query if needed
  const apiKey = process.env.GOOGLE_API_KEY || "AIzaSyA9QBxdGeyayIOfG_0AeVM6Zvo7avRbW_c"; // Ensure to use environment variable in production
  const cx = process.env.GOOGLE_CX || "805f2a3e19fcb4cc2"; // Custom Search Engine (CSE) ID

  const url = `https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(query)}&key=${apiKey}&cx=${cx}`;

 event.state.session.query = query
 event.state.session.apiKey = apiKey
 event.state.session.cx = cx
 event.state.foo ="bar"
 event.state.found =true
 event.state.error =false







  try {
    // Make the HTTP GET request to Google Custom Search API
    const response = await axios.get(url);
    
    // Retrieve the search results
    const results = response.data.items || [];
    console.dir(results, { depth: null }); // Log results for debugging
    
    // Return updated state with results
    return {
      ...state,
      results,
      found: results.length > 0,
      query
    };
  } catch (error) {
    // Log error details for debugging
    console.log('Error searching Google:', error.message);
    console.dir(error, { depth: null });

    // Return updated state with error information
    return {
      ...state,
      found: false,
      error: error.message
    };
  }
}



return action(event.state, event, { bp })
