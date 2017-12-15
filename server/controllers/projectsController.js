const express = require("express");



const projectsController ={};

projectsController.index = (req, res) => {
    res.send(`<h1>Projects</h1>
    <div>
      <img src="img/vegeta.jpg" >
    </div>`)
}

module.exports = projectsController;
