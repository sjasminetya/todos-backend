-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 21, 2021 at 06:33 AM
-- Server version: 10.1.36-MariaDB
-- PHP Version: 5.6.38

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `todos`
--

-- --------------------------------------------------------

--
-- Table structure for table `label`
--

CREATE TABLE `label` (
  `id` varchar(255) NOT NULL,
  `label` varchar(255) NOT NULL,
  `desc` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `label`
--

INSERT INTO `label` (`id`, `label`, `desc`, `created_at`, `update_at`) VALUES
('b7edbdba-53e1-49a6-855d-1acd255eccf1', 'important', 'important', '2021-02-19 17:33:01', '2021-02-19 17:33:01'),
('f4993ba0-2388-4c8d-abed-27a75584008c', 'not important', 'not important', '2021-02-19 17:33:14', '2021-02-19 17:33:14');

-- --------------------------------------------------------

--
-- Table structure for table `task`
--

CREATE TABLE `task` (
  `id` varchar(255) NOT NULL,
  `userId` varchar(255) NOT NULL,
  `labelId` varchar(255) NOT NULL,
  `task` varchar(255) NOT NULL,
  `completed` tinyint(2) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `task`
--

INSERT INTO `task` (`id`, `userId`, `labelId`, `task`, `completed`, `created_at`, `update_at`) VALUES
('335f48d7-7fea-4e89-93d0-4cc3df920832', '29ada7ec-b1e8-4299-a8cf-2f2abbf095a7', 'b7edbdba-53e1-49a6-855d-1acd255eccf1', 'mencuci baju', 2, '2021-02-20 23:54:47', '2021-02-20 23:54:47'),
('687b9ae0-527f-47bf-b3c9-027d43c419a0', '29ada7ec-b1e8-4299-a8cf-2f2abbf095a7', 'b7edbdba-53e1-49a6-855d-1acd255eccf1', 'mengerjakan pr matematika', 2, '2021-02-20 23:14:53', '2021-02-20 23:14:53'),
('aba68d48-f58c-41ad-91f0-466bdf8695cc', '29ada7ec-b1e8-4299-a8cf-2f2abbf095a7', 'b7edbdba-53e1-49a6-855d-1acd255eccf1', 'pr ipa', 2, '2021-02-21 05:07:57', '2021-02-21 05:07:57'),
('d61fe0cb-eb0c-4d34-b173-31e3b391c367', 'bdd3c3b9-1dbe-4500-87a7-bf3c45fb6fc6', 'b7edbdba-53e1-49a6-855d-1acd255eccf1', 'mengerjakan pr matematika', 2, '2021-02-19 18:54:46', '2021-02-19 18:54:46'),
('f0c3f560-777a-4ad3-9f4c-b147ffbb0d7a', 'bdd3c3b9-1dbe-4500-87a7-bf3c45fb6fc6', 'b7edbdba-53e1-49a6-855d-1acd255eccf1', 'mengerjakan tugas', 2, '2021-02-19 18:28:11', '2021-02-19 18:28:11');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` tinyint(2) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `username`, `password`, `role`, `created_at`, `update_at`) VALUES
('29ada7ec-b1e8-4299-a8cf-2f2abbf095a7', 'shaula', 'sjasminetya', '$2b$10$j6P0IJZmokq69FeUPihCJuBqRdvyXR1XDv8mzKGcqQOb.VZ8MAGFO', 2, '2021-02-19 15:27:40', '2021-02-19 15:27:40');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `label`
--
ALTER TABLE `label`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `task`
--
ALTER TABLE `task`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
