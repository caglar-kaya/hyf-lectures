const { MongoClient } = require('mongodb');
const uri =
  'mongodb+srv://caglar:rJJ7E8yjzsSDwt3@cluster0.iwcdt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
client.connect(async (err) => {
  const collection = client
    .db('sample_airbnb')
    .collection('listingsAndReviews');
  // perform actions on the collection object
  const pipeline = [
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

  const agg = await collection.aggregate(pipeline).toArray();

  console.log(agg);

  client.close();
});
