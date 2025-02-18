-- `haos.api`.print_history definition

CREATE TABLE `print_history` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `file_name` varchar(255) NOT NULL,
  `weight` int(11) NOT NULL,
  `colors` varchar(100) NOT NULL,
  `color_str` varchar(100) NOT NULL,
  `ams_slot_used` varchar(50) NOT NULL,
  `print_finished` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `finished_at` timestamp NULL DEFAULT NULL,
  `spool_tag_uid` varchar(50) DEFAULT NULL,
  `spool_tray_uuid` varchar(50) DEFAULT NULL,
  `spool_remain` int(11) DEFAULT NULL,
  `ams_humidity` decimal(5,2) DEFAULT NULL,
  `ams_type` varchar(50) DEFAULT NULL,
  `consum_before` int(11) DEFAULT NULL,
  `consum_after` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;