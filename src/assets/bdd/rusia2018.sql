-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 05-04-2018 a las 23:27:15
-- Versión del servidor: 10.1.31-MariaDB
-- Versión de PHP: 5.6.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `rusia2018`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `apuestas`
--

CREATE TABLE `apuestas` (
  `idApuesta` int(11) NOT NULL,
  `partido_apuesta` int(11) NOT NULL,
  `golesA` int(11) NOT NULL,
  `golesB` int(11) NOT NULL,
  `equipoPaisGanador` int(11) NOT NULL,
  `competicion` int(11) NOT NULL,
  `participante` int(11) NOT NULL,
  `puntos` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `competicion`
--

CREATE TABLE `competicion` (
  `idCompeticion` int(11) NOT NULL,
  `nombre` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `descripcion` varchar(1024) COLLATE utf8_unicode_ci NOT NULL,
  `anio` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `competicion`
--

INSERT INTO `competicion` (`idCompeticion`, `nombre`, `descripcion`, `anio`) VALUES
(1, 'Rusia 2018', 'Rusia 2018', 2018);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `equipopais`
--

CREATE TABLE `equipopais` (
  `idEquipoPais` int(11) NOT NULL,
  `nombre` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `keyName` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `grupo` varchar(12) COLLATE utf8_unicode_ci NOT NULL,
  `competicion_equipoPais` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `equipopais`
--

INSERT INTO `equipopais` (`idEquipoPais`, `nombre`, `keyName`, `grupo`, `competicion_equipoPais`) VALUES
(1, 'Rusia', 'rusia', 'A', 1),
(2, 'Egipto', 'egipto', 'A', 1),
(3, 'Arabia Saudí', 'arabia-saudi', 'A', 1),
(4, 'Uruguay', 'uruguay', 'A', 1),
(5, 'Portugal', 'portugal', 'B', 1),
(6, 'España', 'españa', 'B', 1),
(7, 'Marruecos', 'marruecos', 'B', 1),
(8, 'Irán', 'iran', 'B', 1),
(9, 'Francia', 'francia', 'C', 1),
(10, 'Australia', 'australia', 'C', 1),
(11, 'Perú', 'peru', 'C', 1),
(12, 'Dinamarca', 'dinamarca', 'C', 1),
(13, 'Argentina', 'argentina', 'D', 1),
(14, 'Islandia', 'islandia', 'D', 1),
(15, 'Croacia', 'croacia', 'D', 1),
(16, 'Nigeria', 'nigeria', 'D', 1),
(17, 'Brasil', 'brasil', 'E', 1),
(18, 'Suiza', 'suiza', 'E', 1),
(19, 'Costa Rica', 'costa-rica', 'E', 1),
(20, 'Serbia', 'serbia', 'E', 1),
(21, 'Alemania', 'alemania', 'F', 1),
(22, 'México', 'mexico', 'F', 1),
(23, 'Suecia', 'suecia', 'F', 1),
(24, 'Corea del Sur', 'corea-del-sur', 'F', 1),
(25, 'Bélgica', 'belgica', 'G', 1),
(26, 'Panamá', 'panama', 'G', 1),
(27, 'Túnez', 'tunez', 'G', 1),
(28, 'Inglaterra', 'inglaterra', 'G', 1),
(29, 'Polonia', 'polonia', 'H', 1),
(30, 'Senegal', 'senegal', 'H', 1),
(31, 'Colombia', 'colombia', 'H', 1),
(32, 'Japón', 'japon', 'H', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `participantes`
--

CREATE TABLE `participantes` (
  `idParticipante` int(11) NOT NULL,
  `nombre` varchar(1024) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `competicion_participante` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `partidos`
--

CREATE TABLE `partidos` (
  `idPartido` int(11) NOT NULL,
  `equipoPaisA` int(11) NOT NULL,
  `equipoPaisB` int(11) NOT NULL,
  `competicion_partido` int(11) NOT NULL,
  `golesA` int(11) DEFAULT NULL,
  `golesB` int(11) DEFAULT NULL,
  `equipoPaisGanador` int(11) DEFAULT NULL,
  `fechaPartido` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `partidos`
--

INSERT INTO `partidos` (`idPartido`, `equipoPaisA`, `equipoPaisB`, `competicion_partido`, `golesA`, `golesB`, `equipoPaisGanador`, `fechaPartido`) VALUES
(1, 1, 3, 1, NULL, NULL, NULL, '14-06 11:00'),
(2, 2, 4, 1, NULL, NULL, NULL, '15-06 08:00'),
(3, 1, 2, 1, NULL, NULL, NULL, '19-06 14:00'),
(4, 4, 3, 1, NULL, NULL, NULL, '20-06 11:00'),
(5, 3, 2, 1, NULL, NULL, NULL, '25-06 10:00'),
(6, 4, 1, 1, NULL, NULL, NULL, '25-06 10:00'),
(7, 7, 8, 1, NULL, NULL, NULL, '15-06 11:00'),
(8, 5, 6, 1, NULL, NULL, NULL, '15-06 14:00'),
(9, 5, 7, 1, NULL, NULL, NULL, '20-06 08:00'),
(10, 8, 6, 1, NULL, NULL, NULL, '20-06 14:00'),
(11, 8, 5, 1, NULL, NULL, NULL, '25-06 14:00'),
(12, 6, 7, 1, NULL, NULL, NULL, '25-06 14:00'),
(13, 9, 10, 1, NULL, NULL, NULL, '16-06 06:00'),
(14, 11, 12, 1, NULL, NULL, NULL, '16-06 12:00'),
(15, 12, 10, 1, NULL, NULL, NULL, '21-06 08:00'),
(16, 9, 11, 1, NULL, NULL, NULL, '21-06 11:00'),
(17, 10, 11, 1, NULL, NULL, NULL, '26-06 10:00'),
(18, 12, 9, 1, NULL, NULL, NULL, '26-06 10:00'),
(19, 13, 14, 1, NULL, NULL, NULL, '16-06 09:00'),
(20, 15, 16, 1, NULL, NULL, NULL, '16-06 15:00'),
(21, 13, 15, 1, NULL, NULL, NULL, '21-06 14:00'),
(22, 16, 14, 1, NULL, NULL, NULL, '22-06 11:00'),
(23, 16, 13, 1, NULL, NULL, NULL, '26-06 14:00'),
(24, 14, 15, 1, NULL, NULL, NULL, '26-06 14:00'),
(25, 19, 20, 1, NULL, NULL, NULL, '17-06 08:00'),
(26, 17, 18, 1, NULL, NULL, NULL, '17-06 14:00'),
(27, 17, 19, 1, NULL, NULL, NULL, '22-06 08:00'),
(28, 20, 18, 1, NULL, NULL, NULL, '22-06 11:00'),
(29, 18, 19, 1, NULL, NULL, NULL, '27-06 14:00'),
(30, 20, 17, 1, NULL, NULL, NULL, '27-06 14:00'),
(31, 21, 22, 1, NULL, NULL, NULL, '17-06 11:00'),
(32, 23, 24, 1, NULL, NULL, NULL, '18-06 08:00'),
(33, 21, 23, 1, NULL, NULL, NULL, '23-06 14:00'),
(34, 24, 22, 1, NULL, NULL, NULL, '23-06 11:00'),
(35, 24, 21, 1, NULL, NULL, NULL, '27-06 10:00'),
(36, 22, 23, 1, NULL, NULL, NULL, '27-06 10:00'),
(37, 25, 26, 1, NULL, NULL, NULL, '18-06 11:00'),
(38, 27, 28, 1, NULL, NULL, NULL, '18-06 14:00'),
(39, 25, 27, 1, NULL, NULL, NULL, '23-06 08:00'),
(40, 28, 26, 1, NULL, NULL, NULL, '24-06 08:00'),
(41, 28, 25, 1, NULL, NULL, NULL, '28-06 14:00'),
(42, 26, 27, 1, NULL, NULL, NULL, '28-06 14:00'),
(43, 31, 32, 1, NULL, NULL, NULL, '19-06 08:00'),
(44, 29, 30, 1, NULL, NULL, NULL, '19-06 11:00'),
(45, 32, 30, 1, NULL, NULL, NULL, '24-06 11:00'),
(46, 29, 31, 1, NULL, NULL, NULL, '24-06 14:00'),
(47, 30, 31, 1, NULL, NULL, NULL, '28-06 10:00'),
(48, 32, 29, 1, NULL, NULL, NULL, '28-06 10:00');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `apuestas`
--
ALTER TABLE `apuestas`
  ADD PRIMARY KEY (`idApuesta`),
  ADD KEY `equipoPaisGanador` (`equipoPaisGanador`),
  ADD KEY `partido_apuesta` (`partido_apuesta`),
  ADD KEY `competicion` (`competicion`),
  ADD KEY `participante` (`participante`);

--
-- Indices de la tabla `competicion`
--
ALTER TABLE `competicion`
  ADD PRIMARY KEY (`idCompeticion`);

--
-- Indices de la tabla `equipopais`
--
ALTER TABLE `equipopais`
  ADD PRIMARY KEY (`idEquipoPais`),
  ADD KEY `competicion_equipoPais` (`competicion_equipoPais`);

--
-- Indices de la tabla `participantes`
--
ALTER TABLE `participantes`
  ADD PRIMARY KEY (`idParticipante`),
  ADD KEY `competicion_participante` (`competicion_participante`);

--
-- Indices de la tabla `partidos`
--
ALTER TABLE `partidos`
  ADD PRIMARY KEY (`idPartido`),
  ADD KEY `equipoPaisA` (`equipoPaisA`),
  ADD KEY `equipoPaisB` (`equipoPaisB`),
  ADD KEY `equipoPaisGanador` (`equipoPaisGanador`),
  ADD KEY `competicion_partido` (`competicion_partido`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `apuestas`
--
ALTER TABLE `apuestas`
  MODIFY `idApuesta` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `participantes`
--
ALTER TABLE `participantes`
  MODIFY `idParticipante` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `apuestas`
--
ALTER TABLE `apuestas`
  ADD CONSTRAINT `apuestas_ibfk_1` FOREIGN KEY (`equipoPaisGanador`) REFERENCES `equipopais` (`idEquipoPais`),
  ADD CONSTRAINT `apuestas_ibfk_2` FOREIGN KEY (`partido_apuesta`) REFERENCES `partidos` (`idPartido`),
  ADD CONSTRAINT `apuestas_ibfk_3` FOREIGN KEY (`competicion`) REFERENCES `competicion` (`idCompeticion`),
  ADD CONSTRAINT `apuestas_ibfk_4` FOREIGN KEY (`participante`) REFERENCES `participantes` (`idParticipante`);

--
-- Filtros para la tabla `equipopais`
--
ALTER TABLE `equipopais`
  ADD CONSTRAINT `equipopais_ibfk_1` FOREIGN KEY (`competicion_equipoPais`) REFERENCES `competicion` (`idCompeticion`);

--
-- Filtros para la tabla `participantes`
--
ALTER TABLE `participantes`
  ADD CONSTRAINT `participantes_ibfk_1` FOREIGN KEY (`competicion_participante`) REFERENCES `competicion` (`idCompeticion`);

--
-- Filtros para la tabla `partidos`
--
ALTER TABLE `partidos`
  ADD CONSTRAINT `partidos_ibfk_1` FOREIGN KEY (`equipoPaisA`) REFERENCES `equipopais` (`idEquipoPais`),
  ADD CONSTRAINT `partidos_ibfk_2` FOREIGN KEY (`equipoPaisB`) REFERENCES `equipopais` (`idEquipoPais`),
  ADD CONSTRAINT `partidos_ibfk_3` FOREIGN KEY (`equipoPaisGanador`) REFERENCES `equipopais` (`idEquipoPais`),
  ADD CONSTRAINT `partidos_ibfk_4` FOREIGN KEY (`competicion_partido`) REFERENCES `competicion` (`idCompeticion`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;