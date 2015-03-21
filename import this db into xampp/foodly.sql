-- phpMyAdmin SQL Dump
-- version 4.2.7.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Mar 21, 2015 at 01:08 PM
-- Server version: 5.6.20
-- PHP Version: 5.5.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `foodly`
--

-- --------------------------------------------------------

--
-- Table structure for table `narudzbe`
--

CREATE TABLE IF NOT EXISTS `narudzbe` (
`ID` int(10) unsigned NOT NULL,
  `date` char(12) NOT NULL,
  `time` char(6) NOT NULL,
  `restaurant` tinytext NOT NULL,
  `item` tinytext NOT NULL,
  `IDcode` tinytext NOT NULL,
  `quantity` tinyint(3) NOT NULL,
  `price` varchar(10) NOT NULL,
  `size` tinytext NOT NULL,
  `firstName` tinytext NOT NULL,
  `lastName` tinytext NOT NULL,
  `address` tinytext NOT NULL,
  `phoneNumber` tinytext NOT NULL,
  `processed` tinyint(1) NOT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=17 ;

--
-- Dumping data for table `narudzbe`
--

INSERT INTO `narudzbe` (`ID`, `date`, `time`, `restaurant`, `item`, `IDcode`, `quantity`, `price`, `size`, `firstName`, `lastName`, `address`, `phoneNumber`, `processed`) VALUES
(1, '22.01.2015.', '03:01', 'mojRestoran Osijek', 'Slavonska', '543', 1, '36.50', 'Jumbo', 'Adrian', 'Bece', 'Neka Ulica 34', '0123456789012345', 0),
(2, '22.01.2015.', '03:01', 'mojRestoran Osijek', 'Quatro Formagi', '739', 1, '37.00', 'Jumbo', 'Adrian', 'Bece', 'Neka Ulica 34', '0123456789012345', 0),
(3, '22.01.2015.', '03:01', 'mojRestoran Osijek', 'French Fries', '7631', 2, '7.50', 'Medium', 'Adrian', 'Bece', 'Neka Ulica 34', '0123456789012345', 0),
(4, '22.01.2015.', '03:01', 'mojRestoran Osijek', 'Custom Pizza', '999332033010000300', 2, '142.50', 'Jumbo', 'Adrian', 'Bece', 'Neka Ulica 34', '0123456789012345', 0),
(5, '22.01.2015.', '03:01', 'mojRestoran Osijek', 'Standard Burger', '831', 2, '8.50', 'Medium', 'John', 'Doe', 'Street name 123', '1234567890', 0),
(6, '22.01.2015.', '03:01', 'mojRestoran Osijek', 'Vegeburger Cheese', '831', 1, '9.50', 'Medium', 'John', 'Doe', 'Street name 123', '1234567890', 0),
(7, '22.01.2015.', '03:01', 'mojRestoran Osijek', 'Custom Hamburger', '95033033003', 2, '22.00', 'Medium', 'John', 'Doe', 'Street name 123', '1234567890', 0),
(8, '22.01.2015.', '03:01', 'mojRestoran Osijek', 'Salad', '7121', 1, '6.50', 'Medium', 'John', 'Doe', 'Street name 123', '1234567890', 0),
(9, '22.01.2015.', '03:01', 'mojRestoran Osijek', 'French Fries', '7631', 1, '7.50', 'Medium', 'John', 'Doe', 'Street name 123', '1234567890', 0),
(10, '22.01.2015.', '03:01', 'mojRestoran Osijek', 'Slavonska', '543', 1, '36.50', 'Medium', 'Jane', 'Doe', 'Some other street 56', '90456753243', 0),
(11, '22.01.2015.', '03:01', 'mojRestoran Osijek', 'Vesuvio', '567', 1, '30.00', 'Medium', 'Jane', 'Doe', 'Some other street 56', '90456753243', 0),
(12, '22.01.2015.', '03:01', 'mojRestoran Osijek', 'Capricciosa', '678', 1, '35.00', 'Jumbo', 'Jane', 'Doe', 'Some other street 56', '90456753243', 0),
(13, '22.01.2015.', '03:01', 'mojRestoran Osijek', 'Standard Burger', '831', 1, '8.50', 'Medium', 'Jane', 'Doe', 'Some other street 56', '90456753243', 0),
(14, '22.01.2015.', '03:01', 'mojRestoran Osijek', 'Cheeseburger', '831', 1, '10.00', 'Medium', 'Jane', 'Doe', 'Some other street 56', '90456753243', 0),
(15, '22.01.2015.', '03:01', 'mojRestoran Osijek', 'French Fries', '7631', 4, '7.50', 'Medium', 'Jane', 'Doe', 'Some other street 56', '90456753243', 0),
(16, '22.01.2015.', '03:01', 'mojRestoran Osijek', 'Salad', '7121', 3, '6.50', 'Medium', 'Jane', 'Doe', 'Some other street 56', '90456753243', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `narudzbe`
--
ALTER TABLE `narudzbe`
 ADD PRIMARY KEY (`ID`), ADD UNIQUE KEY `ID` (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `narudzbe`
--
ALTER TABLE `narudzbe`
MODIFY `ID` int(10) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=17;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
