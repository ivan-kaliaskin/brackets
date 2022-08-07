module.exports = function check(str, bracketsConfig) {
  const oAntipods = {
    '(': ')',
    '[': ']',
    '{': '}',
    '|': '|',
    '1': '2',
    '3': '4',
    '5': '6',
    '7': '7',
    '8': '8'
  }
  const nCycles = str.length / 2
  let aBrackets = str.split('')

  for (let j = 0; j < nCycles; j = j + 1) {
    for (let i = 0; i < aBrackets.length - 1; i = i + 1) {
      if (oAntipods[aBrackets[i]] === aBrackets[i + 1]) {
        aBrackets[i] = '0'
        aBrackets[i + 1] = '0'
      }
    } // end for i
    aBrackets = aBrackets.filter(element => element !== '0')
  } //end for j

  return !aBrackets.length
}
