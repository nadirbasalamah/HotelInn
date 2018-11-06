CREATE DATABASE hotelservice;
USE hotelservice;

CREATE TABLE `kamar` (
  `nama` varchar(255) NOT NULL,
  `no_id` varchar(255) NOT NULL,
  `alamat` varchar(255) NOT NULL,
  `no_telp` varchar(255) NOT NULL,
  `jumlah_kamar` int(255) NOT NULL,
  `jenis_kamar` varchar(255) NOT NULL,
  `harga_kamar` int(11) NOT NULL
);
CREATE TABLE `restoran` (
  `no_id` varchar(255) NOT NULL,
  `nama_restoran` varchar(255) NOT NULL,
  `alamat` varchar(255) NOT NULL,
  `no_telp` varchar(255) NOT NULL,
  `kapasitas` INTEGER NOT NULL,
  `jenis_paket` varchar(255) NOT NULL,
  `harga_restoran` int(11) NOT NULL
);
CREATE TABLE `ruangan` (
  `no_id` varchar(255) NOT NULL,
  `nama_ruangan` varchar(255) NOT NULL,
  `kapasitas` INTEGER NOT NULL,
  `harga` int(11) NOT NULL,
  `no_telp` varchar(255) NOT NULL,
  `alamat` varchar(255) NOT NULL
);
CREATE TABLE `taxi` (
  `no_id` varchar(255) NOT NULL,
  `nama_taxi` varchar(255) NOT NULL,
  `kapasitas` INTEGER NOT NULL,
  `no_telp` varchar(255) NOT NULL,
  `harga` int(11) NOT NULL
);
CREATE TABLE `laundry` (
  `no_id` varchar(255) NOT NULL,
  `nama_laundry` varchar(255) NOT NULL,
  `alamat` varchar(255) NOT NULL,
  `no_telp` varchar(255) NOT NULL,
  `harga` int(11) NOT NULL
);
