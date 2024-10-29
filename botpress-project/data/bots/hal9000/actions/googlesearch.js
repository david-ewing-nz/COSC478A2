  async function searchGoogle(state, event, { bp }) {
    const query = state.query // User's search query
    const apiKey = process.env.GOOGLE_API_KEY //const apiKey = 'AIzaSyA9QBxdGeyayIOfG_0AeVM6Zvo7avRbW_c'; // Replace with your Google API key
    const cx = '805f2a3e19fcb4cc2' // Replace with your CSE ID
    const url = `https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(query)}&key=${apiKey}&cx=${cx}`

    try {
      const response = await bp.http.get(url)
      const results = response.data.items || []
      return { ...state, results, found: results.length > 0 }
    } catch (error) {
      bp.logger.error('Error searching Google:', error)
      return { ...state, found: false, error: true }
    }
  }

  return searchGoogle