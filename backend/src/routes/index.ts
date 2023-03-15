import { Router } from "express";
import {
  getAnalyses,
  addAnalysis,
  updateAnalysis,
  deleteAnalysis,
} from "../controllers/analysis";

const router: Router = Router();

router.get("/analyses", getAnalyses);

router.post("/add-analysis", addAnalysis);

router.put("/edit-analysis/:id", updateAnalysis);

router.delete("/delete-todo/:id", deleteAnalysis);

export default router;
