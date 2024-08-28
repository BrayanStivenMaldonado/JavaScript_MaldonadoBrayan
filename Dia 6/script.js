function DataProducts(){
    const tabla = document.querySelector('#DataProducts tbody')
    fetch('./data.json')
        .then(res => res.json())
        .then(data =>{
            data.products.forEach(product => {
                const row = document.createElement('tr');
                row.innerHTML += `
                    <td>${product.id}</td>
                    <td>${product.name}</td>
                    <td>${product.category}</td>
                    <td>${product.price}</td>
                    <td>${product.quantityInStock}</td>
                    <td>${product.supplierId}</td>
                `
                tabla.appendChild(row)
            });
            });
        }
DataProducts()


function DataSuppliers(){
    const tabla = document.querySelector('#DataSuppliers tbody')
    fetch('./data.json')
        .then(res => res.json())
        .then(data =>{
            data.suppliers.forEach(supplier => {
                const row = document.createElement('tr');
                row.innerHTML += `
                    <td>${supplier.id}</td>
                    <td>${supplier.name}</td>
                    <td>${supplier.contactInfo.phone}</td>
                    <td>${supplier.contactInfo.email}</td>
                    <td>${supplier.contactInfo.email}</td>
                `
                tabla.appendChild(row)
            });
            });
        }
DataSuppliers()


function DataOrders(){
    const tabla = document.querySelector('#DataOrders tbody')
    fetch('./data.json')
        .then(res => res.json())
        .then(data =>{
            data.orders.forEach(order => {
                const row = document.createElement('tr');
                row.innerHTML += `
                    <td>${order.orderId}</td>
                    <td>${order.productId}</td>
                    <td>${order.quantity}</td>
                    <td>${order.orderDate}</td>
                    <td>${order.status}</td>
                `
                tabla.appendChild(row)
            });
            });
        }
DataOrders()