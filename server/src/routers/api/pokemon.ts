import { Router, Response, Request } from "express";
import * as pokemon from "../../controllers/pokemon";
const router: Router = Router();

/**
 * TODO: methods of router.
 * get
 * post
 * pust
 * delete
 */
router.get("/", (req: Request, res: Response) => {
  pokemon.getAllPokemon(req, res);
});

router.post("/create", (req: Request, res: Response) => {
  pokemon.createPokemon(req, res);
});

router.put("/", (req: Request, res: Response) => {
  res.send({
    status: 200,
    payload: "Success",
  });
});

router.delete("/", (req: Request, res: Response) => {
  res.send({
    status: 200,
    payload: "Success",
  });
});

export default router;
