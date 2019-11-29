export const generateId = function() {
  return `${Math.floor(Math.random() * 10000)}-${Math.floor(
    Math.random() * 10000
  )}`;
};