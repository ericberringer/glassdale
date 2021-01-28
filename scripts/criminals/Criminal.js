export const Criminal = (criminal) => {
    return `
    <article class="criminal"
        <h2>${criminal.name}</h2>
        <p>Age: ${criminal.age}</p>
        <p>Crime: ${criminal.conviction}</p>
        <p>Term Start: ${new Date(criminal.incarceration.start).toLocaleDateString('en-US')}</p>
        <p>Term End: ${new Date(criminal.incarceration.end).toLocaleDateString('en-US')}</p>
    </article>
    `
}