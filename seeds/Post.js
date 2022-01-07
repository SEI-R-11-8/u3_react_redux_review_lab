const mongoose = require('mongoose');
const db = require('../db/index');
const { Posts } = require('../models/index')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
   const posts = [
      {
         "title": "Bahia LOVE",
         "author": "Brazilian Doll",
         "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi tincidunt ornare massa eget egestas. Pellentesque habitant morbi tristique senectus et netus. Sit amet porttitor eget dolor morbi non. Id cursus metus aliquam eleifend mi in nulla posuere. Faucibus purus in massa tempor nec feugiat nisl pretium fusce. Tempor commodo ullamcorper a lacus vestibulum sed arcu non. Nibh tortor id aliquet lectus proin. Maecenas volutpat blandit aliquam etiam erat. Mattis pellentesque id nibh tortor id aliquet lectus proin nibh. Tortor consequat id porta nibh venenatis cras sed felis eget. Etiam non quam lacus suspendisse faucibus interdum posuere lorem ipsum. Eu scelerisque felis imperdiet proin fermentum. Massa tincidunt dui ut ornare lectus sit.",
         "date": "October 20, 2020",
      },
      {
         "title": "Trecking through the Down Under!",
         "author": "Aussie Traveler",
         "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec magna ipsum. Donec pretium malesuada lacus at luctus. Proin suscipit sed lorem et ornare. Morbi hendrerit, urna ut pharetra gravida, sapien lectus mattis magna, at rutrum lectus nibh vitae felis. Nam non suscipit mi. Cras dui neque, placerat ac lacus ac, convallis dictum nulla. Enim nunc faucibus a pellentesque. Adipiscing elit ut aliquam purus sit amet luctus. Massa massa ultricies mi quis hendrerit dolor.",
         "date": "December 15, 2021",
      },
      {
         "title": "Bali Dreams",
         "author": "Indo Nesia",
         "description": "Neque vitae tempus quam pellentesque nec nam aliquam sem. Blandit cursus risus at ultrices mi tempus imperdiet. Facilisis volutpat est velit egestas dui id ornare arcu. Proin nibh nisl condimentum id venenatis a. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Tellus in metus vulputate eu scelerisque felis. Mattis rhoncus urna neque viverra justo. Odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam. Scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt. Felis eget velit aliquet sagittis id consectetur purus ut faucibus. Tellus elementum sagittis vitae et leo. Eleifend quam adipiscing vitae proin sagittis nisl.",
         "date": "January 06, 2022",
      }
   ]

   await Posts.insertMany(posts)
   console.log('Created posts!')
}

const run = async () => {
   await main()
   db.close()
}

run()