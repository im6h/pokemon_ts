// import lib
import { Router } from "express";

// import nest router
import pokemon from "./api/pokemon";
const router: Router = Router();
router.use("/pokemon", pokemon);
export default router;
