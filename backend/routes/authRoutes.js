const router = require('express').Router();
const User = require('../models/user.model');

// router.get('/google', async (req, res) => {
//     try {
//         const newUser = new User({
//             name: req.body.name,
//             phone: {
//                 number: req.body.number,
//                 country_code: req.body.country_code,
//                 is_verified: false,
//             },
//             bio: req.body.bio ? req.body.bio : ' ',
//             display_image_url: req.body.display_image_url ? req.body.display_image_url : ' ',
//         });

//         const savedUser = await newUser.save();
//         res.status(201).json(savedUser);
//     } catch (error) {
//         console.log(error);
//         res.status(500).send(error);
//     }
// });

module.exports = router;
