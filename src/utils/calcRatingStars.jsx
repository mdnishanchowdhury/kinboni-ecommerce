// Converts average rating to array for full/half/empty stars
export const getStarsArray = (avgRating, maxStars = 5) => {
  const stars = [];
  for (let i = 1; i <= maxStars; i++) {
    if (avgRating >= i) {
      stars.push("full");
    } else if (avgRating >= i - 0.5) {
      stars.push("half");
    } else {
      stars.push("empty");
    }
  }
  return stars;
};