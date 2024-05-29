export const requestAnimationFramePromise = () =>
  new Promise((resolve, reject) => {
    if (typeof window === 'undefined') {
      reject('Window is not defined for requestAnimationFrame');
    }
    requestAnimationFrame(resolve);
  });

export const parseResponse = <T>(r: string) => {
  try {
    const res: T = JSON.parse(r);
    return res;
  } catch (err) {
    console.error(err);
    return undefined;
  }
};
