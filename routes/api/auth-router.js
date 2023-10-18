import express from "express";
import authControllers from "../../controllers/auth-controllers.js";
import { authenticate, isEmptyBody } from "../../middleware/index.js";
import { validateBody } from "../../decorators/index.js";
import { userSignUpSchema, userLoginSchema } from "../../models/user.js";

const userSignUpValidate = validateBody(userSignUpSchema);
const userSignInValidate = validateBody(userLoginSchema);

const authRouter = express.Router();

authRouter.post(
  "/signup",
  isEmptyBody,
  userSignUpValidate,
  authControllers.signup
);

authRouter.post(
  "/signin",
  isEmptyBody,
  userSignInValidate,
  authControllers.signin
);

authRouter.get("/current", authenticate, authControllers.getCurrent);

authRouter.post("/logout", authenticate, authControllers.logout);

authRouter.patch(
  "/users",
  authenticate,
  userSignInValidate,
  authControllers.updateSubscription
);

export default authRouter;
