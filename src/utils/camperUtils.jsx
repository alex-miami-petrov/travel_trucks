export const calculateAverageRating = (reviews = [], defaultRating = 0) => {
  return reviews.length
    ? reviews.reduce((sum, review) => sum + Number(review.reviewer_rating), 0) /
        reviews.length
    : defaultRating;
};

export const featureIcons = [
  { key: "AC", label: "AC", icon: "icon-ac" },
  { key: "transmission", label: "Automatic", icon: "icon-trans" },
  { key: "kitchen", label: "Kitchen", icon: "icon-kitchen" },
  { key: "TV", label: "TV", icon: "icon-tv" },
  { key: "bathroom", label: "Bathroom", icon: "icon-bath" },
];
