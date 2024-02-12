import { getHaulers, getShips } from "./database.js"



export const haulerList = () => {
    const haulers = getHaulers()
    let haulersHTML = "<ul>"
    for (const hauler of haulers) {
        haulersHTML += `<li data-id="${hauler.id}" 
        data-type="hauler"
        class="list">${hauler.name}</li>`

    }
    haulersHTML += "</ul>"
    return haulersHTML
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.dataset.type === "hauler") {
            const haulerId = itemClicked.dataset.id
            let shipCounter = 0
            const ships = getShips()
            for (const ship of ships) {
                if (parseInt(haulerId) === ship.haulerId) {
                    shipCounter++
                }
            }
            window.alert(`This Hauler is carrying ${shipCounter} shipping ships`)
        }

    }

)