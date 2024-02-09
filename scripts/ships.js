import { getShips } from "./database.js"

export const shipList = () => {
    const ships = getShips()
    let shipsHTML = "<ul>"
    for (const ship of ships) {
        shipsHTML += `<li class="list">${ship.name}</li>`
        
    }
    shipsHTML += "</ul>"
    return shipsHTML
}