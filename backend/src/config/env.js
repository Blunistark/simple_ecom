// Example environment config (stub)
export default {
  port: process.env.PORT || 5000,
  jwtSecret: process.env.JWT_SECRET || 'secret',
  mongoURI: process.env.MONGODB_URI,
};
