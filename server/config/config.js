import dotenv from 'dotenv';
dotenv.config();
export const config = {
    mongoDB: {
      uri: process.env.DATABASE_URL,
      options: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        poolSize: 10,
        connectTimeoutMS: 10000,
        socketTimeoutMS: 45000,
      },
    },
  };
  