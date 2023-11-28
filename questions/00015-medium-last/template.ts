type Last<T extends unknown[]> = T extends [...unknown[], infer last]
  ? last
  : never
