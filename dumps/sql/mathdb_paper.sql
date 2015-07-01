CREATE DATABASE  IF NOT EXISTS `mathdb` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `mathdb`;
-- MySQL dump 10.13  Distrib 5.6.19, for osx10.7 (i386)
--
-- Host: localhost    Database: mathdb
-- ------------------------------------------------------
-- Server version	5.6.21

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `paper`
--

DROP TABLE IF EXISTS `paper`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `paper` (
  `id` varchar(64) NOT NULL,
  `year` longtext,
  `month` longtext,
  `number` int(11) DEFAULT NULL,
  `subject` int(11) DEFAULT NULL,
  `paperset` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `paper`
--

LOCK TABLES `paper` WRITE;
/*!40000 ALTER TABLE `paper` DISABLE KEYS */;
INSERT INTO `paper` VALUES ('199501001','1995','June',1,1,12),('199501002','1995','June',1,2,37),('199502001','1995','June',2,1,12),('199502002','1995','June',2,2,37),('199503001','1995','November',1,1,13),('199504001','1995','November',2,1,13),('199601001','1996','June',1,1,14),('199601002','1996','June',1,2,38),('199602001','1996','June',2,1,14),('199602002','1996','June',2,2,38),('199603001','1996','November',1,1,15),('199604001','1996','November',2,1,15),('199701001','1997','June',1,1,16),('199701002','1997','June',1,2,39),('199702001','1997','June',2,1,16),('199702002','1997','June',2,2,39),('199703001','1997','November',1,1,17),('199703002','1997','November',1,2,40),('199703003','1997','November',1,3,1),('199704001','1997','November',2,1,17),('199704002','1997','November',2,2,40),('199704003','1997','November',2,3,1),('199801001','1998','June',1,1,18),('199801002','1998','June',1,2,41),('199802001','1998','June',2,1,18),('199802002','1998','June',2,2,41),('199803001','1998','November',1,1,19),('199803002','1998','November',1,2,42),('199803003','1998','November',1,3,2),('199804001','1998','November',2,1,19),('199804002','1998','November',2,2,42),('199804003','1998','November',2,3,2),('199901001','1999','June',1,1,20),('199901002','1999','June',1,2,43),('199902001','1999','June',2,1,20),('199902002','1999','June',2,2,43),('199903001','1999','November',1,1,21),('199903002','1999','November',1,2,44),('199903003','1999','November',1,3,1),('199904001','1999','November',2,1,21),('199904002','1999','November',2,2,44),('199904003','1999','November',2,3,1),('200001001','2000','June',1,1,22),('200001002','2000','June',1,2,45),('200002001','2000','June',2,1,22),('200002002','2000','June',2,2,45),('200003001','2000','November',1,1,23),('200003002','2000','November',1,2,46),('200003003','2000','November',1,3,4),('200004001','2000','November',2,1,23),('200004002','2000','November',2,2,46),('200004003','2000','November',2,3,4),('200101001','2001','June',1,1,24),('200101002','2001','June',1,2,47),('200102001','2001','June',2,1,24),('200102002','2001','June',2,2,47),('200103001','2001','November',1,1,25),('200103002','2001','November',1,2,48),('200103003','2001','November',1,3,5),('200104001','2001','November',2,1,25),('200104002','2001','November',2,2,48),('200104003','2001','November',2,3,5),('200201001','2002','June',1,1,26),('200201002','2002','June',1,2,49),('200202001','2002','June',2,1,26),('200202002','2002','June',2,2,49),('200203001','2002','November',1,1,27),('200203002','2002','November',1,2,50),('200203003','2002','November',1,3,6),('200204001','2002','November',2,1,27),('200204002','2002','November',2,2,50),('200204003','2002','November',2,3,6),('200301001','2003','June',1,1,28),('200301002','2003','June',1,2,51),('200302001','2003','June',2,1,28),('200302002','2003','June',2,2,51),('200303001','2003','November',1,1,29),('200303002','2003','November',1,2,52),('200303003','2003','November',1,3,7),('200304001','2003','November',2,1,29),('200304002','2003','November',2,2,52),('200304003','2003','November',2,3,7),('200403001','2004','November',1,1,30),('200403002','2004','November',1,2,53),('200403003','2004','November',1,3,8),('200404001','2004','November',2,1,30),('200404002','2004','November',2,2,53),('200404003','2004','November',2,3,8),('200503001','2005','November',1,1,31),('200503002','2005','November',1,2,54),('200503003','2005','November',1,3,9),('200504001','2005','November',2,1,31),('200504002','2005','November',2,2,54),('200504003','2005','November',2,3,9),('200603001','2006','November',1,1,32),('200603002','2006','November',1,2,55),('200603003','2006','November',1,3,10),('200604001','2006','November',2,1,32),('200604002','2006','November',2,2,55),('200604003','2006','November',2,3,10),('200703001','2007','November',1,1,33),('200703002','2007','November',1,2,56),('200703003','2007','November',1,3,11),('200704001','2007','November',2,1,33),('200704002','2007','November',2,2,56),('200704003','2007','November',2,3,11),('200803001','2008','November',1,1,34),('200803002','2008','November',1,2,57),('200804001','2008','November',2,1,34),('200804002','2008','November',2,2,57),('200903001','2009','November',1,1,35),('200903002','2009','November',1,2,58),('200904001','2009','November',2,1,35),('200904002','2009','November',2,2,58),('201003001','2010','November',1,1,36),('201003002','2010','November',1,2,59),('201004001','2010','November',2,1,36),('201004002','2010','November',2,2,59);
/*!40000 ALTER TABLE `paper` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2015-07-02  1:48:45
