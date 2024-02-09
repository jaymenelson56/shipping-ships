const database = {
    docks: [
        {
            id: 1,
            location: "Shanghai, China",
            volume: 43.5
        },
        {
            id: 2,
            location: "Busan, South Korea",
            volume: 21.6
        },
        {
            id: 3,
            location: "Rotterdam, The Netherlands",
            volume: 14.35
        },
        {
            id: 4,
            location: "Antwerp Belgium",
            volume: 12.04
        },
    ],
    haulers: [
        {
            id: 1,
            name: "Pioneer Spirit",
            dockId: 1,
        },
        {
            id: 2,
            name: "Boaty Mcboatface",
            dockId: 1,
        },
        {
            id: 3,
            name: "Seawise Giant",
            dockId: 1,
        },
        {
            id: 4,
            name: "Grabber",
            dockId: 2,
        },
        {
            id: 5,
            name: "Getter",
            dockId: 2,
        },
        {
            id: 6,
            name: "Receiver",
            dockId: 3,
        },
        {
            id: 7,
            name: "Gimme",
            dockId: 4,
        },

    ],
    ships: [
        {
            id: 1,
            name: "Esso Atlantic",
            haulerId: 1,
        },
        {
            id: 2,
            name: "Prairial",
            haulerId: 1,
        },
        {
            id: 3,
            name: "Palais Royal",
            haulerId: 2,
        },
        {
            id: 4,
            name: "Rivoli",
            haulerId: 2,
        },
        {
            id: 5,
            name: "Champs Elysee",
            haulerId: 3,
        },
        {
            id: 6,
            name: "Ever Ace",
            haulerId: 3,
        },
        {
            id: 7,
            name: "Nissei Maru",
            haulerId: 4,
        },
        {
            id: 8,
            name: "MSC Gulsun",
            haulerId: 4,
        },
        {
            id: 9,
            name: "HMM Rotterdam",
            haulerId: 5,
        },
        {
            id: 10,
            name: "CMA CGM Trocadero",
            haulerId: 5,
        },
        {
            id: 11,
            name: "Rusty Bucket Bay",
            haulerId: 6,
        },
        {
            id: 12,
            name: "St. Anne",
            haulerId: 6,
        },
        {
            id: 13,
            name: "Helios",
            haulerId: 7,
        },
        {
            id: 14,
            name: "King of the Red Lions",
            haulerId: 7,
        },
    ]
}
 export const getDocks = () => {
    return database.docks.map(dock => ({...dock}))
 }