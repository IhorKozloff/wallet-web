export const sumConverter = (sum: number): string => {
    if(sum === 0) {
        return '0.00';
    }
    const sumStr = sum.toFixed(2).toString();

    switch (sumStr.length) {
    case 7:
        return sumStr[0] + ' ' + sumStr.slice(1, sumStr.length);
    case 8:
        return sumStr[0] + sumStr[1] + ' ' + sumStr.slice(2, sumStr.length);
    case 9:
        return (
            sumStr[0] +
          sumStr[1] +
          sumStr[2] +
          ' ' +
          sumStr.slice(3, sumStr.length)
        );
    case 10:
        return (
            sumStr[0] +
          ' ' +
          sumStr[1] +
          sumStr[2] +
          sumStr[3] +
          ' ' +
          sumStr.slice(4, sumStr.length)
        );
    case 11:
        return (
            sumStr[0] +
          sumStr[1] +
          ' ' +
          sumStr[2] +
          sumStr[3] +
          sumStr[4] +
          ' ' +
          sumStr.slice(5, sumStr.length)
        );
    case 12:
        return (
            sumStr[0] +
          sumStr[1] +
          sumStr[2] +
          ' ' +
          sumStr[3] +
          sumStr[4] +
          sumStr[5] +
          ' ' +
          sumStr.slice(6, sumStr.length)
        );
    case 13:
        return (
            sumStr[0] +
          ' ' +
          sumStr[1] +
          sumStr[2] +
          sumStr[3] +
          ' ' +
          sumStr[4] +
          sumStr[5] +
          sumStr[6] +
          ' ' +
          sumStr.slice(7, sumStr.length)
        );
    default:
        return sumStr;
    }
};