const express= require('express');
const { create_user_account, authenticate_user, UserForgetPass } = require('../controller/user');
const { create_admin_account, authenticate_admin,getallmandals, user_management, update, forgetPass, getprofile } = require('../controller/admin');
const { submit_form, getallusers, getsingleusers, getallinfo } = require('../controller/receipt');

// const { validateSignupRequest, isRequestValidated, validateSigninRequest } = require('../validators/auth');
// const {createRecords,getRecords} = require('../controller/records');
const router =express.Router();

// router.post('/create_user_account',validateSignupRequest, isRequestValidated, create_user_account);
// router.post('/authenticate_user',validateSigninRequest, isRequestValidated, authenticate_user);

//Temporary Update
router.post('/create_user_account', create_user_account);
 router.post('/authenticate_user', authenticate_user);
 router.post('/create_admin_account', create_admin_account);
 router.post('/authenticate_admin', authenticate_admin);
 router.post('/user_management',user_management );
 router.post('/submit',submit_form)
 router.get('/getallusers/:id',getallusers)
 router.get('/getsingleusers/:id',getsingleusers)
 router.patch('/update/:id',update);
// router.put('/update_user_metadata',  update_user_metadata);
router.get("/getallmandals",getallmandals)
router.get("/getallinfo",getallinfo)
router.patch("/forget_pass" , forgetPass)
router.patch("/user/forget_pass" ,UserForgetPass)
router.post("/getprofile", getprofile)
// router.get("/getrecords",getRecords)
// http://localhost:5000/api/getallinfo/userData
module.exports= router;
  

