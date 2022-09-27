export const sortArr = (prev, next) => {
  if (prev.order > next.order) {
    return 1;
  }
  if (prev.order < next.order) {
    return -1;
  }
  return 0;
};
