const faker = require('faker')

const randFrom = (arr=[]) => {
  const i = Math.floor(Math.random() * arr.length)
  return arr[i]
}

const genSentence = () => {
  return [
    randFrom([
      `How to`,
      `You're doing it wrong:`,
      `People`,
      `Experts`
    ]),
    randFrom([
      `start working out`,
      `solve world hunger`,
      `tokenize assets`
    ]),
    randFrom([
      `at Google`,
      `while you sleep`,
      `like a real developper`,
      `for $0.99`
    ]),
    randFrom([
      `using docker`,
      `with ${faker.name.findName()}`
    ])
  ].join(' ')
}

const sentence = genSentence()

console.log(sentence)
