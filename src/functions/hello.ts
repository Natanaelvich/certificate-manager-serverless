export const handle = (event) => {
  return {
    statusCode: 201,
    body: {
      message: "Hello World",
    },
    headers: {
      "Content-Type": "application/json",
    },
  };
};
