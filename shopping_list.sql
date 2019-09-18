-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Sep 18, 2019 at 05:52 PM
-- Server version: 10.3.16-MariaDB
-- PHP Version: 7.3.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `shopping_list`
--

-- --------------------------------------------------------

--
-- Table structure for table `items`
--

CREATE TABLE `items` (
  `id` int(4) NOT NULL,
  `name` varchar(255) NOT NULL,
  `date_added` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `items`
--

INSERT INTO `items` (`id`, `name`, `date_added`) VALUES
(1, 'Egg', '2019-09-09 12:42:08'),
(2, 'Goat', '2019-09-09 12:42:08'),
(12, 'Engine', '2019-09-09 13:38:32'),
(17, 'Engine', '2019-09-09 13:39:38'),
(19, 'Bulb', '2019-09-09 13:42:26'),
(20, 'Engine', '2019-09-09 13:42:58'),
(21, 'Dove', '2019-09-13 05:55:23'),
(24, 'Bluff', '2019-09-13 06:15:45'),
(27, 'Book', '2019-09-13 06:24:29'),
(28, 'Book Of Life', '2019-09-13 06:27:24'),
(35, 'Food', '2019-09-18 16:34:50'),
(36, 'Goods', '2019-09-18 16:35:26');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(5) NOT NULL,
  `name` varchar(221) NOT NULL,
  `email` varchar(51) NOT NULL,
  `password` varchar(221) NOT NULL,
  `registered_date` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `registered_date`) VALUES
(1, 'segun', 'me@you.com', 'meyou', '2019-09-15 07:58:16'),
(2, 'word', 'word', 'word', '2019-09-15 07:58:16'),
(3, 'admin', 'admin', '$2b$10$cc7UkLOtQrhzKTNiEQr6DejIO7DJQXUjRk1i4Su1TCBSJKrc.86RG', '2019-09-15 07:58:16'),
(4, 'admin', 'admin1', '$2b$10$s5SGz8vmctfO3EiKFck3K.5h7PZrPLKQ.mORKijU7eOe7JxEdE.ia', '2019-09-15 07:58:16'),
(5, 'admin', 'admin2', '$2b$10$HeO7rDe8Iu/3Cx4zRoJQr.ZyNdWkgd0aui4IxDrELX4V05QuuVXXG', '2019-09-15 07:58:16'),
(6, 'admin', 'admin3', '$2b$10$cY.ln/oK/aY0kS0F/Kl6he4.ZqozTmIpgmaVHILU2YkoQx80FHSKC', '2019-09-15 07:58:16'),
(7, 'admin', 'admin4', '$2b$10$PDRUgx4Wox49n9AIMvEg7ODgt6DhzHxl8TkqxQWtnecFYwAdcIA12', '2019-09-15 07:58:16'),
(8, 'admin', 'admin5', '$2b$10$2fo1AQBgSO0DvoUro4/u2OWXvFTe7PQFukolJK3zYsJ9mYinltjXO', '2019-09-15 07:58:16'),
(9, 'admin', 'admin6', '$2b$10$./bDOfYyyBIK7Mf8TltQ7.z7a6EF/SqdYAGVqRA6x1y4qbX7sA4ta', '2019-09-15 07:58:16'),
(10, 'admin', 'admin7', '$2b$10$ViTEMXsnGDwwJa.bEHbKFejCKLuW1lfNRyplMnCvHI02ETVBUrYx2', '2019-09-15 07:58:16'),
(11, 'admin', 'admin11', '$2b$10$0hPFdS5sARH3TlFDVD3tIO0kflyCeg8G24zspcXy3/f8aDzq8tGKy', '2019-09-15 07:58:16'),
(12, 'admin12', 'admin12', '$2b$10$QJ.wz3podnvzt3ky4g5CvuB.ZqjOuyV27lM0SXp8onQ5U8nibIyq.', '2019-09-15 07:58:48'),
(13, 'aio', 'aio@mern.com', '$2b$10$IcLVshFIjTQq0UT8n51Ohe761aDFFSOJSWxtxKvSs2EccIf9Y0xK2', '2019-09-18 14:48:36');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `items`
--
ALTER TABLE `items`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `items`
--
ALTER TABLE `items`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
