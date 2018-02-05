function toRem(...value) {
  const rootUnitSize = 16;
  if (!value || !value.length) return;
  return value
    .map((val) => {
      if (typeof val === 'string') {
        return val.replace(/([0-9]+)px/g, (match, p1) => `${p1 / rootUnitSize}rem`);
      } else if (typeof val === 'number') {
        return `${val / rootUnitSize}rem`;
      }
      return val;
    })
    .reduce((acc, val) => (`${acc} ${val}`), '');
}

export default toRem;
