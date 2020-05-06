import express from "express";
import dogs from "../controllers/dogsCotroller";

const router = express.Router();

router.get("/",dogs.getDogs)

module.exports = router;