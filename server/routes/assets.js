import browserify from 'browserify-middleware';
import express    from 'express';

const router = express.Router();
const vendor = ['react', 'superagent'];

router.get('/js/vendor.js', browserify(vendor, {
  transform: 'babelify'
}))

router.get('/js/app.js', browserify('app/index.js', {
  transform: 'babelify',
  extensions: '.jsx',
  external: vendor
}));

router.use('/', express.static('node_modules/bootstrap/dist'));
router.use('/', express.static('server/public'));

export default router;
