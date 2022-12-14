require('dotenv/config');
const express = require('express');
const staticMiddleware = require('./static-middleware');
const errorMiddleware = require('./error-middleware');
const pg = require('pg');

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

const app = express();
const jsonMiddleware = express.json();

app.use(jsonMiddleware);
app.use(staticMiddleware);

app.get('/api/nurseEntries/:nurseId', (req, res) => {
  const nurseId = Number(req.params.nurseId);

  if (!Number.isInteger(nurseId) || nurseId < 1) {
    res.status(400).json({
      error: 'Nurse ID must be a positive interger'
    });
    return;
  }

  const sql = `
  select "nurseId",
         "firstName",
         "lastName",
         "photo",
         "nurseAddress",
         "phoneNumber",
         "birthday"
  from "nurseEntries"
  where "nurseId" = $1
  `;

  const params = [nurseId];

  db.query(sql, params)
    .then(results => {
      const [nurse] = results.rows;

      if (!nurse) {
        res.status(404).json({
          error: `No nurse found with ID: ${nurseId}`
        });
        return;
      }
      res.json(nurse);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occured.'
      });
    });
});

app.get('/api/nurseEntries', (req, res) => {
  const sql = `
  select "nurseId",
         "firstName",
         "lastName",
         "photo",
         "nurseAddress",
         "phoneNumber",
         "birthday",
         "userId",
         "hospitalId"
  from "nurseEntries"
  `;

  db.query(sql)
    .then(result => {
      res.status(200).json(result.rows);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occured.'
      });
    });
});

app.use('/api/nurseEntries', express.json());

app.post('/api/nurseEntries', (req, res, next) => {

  const userId = 1;
  const sql = `
    insert into "nurseEntries"("firstName", "lastName", "photo", "nurseAddress", "phoneNumber", "birthday", "userId", "hospitalId")
    values ($1,$2,$3,$4,$5,$6,$7,$8)
    returning *
  `;
  const nurseArray = [req.body.firstName, req.body.lastName, req.body.photo, req.body.nurseAddress, req.body.phoneNumber, req.body.birthday, userId, 1];
  db.query(sql, nurseArray).then(result => {

    res.status(200).json(result.rows[0]);
  }).catch(err => next(err));
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  process.stdout.write(`\n\napp listening on port ${process.env.PORT}\n\n`);
});
