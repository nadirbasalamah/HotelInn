-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 06 Nov 2018 pada 05.52
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
-- Struktur dari tabel `kamar`
--

CREATE TABLE `kamar` (
  `nama` varchar(255) NOT NULL,
  `no_id` varchar(255) NOT NULL,
  `alamat` varchar(255) NOT NULL,
  `no_telp` varchar(255) NOT NULL,
  `jumlah_kamar` int(255) NOT NULL,
  `jenis_kamar` varchar(255) NOT NULL,
  `harga_kamar` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `kamar`
--

INSERT INTO `kamar` (`nama`, `no_id`, `alamat`, `no_telp`, `jumlah_kamar`, `jenis_kamar`, `harga_kamar`) VALUES
('Kamar Hotel Regular', '0', 'Jl. mana saja', '0812345678', 101, 'Standar', 725000),
('Kamar Hotel Regular', '1', 'Jl. apa saja', '0812345671', 125, 'Standar', 625000),
('Kamar Hotel Nopotel', '10', 'Jl. pstree', '0812345412', 25, 'Suite', 10000000),
('Kamar Hotel Nopotel', '11', 'Jl. vanilla javascript', '0832345678', 10, 'Suite', 8250000),
('Kamar Hotel Wonderful', '12', 'Jl. in aja dulu', '0872345671', 25, 'Suite', 10625000),
('Kamar Hotel Wonderful', '13', 'Jl. pycharm', '0872345648', 25, 'Suite', 12955000),
('Kamar Hotel Best JS', '14', 'Jl. seesharp', '0822345466', 25, 'Suite', 11125000),
('Kamar Hotel Regular', '2', 'Jl. gitignore', '0812345648', 130, 'Standar', 955000),
('Kamar Hotel Regular', '3', 'Jl. posttmann', '0812345466', 150, 'Standar', 125000),
('Kamar Hotel Electron', '4', 'Jl. chava', '0852345462', 125, 'Standar', 925000),
('Kamar Hotel Nopotel', '5', 'Jl. top', '0812345444', 200, 'Deluxe', 1025000),
('Kamar Hotel Nopotel', '6', 'Jl. mana saja', '0812345687', 100, 'Deluxe', 2725000),
('Kamar Hotel Atriva', '7', 'Jl. apa saja', '0812345444', 225, 'Deluxe', 2625000),
('Kamar Hotel Safage', '8', 'Jl. gitignore', '0812345111', 325, 'Deluxe', 1955000),
('Kamar Hotel Hehehe', '9', 'Jl. posttmann', '0812345458', 225, 'Deluxe', 3125000);

-- --------------------------------------------------------

--
-- Struktur dari tabel `laundry`
--

CREATE TABLE `laundry` (
  `no_id` varchar(255) NOT NULL,
  `nama_laundry` varchar(255) NOT NULL,
  `alamat` varchar(255) NOT NULL,
  `no_telp` varchar(255) NOT NULL,
  `harga` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `laundry`
--

INSERT INTO `laundry` (`no_id`, `nama_laundry`, `alamat`, `no_telp`, `harga`) VALUES
('1', 'Biner Laundry', 'Jl. apa saja', '0812345444', 20),
('2', 'Aqua Laundry', 'Jl. posttmann', '0812345458', 25);

-- --------------------------------------------------------

--
-- Struktur dari tabel `restoran`
--

CREATE TABLE `restoran` (
  `no_id` varchar(255) NOT NULL,
  `nama_restoran` varchar(255) NOT NULL,
  `alamat` varchar(255) NOT NULL,
  `no_telp` varchar(255) NOT NULL,
  `kapasitas` int(11) NOT NULL,
  `jenis_paket` varchar(255) NOT NULL,
  `harga_restoran` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `restoran`
--

INSERT INTO `restoran` (`no_id`, `nama_restoran`, `alamat`, `no_telp`, `kapasitas`, `jenis_paket`, `harga_restoran`) VALUES
('1', 'Kelapa Kuning', 'Jl. Kelapa Kuning No. 5, Kota Tangerang', '81234567891', 50, 'Standar', 400000),
('10', 'Mang Hasan', 'Jl. Tanjung Burung No. 38, Kabupaten Tangerang', '84567891234', 30, 'Standar', 350000),
('11', 'Mang Hasan', 'Jl. Tanjung Burung No. 38, Kabupaten Tangerang', '84567891234', 40, 'Deluxe', 450000),
('12', 'Mang Hasan', 'Jl. Tanjung Burung No. 38, Kabupaten Tangerang', '84567891234', 60, 'Premium', 600000),
('13', 'Menega Cafe', 'Jl. Jimbaran No. 38, Bali', '85678912345', 50, 'Standar', 650000),
('14', 'Menega  Cafe', 'Jl. Jimbaran No. 38, Bali', '85678912345', 100, 'Deluxe', 1200000),
('15', 'Menega  Cafe', 'Jl. Jimbaran No. 38, Bali', '85678912345', 150, 'Premium', 1800000),
('2', 'Kelapa Kuning', 'Jl. Kelapa Kuning No. 5, Kota Tangerang', '81234567891', 100, 'Deluxe', 800000),
('3', 'Kelapa Kuning', 'Jl. Kelapa Kuning No. 5, Kota Tangerang', '81234567891', 150, 'Premium', 1250000),
('4', 'Nusa Indah', 'Jl. Nusa Bangsa No. 11, Kota Malang', '82345678912', 100, 'Standar', 1000000),
('5', 'Nusa Indah', 'Jl. Nusa Bangsa No. 11, Kota Malang', '82345678912', 200, 'Deluxe', 2000000),
('6', 'Nusa Indah', 'Jl. Nusa Bangsa No. 11, Kota Malang', '82345678912', 300, 'Premium', 2750000),
('7', 'Dapur Oma', 'Jl. Patimura No. 29, Kota Jember', '83456789123', 30, 'Standar', 200000),
('8', 'Dapur Oma', 'Jl. Patimura No. 29, Kota Jember', '83456789123', 50, 'Deluxe', 450000),
('9', 'Dapur Oma', 'Jl. Patimura No. 29, Kota Jember', '83456789123', 80, 'Premium', 725000);

-- --------------------------------------------------------

--
-- Struktur dari tabel `ruangan`
--

CREATE TABLE `ruangan` (
  `no_id` varchar(255) NOT NULL,
  `nama_ruangan` varchar(255) NOT NULL,
  `kapasitas` int(11) NOT NULL,
  `harga` int(11) NOT NULL,
  `no_telp` varchar(255) NOT NULL,
  `alamat` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `ruangan`
--

INSERT INTO `ruangan` (`no_id`, `nama_ruangan`, `kapasitas`, `harga`, `no_telp`, `alamat`) VALUES
('1', 'Wedding', 150, 7500000, '085678912345', 'Jl. Jakarta No. 10, Malang'),
('10', 'Graduation', 300, 9000000, '085610112345', 'Jl. Denpasar No. 10, Banjarmasin'),
('11', 'Graduation', 250, 7500000, '08342448912345', 'Jl. Badung No. 10, Nganjuk'),
('12', 'Graduation', 150, 600000, '0111178912345', 'Jl. Papua No. 10, Madiun'),
('13', 'Serbaguna', 100, 7500000, '085678912345', 'Jl. Jakarta No. 10, Malang'),
('14', 'Serbaguna', 80, 6000000, '085678912345', 'Jl. Papua No. 10, Surabaya'),
('15', 'Serbaguna', 70, 50000000, '085678912345', 'Jl. Bandung No. 19, Kediri'),
('2', 'Wedding', 175, 8750000, '081378912345', 'Jl. Bandung No. 11, Surabaya'),
('3', 'Wedding', 200, 1000000, '085623412345', 'Jl. Medan No. 12, Kediri'),
('4', 'Meeting', 20, 1500000, '089078912345', 'Jl. Jogjakarta No. 13, Samarinda'),
('5', 'Meeting', 40, 3000000, '0856789281795', 'Jl. Semarang No. 14, Balikpapan'),
('6', 'Meeting', 10, 750000, '081022912345', 'Jl. Solo No. 15, Bontang'),
('7', 'Ballroom', 1000, 50000000, '0856789122828345', 'Jl. Bandung No. 16, Makassar'),
('8', 'Ballroom', 800, 40000000, '08178912345', 'Jl. Bogor No. 17, Pare'),
('9', 'Ballroom', 900, 45000000, '0818178912345', 'Jl. Cirebon No. 18, Palu');

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

INSERT INTO `taxi` (`no_id`, `nama_taxi`, `kapasitas`, `no_telp`, `harga`) VALUES
('1', 'Blue Bird', 20, '08522669987871', 150000),
('2', 'Angkasapura', 15, '087448112850', 120000),
('3', 'Adi Raya', 17, '0831454871045', 105000);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `kamar`
--
ALTER TABLE `kamar`
  ADD PRIMARY KEY (`no_id`);

--
-- Indexes for table `laundry`
--
ALTER TABLE `laundry`
  ADD PRIMARY KEY (`no_id`);

--
-- Indexes for table `restoran`
--
ALTER TABLE `restoran`
  ADD PRIMARY KEY (`no_id`);

--
-- Indexes for table `ruangan`
--
ALTER TABLE `ruangan`
  ADD PRIMARY KEY (`no_id`);

--
-- Indexes for table `taxi`
--
ALTER TABLE `taxi`
  ADD PRIMARY KEY (`no_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
