export const rnd = (min, max) => {
  return Math.round(min + Math.random() * (max - min));
};

export const rndCellsCoords = (qnt, coordinates) => {
  let coords = coordinates.slice(0);
  coords.sort(()=>{
    return Math.random() > 0.5;
  });
  coords = coords.slice(0,qnt);
  return coords;
};

export const rndCellCoords = max => {
  return {
    x: rnd(0, max),
    y: rnd(0, max),
  }
};
