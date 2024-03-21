call sp_crud_sexo(1,null,null,null, null);

call sp_crud_sexo(5,null,null,null, null);

call sp_crud_sexo(2, 'No Determinado',1);
call sp_crud_sexo(3, null, false, 3, 1);
call sp_crud_sexo(3, 'No disponible', null, 3, 1);
call sp_crud_sexo(3, 'No Determinado', true, 3, 1);


CREATE 
    ALGORITHM = UNDEFINED 
    DEFINER = `root`@`localhost` 
    SQL SECURITY DEFINER
VIEW `vw_productosporcategoria` AS
    SELECT 
        `P`.`ProductName` AS `ProductName`,
        `C`.`CategoryName` AS `CategoryName`,
        `S`.`SupplierName` AS `SupplierName`
    FROM
        ((`products` `P`
        JOIN `categories` `C` ON ((`P`.`CategoryID` = `C`.`CategoryID`)))
        JOIN `suppliers` `S` ON ((`P`.`SupplierID` = `S`.`SupplierID`)))