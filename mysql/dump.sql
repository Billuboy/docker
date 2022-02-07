USE `docker`;
SET TIME_ZONE = '+00:00';

CREATE TABLE `test` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50),
  PRIMARY KEY(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `test` (`name`) VALUES ('John'), ('Martha'), ('Simon');