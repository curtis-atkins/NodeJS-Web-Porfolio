const express = require("express");



const projectsController ={};

projectsController.index = (req, res) => {
  res.render("projects/index")
}

projectsController.create = (req, res) => {
  res.render("projects/create")
}

projectsController.store = (req, res) => {
  res.send({
    saved: true
  })
}

projectsController.show = (req, res) => {
  res.render("projects/show")
}

projectsController.edit = (req, res) => {
  res.render("projects/edit")
}

projectsController.update = (req, res) => {
  res.send({
    updated: true
  })
}

projectsController.destroy = (req, res) => {
  res.send({
    deleted: true
  })
}

module.exports = projectsController;
