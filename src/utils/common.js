const getDataType = (data) =>
  Object.prototype.toString.call(data).replace(/\[|\]|(object)|\s/g, '');

export const isKeyInObject = (obj, key) =>
  Object.prototype.hasOwnProperty.call(obj, key);

export default getDataType;
