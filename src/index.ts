import erorrs from "./errors.json";

// Useless keyword
const REGEX =
  /(failed to execute message; message index: \d:|dispatch:|reply:|: execute wasm contract failed|Generic error:)/g;

const readError = (message: string) => {
  try {
    const str = message.replace(REGEX, "").trim();
    for (const [key, value] of Object.entries(erorrs)) {
      if (str.includes(key)) {
        return uppercaseFirstLetter(value);
      }
    }
    return uppercaseFirstLetter(str);
  } catch {
    return undefined;
  }
};

export default readError;

const uppercaseFirstLetter = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1);
