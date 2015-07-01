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
-- Table structure for table `topic`
--

DROP TABLE IF EXISTS `topic`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `topic` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` longtext,
  `subject_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `topic_subject_id_59be969fc2cdf8ce_fk_subject_id` (`subject_id`),
  CONSTRAINT `topic_subject_id_59be969fc2cdf8ce_fk_subject_id` FOREIGN KEY (`subject_id`) REFERENCES `subject` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=113 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `topic`
--

LOCK TABLES `topic` WRITE;
/*!40000 ALTER TABLE `topic` DISABLE KEYS */;
INSERT INTO `topic` VALUES (1,'Standard Graphs',3),(2,'Graphical Transformations',3),(3,'Graphing with Rational Functions and Parametric Equations',3),(4,'Special Graphs',3),(5,'Functions',3),(6,'Inequalities',3),(7,'Systems of Linear Equations',NULL),(8,'Binomial Series',3),(9,'Arithmetic and Geometric Series',3),(10,'Summation of Series',3),(11,'Mathematical Induction',3),(12,'Vectors in Two and Three Dimensions',NULL),(13,'Scalar and Vector Products',3),(14,'Equations of Lines',3),(15,'Equations of Planes',NULL),(16,'Three Dimensional Vector Geometry',3),(17,'Complex Numbers in Cartesian Form',3),(18,'Complex Numbers in Trigonometric Form',3),(19,'Complex Numbers in Exponential Form',3),(20,'Locus of a Complex Number',3),(21,'Differentiation',3),(22,'Applications of Differentiation',3),(23,'Maclaurin\'s Series',3),(24,'Indefinite Integration',3),(25,'Definite Integration',3),(26,'Applications of Definite Integration',3),(27,'Differential Equations',3),(28,'Permutations and Combinations',3),(29,'Probability',3),(30,'Binomial Distributions',3),(31,'Poisson Distributions',1),(32,'Normal Distributions',3),(33,'Sampling and Estimation',3),(34,'Hypothesis Testing',3),(35,'Correlation and Linear Regression',3),(36,'Others',3),(37,'Quadratic Equations',1),(38,'Indices and Surds',1),(39,'Polynomials',1),(40,'Partial Fractions',1),(41,'Simultaneous Equations',1),(42,'Binomial Expansions',1),(43,'Exponential and Logarithmic Functions',1),(44,'Modulus Functions',1),(45,'Trigonometry',1),(46,'Coordinate Geometry',1),(47,'Plane Geometry',1),(48,'Differentiation',1),(49,'Integration',1),(50,'Kinematics',1),(51,'Set Language ',1),(52,'Functions',1),(53,'Matrices',1),(54,'Vectors',1),(55,'Permutations and Combinations',1),(56,'Arithmetic Progression and Geometric Progression',1),(57,'Circular Measure',1),(58,'Others',1),(59,'Arithmetic',2),(60,'Mensuration',2),(61,'Algebra',2),(62,'Number Sequence and Problem Solving',2),(63,'Coordinate Geometry',2),(64,'Graphs, Kinematics and Variations',2),(65,'Geometry ',2),(66,'Transformations',2),(67,'Trigonometry',2),(68,'Set Language and Notation',2),(69,'Matrices',2),(70,'Vectors in Two Dimensions',2),(71,'Probability',2),(72,'Statistics',2),(73,'Others',2),(74,'Testing',NULL),(81,NULL,NULL),(82,NULL,NULL),(83,NULL,NULL),(84,'123',NULL),(85,NULL,NULL),(86,NULL,NULL),(87,NULL,NULL),(88,NULL,NULL),(89,NULL,NULL),(90,NULL,NULL),(91,NULL,NULL),(92,'123',NULL),(93,'',NULL),(94,NULL,NULL),(95,'12312',NULL),(96,NULL,NULL),(97,NULL,NULL),(98,'3132',NULL),(99,NULL,NULL),(100,NULL,NULL),(101,NULL,NULL),(102,'',NULL),(103,'1111',NULL),(104,NULL,NULL),(105,'Testing',NULL),(106,'Testing',NULL),(107,'New Topic',NULL),(108,'Testtt',NULL),(109,'Newwww',NULL),(110,'New2',NULL),(111,'Newww3',NULL),(112,'Neww4',NULL);
/*!40000 ALTER TABLE `topic` ENABLE KEYS */;
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
