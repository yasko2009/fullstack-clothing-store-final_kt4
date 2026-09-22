import { Router } from "express";
import authMiddleware, {
  AuthRequest,
} from "../middleware/auth";
import { users } from "../data/users";

const router = Router();

router.get("/", authMiddleware, (req: AuthRequest, res) => {
  const user = users.find((item) => item.id === req.user?.userId);

  if (!user) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  res.json({
    id: user.id,
    email: user.email,
    name: user.name,
  });
});

export default router;