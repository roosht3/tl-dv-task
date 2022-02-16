import dotenv from 'dotenv'
dotenv.config({ path: '../.env' })

import Db from './db'
import {VideoSeeder} from './src/seeds/VideoSeeder'



(async () => {
    await Db();
    console.log('Seeding started....');
    await VideoSeeder();
    console.log('Seeded');
    process.exit();
})();