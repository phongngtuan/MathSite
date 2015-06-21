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
-- Table structure for table `paperset`
--

DROP TABLE IF EXISTS `paperset`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `paperset` (
  `id` int(11) NOT NULL,
  `title` longtext,
  `subject` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `paperset`
--

LOCK TABLES `paperset` WRITE;
/*!40000 ALTER TABLE `paperset` DISABLE KEYS */;
INSERT INTO `paperset` VALUES (1,'1997 November',3),(2,'1998 November',3),(3,'1999 November',3),(4,'2000 November',3),(5,'2001 November',3),(6,'2002 November',3),(7,'2003 November',3),(8,'2004 November',3),(9,'2005 November',3),(10,'2006 November',3),(11,'2007 November',3),(12,'1995 June',1),(13,'1995 November',1),(14,'1996 June',1),(15,'1996 November',1),(16,'1997 June',1),(17,'1997 November',1),(18,'1998 June',1),(19,'1998 November',1),(20,'1999 June',1),(21,'1999 November',1),(22,'2000 June',1),(23,'2000 November',1),(24,'2001 June',1),(25,'2001 November',1),(26,'2002 June',1),(27,'2002 November',1),(28,'2003 June',1),(29,'2003 November',1),(30,'2004 November',1),(31,'2005 November',1),(32,'2006 November',1),(33,'2007 November',1),(34,'2008 November',1),(35,'2009 November',1),(36,'2010 November',1),(37,'1995 June',2),(38,'1996 June',2),(39,'1997 June',2),(40,'1997 November',2),(41,'1998 June',2),(42,'1998 November',2),(43,'1999 June',2),(44,'1999 November',2),(45,'2000 June',2),(46,'2000 November',2),(47,'2001 June',2),(48,'2001 November',2),(49,'2002 June',2),(50,'2002 November',2),(51,'2003 June',2),(52,'2003 November',2),(53,'2004 November',2),(54,'2005 November',2),(55,'2006 November',2),(56,'2007 November',2),(57,'2008 November',2),(58,'2009 November',2),(59,'2010 November',2);
/*!40000 ALTER TABLE `paperset` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2015-06-21 10:55:29
