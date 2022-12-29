//Array.Filter kræver tal. Derfor: Fashion = 1, Health = 2, Insurance = 3, Food & Drinks = 4, Beauty = 5

const coupons = [
  {
    _id: "1",
    name: "Zalando",
    image:
      "https://play-lh.googleusercontent.com/5R-qNxFgUwa_YSqYUJdkfAEPVenTqkwd5SyYcOHUhajl76Pz2nuyyuROtKdgONWMOMQ",
    description:
      '*Discription*',
    discount: 5,
    category: 1,
    countInStock: 3,
    rating: 4,
    numReviews: 1,
    numClicks: 0,
  },
  {
    _id: "2",
    name: "SATS Medlemsskab",
    image:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPQAAADPCAMAAAD1TAyiAAAAkFBMVEUMITP///8AFisAAA3y8/QAABpgZ3HJzM8AEykACSR1e4MAABsAGi6boKUAECgAHTAAAB4AABYAABCCh44AACEAABeipqsACiQAAAkAABPj5ea2ub1PWGLCxcjt7u+JjpUoNUMAAACrrrPY2tw3QU4bKzuxtLhOV2FGT1uTl50+SFRZYWtnbncrOEbT1Nfd3uHpIop6AAAF9UlEQVR4nO2ae3eiPBDGuSoIchNFqlTrZVsvxe//7V6QkkwgsO2eY/E95/n9tSUhm4dJZiYTFQUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4Hm4SmGE4d2LLf8TwvmU782L8IHEfMfy/4MfRx2mV32638W62jRJZH1MnaNUzS+8jZe9aqTLZZcXw+ep0cRztV0T9heC4M1TOy8mLW3303OCoo7u9rKtq9PAaVK9q+mRPhleztf6Q1fQTXHOnNplGjWl5E6F9dDdWsGq9KIirRJuX12bL/tD+qr+K9dmaU2nto7gGY7G5Eh0Zkjc5E+veaSFr26SSqfwa2qFjyltqa/OPRLR77tWsuuUIesdqWIQDCS7w/a4pGx7v1ZJ3F21PezXfSmOaUjuXzKyhNCtR3jWpCRGt32Si0730xZppEQTc967W/DiYM9NGHXN6/bR5r2TWbC5F+0qvZvVceHj9peuLLIdz4HNiaGOcjWvPlM1JDuF7rTmXoq3WpxAw9MLQF/LglmVswazNwSQLxprpZmDqH1n1b9rLZL6IredStDZZTGvYKPtT/aj03TH3YvkxCoLU2pSfde8Pt58LY/Hoe6q8qRuNVOMsRFH3gxnvSkUrmv2Fww06mdcPS10pi4ZGWC3nJB6ri2YS8Lsk3EQsQnlnRQzRfF9ORNGMmGc3vqCHR/fVV3am+MHaeZieb0Fmy8Nywwzci728sYUhiuYGvQk5B9k9THSxch4i5fvYPIqeAnkX32JdLrFctL9lXRa2+DJrMOaPU/FDvA2blXqQO5eQ+aJxaslFk1HeRTPO+fCr5QN1/Ajuo0rVnqwHzy4+/Q7Rzpj1aUQiGhF3T6M6pIeNd8nRJ2JebOcoHaJTNkLW8FEeDeVPY+uErG9VvbZSBpu320qHaJKBzJqLxaHD5+Hgx+iKVDhXNg985Diy6RRNvGErnxZMrb5oQ3vuClc8WS4ioTXM6obXMkeTi+Y74KV9SNbHdHjj+Byq7SudlTqlK1xbs+d3lVLR/pF/Mrs1vOIIRw7DfY4VHoiFoCvZlku29vP7CpCKJiv4IrGj7wmqb1G7yxAE4vGS2yLmXuxQFQJloh22BVRpfuM7wpH9NHB1rCYR6iJ/WJbMk8jdm1OylOXeISuUjTvOi0uhYtRMc4fCOlIfXpsizdROuGiSvbQCVs2S1oymko0/CK5FVFdFTMWiBYBu0bbkoNYiIumAxMUPhEvqg7vK1KmsMtwWHbJqyGuPj4pIab1rPfw+NvfBVY0+PvVo5qJJ+rLrc1F85xc5/OPldKOR/51E27to8nevaFJ7uTSvqOixjfj4w5CizetWmmKsSotFQibVLZrc7DR8t2tNyBMiekDNvj5VjS1bkTFf3qfkL16Mik67AlZ8MNTTkmUr/AbIGO5qw3LvKcMmjTXf9zXnkwtaF4KiPi9GRJOrj43goKL7R8w/U88txvfe+LVQVzR/PE4dXY3daKscL/TesnDCMY9DqxmBdatFdwQsl1WN89lZUQ4zkopuhvLeyx7XXDhhssGN0OM4rTQ0ZJVwGrCSbc9CGUrzsfMCS72nicSL0RstSe7Na7x/Ykk3CYuBcu/eK9aNrVj8BHITrjpaoi1+LiXZeNCTvxodRdfH43XeJapZsUpNnki8C7G3JZpc29CMuifenYerIniHjt8QjIt4EnDnlIl5cks0OXALde20/YOOivWQOagbS38gMNXFXKxR82qK9nmt6ST+Iikcyb7qy3bgvNs8t3be+LPccCH3covGBmyKTngQODSWrTXfNGUbM33wCplrKpsxn1h+Ot7vpP2P/bimeefhjvKqIV/fp58s6p5Z2z8l0WXHw/PrapQ+xfHK95zwuL5OZpPLIZgnX0vZNWvat4ta3fRlMrv+W+qTtTj1zqNi+OuHEgVP8Yu5Ct/VLM/SHnYI8MvhrSepgQIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwP+R/wCNXFahI3P3KwAAAABJRU5ErkJggg==",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    discount: 10,
    category: 2,
    rating: 4,
    numReviews: 1,
    numClicks: 0,
  },
  {
    _id: "3",
    name: "WOLT",
    image:
      "data:image/png;base64,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",
    description:
    '*Discription*',
        discount: 7,
    category: 4,
    countInStock: 0,
    rating: 3,
    numReviews: 1,
    numClicks: 0,
  },
  {
    _id: "4",
    name: "Boozt",
    image:
      "data:image/png;base64,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",
    description:
    '*Discription*',
   category: 1,
      discount: 20,
    countInStock: 10,
    rating: 5,
    numReviews: 1,
    numClicks: 0,
  },
  {
    _id: "5",
    name: "Matas",
    image:
      "data:image/png;base64,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",
    description:
    '*Discription*',
    category: 5,
      discount: 10,
    countInStock: 7,
    rating: 2,
    numReviews: 1,
    numClicks: 0,
  },
  {
    _id: "6",
    name: "WeDo",
    image:
      "data:image/png;base64,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",
    description:
    '*Discription*',
    discount: 12,
    category: 4,
    countInStock: 0,
    rating: 3,
    numReviews: 1,
    numClicks: 0,
  },
  {
    _id: "7",
    name: "Gouda Rejseforsikring",
    image:
      "https://via.ritzau.dk/data/images/00371/91ce9417-add7-41e9-b2e6-f50f85d91cb8-w_960_h_960.png",
    description:
    '*Discription*',
    discount: 14,
    category: 3,
    countInStock: 0,
    rating: 3,
    numReviews: 1,
    numClicks: 0,
  }
];
export default coupons;