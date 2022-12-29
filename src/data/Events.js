const events = [
    {
      _id: "1",
      name: "Fredagsbar",
      image:
        "data:image/jpeg;base64,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",
      description:
      '*Discription*',

      price: 0,
      countInStock: 3,
      rating: 4,
      numReviews: 4,
    },
    {
      _id: "2",
      name: "Oplæg: Lær at hjernelande",
      image:
        "https://papeco.dk/wp-content/uploads/2021/01/Laer-at-hjernelande-og-sove-godt.jpg",
      description:
      '*Discription*',

      price: 0,
      countInStock: 10,
      rating: 4.5,
      numReviews: 2,
    },
    {
      _id: "3",
      name: "Hvad er bæredygtighed? Lær alt om det nye emne, der afgør fremtiden for Deloitte",
      image:
        "https://images.squarespace-cdn.com/content/v1/5e2ae6fe157ded308b13000e/1612733844861-3UQ6ZS7DJAEVV6QYC622/B%C3%A6redygtighed-diagram.png?format=1000w",
      description:
      '*Discription*',

      price: 0,
      countInStock: 0,
      rating: 4,
      numReviews: 2,
    }
];
export default events;