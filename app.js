// Arreglo de registros (Estructura de datos estática)
// Campo clave único definido: 'codigo_sku' (mapeado secuencialmente)
const inventario = [
    { codigo_sku: "HW-001", IdProducto: 1, NombreProducto: "GT Hunter 2014", valor_autito: 3500, imagenUrl: "image_9ee73f.jpg" },
    { codigo_sku: "HW-002", IdProducto: 2, NombreProducto: "Mazda 787B", valor_autito: 4000, imagenUrl: "image_9eea9b.png" },
    { codigo_sku: "HW-003", IdProducto: 3, NombreProducto: "Maximum Leeway", valor_autito: 3200, imagenUrl: "image_9ef1c2.jpg" },
    { codigo_sku: "HW-004", IdProducto: 4, NombreProducto: "Crescendo", valor_autito: 3600, imagenUrl: "image_9ef65d.jpg" },
    { codigo_sku: "HW-005", IdProducto: 5, NombreProducto: "Corvette Zr1", valor_autito: 4500, imagenUrl: "image_9efce6.jpg" },
    { codigo_sku: "HW-006", IdProducto: 6, NombreProducto: "CFH02", valor_autito: 3800, imagenUrl: "image_a8e32d.jpg" },
    { codigo_sku: "HW-007", IdProducto: 7, NombreProducto: "Corvette Greenwood", valor_autito: 4200, imagenUrl: "image_a8e3c4.png" },
    { codigo_sku: "HW-008", IdProducto: 8, NombreProducto: "Formula E Gen 3", valor_autito: 4800, imagenUrl: "image_a8e708.jpg" },
    { codigo_sku: "HW-009", IdProducto: 9, NombreProducto: "Corvette GS Roadster", valor_autito: 4100, imagenUrl: "image_a8ea89.jpg" },
    { codigo_sku: "HW-010", IdProducto: 10, NombreProducto: "Scooppa Di Fuego", valor_autito: 3300, imagenUrl: "image_a8f289.png" },
    { codigo_sku: "HW-011", IdProducto: 11, NombreProducto: "Chevelle SS", valor_autito: 4600, imagenUrl: "image_a8f646.jpg" },
    { codigo_sku: "HW-012", IdProducto: 12, NombreProducto: "Electrack", valor_autito: 3400, imagenUrl: "image_a8f971.jpg" },
    { codigo_sku: "HW-013", IdProducto: 13, NombreProducto: "Rescue Duty", valor_autito: 3700, imagenUrl: "image_a8f9f1.jpg" },
    { codigo_sku: "HW-014", IdProducto: 14, NombreProducto: "D-Muscle", valor_autito: 3900, imagenUrl: "image_a8fd6e.jpg" },
    { codigo_sku: "HW-015", IdProducto: 15, NombreProducto: "Dodge Charger Drift", valor_autito: 4300, imagenUrl: "image_a94fe2.jpg" }
];

// Estructura lineal (Lista) para manejar el carrito en memoria volátil
let carrito = [];

// Función para renderizar el inventario en el HTML
function cargarProductos() {
    const contenedor = document.getElementById('lista-productos');
    contenedor.innerHTML = '';

    inventario.forEach(auto => {
        const tarjeta = document.createElement('div');
        tarjeta.className = 'tarjeta-producto';
        
        tarjeta.innerHTML = `
            <div class="contenedor-imagen">
                <img src="${auto.imagenUrl}" alt="${auto.NombreProducto}" onerror="this.src='https://via.placeholder.com/220x160?text=Sin+Imagen'">
            </div>
            <h3>${auto.NombreProducto}</h3>
            <span class="sku">SKU: ${auto.codigo_sku}</span>
            <p class="precio">$${auto.valor_autito}</p>
            <button onclick="agregarAlCarrito('${auto.codigo_sku}')">Agregar al Carrito</button>
        `;
        contenedor.appendChild(tarjeta);
    });
}

// Búsqueda del registro usando el campo clave unico (codigo_sku)
function agregarAlCarrito(skuBuscado) {
    const productoEncontrado = inventario.find(auto => auto.codigo_sku === skuBuscado);
    if (productoEncontrado) {
        carrito.push(productoEncontrado);
        actualizarCarrito();
    }
}

// Remueve un elemento de la lista usando su índice posicional
function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    actualizarCarrito();
}

// Actualiza la interfaz del carrito y calcula el acumulador (Total)
function actualizarCarrito() {
    const contenedorCarrito = document.getElementById('items-carrito');
    const totalCarrito = document.getElementById('total-carrito');
    contenedorCarrito.innerHTML = '';
    
    let total = 0;

    if (carrito.length === 0) {
        contenedorCarrito.innerHTML = '<p>El carrito está vacío.</p>';
    } else {
        carrito.forEach((item, index) => {
            total += item.valor_autito;
            const divItem = document.createElement('div');
            divItem.className = 'item-carrito';
            divItem.innerHTML = `
                <span>${item.NombreProducto}</span>
                <div class="item-control">
                    <span>$${item.valor_autito}</span>
                    <button class="btn-eliminar" onclick="eliminarDelCarrito(${index})">X</button>
                </div>
            `;
            contenedorCarrito.appendChild(divItem);
        });
    }

    totalCarrito.innerText = total;
}

// Inicialización al cargar la ventana
window.onload = cargarProductos;
// Inicializar la página
window.onload = cargarProductos;
