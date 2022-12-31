import db from "../database/connection";

export const createUser = (email: string) => {
  const INSERT_USER = `INSERT INTO users(email) VALUES($1)`;
  return db.query(INSERT_USER, [email]).then((result: any) => {
    return result.rows[0];
  });
};

export const searchDbUsers = (email: string) => {
  const LOOK_UP_USER = `SELECT * FROM users WHERE email = $1`;
  return db.query(LOOK_UP_USER, [email]).then((result: any) => {
    if (result.rows.length === 1) {
      return result.rows[0];
    }
    return null;
  });
};

export const addVenue = ({ name }: { name: string }) => {
  const ADD_VENUE = `INSERT INTO venues(name) VALUES($1) RETURNING *`;
  return db.query(ADD_VENUE, [name]).then((result: any) => {
    return result.rows[0];
  });
};

export const getVenues = () => {
  const GET_VENUES = `SELECT * FROM venues`;
  return db.query(GET_VENUES).then((result) => {
    return result.rows;
  });
};
