let Data = [
    {
        "products" : [
            {
                "id": 1,
                "name": "Laptop",
                "category": "Electronics",
                "price": 999.99,
                "quantityInStock": 50,
                "supplierId": 101
            },
            {
                "id": 2,
                "name": "Laasdasdop",
                "category": "Eleasdasdcs",
                "price": 999.99,
                "quantityInStock": 8,
                "supplierId": 101
            },
            {
                "id": 3,
                "name": "Laadsada",
                "category": "Elesfsdics",
                "price": 999.99,
                "quantityInStock": 9,
                "supplierId": 101
            }
        ]
    },
    {
        "suppliers" : [
            {
                "id": 1,
                "name": "Tech Supplies Inc.",
                "contactInfo": {
                                "phone": "123-456-7890",
                                "email": "sales@techsupplies.com",
                                "address": "123 Tech Lane, Silicon Valley, CA"
                                }   
            }
        ]
    },
    {
        "orders" : [
            {
                "orderId": 1001,
                "productId": 1,
                "quantity": 5,
                "orderDate": "2024-08-23",
                "status": "Delivered"
            }
        ]
    }
]

//Recorrer los datos de las ordenes
function ViewOrders(){
    console.log("Data of the orders")
    for (i=0;i<Data[2]["orders"].length;i++){
        console.log(Data[2]["orders"][i]["orderId"]),console.log(Data[2]["orders"][i]["productId"]),console.log(Data[2]["orders"][i]["quantity"]),console.log(Data[2]["orders"][i]["orderDate"]),console.log(Data[2]["orders"][i]["status"]),console.log("\n")
}
}

//                               Funciones para los productos
// Añadir producto
function addProduct(){
    let NewId = Data[0]["products"].length
    let NewName = prompt("Nombre del nuevo producto")
    let NewCategory = prompt("Categoria del nuevo producto")
    let NewPrice = parseInt(prompt("Precio del nuevo producto"))
    let NewQuantityInStock = parseInt(prompt("Cantidad en stock del nuevo producto"))
    let NewSupplierId = parseInt(prompt("Id del proveedor"))
    let NewProduct = {
        "id" : NewId,
        "name" : NewName,
        "category" : NewCategory,
        "price": NewPrice,
        "quantityInStock": NewQuantityInStock,
        "supplierId": NewSupplierId
    }
    Data[0]["products"].push(NewProduct)
}
// Ver productos
function ViewProducts(){
    console.log("Data of the Proucts")
    for (i=0;i<Data[0]["products"].length;i++){
        console.log(Data[0]["products"][i]["id"]),console.log(Data[0]["products"][i]["name"]),console.log(Data[0]["products"][i]["category"]),console.log(Data[0]["products"][i]["price"]),console.log(Data[0]["products"][i]["supplierId"]),console.log("\n")
    }
}
// Actualizar producto
function updateProduct(id, newDetails){
    console.log(Data[0]["products"][id])
    let NewData = prompt("Ingrese el nuevo "+newDetails+" para el producto")
    Data[0]["products"][id][newDetails] = NewData
}
//Eliminar producto
function deleteProduct(id){
    console.log(Data[0]["products"][id])
    Data[0]["products"].splice(id-1,1)
}

//                               Funciones para los proveedores
// Añadir proveedor
function addSupplier(){
    let NewId = prompt("Ingrese el id del proveedor")
    let NewName = prompt("Nombre del proveedor")
    let NewPhone = parseInt(prompt("Ingrese el numero del proveedor"))
    let NewEmail = prompt("Ingrese el correo de contacto del proveedor")
    let NewAddress = prompt("Ingrese la direccion del proveedor")
    let Supplier = {
        "id": NewId,
        "name": NewName,
        "contactInfo": {
                        "phone": NewPhone,
                        "email": NewEmail,
                        "address": NewAddress
                        }   
    }
    Data[1]["suppliers"].push(Supplier)
}
// Ver proveedores 
function ViewSuppliers(){
    console.log("Data of the Suppliers")
    for (i=0;i<Data[1]["suppliers"].length;i++){
        console.log(Data[1]["suppliers"][i]["id"]),console.log(Data[1]["suppliers"][i]["name"]),console.log(Data[1]["suppliers"][i]["contactInfo"]["address"]),console.log(Data[1]["suppliers"][i]["contactInfo"]["email"]),console.log(Data[1]["suppliers"][i]["contactInfo"]["phone"]),console.log("\n")
}
}
// Actualizar Proveedor
function updateSupplier(id, newDetails){
    console.log(Data[1]["suppliers"][id])
    if(newDetails=="contactInfo"){
        let NewDataInfo = prompt("Que dato de la informacion desea editar?")
        let NewInfo = prompt("Ingrese el nuevo "+NewDataInfo+" para el proveedor")
        Data[1]["suppliers"]["contactInfo"][NewDataInfo] = NewInfo
        }
    else{
        let NewInfo = prompt("Ingrese el nuevo "+newDetails+" para el proveedor")
        Data[1]["suppliers"][id][newDetails] = NewInfo
    }

}
// Eliminar Proveedor
function DeleteSupplier(id){
    console.log(Data[0]["suppliers"]);
    Data[1]["suppliers"].splice(id-1,1)
}
//                               Funciones para el stock
// Revisar los productos con el stock bajo
function checkStockLeves(){
    let LowStock = Data[0]["products"].filter(n=> n.quantityInStock<10)
    for (const i of LowStock)
        console.log(i)
}
// Aumentar la cantidad en stock de un producto
function restockProduct(id, quantity){
    for (const i of Data[0]["products"])
        if(i["id"]==id){
            let StockActual = i["quantityInStock"]
            i["quantityInStock"] = StockActual + quantity
        }
}
//                               Funciones para los reportes
function generateSalesReport(startDate, endDate){
    let informeVentas = Datos.orders.filter(n => n.orderDate >=startDate && n.orderDate<=endDate)

    if (informeVentas.length==0){
        console.log("No hay ventas dentro de este lapso de tiempo");
    }else{
        var IngresosT = 0;
        var ProductosVentas = {};

        for(const i of informeVentas){
            for(const e of Data[0]["products"]){
                
            }
        }
    }
}


