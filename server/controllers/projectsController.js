const express = require("express");



const projectsController ={};
const projects = [
  {
    title: "Project 1",
    tags: ["html", "css", "javascript", "php"],
    date: "01/01/2018",
    img: "/img/desktop.png"
  },
  {
    title: "Project 2",
    tags: ["html", "css", "javascript", "php"],
    date: "01/01/2018",
    img: "/img/desktop.png"
  },
  {
    title: "Project 3",
    tags: ["html", "css", "javascript", "php"],
    date: "01/01/2018",
    img: "/img/desktop.png"
  },
  {
    title: "Project 4",
    tags: ["html", "css", "javascript", "php"],
    date: "01/01/2018",
    img: "/img/desktop.png"
  },
  {
    title: "Project 5",
    tags: ["html", "css", "javascript", "php"],
    date: "01/01/2018",
    img: "/img/desktop.png"
  },
  {
    title: "Project 6",
    tags: ["html", "css", "javascript", "php"],
    date: "01/01/2018",
    img: "/img/desktop.png"
  },
]

projectsController.index = (req, res) => {
  res.render("projects/index", {
    projects: projects
  })
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
