import { getShips, getHaulers } from "./database.js"

export const shipList = () => {
    const ships = getShips()
    let shipsHTML = "<ul>"
    for (const ship of ships) {
        shipsHTML += `<li data-name="${ship.name}"
        data-haulerid="${ship.haulerId}"
        data-type="ship"
        class="list">${ship.name}</li>`

    }
    shipsHTML += "</ul>"
    return shipsHTML
}
document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        // Was a shipping ship list item clicked?
        if (itemClicked.dataset.type === "ship") {
            const shipName = itemClicked.dataset.name
            const haulerId = itemClicked.dataset.haulerid
            let haulingShip = null
            const haulers = getHaulers()
            for (const hauler of haulers) {
                if (parseInt(haulerId) === hauler.id) {
                    haulingShip = hauler.name
                    
                }
               
            }
            window.alert(`${shipName} is being hauled by The ${haulingShip}`)  
        }

        // Get the haulerId value of the shipping ship clicked

        // Define a default object for the found hauler


        // Iterate the array of hauler objects

        // Does the haulerId foreign key match the id of the current hauler?

        // Reassign the value of `haulingShip` to the current hauler

        // Show an alert to the user with this format...
        // Palais Royal is being hauled by Seawise Giant
    }
)