//Inicio del Programa
var election = prompt("Main\n\n1. Product Management\n2. Supplier Management\n3. Order Management\n4. Stock Management\n5. Reporting\n6. Search and Filter\n7. Close Program")
//Menu de opciones
if (election==1){ //Opciones de los productos
    let ElectionProduct = prompt("Product Management\n\n1. Add Products\n2. View Product\n3. Update Product\n4. Delete Product\n5. Exit")  
    if(ElectionProduct==1){
        console.log("Add Product")
        addProduct()
        console.log(Data[0]["products"])

    }else if(ElectionProduct==2){
        console.log("View Products")
        ViewProducts()

    }else if(ElectionProduct==3){
        console.log("Update Product")
        ViewProducts()
        let ProductToUpdate = parseInt(prompt("Qué producto desea actualizar?"))
        let newDetails = prompt("Qué dato va a editar?")
        updateProduct(ProductToUpdate-1,newDetails)
        console.log(Data[0]["products"])

    }else if(ElectionProduct==4){
        console.log("Delete Product")
        ViewProducts()
        let ProductToDelete = parseInt(prompt("Qué producto desea eliminar?"))
        deleteProduct(ProductToDelete)
        console.log(Data[0]["products"])

    }else if(ElectionProduct==5){
        console.log("Exit.")

    }else{
        console.log("This isn't an available option");
    }

}else if(election==2){ //Opciones de los proveedores
    let ElectionSupplier = prompt("Supplier Management\n\n1. Add Supplier\n2. View Supplier\n3. Update Supplier\n4. Delete Supplier\n5. Exit")
    if (ElectionSupplier==1){
        console.log("Add Supplier")
        addSupplier()
        console.log(Data[1]["suppliers"])

    }else if(ElectionSupplier==2){
        console.log("View Suppliers")
        ViewSuppliers()

    }else if(ElectionSupplier==3){
        console.log("Update Supplier");
        ViewSuppliers()
        let SupplierToUpdate = parseInt(prompt("Qué proveedor desea actualizar?"))
        let newDetails = prompt("Qué dato va a editar?")
        updateSupplier(SupplierToUpdate-1,newDetails)
        console.log(Data[1]["suppliers"])

    }else if(ElectionSupplier==4){
        console.log("Delete Supplier")
        ViewSuppliers()
        let SupplierToDelete = parseInt(prompt("Qué proveedor desea eliminar?"))
        DeleteSupplier(SupplierToDelete)
        console.log(Data[1]["suppliers"])

    }else if(ElectionSupplier==5){
        console.log("Exit.")

    }else{
        console.log("This isn't an available option");
    }

}else if(election==3){ //Opciones de las ordenes
    let ElectionOrder = prompt("Order Management\n\n1. Add Order\n2. View Order\n3. Update Order\n4. Delete Order\n")
    if (ElectionOrder==1){
        
    }
}else if(election==4){
    let electionStock = prompt("Stock Management\n\n1. Check Stock Leveles\n2. Restock Product\n3. Exit"); 
    if (electionStock==1){
        checkStockLeves()
    }else if(electionStock==2){
        for (const i of Data[0]["products"]){
            console.log(i["id"],i["name"])
        }
        let id = Number(prompt("Ingrese el id del producto al que le va a agregar cantidad en stock"))
        let quantity = Number(prompt("Cuántas unidades va a agregar?"))
        restockProduct(id,quantity)
        for (const i of Data[0]["products"])
            console.log(i)
    }else if(electionStock==3){
        console.log("Exit")
    }else{
        console.log("This isn't an available option")
    }


}else if(election==5){
    console.log("Reporting");

}else if(election==6){
    console.log("Search and Filter");

}else if(election==7){
    console.log("Stopping program")

}else{
    console.log("This isn't an available option");
}