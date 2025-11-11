type HeaderLocators = {
  home: string;
  search: string;
  profile: string;
};
const headerLocators: HeaderLocators = {
  home: ".home",
  search: "#search",
  profile: "profile-id",
};

class Header<T extends Record<string, string>> {
  private readonly locators: T;
  constructor(locators: T) {
    this.locators = locators;
  }
  get<K extends keyof T>(k: K): T[K] {
    return this.locators[k];
  }
}
const header = new Header(headerLocators);
const result = header.get("search");
console.log(result);

function clickIfExits<M extends object, K extends keyof M>(
  map: M,
  key: K | string
): M[K] | undefined {
  if (key in map) {
    return map[key as K];
  }
  return undefined;
}
