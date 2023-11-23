type Length<T extends readonly unknown[]> = T['length']

// another solution from video
// type Length<T extends readonly unknown[]> =
//     T extends { length: infer L }
//       ? L
//       : never
