import db from "../database/connection";

export const createUser = (email: string) => {
  const INSERT_USER = `INSERT INTO users(email) VALUES($1)`;
  return db.query(INSERT_USER, [email]).then((result: any) => {
    console.log(result, "result");
    return result.rows[0];
  });
};
