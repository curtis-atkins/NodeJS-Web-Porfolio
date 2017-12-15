const express = require("express");

const blogController ={};

blogController.index = (req, res) => {
    res.send(`<h1>This is my Blog page</h1>`);
}

module.exports = blogController;
