import { getDocks } from "./database.js"

export const dockList = () => {
    const docks = getDocks()
    let docksHTML = "<ul>"
    for (const dock of docks) {
        docksHTML += `<li class="list">${dock.location} Docks can hold ${dock.volume} million tons of cargo.</li>`
        
    }
    docksHTML += "</ul>"
    return docksHTML
}