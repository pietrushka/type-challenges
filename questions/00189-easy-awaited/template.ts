type Thenable<T> = { then: (onfulfilled: (...args: T[]) => unknown) => unknown }
type ExtendedPromise<T> = Promise<T> | Thenable<T>
type MyAwaited<T extends ExtendedPromise<unknown>> = T extends ExtendedPromise<infer U>
  ? U extends ExtendedPromise<unknown>
    ? MyAwaited<U>
    : U
  : T
