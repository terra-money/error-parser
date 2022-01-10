// Useless keyword
const REGEX =
  /(failed to execute message; message index: \d:|dispatch:|reply:|: execute wasm contract failed|Generic error:)/g;

const readError = (message: string) => {
  const str = message.replace(REGEX, "").trim();
  return str;
};

export default readError;
