const main = async (getGasUsed) => {
  // Do something that uses gas

  const gasAmount = await getGasUsed();

  console.log(`Gas used: ${gasAmount}`);
};

// Assuming getGasUsed is a function that retrieves the amount of gas used
main(getGasUsed);
