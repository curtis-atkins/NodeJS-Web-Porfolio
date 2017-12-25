const express = require("express");
const PostModel = require("../models/Post.js").model;

const blogController ={};

blogController.index = (req, res) => {
  // find all posts
    PostModel.find({}, (err, data) => {
      consol.log(data)
      res.render("blog/index", {
        posts: data
      });
    })
}

blogController.show = (req, res) => {
    res.render("blog/show");
}

blogController.create = (req, res) => {
  res.render("blog/create");
}

blogController.store = (req, res) => {

  PostModel.create({
    title: req.body.title,
    image: req.body.image,
    description: req.body.description
  }, (err, data) => {
    console.log(data)
    res.send(data)
  })
}


module.exports = blogController;
