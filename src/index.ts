export interface IDictionary {
  [prop: string]: string;
}
export interface INestedDictionary {
  [prop: string]: IDictionary;
}

export const Hello = (worldName: string) => `Hello World - ${worldName}`;

export * from './dictionaries';

