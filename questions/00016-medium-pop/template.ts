type Pop<T extends unknown[]> = T extends [...infer Head, unknown]
  ? Head
  : T
