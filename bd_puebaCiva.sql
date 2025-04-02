CREATE DATABASE  IF NOT EXISTS `pruebaciva` 
USE `pruebaciva`;


DROP TABLE IF EXISTS `buses`;

CREATE TABLE `buses` (
  `id` int NOT NULL AUTO_INCREMENT,
  `numero_bus` varchar(50) NOT NULL,
  `placa` varchar(20) NOT NULL,
  `fecha_creacion` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `caracteristicas` text,
  `activo` tinyint(1) DEFAULT '1',
  `marca_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `placa` (`placa`),
  KEY `fk_buses_marca` (`marca_id`),
  CONSTRAINT `fk_buses_marca` FOREIGN KEY (`marca_id`) REFERENCES `marca` (`id`)
) 

INSERT INTO `buses` VALUES (1,'101','ABC-123','2025-04-01 02:10:28','Asientos reclinables, aire acondicionado',1,1),(2,'102','DEF-456','2025-04-01 02:10:28','WiFi, cargadores USB',1,2),(3,'103','GHI-789','2025-04-01 02:10:28','Doble piso, baños',0,3),(4,'104','JKL-012','2025-04-01 02:10:28','Pantallas individuales, aire acondicionado',1,4),(5,'105','MNO-345','2025-04-01 02:10:28','Asientos VIP, servicio de comida',0,5);

DROP TABLE IF EXISTS `marca`;
CREATE TABLE `marca` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nombre` (`nombre`)
) 

INSERT INTO `marca` VALUES (3,'FIAT'),(5,'MAN'),(4,'MERCEDES'),(2,'SCANIA'),(1,'VOLVO');
