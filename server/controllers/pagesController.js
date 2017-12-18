const express = require("express");
const router = express.Router();

const pagesController = {};
const aboutController = {};

pagesController.home = (req, res) => {
    res.render("pages/home");
}

pagesController.about = (req, res) => {
    res.render("pages/about");
}


pagesController.contact = (req, res) => {
    res.render("pages/contact");
}

module.exports = pagesController;
