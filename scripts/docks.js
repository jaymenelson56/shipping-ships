import { getDocks, getHaulers } from "./database.js"

export const dockList = () => {
    const docks = getDocks()
    let docksHTML = "<ul>"
    for (const dock of docks) {
        docksHTML += `<li data-type="dock"
                        data-id="${dock.id}"
                        data-location="${dock.location}"
                        class="list">${dock.location} Docks can hold ${dock.volume} million tons of cargo.</li>`

    }
    docksHTML += "</ul>"
    return docksHTML
}
document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.dataset.type === "dock") {
            const dockLocation = itemClicked.dataset.location
            const dockId = itemClicked.dataset.id
            let ships = []
            const haulers = getHaulers()
            for (const hauler of haulers) {
                if (parseInt(dockId) === hauler.dockId) {
                    ships.push(hauler.name)
                }

            }


            if (ships.length === 0) {
                window.alert(`The ${dockLocation} dock is currently unloading nothing.`)
            } else {
                window.alert(`The ${dockLocation} dock is currently unloading ${ships.join(", ")}.`)
            }

        }

        /*
           
            use if statement ot make sure a dock is clicked.
            move the data you want from the clicked item into a variable
            get the haulers in a variable
            use for of loop to iterate them
            if statment to make sure hauler id matches dock id
            if only one matches use a window alert to which hauler the dock is unloading
            if two make sure to format properly, if none make sure to say it is service none.


        */
    }
)