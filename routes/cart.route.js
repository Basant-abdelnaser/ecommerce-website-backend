const express = require("express");
const {
  getcartItems,
  addToCart,
  updatecartItem,
  deletecartItem,
  clearCart,
  getcartTotal,
  getCartForUser,
  syncCart,
} = require("../controllers/cart.controller");
const {
  verifyToken,
  verifyAdmin,
  verifyAdminAndUser,
} = require("../middleware/auth.middleware");
const router = express.Router();

router.get("/admin", verifyToken, verifyAdmin, getcartItems);
router.get("/", verifyToken, getCartForUser);
router.post("/", verifyToken, addToCart);
router.put("/update", verifyToken, updatecartItem);
router.delete("/clear", verifyToken, clearCart);
router.delete("/:itemId", verifyToken, deletecartItem);
router.get("/total", verifyToken, getcartTotal);
router.post("/sync", verifyToken, syncCart);

module.exports = router;
