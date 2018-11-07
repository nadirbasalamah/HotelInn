-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 06 Nov 2018 pada 05.53
-- Versi Server: 10.1.30-MariaDB
-- PHP Version: 7.2.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hotelservice`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `taxi`
--

CREATE TABLE `taxi` (
  `no_id` varchar(255) NOT NULL,
  `nama_taxi` varchar(255) NOT NULL,
  `kapasitas` int(11) NOT NULL,
  `no_telp` varchar(255) NOT NULL,
  `harga` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `taxi`
--
-- MASUKKAN DATA DI TABEL TAXI DENGAN MENGGUNAKAN KUERI INI
INSERT INTO `taxi` (`no_id`, `nama_taxi`, `kapasitas`, `no_telp`, `harga`) VALUES
('1', 'Blue Bird', 20, '08522669987871', 150000),
('2', 'Angkasapura', 15, '087448112850', 120000),
('3', 'Adi Raya', 17, '0831454871045', 105000),
('4', 'Cipgans', 15, '0831354871045', 100000),
('5', 'Citr', 18, '0831454871045', 115000),
('6', 'APS', 10, '0831454871045', 125000),
('7', 'DRS', 18, '0831454871045', 135000),
('8', 'Smrat', 11, '0831454871045', 145000),
('9', 'Runn', 11, '0831454871045', 155000),
('10', 'Yellowish', 20, '0831454871045', 165000),
('11', 'Bronze Bird', 22, '0831454871045', 200000),
('12', 'Bro', 11, '0831454871045', 110000),
('13', 'Taxxi', 15, '0831454871045', 150000),
('14', 'Cabs', 17, '0831454871045', 120000),
('15', 'Cabzz', 20, '0831454871045', 150000);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `taxi`
--
ALTER TABLE `taxi`
  ADD PRIMARY KEY (`no_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
