import express from "express";
import authControllers from "../../controllers/auth-controllers.js";
import { authenticate, isEmptyBody } from "../../middleware/index.js";
import { validateBody } from "../../decorators/index.js";
import {
  userSignUpSchema,
  userLoginSchema,
  userEmailSchema,
} from "../../models/user.js";
import upload from "./../../middleware/upload.js";

const userSignUpValidate = validateBody(userSignUpSchema);
const userSignInValidate = validateBody(userLoginSchema);
const userEmailValidate = validateBody(userEmailSchema);

const authRouter = express.Router();

authRouter.post(
  "/register",
  upload.single("avatar"),
  isEmptyBody,
  userSignUpValidate,
  authControllers.register
);

authRouter.get("/verify/:verificationToken", authControllers.verify);

authRouter.post(
  "/verify",
  userEmailValidate,
  authControllers.resendVerifyEmail
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

authRouter.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  authControllers.updateAvatarUser
);

export default authRouter;
