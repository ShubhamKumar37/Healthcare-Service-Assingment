const express = require("express");
const router = express.Router();

const {createService, getAllServices, updateService, deleteService} = require("../controllers/Service.controller");

router.post("/create-service", createService);
router.get("/all-service", getAllServices);
router.put("/update-service/:id", updateService);
router.delete("/delete-service/:id", deleteService);

module.exports = router;