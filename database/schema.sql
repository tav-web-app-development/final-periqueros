
CREATE DATABASE IF NOT EXISTS event_management;
USE event_management;


CREATE TABLE IF NOT EXISTS User (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL
);


CREATE TABLE IF NOT EXISTS Event (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  date DATE NOT NULL,
  location VARCHAR(255) NOT NULL
);


CREATE TABLE IF NOT EXISTS Registration (
  id INT AUTO_INCREMENT PRIMARY KEY,
  userId INT,
  eventId INT,
  FOREIGN KEY (userId) REFERENCES User(id),
  FOREIGN KEY (eventId) REFERENCES Event(id)
);
