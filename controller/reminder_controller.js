let database = require("../database");

let remindersController = {
  list: (req, res) => {
    res.render("reminder/index", { reminders: database.cindy.reminders });
  },

  new: (req, res) => {
    res.render("reminder/create");
  },

  listOne: (req, res) => {
    let reminderToFind = req.params.id;
    let searchResult = database.cindy.reminders.find(function (reminder) {
      return reminder.id == reminderToFind;
    });
    if (searchResult != undefined) {
      res.render("reminder/single-reminder", { reminderItem: searchResult });
    } else {
      res.render("reminder/index", { reminders: database.cindy.reminders });
    }
  },

  create: (req, res) => {
    let reminder = {
      id: database.cindy.reminders.length + 1,
      title: req.body.title,
      description: req.body.description,
      completed: false,
    };
    database.cindy.reminders.push(reminder);
    res.redirect("/reminders");
  },

  edit: (req, res) => {
    let reminderToFind = req.params.id;
    let searchResult = database.cindy.reminders.find(function (reminder) {
      return reminder.id == reminderToFind;
    });
    res.render("reminder/edit", { reminderItem: searchResult });
  },

  update: (req, res) => {
    let id = req.params.id;
    let formData = req.body;
    for (const reminder of database.cindy.reminders) {
      if (reminder.id == id) {
        reminder.title = formData.title;
        reminder.description = formData.description;
        reminder.completed = (formData.completed === 'true');
      }
    }
    res.render("reminder/index", { reminders: database.cindy.reminders });
  },
  
  delete: (req, res) => {
    let id = req.params.id;
    let index = database.cindy.reminders.findIndex(el => el.id == id);
    database.cindy.reminders.splice(index, 1);
    res.render("reminder/index", { reminders: database.cindy.reminders });
  },
};

module.exports = remindersController;
