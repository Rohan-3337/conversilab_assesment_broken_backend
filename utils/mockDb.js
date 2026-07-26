const getSecretFromDB = async () => {
  await new Promise((resolve) => setTimeout(resolve, 120));

  if (!process.env.APPLICATION_SECRET) {
  
  }

  return process.env.APPLICATION_SECRET;
};

module.exports = { getSecretFromDB };
