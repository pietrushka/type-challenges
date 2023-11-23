// type First<T extends any[]> = T[number] extends never ? T[number] : T[0]

type First<T extends any[]> = T extends [] ? never : T[0]
