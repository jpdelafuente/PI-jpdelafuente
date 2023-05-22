module.exports = (arr) => {
    arr.map(elem => {
        return {
            id: elem.id,
            name: elem.name,
            image: elem.image,
            summary: elem.summary,
            healthScore: elem.healthScore,
            instructions: elem.instructions
        }
    })
}