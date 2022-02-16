import Video from '../models/Video'
import faker from '@faker-js/faker'

export async function VideoSeeder () {
    const records = [];
    for(let i = 0; i < 1000; i++) {
        records.push({
            name: faker.vehicle.vehicle(),
            url: faker.internet.url(),
            thumbnailUrl: faker.image.food(),
            isPrivate: faker.datatype.boolean(),
            timesViewed: faker.datatype.number(1000)
        })
    }

    try {
        await Video.insertMany(records)
    } catch (e) {
        console.log(e)
    }
}