USE trycubejs;
/*
+------------+--------------+------+-----+-------------------+-------+
| Field      | Type         | Null | Key | Default           | Extra |
+------------+--------------+------+-----+-------------------+-------+
| id         | int(11)      | NO   | PRI | NULL              |       |
| email      | varchar(100) | NO   |     | NULL              |       |
| password   | varchar(100) | NO   |     | NULL              |       |
| dtHrCreate | timestamp    | NO   |     | CURRENT_TIMESTAMP |       |
+------------+--------------+------+-----+-------------------+-------+
*/
CREATE TABLE IF NOT EXISTS User(
  id INTEGER PRIMARY KEY,
  email VARCHAR(100) NOT NULL,
  password VARCHAR(100) NOT NULL,
  dtHrCreate TIMESTAMP NOT NULL Default CURRENT_TIMESTAMP
);

INSERT INTO
  User(id, email, password)
VALUES
  (1, 'admin@gmail.com', md5('asdf')),
  (2, 'admin@yahoo.com', md5('asdf')),
  (3, 'admin@teste.com', md5('asdf')),
  (4, 'admin210@hotmail.com', md5('asdf')),
  (5, 'admin310@hotmail.com', md5('asdf')),
  (6, 'admin410@hotmail.com', md5('asdf')),
  (7, 'admin510@hotmail.com', md5('asdf')),
  (8, 'admin610@hotmail.com', md5('asdf'));