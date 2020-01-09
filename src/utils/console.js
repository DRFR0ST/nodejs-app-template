import chalk from "chalk";

const types = {
    "INFO":"INFO",
    "WARNING":"WARN",
    "ERROR":"ERR",
    "DEBUG":"DEBUG"
}

export const info = (...args) => {
    console.log(chalk.gray(`[${types["INFO"]}]`), ...args);
}
export const warn = (...args) => {
    console.warn(chalk.yellow(`[${types["WARNING"]}]`), ...args);
}
export const error = (...args) => {
    console.error(chalk.red(`[${types["ERROR"]}]`), ...args);
}
export const debug = (...args) => {
    console.log(chalk.magenta(`[${types["DEBUG"]}]`), ...args);
}