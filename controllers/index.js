const { Reviews } = require('../models/index')
const { Posts } = require('../models/index')



const getPosts = async (request, response) => {
   try {
      const posts = await Posts.find();
      return response.status(201).json({ posts });
   } catch (error) {
      return response.status(500).send(error.message);
   }
};
const getReviews = async (request, response) => {
   try {
      const reviews = await Reviews.find();
      return response.status(201).json({ reviews });
   } catch (error) {
      return response.status(500).send(error.message);
   }
};

const createReview = async (request, response) => {
   try {
      console.log('something')
      const addReview = await Reviews.insertMany(request.body)
      return response.status(201).json({ addReview })
   } catch (error) {
      return response.status(500).send(error.message)
   }
};

// const updateReview = async (request, response) => {
//    try {
//       const { id } = request.params;
//       await Reviews.findByIdAndUpdate(id, request.body, { new: true }, (error, reviews) => {
//          if (error) {
//             response.status(500).send(error)
//          }
//          if (!reviews) {
//             response.status(500).send('Review not found!');
//          }
//          return response.status(200).json(reviews);
//       }).clone().catch(error => response.send(error))
//    } catch (error) {
//    }
// };

const deleteReview = async (request, response) => {
   try {
      console.log('this is working')
      const { id } = request.params;
      const deleted = await Reviews.delete(id)
      if (deleted) {
         return response.status(200).send('Review deleted');
      }
      throw new Error('Reviews not found')
   } catch (error) {
      return response.status(500).send(error.message);
   }
};






module.exports = {
   getPosts,
   // updateReview,
   deleteReview,
   getReviews,
   createReview
}




// import the models here



// create all the .get, .put, .post, .delete modules here

// module.exports = { go in here with commas}