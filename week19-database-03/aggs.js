[
  {
    $match: {
      accommodates: {
        $gt: 8,
      },
      price: {
        $lt: 500,
      },
      amenities: 'Hair dryer',
    },
  },
  {
    $sort: {
      price: 1,
    },
  },
  {
    $project: {
      name: 1,
      amenities: 1,
      price: 1,
      images: 1,
      description: 1,
    },
  },
  {
    $limit: 5,
  },
];
