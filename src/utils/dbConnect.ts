import mongoose from "mongoose";

interface ConnectionOptionsExtend extends mongoose.ConnectOptions {
  useNewUrlParser: boolean;
  useFindAndModify: boolean;
  useUnifiedTopology: boolean;
  useCreateIndex: boolean;
}

const MONGODB_URI = process.env.MONGODB_URI;

async function dbConnect() {
  const opts: ConnectionOptionsExtend = {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  };

  await mongoose.connect(`${MONGODB_URI}`, opts).then((mongoose) => {
    return mongoose;
  });
}

export default dbConnect;
