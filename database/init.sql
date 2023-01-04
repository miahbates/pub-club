DROP TABLE IF EXISTS users, sessions, venues CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email text UNIQUE NOT NULL
);

CREATE TABLE sessions (
  sid TEXT PRIMARY KEY,
  data TEXT
);

CREATE TABLE venues (
  id SERIAL PRIMARY KEY,
  name TEXT
);

INSERT INTO sessions (sid, data) VALUES
('12323245556', 'data' ),
('98876352628', 'more-data' );

INSERT INTO users (email) VALUES
  ('juliette@juliette.com'),
  ('oli@oli.com');

INSERT INTO venues (name) VALUES
  ('Hackney Bridge'),
  ('The Lord Tredegar');