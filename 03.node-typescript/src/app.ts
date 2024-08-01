import { findHeroById } from "./services/hero.service";

const myHero = findHeroById(2);

console.log(myHero?.name ?? "Hero not found");
