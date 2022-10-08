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
