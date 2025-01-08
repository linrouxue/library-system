-- MySQL dump 10.13  Distrib 9.1.0, for macos14 (arm64)
--
-- Host: localhost    Database: library
-- ------------------------------------------------------
-- Server version	9.1.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Temporary view structure for view `back_view`
--

DROP TABLE IF EXISTS `back_view`;
/*!50001 DROP VIEW IF EXISTS `back_view`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `back_view` AS SELECT 
 1 AS `SID`,
 1 AS `RID`,
 1 AS `BID`,
 1 AS `Bname`,
 1 AS `Author`,
 1 AS `Press`,
 1 AS `startTime`,
 1 AS `endTime`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `BOOK`
--

DROP TABLE IF EXISTS `BOOK`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `BOOK` (
  `BID` char(8) NOT NULL,
  `Bname` char(20) NOT NULL,
  `Author` char(12) NOT NULL,
  `Press` char(20) DEFAULT NULL,
  PRIMARY KEY (`BID`),
  UNIQUE KEY `BID_UNIQUE` (`BID`),
  KEY `bindex` (`BID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `BOOK`
--

LOCK TABLES `BOOK` WRITE;
/*!40000 ALTER TABLE `BOOK` DISABLE KEYS */;
INSERT INTO `BOOK` VALUES ('b1','历史的尘埃','知秋','新华社'),('b10','亵渎','烟雨江南','新华社'),('b11','史上第一混乱','张小花','传媒社'),('b12','银河英雄传说','田中芳树','传媒社'),('b13','三国演义','罗贯中',NULL),('b15','重生于康熙末年','颜九','传媒社'),('b17','神书','新意','新媒体社'),('b18','安徒生童话','不详',NULL),('b2','茶花女','小仲马','新华社'),('b20','金可儿','塞万提斯','新媒体社'),('b21','飘','米切尔','人教版'),('b4','简爱','不详','人教社'),('b5','巴黎圣母院','雨果','人教社'),('b6','水浒传','施耐庵','新华社'),('b7','红楼梦','曹雪芹','人教社'),('b8','三国演义','罗贯中','人教社'),('b9','神书','淡云流','人教社');
/*!40000 ALTER TABLE `BOOK` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `book_view`
--

DROP TABLE IF EXISTS `book_view`;
/*!50001 DROP VIEW IF EXISTS `book_view`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `book_view` AS SELECT 
 1 AS `BID`,
 1 AS `Bname`,
 1 AS `Author`,
 1 AS `Press`,
 1 AS `status`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `books_view`
--

DROP TABLE IF EXISTS `books_view`;
/*!50001 DROP VIEW IF EXISTS `books_view`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `books_view` AS SELECT 
 1 AS `BID`,
 1 AS `Bname`,
 1 AS `Author`,
 1 AS `Press`,
 1 AS `status`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `borrow_view`
--

DROP TABLE IF EXISTS `borrow_view`;
/*!50001 DROP VIEW IF EXISTS `borrow_view`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `borrow_view` AS SELECT 
 1 AS `BID`,
 1 AS `Bname`,
 1 AS `Rid`,
 1 AS `Sname`,
 1 AS `startTime`,
 1 AS `endTime`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `Reader`
--

DROP TABLE IF EXISTS `Reader`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Reader` (
  `RID` char(8) NOT NULL,
  `Sname` char(12) NOT NULL,
  `Sphone` char(11) DEFAULT NULL,
  `password` char(12) NOT NULL,
  `role` enum('user','admin') DEFAULT 'user',
  PRIMARY KEY (`RID`),
  UNIQUE KEY `RID_UNIQUE` (`RID`),
  KEY `rindex` (`RID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Reader`
--

LOCK TABLES `Reader` WRITE;
/*!40000 ALTER TABLE `Reader` DISABLE KEYS */;
INSERT INTO `Reader` VALUES ('1','aa','31','11','admin'),('111','da','a','aaa','user'),('12','12','11','123456','user'),('123','123','123','123456','user'),('3KZM8FJH','111','11','123456','user'),('6xIFCPtm','11','','123456','user'),('c8qXHoW9','111','11','123456','user');
/*!40000 ALTER TABLE `Reader` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `SEND`
--

DROP TABLE IF EXISTS `SEND`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `SEND` (
  `SID` char(8) NOT NULL,
  `BID` char(8) NOT NULL,
  `RID` char(8) NOT NULL,
  `startTime` timestamp NOT NULL,
  `endTime` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`SID`),
  KEY `R_key` (`RID`),
  KEY `sindex` (`BID`,`RID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `SEND`
--

LOCK TABLES `SEND` WRITE;
/*!40000 ALTER TABLE `SEND` DISABLE KEYS */;
INSERT INTO `SEND` VALUES ('a_ktTI-2','b10','111','2025-01-02 07:50:31','2025-01-02 08:08:27'),('gtrykmGE','b10','111','2025-01-02 07:50:22','2025-01-02 07:50:27'),('nHrlmoL6','b12','12','2025-01-02 08:14:31',NULL),('X74y0es9','b10','111','2025-01-02 08:08:31',NULL);
/*!40000 ALTER TABLE `SEND` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Final view structure for view `back_view`
--

/*!50001 DROP VIEW IF EXISTS `back_view`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `back_view` AS select `send`.`SID` AS `SID`,`send`.`RID` AS `RID`,`book`.`BID` AS `BID`,`book`.`Bname` AS `Bname`,`book`.`Author` AS `Author`,`book`.`Press` AS `Press`,`latest`.`max_startTime` AS `startTime`,`send`.`endTime` AS `endTime` from ((`book` left join (select `send`.`BID` AS `bid`,max(`send`.`startTime`) AS `max_startTime` from `send` group by `send`.`BID`) `latest` on((`book`.`BID` = `latest`.`bid`))) left join `send` on(((`book`.`BID` = `send`.`BID`) and (`send`.`startTime` = `latest`.`max_startTime`)))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `book_view`
--

/*!50001 DROP VIEW IF EXISTS `book_view`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `book_view` AS select `book`.`BID` AS `BID`,`book`.`Bname` AS `Bname`,`book`.`Author` AS `Author`,`book`.`Press` AS `Press`,(case when (`send`.`startTime` is not null) then '已被借阅' else '未被借阅' end) AS `status` from (`book` left join `send` on((`send`.`BID` = `book`.`BID`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `books_view`
--

/*!50001 DROP VIEW IF EXISTS `books_view`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `books_view` AS select `book`.`BID` AS `BID`,`book`.`Bname` AS `Bname`,`book`.`Author` AS `Author`,`book`.`Press` AS `Press`,(case when ((`latest`.`max_startTime` is not null) and (`latest`.`endtime` is null)) then '已被借阅' else '未被借阅' end) AS `status` from (`book` left join (select `s1`.`BID` AS `bid`,`s1`.`startTime` AS `max_startTime`,`s1`.`endTime` AS `endtime` from (`send` `s1` left join `send` `s2` on(((`s1`.`BID` = `s2`.`BID`) and (`s1`.`startTime` < `s2`.`startTime`)))) where (`s2`.`BID` is null)) `latest` on((`book`.`BID` = `latest`.`bid`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `borrow_view`
--

/*!50001 DROP VIEW IF EXISTS `borrow_view`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `borrow_view` AS select `book`.`BID` AS `BID`,`book`.`Bname` AS `Bname`,`reader`.`RID` AS `Rid`,`reader`.`Sname` AS `Sname`,`send`.`startTime` AS `startTime`,`send`.`endTime` AS `endTime` from ((`send` left join `book` on((`book`.`BID` = `send`.`BID`))) left join `reader` on((`reader`.`RID` = `send`.`RID`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-01-04  1:20:39
