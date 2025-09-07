export const logMiddleware = (message) => {
  const log = `[${new Date().toISOString()}] ${message}`;
  console.log(log); // Replace with logging library if needed
};
