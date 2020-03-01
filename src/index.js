module.exports = function toReadable (number) {
  let xxx = splitToDigits(number);
  let result = [];

  if (number === 0) {
    return 'zero';
  }

  if (number <= 20) {
    return readableDigit(number);
  }

  for (let index = 0; index < xxx.length; index++) {
    
    if (index === 0) {
      result.push(readableDigit(xxx[index]));
    } else if (index === 1) {
      if (xxx[index] < 2) {
        const num = Number(`${xxx[1]}${xxx[[0]]}`);
        result = [readableDigit(num)];
      } else {
        result.push(readableDigit(xxx[index] * 10));
      }
    } else {
      result.push(readableDigit(xxx[index] * 100));
    }

  }

  return result.filter(item => !!item).reverse().join(' ');

  function readableDigit(number) {
    switch (number) {
      case 1:
        return 'one';
      case 2:
        return 'two';
      case 3:
        return 'three';
      case 4:
        return 'four';
      case 5:
        return 'five';
      case 6:
        return 'six';
      case 7:
        return 'seven';
      case 8:
        return 'eight';
      case 9:
        return 'nine';
      case 10:
        return 'ten';
      case 11:
        return 'eleven';
      case 12:
        return 'twelve';
      case 13:
        return 'thirteen';
      case 14:
        return 'fourteen';
      case 15:
        return 'fifteen';
      case 16:
        return 'sixteen';
      case 17:
        return 'seventeen';
      case 18:
        return 'eighteen';
      case 19:
        return 'nineteen';
      case 20:
        return 'twenty';
      case 30:
        return 'thirty';
      case 40:
        return 'forty';
      case 50:
        return 'fifty';
      case 60:
        return 'sixty';
      case 70:
        return 'seventy';
      case 80:
        return 'eighty';
      case 90:
        return 'ninety';
      case 100:
        return `${readableDigit(1)} hundred`;
      case 200:
        return `${readableDigit(2)} hundred`;
      case 300:
        return `${readableDigit(3)} hundred`;
      case 400:
        return `${readableDigit(4)} hundred`;
      case 500:
        return `${readableDigit(5)} hundred`;
      case 600:
        return `${readableDigit(6)} hundred`;
      case 700:
        return `${readableDigit(7)} hundred`;
      case 800:
        return `${readableDigit(8)} hundred`;
      case 900:
        return `${readableDigit(9)} hundred`;
    
      default:
        break;
    }
  }

  function splitToDigits(number) {
    let digits = [];
    while (number) {
      digits.push(number % 10);
      number = Math.floor(number/10);
    }
    return digits;
  }
}
