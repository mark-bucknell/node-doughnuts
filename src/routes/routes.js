
// routing
var router = express.Router();
var DoughnutCtrl = require('../controllers/doughnuts');

router.get('/', DoughnutCtrl.list);
router.post('/create', DoughnutCtrl.create);
router.patch('/edit/:doughnutId', DoughnutCtrl.edit);
router.delete('/delete/:doughnutId', DoughnutCtrl.delete);

app.use(router);
module.exports = router;