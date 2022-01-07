const mongoose = require('mongoose');
const db = require('../db/index');
const { Reviews } = require('../models/index')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
   const reviews = [
      {
         "title": "love... Love... LOVE!!!",
         "description": "The best blog EVER!!!",
         "date": "October 20, 2020",
         "rating": "5 Stars"
      },
      {
         "title": "These stories are GREAT!!!",
         "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque felis imperdiet proin fermentum. Eget lorem dolor sed viverra. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu.",
         "date": "December 15, 2021",
         "rating": "4.5 Stars"
      },
      {
         "title": "Mediocre",
         "description": "Auctor neque vitae tempus quam pellentesque nec nam aliquam sem. Convallis tellus id interdum velit. Id velit ut tortor pretium viverra. Magna fringilla urna porttitor rhoncus dolor purus. A condimentum vitae sapien pellentesque. Facilisi cras fermentum odio eu feugiat pretium nibh. Orci nulla pellentesque dignissim enim sit amet venenatis.",
         "date": "January 06, 2022",
         "rating": "3 Stars"
      }
   ];

   await Reviews.insertMany(reviews)
   console.log('Created reviews!')
}

const run = async () => {
   await main()
   db.close()
}

run()
