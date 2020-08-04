import { Router, Response, Request } from "express";

const router: Router = Router();

/**
 * TODO: methods of router.
 * get
 * post
 * pust
 * delete
 */
router.get("/", (req: Request, res: Response) => {
  res.send({
    status: 200,
    payload: "Hello World",
  });
});

router.post("/", (req: Request, res: Response) => {
  res.send({
    status: 200,
    payload: "Success",
  });
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
