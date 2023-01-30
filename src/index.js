module.exports = function toReadable (number) {
  const digits = {
    0:"zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen"
  };
  const decimal = {
    10: "ten",
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety"
  };
  switch(number.toString().length) {
    case 1:  //до 10
    //console.log(number.toString().length);
    //console.log(`${number.toString().length}`);
    //console.log(`${digits[number]}`);
      return `${digits[number]}`;
      break;
    case 2: //до 100
      if(number.toString()[1] === '0') {
        //console.log(number.toString()[1]);
        //console.log(`${decimal[number]}`);
        return `${decimal[number]}`
      } else if(number.toString()[1] !== '0' && number < 20) {
        //console.log(number.toString()[1]);
        //console.log(`${digits[number]}`);
        return `${digits[number]}`
      } else {
        //console.log(number.toString()[0], number.toString()[1]);
        //console.log(`${decimal[number.toString()[0] * 10]} ${digits[number.toString()[1]]}`);
        return `${decimal[number.toString()[0] * 10]} ${digits[number.toString()[1]]}`
      }
      break;
    case 3:
      if(number.toString()[1] === '0' && number.toString()[2] === '0') {
        //console.log(`${digits[number.toString()[0]]} hundred`);
        return `${digits[number.toString()[0]]} hundred`;
      } else if(number.toString()[2] === '0') {
        //console.log(`${digits[number.toString()[0]]} hundred ${decimal[number.toString()[1] * 10]}`);
        return `${digits[number.toString()[0]]} hundred ${decimal[number.toString()[1] * 10]}`;
      } else if(number.toString()[1] === '0' && number.toString()[2] !== '0') {
        //console.log(`${digits[number.toString()[0]]} hundred ${digits[number.toString()[2]]}`);
        return `${digits[number.toString()[0]]} hundred ${digits[number.toString()[2]]}`
      } else {
        let num = number - number.toString()[0] * 100;
        //console.log(num);
        if(num > 20) {
          //console.log(`${digits[number.toString()[0]]} hundred ${decimal[number.toString()[1] * 10]} ${digits[number.toString()[2]]}`);
          return `${digits[number.toString()[0]]} hundred ${decimal[number.toString()[1] * 10]} ${digits[number.toString()[2]]}`;
        } else {
          //console.log(`${digits[number.toString()[0]]} hundred ${digits[num]}`);
          return `${digits[number.toString()[0]]} hundred ${digits[num]}`;
        }
      }
      break;
  }
}
