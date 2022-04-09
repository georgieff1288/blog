-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 09, 2022 at 08:59 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `vuejs_blog_task`
--

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` int(11) NOT NULL,
  `title` varchar(300) NOT NULL,
  `content` varchar(1000) NOT NULL,
  `date` varchar(30) NOT NULL,
  `image_url` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `title`, `content`, `date`, `image_url`) VALUES
(1, 'Looking cool at Pink', 'Nullam tincidunt, purus sit amet viverra auctor, quamque incidunt, puincidunt, Vestibulum tristique posuere iaculis. Sus.', 'Jan 1, 2021', 'https://media.istockphoto.com/photos/personal-information-to-shop-online-filling-electronic-form-on-with-picture-id1209272402'),
(2, 'Fringilla bibendum sem ultret\r\n', 'Nullam tincidunt, purus sit amet viverra auctor, quamque incidunt, puincidunt, Vestibulum tristique posuere iaculis. Sus.', 'Feb 12, 2021', 'https://media.istockphoto.com/photos/close-up-of-hands-typing-on-laptop-night-work-concept-picture-id1091348950'),
(3, 'Looking awesome with new update', 'Nullam tincidunt, purus sit amet viverra auctor, quamque incidunt, puincidunt, Vestibulum tristique posuere iaculis. Sus.', 'March 21, 2021', 'https://media.istockphoto.com/photos/close-up-of-hands-typing-on-laptop-night-work-concept-picture-id1091348950'),
(4, 'Etiam eget vehicula dolor', 'Nullam tincidunt, purus sit amet viverra auctor, quamque incidunt, puincidunt, Vestibulum tristique posuere iaculis. Sus.', 'June 23,2021', 'https://media.istockphoto.com/photos/online-news-on-a-smartphone-and-laptop-woman-reading-news-or-articles-picture-id1219980553'),
(5, 'Vestibulum tristique posuere', 'Nullam tincidunt, purus sit amet viverra auctor, quamque incidunt, puincidunt, Vestibulum tristique posuere iaculis. Sus.', 'July 21,2021', 'https://media.istockphoto.com/photos/shopping-online-concept-parcel-or-paper-cartons-with-a-shopping-cart-picture-id1249219777'),
(6, 'Morbi vitae mi at nisi tinci\r\ndunt maximus', 'quamque incidunt, puincidunt, Vestibulum tristique posuere iaculis. Sus.', '7 hrs ago', 'https://media.istockphoto.com/photos/digital-lifestyle-blog-writer-or-business-person-using-smart-device-picture-id1176438482'),
(7, 'Suspendisse orci tortor,\r\nauctor non luctus', 'quamque incidunt, puincidunt, Vestibulum tristique posuere iaculis. Sus.', '2 hrs ago', 'https://media.istockphoto.com/photos/online-shopping-picture-id923079848'),
(8, 'Looking awesome with new update', 'Nullam tincidunt, purus sit amet viverra auctor, quamque incidunt, puincidunt, Vestibulum tristique posuere iaculis. Sus.', '1 hr ago', 'https://media.istockphoto.com/photos/business-technology-internet-and-networking-concept-picture-id1016968886'),
(9, 'Looking cool at Pink', 'Nullam tincidunt, purus sit amet viverra auctor, quamque incidunt, puincidunt, Vestibulum tristique posuere iaculis. Sus.', '41 min ago', 'https://media.istockphoto.com/photos/closeup-cropped-image-student-girl-hands-typing-using-laptop-picture-id1146488500'),
(10, 'Added Cool Features', 'Duis orci nisl, ornare non diam id, dapibus faucibus urna. Vestibulum tristique posuere iaculis. Suspendisse orci tortor, auctor non luctus sed, vulputate sit amet libero. Maecenas congue fringilla justo molestie dapibus. Cras quis erat in velit rhoncus mollis. Phasellus eu enim dignissim an', '30 min ago', 'https://media.istockphoto.com/photos/young-women-using-computer-cyber-security-concept-picture-id1166334015');

-- --------------------------------------------------------

--
-- Table structure for table `posts_content`
--

CREATE TABLE `posts_content` (
  `id` int(11) NOT NULL,
  `post_id` int(50) NOT NULL,
  `title` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `posts_content`
--

INSERT INTO `posts_content` (`id`, `post_id`, `title`) VALUES
(1, 1, 'Looking cool at Pink'),
(2, 2, 'Fringilla bibendum sem ultret'),
(3, 3, 'Looking awesome with new update'),
(4, 4, 'Etiam eget vehicula dolor'),
(5, 5, 'Vestibulum tristique posuere'),
(6, 6, 'Morbi vitae mi at nisi tinci dunt maximus'),
(7, 7, 'Suspendisse orci tortor, auctor non luctus'),
(8, 8, 'Looking awesome with new update'),
(9, 9, 'Looking cool at Pink'),
(10, 10, 'Added Cool Features');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `password` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`) VALUES
(1, 'Ivan', 'ivan@abv.bg', '$2b$10$nz0QQEmFG16J57D1f8Z1BevI7P9QfA.xMo6onlaUkv3Adw2C9iFT.'),
(21, 'Georgi', 'georgi@abv.bg', '$2b$10$6x1e8Luku5JopYlJpGWAU.G5X7ODpXB60GwklRiwunfffm71EuTWa');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `posts_content`
--
ALTER TABLE `posts_content`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `posts_content`
--
ALTER TABLE `posts_content`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
