const heroes = [
  {
    id: 1,
    name: "Ironman",
    owner: "Marvel",
  },
  {
    id: 2,
    name: "Superman",
    owner: "DC",
  },
  {
    id: 3,
    name: "Spiderman",
    owner: "Marvel",
  },
  {
    id: 4,
    name: "Batman",
    owner: "DC",
  },
];

const findHeroById = (id: number) => {
  return heroes.find((hero) => hero.id === id);
};

const myHero = findHeroById(1);

console.log(myHero?.name ?? "Hero not found");
