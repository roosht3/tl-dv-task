import { connect } from "mongoose";

const db = {
    host: process.env.TLDV_MONGODB_HOST,
    port: process.env.TLDV_MONGODB_PORT,
    username: process.env.TLDV_MONGODB_USER_NAME,
    password: process.env.TLDV_MONGODB_USER_PASS,
    name: process.env.TLDV_MONGODB_DB_NAME
}



const Db = async () => {
  try {
    const mongoURI: string = `mongodb://${db.username}:${db.password}@${db.host}:${db.port}/${db.name}`;
    await connect(mongoURI);
    console.log("MongoDB Connected...");
  } catch (err: any) {
    console.error(err.message);
    process.exit(1);
  }
};

export default Db;
