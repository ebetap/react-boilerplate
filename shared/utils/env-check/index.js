export const isBrowser =
  typeof window !== 'undefined' && {}.toString.call(window) === '[object Window]';
export const isNode = typeof process !== 'undefined' && process.title === 'node';
export function isWindowSupported() {
  let supported = false;
  try {
    supported = !!window;
  } catch (e) {
    // console.log('No support for window!');
  }
  return supported;
}
