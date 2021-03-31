import { rl } from "../interface";

function ask(question: string, reader = rl): Promise<string> {
  return new Promise((resolve, reject) => {
    reader.question(question, (reader) => {
      if (reader !== "") {
        resolve(reader);
      } else if (reader === "") {
        reject(new Error("Invalid input"));
      }
    });
  });
}

// Leave line below for tests to work properly
export default ask;
