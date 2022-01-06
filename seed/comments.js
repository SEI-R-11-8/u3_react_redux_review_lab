const db = require('../db')
const { Post, Comment } = require('../models')
const faker = require('faker')

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
