const router = require('express').Router();

const UsersRouter = require('./views/UsersRouter');
// const OrdersRouter = require('./views/OrdersRouter');

router.use('/users', UsersRouter);
// router.use('/orders', OrdersRouter);

module.exports = router;