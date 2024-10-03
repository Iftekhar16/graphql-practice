let games = [
  { id: '1', title: 'Zelda, Tears of the Kingdom', platform: ['Switch'] },
  { id: '2', title: 'Final Fantasy 7 Remake', platform: ['PS5', 'Xbox'] },
  { id: '3', title: 'Elden Ring', platform: ['PS5', 'Xbox', 'PC'] },
  { id: '4', title: 'Mario Kart', platform: ['Switch'] },
  { id: '5', title: 'Pokemon Scarlet', platform: ['PS5', 'Xbox', 'PC'] }
];

let authors = [
  { id: '1', name: 'mario', verified: true },
  { id: '2', name: 'yoshi', verified: false },
  { id: '3', name: 'peach', verified: true }
];

let reviews = [
  { id: '1', rating: 9, content: 'A fantastic remake with great visuals and improved combat mechanics.', author_id: '1', game_id: '2' },
  { id: '2', rating: 10, content: 'An iconic game with captivating storylines and breathtaking open-world design.', author_id: '1', game_id: '1' },
  { id: '3', rating: 9, content: 'Challenging combat, immersive world, and deep lore make this a must-play.', author_id: '2', game_id: '3' },
  { id: '4', rating: 5, content: 'Fun but lacks the depth of other installments in the series.', author_id: '2', game_id: '5' },
  { id: '5', rating: 9, content: 'Incredible gameplay with unique features and engaging story progression.', author_id: '3', game_id: '2' }
];

export default { games, authors, reviews }