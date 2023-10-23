import express from "express";
import authControllers from "../../controllers/auth-controllers.js";
import { authenticate, isEmptyBody } from "../../middleware/index.js";
import { validateBody } from "../../decorators/index.js";
import { userSignUpSchema, userLoginSchema } from "../../models/user.js";

const userSignUpValidate = validateBody(userSignUpSchema);
const userSignInValidate = validateBody(userLoginSchema);

const authRouter = express.Router();

authRouter.post(
  "/register",
  isEmptyBody,
  userSignUpValidate,
  authControllers.register
);

authRouter.post(
  "/login",
  isEmptyBody,
  userSignInValidate,
  authControllers.login
);
authRouter.post("/logout", authenticate, authControllers.logout);

authRouter.get("/current", authenticate, authControllers.getCurrent);

authRouter.patch(
  "/users",
  authenticate,
  userSignInValidate,
  authControllers.updateSubscription
);

export default authRouter;
