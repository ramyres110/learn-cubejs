use trycubejs;

/*
+------------+-------------+------+-----+-------------------+-------+
| Field      | Type        | Null | Key | Default           | Extra |
+------------+-------------+------+-----+-------------------+-------+
| id         | int(11)     | NO   | PRI | NULL              |       |
| amount     | int(11)     | NO   |     | NULL              |       |
| stat       | varchar(10) | YES  |     | OPEN              |       |
| dtHrCreate | timestamp   | NO   |     | CURRENT_TIMESTAMP |       |
| dtHrChange | timestamp   | NO   |     | CURRENT_TIMESTAMP |       |
| userId     | int(11)     | NO   | MUL | NULL              |       |
+------------+-------------+------+-----+-------------------+-------+
*/

CREATE TABLE IF NOT EXISTS Orders(
  id INT NOT NULL PRIMARY KEY,
  amount INT NOT NULL,
  stat VARCHAR(10) default 'OPEN',
  dtHrCreate timestamp NOT NULL default current_timestamp,
  dtHrChange timestamp NOT NULL default current_timestamp,
  userId Integer NOT NULL,
  FOREIGN key(userId) references User(id) on delete cascade
);

INSERT INTO
  Orders(id, stat, amount, userId,dtHrCreate)
Values
  (1,'CLOSED',150,1, '2019-08-10'),
  (2,'DOING',530,2, '2019-08-1'),
  (3,'OPEN',350,1, '2019-08-12'),
  (4,'DOING',1550,3, '2019-08-21'),
  (5,'OPEN',1050,3, '2019-08-21'),
  (6,'CLOSED',1550,3, '2019-08-21'),
  (7,'OPEN',180,3, '2019-08-21'),
  (8,'OPEN',1580,3, '2019-08-10'),
  (9,'OPEN',1550,3, '2019-08-21'),
  (10,'OPEN',550,3, '2019-08-15'),
  (11,'OPEN',150,3, '2019-08-15'),
  (12,'DOING',50,3, '2019-08-21');