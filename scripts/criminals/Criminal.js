export const Criminal = (criminal) => {
    return `
    <h2>${criminal.name}</h2>
    <p>${criminal.age}</p>
    <p>${criminal.conviction}</p>
    <p>${criminal.incarceration.start}</p>
    <p>${criminal.incarceration.end}</p>
    `
}