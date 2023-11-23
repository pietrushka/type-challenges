type MyExlude1<T, K> = T extends K ? never : T
type MyPick1<T, K extends keyof T> = { [P in K]: T[P] }
type MyOmit<T, K extends keyof T> = MyPick1<T, MyExlude1<keyof T, K>>
