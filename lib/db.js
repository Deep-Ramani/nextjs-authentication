import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://DeepRamani:fCLHCUlCewP7ruQo@cluster0.g1y50.mongodb.net/authentication?retryWrites=true&w=majority"
  );

  return client;
}
