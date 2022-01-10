// Useless keyword
const REGEX =
  /(failed to execute message; message index: \d:|dispatch:|reply:|: execute wasm contract failed|Generic error:)/g;

const parse = (message: string) => {
  if (typeof message !== "string") {
    throw new TypeError("message type is not a string");
  }

  const str = message.replace(REGEX, "").trim();
  return str;
};

export default parse;
