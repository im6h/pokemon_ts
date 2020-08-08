// import lib
import { Router, Response, Request } from "express";

// import controllers
import * as pokemon from "../../controllers/pokemon";
const router: Router = Router();

/**
 * Method
 * TODO: methods of router.
 * get
 * post
 * pust
 * delete
 */

router.get("/", async (req: Request, res: Response) => {
  await pokemon.pagingPokemon(req, res);
});

router
  .route("/:id")
  .get(async (req: Request, res: Response) => {
    await pokemon.getPokemonById(req, res);
  })
  .put(async (req: Request, res: Response) => {
    await pokemon.editPokemon(req, res);
  })
  .delete(async (req: Request, res: Response) => {
    await pokemon.deletePokemon(req, res);
  });

router.post("/", async (req: Request, res: Response) => {
  await pokemon.createPokemon(req, res);
});

export default router;
