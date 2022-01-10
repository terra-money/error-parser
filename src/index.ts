// Useless keyword
const REGEX =
  /(failed to execute message; message index: \d:|dispatch:|reply:|: execute wasm contract failed|Generic error:)/g;

export const parse = (message: string) => {
  try {
    const str = message.replace(REGEX, "").trim();
    return str;
  } catch {
    return "";
  }
};
