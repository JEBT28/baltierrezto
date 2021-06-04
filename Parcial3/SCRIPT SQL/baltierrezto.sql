
CREATE DATABASE IF NOT EXISTS `baltierrezto` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `baltierrezto`;



CREATE TABLE `autos` (
  `id` int(11) NOT NULL,
  `marca` varchar(50) NOT NULL,
  `modelo` varchar(50) NOT NULL,
  `año` int(11) NOT NULL,
  `color` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


INSERT INTO `autos` (`id`, `marca`, `modelo`, `año`, `color`) VALUES
(0, 'CHEVROLET', 'BEAT', 2021, 'WHITE'),
(1, 'FORD', 'FOCUS', 2021, 'BLUE'),
(2, 'CHEVROLET', 'BEAT', 2021, 'WHITE'),
(3, 'FORD', 'FOCUS', 2021, 'BLUE'),
(4, 'TESLA', 'Y', 2020, 'WHITE'),
(5, 'VW', 'JETTA', 2020, 'WHITE'),
(6, 'NISSAN', 'GTR', 2020, 'RED'),
(7, 'FORD', 'MUSTANG', 2020, 'DARK BLUE');

COMMIT;
