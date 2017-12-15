const express = require("express");
const router = express.Router();

const pagesController = {};
const aboutController = {};

pagesController.home = (req, res) => {
    res.render("pages/home")
}

pagesController.about = (req, res) => {
    res.send("<h1>Hi. This is my About page</h1>")
}


pagesController.contact = (req, res) => {
    res.send("<h1>Hi. This is my Contact page</h1>")
}

module.exports = pagesController;
