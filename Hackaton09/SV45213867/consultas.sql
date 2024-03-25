-- 1.	Seleccionar los clientes que viven en el país de "usa" 
    Select * from Customers where country = 'USA';
-- 2.	Seleccionar los proveedores que viven en la ciudad de "BERLIN" 
    select * from Suppliers where city = 'Berlin';
-- 3.	Seleccionar los empleados con código 3,5 y 8
    SELECT *  FROM Employees  WHERE EmployeeID IN (3, 5, 8);
-- 4.	Seleccionar los productos que tienen stock mayor que cero y son del proveedor 1,3 y 5
     SELECT * FROM products  WHERE unit > 0  AND SupplierID IN (1, 3, 5);
-- 5.	Seleccione los productos con precio mayor o igual a 20 y menor o igual a 90
    SELECT * FROM products where Price >= 20 AND Price <= 90;
 -- 6.   Mostrar las órdenes de compra entre las fechas 01/01/1997 al 15/07/1997
    SELECT * FROM orders where OrderDate BETWEEN '1997-01-01' AND '1997-07-05';
-- 7. Mostrar las órdenes de compra hechas en el año 1997, que pertenecen a los empleados con códigos 1 ,3 ,4 ,8
	 SELECT * FROM orders  WHERE YEAR(OrderDate) = 1997  AND EmployeeID IN (1, 3, 4, 8);
-- 8. Mostrar las órdenes hechas en el año 1996
	 SELECT * FROM orders WHERE YEAR(OrderDate) = 1996;
-- 9 . Mostrar las órdenes hechas en el año 1997, del mes de abril.
	 SELECT * FROM orders WHERE YEAR(OrderDate) = 1997 AND MONTH(OrderDate) = 04; 
-- 10 . Mostrar las órdenes hechas el primero de todos los meses, del año 1998
	SELECT * FROM orders WHERE YEAR(OrderDate) = 1998 AND DAY(OrderDate) = 1;      
-- 11 . Mostrar todos los clientes que no tienen fax
	ALTER TABLE Customers ADD COLUMN fax VARCHAR(20);
	SELECT * FROM Customers WHERE fax IS NULL;
-- 12 . Mostrar todos los clientes que tienen fax
	SELECT * FROM Customers WHERE fax IS NOT NULL;

-- 13 . Mostrar el nombre del producto, el precio, el stock y el nombre de la categoría a la que pertenece.
		SELECT 
			p.productName, 
			p.price, 
			p.unit, 
			c.categoryName
		FROM 
			Products p
		JOIN 
			Categories c ON p.categoryId = c.categoryId;
            
-- 14 . Mostrar el nombre del producto, el precio del producto, el código del proveedor y el nombre de la compañía proveedora.

		SELECT 
			p.productName, 
			p.price, 
			p.supplierID, 
			s.companyName
		FROM 
			Products p
		JOIN 
			Suppliers s ON p.supplierID = s.supplierID;
            
            
-- 15 . Mostrar el número de pedido, el código del producto, el precio, la cantidad y el total pagado por producto.

		SELECT 
			od.orderID,
			od.productID,
			od.price,
			od.quantity,
			(od.price * od.quantity) AS total_pagado
		FROM 
			OrderDetails od;
            
-- 16 . Mostrar el número de la orden, fecha, código del producto, precio, código del empleado y su nombre completo.
		SELECT 
			o.order,
			o.order_date,
			od.productID,
			od.price,
			o.employee_id,
			CONCAT(e.first_name, ' ', e.last_name) AS employee_name
		FROM 
			Orders o
		JOIN 
			OrderDetails od ON o.orderID = od.orderID
		JOIN 
			Employees e ON o.employeeID = e.employeeID;
			   
    