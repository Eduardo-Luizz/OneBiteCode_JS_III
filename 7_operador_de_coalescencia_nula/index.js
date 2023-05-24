let a = 0
let b = a || 42
console.log({ a, b })

b = a ?? 42 // verifica se e nulo ou undefined
console.log({a, b})

let c = false ?? 42
console.log({c})