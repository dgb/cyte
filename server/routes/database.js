import express    from 'express';
import bodyParser from 'body-parser';
import pg         from 'pg';

const router = express.Router();

router.use(bodyParser.json());

router.post('/query', function(req, res) {
  let url   = req.body.url;
  let query = req.body.query;

  if (!url || !query) {
    return res.sendStatus(400);
  }

  let conn = new pg.Client(url);

  conn.connect(function(err){
    if (err) {
      res.status(400);
      res.send(err);
      return;
    }

    conn.query(query, function(err, result) {

      if (err) {
        res.status(400);
        res.send(err);
        return;
      }

      res.send(result);

      conn.end();

    });
  });
});

export default router;
