-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 22-09-2017 a las 15:12:14
-- Versión del servidor: 5.7.19-0ubuntu0.16.04.1
-- Versión de PHP: 7.0.22-0ubuntu0.16.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `crimedata`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `crimenes`
--

CREATE TABLE `crimenes` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `crimenes`
--

INSERT INTO `crimenes` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'Secuestro', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(5, '2014_10_12_000000_create_users_table', 1),
(6, '2014_10_12_100000_create_password_resets_table', 1),
(7, '2017_09_13_143742_create_news_table', 1),
(8, '2017_09_18_222158_create_crimenes_table', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `news`
--

CREATE TABLE `news` (
  `id` int(10) UNSIGNED NOT NULL,
  `id_user` int(11) NOT NULL,
  `id_crime` int(11) NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `violence` tinyint(1) NOT NULL,
  `lat` decimal(18,15) NOT NULL,
  `lng` decimal(18,15) NOT NULL,
  `at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `photo` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT 'http://maxpixel.freegreatpicture.com/static/photo/1x/Breaking-News-Urgently-The-Gap-Message-News-Alarm-2310064.jpg',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `news`
--

INSERT INTO `news` (`id`, `id_user`, `id_crime`, `title`, `description`, `violence`, `lat`, `lng`, `at`, `photo`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 'title', 'description', 1, '31.644863500000000', '-106.446649100000000', '2017-09-21 11:08:16', 'http://maxpixel.freegreatpicture.com/static/photo/1x/Breaking-News-Urgently-The-Gap-Message-News-Alarm-2310064.jpg', NULL, NULL),
(2, 1, 1, 't', 'ted', 1, '31.644863500000000', '-106.446649100000000', '2017-08-21 12:16:00', 'http://maxpixel.freegreatpicture.com/static/photo/1x/Breaking-News-Urgently-The-Gap-Message-News-Alarm-2310064.jpg', NULL, NULL),
(3, 1, 1, 't', 'ted', 1, '31.644863500000000', '-106.446649100000000', '2017-08-21 12:16:00', 'http://maxpixel.freegreatpicture.com/static/photo/1x/Breaking-News-Urgently-The-Gap-Message-News-Alarm-2310064.jpg', NULL, NULL),
(4, 1, 1, 'other wvent', 'eveoafl;djsf\nasd\nfas\ndf', 1, '31.660645079599256', '-106.397210623437500', '2017-09-21 11:37:00', 'http://maxpixel.freegreatpicture.com/static/photo/1x/Breaking-News-Urgently-The-Gap-Message-News-Alarm-2310064.jpg', NULL, NULL),
(5, 1, 1, 'refresh test', 'test to refresh functionadsfas', 1, '31.644863500000000', '-106.446649100000000', '2017-09-21 11:43:00', 'http://maxpixel.freegreatpicture.com/static/photo/1x/Breaking-News-Urgently-The-Gap-Message-News-Alarm-2310064.jpg', NULL, NULL),
(6, 1, 1, 'titulo 2', 'Hola mundo qwerty', 1, '31.643672787236220', '-106.442529226953130', '2017-09-22 09:39:00', 'http://maxpixel.freegreatpicture.com/static/photo/1x/Breaking-News-Urgently-The-Gap-Message-News-Alarm-2310064.jpg', '2017-09-22 16:40:27', NULL),
(7, 1, 1, 'title 3', 'qwertyuiopp[', 1, '31.644841900000000', '-106.446649100000000', '2017-09-22 10:35:00', 'http://maxpixel.freegreatpicture.com/static/photo/1x/Breaking-News-Urgently-The-Gap-Message-News-Alarm-2310064.jpg', '2017-09-22 16:41:21', NULL),
(8, 1, 1, 'qwerty', 'qazwsxedc', 1, '31.707367992043256', '-106.424676443750000', '2017-09-22 10:42:00', 'http://maxpixel.freegreatpicture.com/static/photo/1x/Breaking-News-Urgently-The-Gap-Message-News-Alarm-2310064.jpg', '2017-09-22 16:42:34', NULL),
(9, 1, 1, '74854', 'qawsed', 1, '31.644841900000000', '-106.446649100000000', '2017-09-22 10:51:00', 'http://maxpixel.freegreatpicture.com/static/photo/1x/Breaking-News-Urgently-The-Gap-Message-News-Alarm-2310064.jpg', '2017-09-22 16:51:21', NULL),
(10, 1, 1, 'titulo2', 'erw', 1, '31.625571264134237', '-106.439782644921880', '2017-09-22 15:00:00', 'http://maxpixel.freegreatpicture.com/static/photo/1x/Breaking-News-Urgently-The-Gap-Message-News-Alarm-2310064.jpg', '2017-09-22 21:01:59', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Alejandro valdez', 'alexvaldez077b@gmail.com', '$2y$10$nFJCGUhbsz4xObOuZyLW6.t8jdjD5Zi2rCjRMsMRkffFeTUzC99Ua', NULL, '2017-09-21 22:36:36', '2017-09-21 22:36:36');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `crimenes`
--
ALTER TABLE `crimenes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `crimenes`
--
ALTER TABLE `crimenes`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT de la tabla `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT de la tabla `news`
--
ALTER TABLE `news`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
