export const Criminal = (criminal) => {
    return `
    <h2>${criminal.name}</h2>
    <p>Age: ${criminal.age}</p>
    <p>Crime: ${criminal.conviction}</p>
    <p>Term Start: ${criminal.incarceration.start}</p>
    <p>Term End: ${criminal.incarceration.end}</p>
    `
}