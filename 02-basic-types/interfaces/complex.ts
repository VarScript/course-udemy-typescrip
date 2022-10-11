(() => {

    interface Client {
        name: string,
        age?: number,
        address?: Address
    }

    interface Address {
        id: number,
        zip: string,
        city: string
    }

    const client: Client = {
        name: 'Fabio',
        age: 21,
        address: {
            id: 120,
            zip: 'HS6',
            city: 'Roma'
        }
    }

    const client2: Client = {
        name: 'Any',
        age: 24,
        address: {
            id: 140,
            zip: 'HS6',
            city: 'China'
        }
    }
})()