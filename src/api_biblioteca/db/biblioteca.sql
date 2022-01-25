DROP SCHEMA IF EXISTS `biblioteca`;
CREATE SCHEMA `biblioteca`;
USE `biblioteca`;

DROP TABLE IF EXISTS `Autor`;

CREATE TABLE `Autor` (
  `id_autor` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) DEFAULT NULL,
  `nacionalidade` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_autor`)
) ENGINE=InnoDB;

DROP TABLE IF EXISTS `Editora`;

CREATE TABLE `Editora` (
  `id_editora` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_editora`)
) ENGINE=InnoDB;

DROP TABLE IF EXISTS `Livro`;

CREATE TABLE `Livro` (
  `id_livro` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(45) DEFAULT NULL,
  `ano_publicacao` int DEFAULT NULL,
  `id_editora` int DEFAULT NULL,
  `id_autor` int DEFAULT NULL,
  PRIMARY KEY (`id_livro`)
) ENGINE=InnoDB;

DROP TABLE IF EXISTS `Utilizador`;

CREATE TABLE `Utilizador` (
  `id_utilizador` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_utilizador`)
) ENGINE=InnoDB;

INSERT INTO `Autor` VALUES (1,'William Shakespeare','Inglesa'),(2,'Agatha Christie','Britânica'),(3,'Barbara Cartland','Britânica'),(4,'Danielle Steel','Americana'),(5,'Harold Robbins','Americana'),(6,'Georges Simenon','Belga'),(7,'Enid Blyton','Inglesa'),(8,'Sidney Sheldon','Americana'),(9,'J. K. Rowling','Britânica'),(10,'Gilbert Patten','Americana'),(11,'Dr. Seuss','Americana'),(12,'Eiichiro Oda','Japonesa'),(13,'Akira Toriyama','Japonesa'),(14,'Leo Tolstoy','Russa'),(15,'Corín Tellado','Espanhola'),(16,'Dean Koontz','Americana'),(17,'Jackie Collins','Britânica'),(18,'Horatio Alger','Americana'),(19,'Nora Roberts','Americana'),(20,'R. L. Stine','Americana'),(21,'Alexander Pushkin','Russa'),(22,'Stephen King','Americana'),(23,'Paulo Coelho','Brazileira'),(24,'Jiro Akagawa','Japonesa'),(25,'Jeffrey Archer','Britanica'),(26,'René Goscinny','Francesa'),(27,'Erle Stanley Gardner','Americana'),(28,'Edgar Wallace','Inglesa'),(29,'Janet Dailey','Americana'),(30,'Jin Yong','Chinesa'); 
INSERT INTO `Editora` VALUES (1,'Springer Nature'),(2,'Jo Fletcher Books'),(3,'David Fickling Books'),(4,'Dundurn Press'),(5,'Galley Beggar Press'),(6,'Flying Eye Books'),(7,'Palgrave Macmillan'),(8,'Pratham Books'),(9,'Dover Publications'),(10,'Small Beer Press'),(11,'Soho Press'),(12,'Penguin Random House'),(13,'Harlequin'),(14,'Mighty Media'),(15,'Allen and Unwin'),(16,'Page Street Publishing'),(17,'Quirk Books'),(18,'Ensorcellia Publishing'),(19,'New Directions'),(20,'Harvest House Publishers'),(21,'Fair Winds Press'),(22,'Tor Teen'),(23,'Forever'),(24,'C&R Press'),(25,'Versify'),(26,'Text Publishing'),(27,'Schocken'),(28,'Joffe Books'),(29,'Catapult'),(30,'Chronicle Books');
INSERT INTO `Livro` VALUES (1,'Hamlet',1600,1,1),(2,'Lolita',1934,2,2),(3,'The Catcher in the Rye',1312,3,3),(4,'Pride and Prejudice',1961,4,4),(5,'Crime and Punishment',1974,5,5),(6,'The Adventures of Huckleberry Finn',2001,6,6),(7,'Anna Karenina',2018,7,7),(8,'The Iliad',2004,8,8),(9,'To the Lighthouse',1971,9,9),(10,'Catch-22',1950,10,10),(11,'Heart of Darkness',1943,11,11),(12,'The Sound and the Fury',2002,12,12),(13,'Nineteen Eighty Four',1540,13,13),(14,'Great Expectations',1605,14,14),(15,'One Thousand and One Nights',1483,15,15),(16,'The Grapes of Wrath',1923,16,16),(17,'Invisible Man',1648,17,17),(18,'To Kill a Mockingbird',1953,18,18),(19,'The Trial',1934,19,19),(20,'The Red and the Black',1999,20,20),(21,'Middlemarch',1923,21,21),(22,'Beloved',1939,22,22),(23,'The Stories of Anton Chekhov',1789,23,23),(24,'The Stranger',1800,24,24),(25,'Jane Eyre',1521,25,25),(26,'The Sun Also Rises',1954,26,26),(27,'David Copperfield',1987,27,27),(28,'Tristram Shandy',1934,28,28),(29,'Leaves of Grass',1970,29,29),(30,'The Magic Mountain',1934,30,30);
INSERT INTO `Utilizador` VALUES (1,'Alfredo Quintana'),(2,'Albanao Soares'),(3,'Rui Pedro'),(4,'Luís Macedo'),(5,'João Aragão'),(6,'Rodrigo Moreira'),(7,'Rui Silva'),(8,'Paulo Azevedo'),(9,'Pedro Pires'),(10,'Fernando Silva'),(11,'Cristiano Ronaldo'),(12,'Daniel Macedo'),(13,'Henrique Gomes'),(14,'Beatriz Gomes'),(15,'Nuno Monteiro'),(16,'Mariana Figueiredo'),(17,'Bruno Abreu'),(18,'Ana Saraiva'),(19,'Rute Alves'),(20,'Carla Antunes'),(21,'José Bernardo'),(22,'Dinis Castro'),(23,'Carlos Catro'),(24,'Miguel Remndeiro'),(25,'Pedro Ruben'),(26,'Vitor Oliveira'),(27,'Nelson Alves'),(28,'Antonino Fernandes'),(29,'Dario Rodrigues'),(30,'Luís Lima');

GRANT ALL ON *.* TO 'root'@'%' IDENTIFIED BY '12345678'