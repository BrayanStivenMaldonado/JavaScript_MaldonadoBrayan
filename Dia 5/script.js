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
            }
        ]
    },
    {
        "suppliers" : [
            {
                "id": 101,
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

//Recorrer los datos de los prodctos
function ViewProducts(){
    console.log("Data of the Proucts")
    for (i=0;i<Data[0]["products"].length;i++){
        console.log(Data[0]["products"][i]["id"]),console.log(Data[0]["products"][i]["name"]),console.log(Data[0]["products"][i]["category"]),console.log(Data[0]["products"][i]["price"]),console.log(Data[0]["products"][i]["supplierId"]),console.log("\n")
    }
}
//Recorrer los datos de los proveedores
function ViewSuppliers(){
    console.log("Data of the Suppliers")
    for (i=0;i<Data[1]["suppliers"].length;i++){
        console.log(Data[1]["suppliers"][i]["id"]),console.log(Data[1]["suppliers"][i]["name"]),console.log(Data[1]["suppliers"][i]["contactInfo"]["address"]),console.log(Data[1]["suppliers"][i]["contactInfo"]["email"]),console.log(Data[1]["suppliers"][i]["contactInfo"]["phone"]),console.log("\n")
}
}
//Recorrer los datos de las ordenes
function ViewOrders(){
    console.log("Data of the orders")
    for (i=0;i<Data[2]["orders"].length;i++){
        console.log(Data[2]["orders"][i]["orderId"]),console.log(Data[2]["orders"][i]["productId"]),console.log(Data[2]["orders"][i]["quantity"]),console.log(Data[2]["orders"][i]["orderDate"]),console.log(Data[2]["orders"][i]["status"]),console.log("\n")
}
}

//Inicio del Programa
var election = prompt("Main\n\n1. Product Management\n2. Supplier Management\n3. Order Management")


//Menu de opciones
if (election==1){
    console.log("Product Management")
    ViewProducts()
}else if(election==2){
    console.log("Supplier Management")
    ViewSuppliers()
}else if(election==3){
    console.log("Order Management")
    ViewOrders()
}else{
    console.log("This isn't an available option")
}