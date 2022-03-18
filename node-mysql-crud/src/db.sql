CREATE DATABASE nodecrudmysql;

USE nodecrudmysql;

SHOW TABLES;

CREATE TABLE user (
  id_news INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100),
  address TEXT,
  phone VARCHAR(50),
  data_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DESCRIBE user;

INSERT INTO user (name, address, phone) values ('carlos', 'my address', '5548452159');

SELECT * FROM user;