type MyParameters<T> = T extends (...args: infer A) => unknown
  ? A
  : never
