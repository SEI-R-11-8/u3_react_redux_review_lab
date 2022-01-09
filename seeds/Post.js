// const rio_de_janeiro = require('../client/terrae/src/images/rio_de_janeiro.jpg')
// const australia_sidney = require('../client/terrae/src/images/australia_sidney.jpg')
// const indo_ubud_temple = require('../client/terrae/src/images/indo_ubud_temple.jpg')

const mongoose = require('mongoose');
const db = require('../db/index');
const { Posts } = require('../models/index')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
   const posts = [
      {
         "image_path": "<https://cdn.pixabay.com/photo/2018/07/20/01/42/rio-de-janeiro-3549798_960_720.jpg",
         "title": "Bahia LOVE",
         "author": "Brazilian Doll",
         "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi tincidunt ornare massa eget egestas. Pellentesque habitant morbi tristique senectus et netus. Sit amet porttitor eget dolor morbi non. Id cursus metus aliquam eleifend mi in nulla posuere. Faucibus purus in massa tempor nec feugiat nisl pretium fusce. Tempor commodo ullamcorper a lacus vestibulum sed arcu non. Nibh tortor id aliquet lectus proin. Maecenas volutpat blandit aliquam etiam erat. Mattis pellentesque id nibh tortor id aliquet lectus proin nibh. Tortor consequat id porta nibh venenatis cras sed felis eget. Etiam non quam lacus suspendisse faucibus interdum posuere lorem ipsum. Eu scelerisque felis imperdiet proin fermentum. Massa tincidunt dui ut ornare lectus sit.",
         "date": "October 20, 2020",
      },
      {
         "image_path": "https://borgenproject.org/wp-content/uploads/7532246450_104d3e3cf8_o-300x204.jpg",
         "title": "Trekking through the Down Under!",
         "author": "Aussie Traveler",
         "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec magna ipsum. Donec pretium malesuada lacus at luctus. Proin suscipit sed lorem et ornare. Morbi hendrerit, urna ut pharetra gravida, sapien lectus mattis magna, at rutrum lectus nibh vitae felis. Nam non suscipit mi. Cras dui neque, placerat ac lacus ac, convallis dictum nulla. Enim nunc faucibus a pellentesque. Adipiscing elit ut aliquam purus sit amet luctus. Massa massa ultricies mi quis hendrerit dolor.",
         "date": "December 15, 2021",
      },
      {
         "image_path": "https://upload.wikimedia.org/wikipedia/commons/7/7a/Temple_in_Downtown_Ubud_Indonesia_Bali_-_panoramio.jpg",
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