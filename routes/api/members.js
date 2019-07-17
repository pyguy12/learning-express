const express = require("express");
const router = express.Router();

// Members array is used later to demonstrate a GET request.
const members = [
  {
    id: 1,
    name: "John",
    email: "john@email.com"
  },
  {
    id: 2,
    name: "Sal",
    email: "sal@email.com"
  }
];

/* app.get(route, (request, response) => {}) is used to send a GET request to the specified route in the first parameter. In this case,
   we're returning the json of the members arry as the response. */
router.get("/", (req, res) => {
  return res.json(members);
});

router.get("/:id", (req, res) => {
  const found = members.some(member => member.id === parseInt(req.params.id));

  if (found) {
    res.json(members.filter(member => member.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({ msg: `No member with id of ${req.params.id}` });
  }
});

module.exports = router;
