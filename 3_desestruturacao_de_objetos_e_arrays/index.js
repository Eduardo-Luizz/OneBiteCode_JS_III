// Sem desestruturação
const person = {
    name: "Luke",
    job: "Farmer",
    parents: ["Anakin", "Padme"]
}
const name = person.name
//

// Com desestruturação de objeto
const { job, parents } = person
console.log(name, job, parents)
//

// Com desestruturação de array
const [father, mother] = parents
console.log(father, mother)
//

function createUser({ name, job, parents }) {
    const id = Math.floor(Math.random() * 9999)
    return {
        id,
        name,
        job,
        parents
    }
}
const luke = createUser(person)
console.log(luke)