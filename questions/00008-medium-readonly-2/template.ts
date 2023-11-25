// type MyReadonly2<T, K extends keyof T = keyof T > =
//     Readonly<Pick<T, K>> & Omit<T, K>

type Readonly8<T> = {
  readonly [key in keyof T]: T[key]
}
type Exlude8<T, K> = T extends K ? never : T
type Pick8<T, K extends keyof T> = {
  [P in K]: T[P];
}
type Omit8<T, K> = Pick8<T, Exlude8<keyof T, K>>

type MyReadonly2<T, K extends keyof T = keyof T > =
    Readonly<Pick<T, K>> & Omit<T, K>

// my not perfect solution
// type MyReadonly2<T, K extends keyof T = keyof T > = {
//   readonly [readonlyKey in K]: T[readonlyKey];
// } & {
//   [key in Exlude8<keyof T, K>]: T[key];
// }

