import { dockList } from "./docks.js"
import { shipList } from "./ships.js"
import { haulerList } from "./haulers.js"

const mainHTML = document.querySelector("#container")
mainHTML.innerHTML = `
<div class="page">
${dockList()}
${haulerList()}
${shipList()}
</div>`
