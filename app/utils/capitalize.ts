export default function capitalize(word: string): string {
  let firstLetter = word[0];
  let rest = word.slice(1).split('');

  rest.unshift(firstLetter.toUpperCase());

  return rest.join('');
}
