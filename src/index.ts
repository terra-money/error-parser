import erorrs from "./errors.json";

const readError = (message: string) => {
  const data = Object.entries(erorrs).map(([key, value]) => {
    return { key, value };
  });

  for (const error of data) {
    const { key, value } = error;
    if (message.includes(key)) {
      // uppercase first letter
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  }
  return undefined;
};

export default readError;
