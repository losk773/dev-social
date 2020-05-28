const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const auth = require('../../middleware/auth');

const Post = require('../../models/Post');
const User = require('../../models/User');

// @route    POST api/posts
// @desc     Create post
// @access   Private
router.post('/', [
  auth,
  check('text', 'Text is required').not().isEmpty()
], async(req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) return res.status(400).json({errors: errors.array()});

  try {
    const user = await User.findById(req.user.id).select('-password');
    const newPost = new Post({
      text: req.body.text,
      name: user.name,
      avatar: user.avatar,
      user: req.user.id
    });

    await newPost.save();
    res.json(newPost);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

// @route    GET api/posts
// @desc     Get all post
// @access   Private
router.get('/', auth, async (req, res) => {
  try {
    const posts = await Post.find().sort({date: -1});

    res.json(posts);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

// @route    GET api/posts/:post_id
// @desc     Get all post
// @access   Private
router.get('/:post_id', auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.post_id);
    
    if (!post) return res.status(404).json({msg: 'Post has not found'});

    res.json(post);
  } catch (error) {
    console.error(error.message);

    if (error.kind === 'ObjectId') {
      return res.status(404).json({msg: 'Post has not found'});
    }

    res.status(500).send('Server Error');
  }
});

module.exports = router;