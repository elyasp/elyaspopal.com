const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

const generateBoxShadow = () =>
  `${getRandomInt(2000)}px ${getRandomInt(2000)}px white`;

export const repeatBoxShadows = (numberOfShadows) =>
  Array.from(Array(numberOfShadows))
    .map((x) => generateBoxShadow())
    .toString();
