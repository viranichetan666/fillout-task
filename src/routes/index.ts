import  { Request, Response, Router } from "express";
import formRoutes from "./formRoutes";

const router = Router();

router.get("/", (req: Request, res: Response) => {
    res.send("Server is running");
});

router.use('/v1/api/forms/', formRoutes);

export default router;

