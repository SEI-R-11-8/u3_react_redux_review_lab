const db = require('../db')
const { Post, Comment } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const comment1 = await new Comment({
    name: 'McNulty',
    comment_body: 'Great!'
  })
  comment1.save()

  const comment2 = await new Comment({
    name: 'Bunk',
    comment_body: 'Perfect!'
  })
  comment2.save()

const posts = [
  {
    title: 'Aruba',
    post_body: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
    comments: [
      comment1._id,
      comment2._id
    ]
  }
]

await Post.insertMany(posts)
  console.log('Created posts')
}

const run = async () => {
  await main()
  db.close()
}

run()
