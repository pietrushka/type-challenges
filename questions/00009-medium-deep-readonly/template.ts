type DeepReadonly<T> = T extends Record<PropertyKey, unknown>
  ? {
      readonly [P in keyof T]: T[P] extends Record<PropertyKey, unknown>
        ? DeepReadonly<T[P]>
        : T[P] extends Array<unknown>
          ? DeepReadonly<T[P]>
          : T[P]
    }
  : T extends [infer Head, ...infer Tail]
    ? Readonly<[DeepReadonly<Head>, ...DeepReadonly<Tail>]>
    : Readonly<T>
