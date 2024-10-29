  /**
   * Small description of your action
   * @title The title displayed in the flow editor
   * @category Custom
   * @author Your_Name
   * @param {string} name - An example string variable
   * @param {any} value - Another Example value
   */
  function action(bp, event) {
    // Capture the user input text and store it in the 'userQuery' variable
    const userQuery = event.payload.text

    // Set the 'userQuery' variable to be accessible in the flow
    bp.dialog.setVar(event, 'userQuery', userQuery)

    return Promise.resolve()
  }