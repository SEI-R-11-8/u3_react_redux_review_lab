const db = require('../db')
const faker = require('faker')
const { Post, Comment } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error: '))

const main =  async () => {

  const dropCollections = async () => {
    await Post.collection.drop()
    await Comment.collection.drop()
  }

  const posts = [...Array(5)].map((element) => {
    return new Post({
      city: faker.address.cityName(),
      date: faker.date.recent(),
      likes: 0,
      description: faker.company.catchPhrase(),
      photo: "https://lh3.googleusercontent.com/places/AAcXr8pPWFigstEZ9OU9-mRbNyiN-3Z2M-aWj8AFTXlU_5dKeoq_yXuL55HeHcENqjH8LPWJKU6S7u01zIvknwkpccPmNLzNczaVBl8=s1600-w800-h800"
    })
  })

  const comments = [...Array(2)].map((element) => {
    return new Comment({
      name: faker.internet.userName(),
      text: faker.lorem.sentence(),
      likes: 0
    })
  })

  posts[0].comments.push(comments[0]._id)
  posts[0].comments.push(comments[1]._id)

  // await dropCollections()
  // console.log('Collections Dropped')

  await Comment.insertMany(comments)
  console.log('Created Comments!')

  await Post.insertMany(posts)
  console.log('Created Posts!')

}

const run = async () => {
  await main()
  db.close()
}

run()
