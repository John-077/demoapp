--Customers Table
CREATE TABLEn IF NOT EXISTS `employee_test` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `first_name` VARCHAR(45) NULL,
    `last_name` VARCHAR(45) NULL,
    `email` VARCHAR(45) NULL,
    `password` VARCHAR(45) NULL,
    PRIMARY KEY (`id`),
    UNIQUE (email)
) ENGINE = InnoDB;