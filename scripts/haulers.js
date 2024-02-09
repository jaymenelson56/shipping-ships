import { getHaulers } from "./database.js"

export const haulerList = () => {
    const haulers = getHaulers()
    let haulersHTML = "<ul>"
    for (const hauler of haulers) {
        haulersHTML += `<li class="list">${hauler.name}</li>`
        
    }
    haulersHTML += "</ul>"
    return haulersHTML
}