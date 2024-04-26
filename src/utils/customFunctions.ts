/**
 * to verify the argument value/string is false, null, undefined, empty or length is 0 then true else false.
 * @param {unknown} checkValue multiple parameters which are string variables.
 * @returns boolean value.
 */
export const isEmpty = (orgValue: unknown): boolean => {
  let checkValue = orgValue;
  if (typeof orgValue === 'number') checkValue = String(orgValue);
  if (checkValue === false) return !checkValue;
  if (checkValue === true) return !checkValue;
  return (
    checkValue === null ||
    checkValue === 'undefined' ||
    checkValue === 'null' ||
    checkValue === undefined ||
    checkValue === '' ||
    (typeof checkValue === 'string' && checkValue.trim() === '') ||
    (Array.isArray(checkValue) && checkValue.length === 0) ||
    Object.keys(checkValue).length === 0
  );
};
