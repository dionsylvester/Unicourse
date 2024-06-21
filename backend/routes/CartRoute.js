import express from "express";
import {
  CreateCart,
  ViewCart,
  DeleteAllCartItem,
  DeleteCartItemById,
} from "../controllers/CartController.js";

const router = express.Router();

router.post("/createcart", CreateCart);
router.get("/viewcart/:userId", ViewCart);
router.delete("/cart/:userId/items", DeleteAllCartItem);
router.delete("/cart/items/:itemId", DeleteCartItemById);

export default router;
