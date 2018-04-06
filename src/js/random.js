export const random = (min, max) => {
    return Math.round(min + Math.random() * (max - min));
};

export const randomCellsCoordinates = (qnt, maxCellNum) => {
    let randomCellsCoordinates = [];
    for(let i=0;i<qnt;i++){
        randomCellsCoordinates.push({
            x: random(0,maxCellNum),
            y: random(0,maxCellNum),
        });
    }
    return randomCellsCoordinates;
};