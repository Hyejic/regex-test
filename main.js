
const str = `
  010-1234-5678
  thesecon@gmail.com
  https://www.omdbapi.com/?apikey=2181d79b&s=frozen
  The quick brown fox jumps over the lazy dog.
  abbccccddddd
`

console.log(
  str.match(/.{1,}(?=@)/g), // ['  thesecon']
  str.match(/\b.{1,}(?=@)/g), // ['thesecon']
  str.match(/(?<=@).{1,}/g), // ['gmail.com']
)