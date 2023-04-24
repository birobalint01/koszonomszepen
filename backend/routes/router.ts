import express, { Router } from "express";

const router: Router = express.Router();

router.use('/esemenyek', require("./esemenyek/routes")());

router.use('/helyszin', require("./helyszin/routes")());

router.use('/szervezo', require("./szervezo/routes")());

module.exports = router;