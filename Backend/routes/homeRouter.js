const express = require('express');
const router = express.Router();

const home_controller = require('../controllers/homeController');

router.get('/', home_controller.shop_details_get);
router.get('/uploads', home_controller.shop_img_get);

module.exports = router;