-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 11, 2022 at 10:17 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `news`
--

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE `contact` (
  `srNo` int(20) NOT NULL,
  `name` varchar(30) NOT NULL,
  `mobile` int(15) NOT NULL,
  `email` varchar(30) NOT NULL,
  `address` varchar(50) NOT NULL,
  `feedback` varchar(500) NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `contact`
--

INSERT INTO `contact` (`srNo`, `name`, `mobile`, `email`, `address`, `feedback`, `date`) VALUES
(1, 'dede', 123, '432323', '22323', '23333333333333333333333333333', '2022-06-25 20:45:09'),
(2, 'Devendra Bijwe', 2147483647, '22devendrabijwe@gmail.com', 'Sawla', 'rrtrtrtrt', '2022-06-26 00:27:40'),
(3, 'Devendra Bijwe', 2147483647, '22devendrabijwe@gmail.com', 'Sawla', 'rrtrtrtrt', '2022-06-26 00:29:10'),
(4, 'Devendra Bijwe', 2147483647, '22devendrabijwe@gmail.com', 'Sawla', 'rrtrtrtrt', '2022-06-26 00:29:18'),
(5, 'Devendra Bijwe', 2147483647, '22devendrabijwe@gmail.com', 'Sawla', 'rrtrtrtrt', '2022-06-26 00:29:36'),
(6, 'Devendra Bijwe', 2147483647, '22devendrabijwe@gmail.com', 'Sawla', 'wwwwwwwwww', '2022-06-26 00:29:51'),
(7, 'Devendra Bijwe', 2147483647, '22devendrabijwe@gmail.com', 'Sawla', 'wwwwwwwwww', '2022-06-26 00:29:53'),
(8, 'Devendra Bijwe', 2147483647, '22devendrabijwe@gmail.com', 'Sawla', 'wwwwwwwwww', '2022-06-26 00:29:58'),
(9, 'Devendra Bijwe', 2147483647, '22devendrabijwe@gmail.com', 'Sawla', 'wwwwwwwwww', '2022-06-26 00:30:00'),
(10, 'Devendra Bijwe', 2147483647, '22devendrabijwe@gmail.com', 'Sawla', 'wwwwwwwwww', '2022-06-26 00:30:01'),
(11, 'Devendra Bijwe', 2147483647, '22devendrabijwe@gmail.com', 'Sawla', 'wwwwwwwwww', '2022-06-26 00:30:01'),
(12, 'Devendra Bijwe', 2147483647, '22devendrabijwe@gmail.com', 'Sawla', 'wwwwwwwwww', '2022-06-26 00:30:01'),
(13, 'Devendra Bijwe', 2147483647, '22devendrabijwe@gmail.com', 'Sawla', 'wwwwwwwwww', '2022-06-26 00:30:35'),
(14, 'Devendra Bijwe', 2147483647, '22devendrabijwe@gmail.com', 'Sawla', 'dddd', '2022-06-26 00:30:55'),
(15, 'Devendra Bijwe', 2147483647, '22devendrabijwe@gmail.com', 'Sawla', 'dddd', '2022-06-26 00:32:15'),
(16, 'Devendra Bijwe', 2147483647, '22devendrabijwe@gmail.com', 'Sawla', 'hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii', '2022-06-26 00:32:34'),
(17, 'Devendra Bijwe', 2147483647, '22devendrabijwe@gmail.com', 'Sawla', 'ok', '2022-06-26 00:35:56'),
(18, 'Devendra Bijwe', 2147483647, '22devendrabijwe@gmail.com', 'Sawla', 'ok', '2022-06-26 00:37:09'),
(19, 'Devendra Bijwe', 2147483647, '22devendrabijwe@gmail.com', 'Sawla', 'ok', '2022-06-26 00:37:11'),
(20, 'Devendra Bijwe', 2147483647, '22devendrabijwe@gmail.com', 'Sawla', 'ok', '2022-06-26 00:37:13'),
(21, 'Devendra Bijwe', 2147483647, '22devendrabijwe@gmail.com', 'Sawla', 'ok', '2022-06-26 00:37:22'),
(22, 'Devendra Bijwe', 2147483647, '22devendrabijwe@gmail.com', 'Sawla', 'ok', '2022-06-26 00:37:57'),
(23, 'Devendra Bijwe', 2147483647, '22devendrabijwe@gmail.com', 'Sawla', 'ok', '2022-06-26 00:38:19'),
(24, 'Devendra Bijwe', 2147483647, '22devendrabijwe@gmail.com', 'Sawla', 'ok', '2022-06-26 00:39:01'),
(25, 'Devendra Bijwe', 2147483647, '22devendrabijwe@gmail.com', 'Sawla', 'ok', '2022-06-26 00:39:16'),
(26, 'Devendra Bijwe', 2147483647, '22devendrabijwe@gmail.com', 'Sawla', 'ok', '2022-06-26 00:39:32'),
(27, 'Devendra Bijwe', 2147483647, '22devendrabijwe@gmail.com', 'Sawla', 'ok', '2022-06-26 00:40:41'),
(28, 'Devendra Bijwe', 2147483647, '22devendrabijwe@gmail.com', 'Sawla', 'ok', '2022-06-26 00:41:14'),
(29, 'Devendra Bijwe', 2147483647, '22devendrabijwe@gmail.com', 'Sawla', 'ok', '2022-06-26 00:41:47'),
(30, 'Devendra Bijwe', 2147483647, '22devendrabijwe@gmail.com', 'Sawla', 'ok', '2022-06-26 00:42:06'),
(31, 'Devendra Bijwe', 2147483647, '22devendrabijwe@gmail.com', 'Sawla', 'ok', '2022-06-26 00:42:42'),
(32, 'Devendra Bijwe', 2147483647, '22devendrabijwe@gmail.com', 'Sawla', 'ok', '2022-06-26 00:44:01'),
(33, 'Devendra Bijwe', 2147483647, '22devendrabijwe@gmail.com', 'Sawla', 'ok', '2022-06-26 00:44:26'),
(34, 'Devendra Bijwe', 2147483647, '22devendrabijwe@gmail.com', 'Sawla', 'ok', '2022-06-26 00:44:50'),
(35, 'Devendra Bijwe', 2147483647, '22devendrabijwe@gmail.com', 'Sawla', 'ok', '2022-06-26 00:45:33'),
(36, 'dev fggfgf', 0, 'devbijwe@gmail.com', 'fghgh', 'gggggggggggggggggggggggggggggggggggggg', '2022-06-26 15:07:47'),
(37, 'Devendra Bijwe', 2147483647, '22devendrabijwe@gmail.com', 'Sawla', '', '2022-06-30 19:45:22'),
(38, 'Devendra Bijwe', 2147483647, '22devendrabijwe@gmail.com', 'Sawla', '', '2022-06-30 19:59:07'),
(39, 'Devendra Bijwe', 2147483647, '22devendrabijwe@gmail.com', 'Sawla', '', '2022-06-30 19:59:17'),
(40, 'Devendra Bijwe', 2147483647, '22devendrabijwe@gmail.com', 'Sawla', '', '2022-06-30 20:00:03'),
(41, 'Devendra Bijwe', 2147483647, '22devendrabijwe@gmail.com', 'Sawla', 'fdgfdgdgdsgdgddgdgdgdgdgdgdg', '2022-07-04 22:12:22'),
(42, 'Devendra Bijwe', 2147483647, '22devendrabijwe@gmail.com', 'Sawla', '', '2022-07-08 11:48:37'),
(43, 'Devendra Bijwe', 2147483647, '22devendrabijwe@gmail.com', 'Sawla', '', '2022-07-08 11:49:53'),
(44, 'Devendra Bijwe', 2147483647, '22devendrabijwe@gmail.com', 'Sawla', '', '2022-07-08 11:49:59'),
(45, 'Devendra Bijwe', 2147483647, '22devendrabijwe@gmail.com', 'Sawla', 'FFGFGFGFGFGFGFGFFGFGFGFGFG', '2022-07-10 00:50:25'),
(46, 'Devendra Bijwe', 2147483647, '22devendrabijwe@gmail.com', 'Sawla', 'ilu', '2022-07-10 23:09:10'),
(47, 'Devendra Bijwe', 2147483647, '22devendrabijwe@gmail.com', 'Sawla', 'ilu', '2022-07-10 23:09:54'),
(48, 'Devendra Bijwe', 2147483647, '22devendrabijwe@gmail.com', 'Sawla', 'dffdfdfdf', '2022-07-10 23:10:08'),
(49, 'shiva Bijwe', 2147483647, '22devendrabijwe@gmail.com', 'Sawla', 'gfgfgfgfbf', '2022-07-11 14:50:03'),
(50, 'Devendra Bijwe', 2147483647, '22devendrabijwe@gmail.com', 'Sawla', 'dfffsfdfdfddddd', '2022-08-02 18:07:29'),
(51, 'Devendra Bijwe', 2147483647, '22devendrabijwe@gmail.com', 'Sawla', 'dfffsfdfdfddddd', '2022-08-02 18:07:44'),
(52, 'Devendra Bijwe', 2147483647, '22devendrabijwe@gmail.com', 'Sawla', 'dfffsfdfdfddddd', '2022-08-02 18:10:12');

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `srNo` int(10) NOT NULL,
  `firstname` varchar(20) NOT NULL,
  `secname` varchar(20) NOT NULL,
  `mobile` varchar(20) NOT NULL,
  `email` varchar(30) NOT NULL,
  `password` varchar(50) NOT NULL,
  `address_country` varchar(15) NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`srNo`, `firstname`, `secname`, `mobile`, `email`, `password`, `address_country`, `date`) VALUES
(1, 'shiva', 'bijwe', '7666230646', '22devendrabijwe@gmail.com', '12345678', 'india', '2022-07-02 16:44:35'),
(45, 'Devendra', 'Bijwe', '7666230123', '22devendrabijwe@gmail.com', '123', 'Sawla', '2022-07-10 23:41:11'),
(48, 'Devendra', 'Bijwe', '7666230645', '22devendrabijwe@gmail.com', 'dfddfdfdddf', 'Sawla', '2022-07-10 23:43:30'),
(50, 'Devendra', 'Bijwe', '1234567890', '22devendrabijwe@gmail.com', '12345', 'Sawla', '2022-07-11 14:44:42'),
(55, 'Devendra', 'Bijwe', '1111111111', '22devendrabijwe@gmail.com', '1', 'Sawla', '2022-09-19 12:05:12');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`srNo`),
  ADD KEY `srNo` (`srNo`);

--
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`srNo`),
  ADD UNIQUE KEY `mobile` (`mobile`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `contact`
--
ALTER TABLE `contact`
  MODIFY `srNo` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;

--
-- AUTO_INCREMENT for table `login`
--
ALTER TABLE `login`
  MODIFY `srNo` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=56;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
