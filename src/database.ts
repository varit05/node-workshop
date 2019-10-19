const MongoClient = require("mongodb").MongoClient;

export async function connect() {
  try {
    const client = await MongoClient.connect(process.env.DB_URI);
    const db = client.db(process.env.DB_NAME);
    return db;
  } catch (e) {
    console.log(e);
  }
}
