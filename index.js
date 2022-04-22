const core = require('@actions/core')
const github = require('@actions/github')

try {
    // ' what-to-do' input defined in action metadata file
    const whatToDo = core.getInput('what-to-do');
    console.log(`we will do ${whatToDo}!`)
    const day = (new Date()).toDateString();
    core.setOutput("day", day);
    // Get the JSON webhook payload for the event that tiggers the action
    const payload = JSON.stringify(github.context.payload);
    console.log(`The event payload: ${payload}`)

} catch (error) {
    core.setFailed(error.message)
}