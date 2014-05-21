-- phpMyAdmin SQL Dump
-- version 4.1.13
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Erstellungszeit: 21. Mai 2014 um 18:15
-- Server Version: 5.1.36
-- PHP-Version: 5.3.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Datenbank: `webtech`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `kasse`
--

CREATE TABLE IF NOT EXISTS `kasse` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` text COLLATE utf8_unicode_ci NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL,
  `sum` float NOT NULL,
  `type` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=8 ;

--
-- Daten für Tabelle `kasse`
--

INSERT INTO `kasse` (`id`, `name`, `description`, `sum`, `type`) VALUES
(1, 'name', 'desc', 73, 0),
(2, 'mein zweiter test', 'beschri', 12, 0),
(3, 'n', 'd', 12, 9),
(4, 'hello', 'desc3', 80.82, 0),
(5, 'Peter', 'Einkauf: Wurst', 2.5, 1),
(6, 'Peter', 'Habe die Wurst verkauft', 1.5, 0),
(7, 'test', 'test', 12.3, 1);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
