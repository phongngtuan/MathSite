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
-- Table structure for table `django_migrations`
--

DROP TABLE IF EXISTS `django_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `django_migrations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_migrations`
--

LOCK TABLES `django_migrations` WRITE;
/*!40000 ALTER TABLE `django_migrations` DISABLE KEYS */;
INSERT INTO `django_migrations` VALUES (1,'contenttypes','0001_initial','2015-06-27 16:37:13.900925'),(2,'auth','0001_initial','2015-06-27 16:37:14.185917'),(3,'admin','0001_initial','2015-06-27 16:37:14.255540'),(4,'contenttypes','0002_remove_content_type_name','2015-06-27 16:37:14.363712'),(5,'auth','0002_alter_permission_name_max_length','2015-06-27 16:37:14.408126'),(6,'auth','0003_alter_user_email_max_length','2015-06-27 16:37:14.449027'),(7,'auth','0004_alter_user_username_opts','2015-06-27 16:37:14.462067'),(8,'auth','0005_alter_user_last_login_null','2015-06-27 16:37:14.502598'),(9,'auth','0006_require_contenttypes_0002','2015-06-27 16:37:14.504079'),(10,'maths','0001_initial','2015-06-27 16:37:15.163336'),(11,'sessions','0001_initial','2015-06-27 16:37:15.210672'),(12,'maths','0002_auto_20150627_1646','2015-06-27 16:46:03.805769'),(13,'maths','0003_figure_image','2015-06-27 16:55:45.984866'),(14,'maths','0004_remove_figure_imagepath','2015-06-27 16:56:52.766941'),(15,'maths','0005_auto_20150627_1657','2015-06-27 16:57:44.118468'),(16,'maths','0006_auto_20150627_1658','2015-06-27 16:58:30.054577'),(17,'maths','0007_auto_20150627_1701','2015-06-27 17:01:47.898487'),(18,'maths','0008_auto_20150628_0847','2015-06-28 08:47:54.223657'),(19,'maths','0009_auto_20150628_0850','2015-06-28 08:50:23.887097'),(20,'maths','0010_auto_20150628_0852','2015-06-28 08:52:59.637850');
/*!40000 ALTER TABLE `django_migrations` ENABLE KEYS */;
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
