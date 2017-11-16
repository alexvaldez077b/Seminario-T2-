-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 16-11-2017 a las 11:35:12
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
(1, 'Secuestro', NULL, NULL),
(2, 'Robo a transeúnte', NULL, NULL),
(3, 'Robo a casa habitación', NULL, NULL),
(4, 'Robo a negocio', NULL, NULL),
(5, 'Fraude', NULL, NULL),
(6, 'Daño a propiedad', NULL, NULL),
(7, 'Robo de vehículo', NULL, NULL),
(8, 'Delito contra la salud', NULL, NULL),
(9, 'Tiroteo', NULL, NULL),
(10, 'Homicidio', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `media`
--

CREATE TABLE `media` (
  `id` int(10) UNSIGNED NOT NULL,
  `id_event` int(11) NOT NULL,
  `path` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `media`
--

INSERT INTO `media` (`id`, `id_event`, `path`, `created_at`, `updated_at`) VALUES
(1, 4, 'http://s3.autofact.cl/imagenFaq/20170303174730_300x20035707920721548526.png?Expires=1804096827&AWSAccessKeyId=AKIAJJZWVRSJBD6PPXXQ&Signature=gF0RpnSeTSwvhtHyGD8bNHlU6eA%3D', '2017-09-27 16:54:08', NULL),
(2, 6, 'http://www.ultimocartucho.es/wp-content/uploads/2015/01/fisiologia_enfrentamiento_armado_ho.jpg', '2017-09-27 17:27:02', NULL);

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
(8, '2017_09_18_222158_create_crimenes_table', 1),
(9, '2017_09_27_161306_create_media_table', 2);

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
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `news`
--

INSERT INTO `news` (`id`, `id_user`, `id_crime`, `title`, `description`, `violence`, `lat`, `lng`, `at`, `created_at`, `updated_at`) VALUES
(4, 1, 7, 'Robo de vehiculo cerca de gran patio.', 'sujetos a bordo de una troca roja robaron mi vehiculo Honda Civic color Blanco placas XXX-123', 1, '31.642753856339855', '-106.454518228124980', '2017-10-20 11:44:00', '2017-10-20 18:50:13', NULL),
(5, 1, 2, 'Asalto en las afueras del aeropuerto.', 'un sujeto armado me despojo de todas mis pertenecias, el tipo era como de 1.70, pelo negro y ojos verdez.', 1, '31.639246395177572', '-106.433232217382800', '2017-10-20 09:45:00', '2017-10-20 18:53:15', NULL),
(6, 1, 9, 'Enfrentamiento armado entre policias y ladrones ***Precaucion***', 'Policias federales dispararon en contra de una camioneta color negra donde viajaban sujetos armados.', 1, '31.649987577116978', '-106.462242990087870', '2017-10-20 12:50:00', '2017-10-20 18:55:54', NULL),
(7, 1, 10, 'Hombre sin vida en las afueras de un taller mecanico', 'Localizan a una persona muerta con presuntos signos de violencia...', 1, '31.645092090276480', '-106.446278482031230', '2017-10-20 05:16:00', '2017-10-20 20:18:16', NULL);

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
(1, 'Alejandro valdez', 'alexvaldez077b@gmail.com', '$2y$10$nFJCGUhbsz4xObOuZyLW6.t8jdjD5Zi2rCjRMsMRkffFeTUzC99Ua', NULL, '2017-09-21 22:36:36', '2017-09-21 22:36:36'),
(2, 'user2', 'alexvaldez077c@maktech.com', '$2y$10$hJcNwDIh6cxUN.cvUYUndu0JsgYZNtMj/LnFovqxXj1lPCZPzifWi', NULL, '2017-11-17 00:39:12', '2017-11-17 00:39:12');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `crimenes`
--
ALTER TABLE `crimenes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `media`
--
ALTER TABLE `media`
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
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT de la tabla `media`
--
ALTER TABLE `media`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT de la tabla `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT de la tabla `news`
--
ALTER TABLE `news`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
