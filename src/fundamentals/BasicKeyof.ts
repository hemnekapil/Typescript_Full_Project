function getProp<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

type Config = {
  baseUrl: string;
  retries: number;
  headless: boolean;
};
const cfg: Config = {
  baseUrl: "Kpie.ks",
  retries: 3,
  headless: true,
};

const url = getProp(cfg, "baseUrl");
const retries = getProp(cfg, "retries");

console.log(url, retries + 1);

function logProperty<T>(obj: T, key: keyof T) {
  console.log(`${String(key)}:${getProp(obj, key)}`);
}

logProperty(cfg, "baseUrl");
type LocatorMap = {
  loginButton: string;
  userInput: string;
  passwordInput: string;
};

const locators: LocatorMap = {
  loginButton: "#login",
  userInput: "#user",
  passwordInput: "#pass",
};
//Helper that accepts only valid keys from locatermap
function getSelector<M, K extends keyof M>(map: M, key: K): M[K] {
  return map[key];
}

const sel = getSelector(locators, "userInput");

console.log(sel);
