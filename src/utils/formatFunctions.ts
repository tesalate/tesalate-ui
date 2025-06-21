export const exampleFunction = (): number => {
  return 1;
};
export const numberWithCommas = (x: number) => {
  return x
    .toFixed(0)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const toTitleCase = (str: string) => {
  // return [...str.split("")].map((w, i) => i === 0 ? w[0].toUpperCase() : w).join('')
  return str.replace(/\w\S*/g, (t) => {
    return t.charAt(0).toUpperCase() + t.substr(1).toLowerCase();
  });
};

export const removeEmpty = (obj: Record<any, any>): Record<any, any> => {
  return Object.fromEntries(
    Object.entries(obj)
      .filter(([_, v]) => v != null)
      .map(([k, v]) => [k, v === Object(v) ? removeEmpty(v) : v])
  );
};

export const shortenNumber = (num: number) => {
  if (typeof num !== 'number') {
    throw new TypeError('Expected a number');
  }

  if (num > 1e19) {
    throw new RangeError('Input expected to be < 1e19');
  }

  if (num < -1e19) {
    throw new RangeError('Input expected to be > -1e19');
  }

  if (Math.abs(num) < 1000) {
    return num;
  }

  let shortNumber: any;
  let exponent: number;
  let size: number;
  const sign = num < 0 ? '-' : '';
  const suffixes: Record<string, number> = {
    K: 6,
    M: 9,
    B: 12,
    T: 16,
  };

  num = Math.abs(num);
  // eslint-disable-next-line prefer-const
  size = Math.floor(num).toString().length;

  // eslint-disable-next-line prefer-const
  exponent = size % 3 === 0 ? size - 3 : size - (size % 3);
  shortNumber = Math.round(10 * (num / Math.pow(10, exponent))) / 10;

  for (const suffix in suffixes) {
    if (exponent < suffixes[suffix]) {
      shortNumber += suffix;
      break;
    }
  }

  return sign + shortNumber;
};
