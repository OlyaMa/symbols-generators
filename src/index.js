import Team from './js/team.js';

const team = new Team();

// Способ одного элемента из класса Team
console.log(team[Symbol.iterator]().next().value);

// Способ вызова всех элементов из класса Team по очереди в пределах количества characters в нем.
for (const character of team) {
  console.log(character);
}
