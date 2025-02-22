import express from "express";
import User from '../model/user-schema.js';
import { userSignup,userLogin } from "../controller/user-controller.js";
import { getProducts, getProduvctById } from "../controller/product-controller.js";
import { orderCreate, cardDetail } from "../controller/payment-controller.js"
const router  = express.Router();

router.post('/signup', userSignup);

router.post('/login', userLogin);

router.get('/products', getProducts);

router.get('/product/:id', getProduvctById);

router.post('/create', orderCreate);

router.post('/card-detail', cardDetail)
export default router;