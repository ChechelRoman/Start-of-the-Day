export const capitalizeWords = (words: string | undefined) => {
  if (words !== undefined) {
    return words.split(' ').map((word) => word[0].toUpperCase() + word.slice(1)).join(' ');
  }

  return
};
