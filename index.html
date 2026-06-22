// Definición del "Registro" de productos
// Campo clave principal: codigo_sku
const inventario = [
    {
        codigo_sku: "HW-001-BNSHK", // CAMPO CLAVE ÚNICO
        IdProducto: 1,
        NombreProducto: "Bone Shaker (Edición Limitada)",
        valor_autito: 3500,
        color: "Negro Mate"
    },
    {
        codigo_sku: "HW-002-TWNML", // CAMPO CLAVE ÚNICO
        IdProducto: 2,
        NombreProducto: "Twin Mill",
        valor_autito: 2800,
        color: "Rojo Fuego"
    },
    {
        codigo_sku: "HW-003-RGRTM", // CAMPO CLAVE ÚNICO
        IdProducto: 3,
        NombreProducto: "Roger Dodger",
        valor_autito: 3100,
        color: "Amarillo con flamas"
    },
    {
        codigo_sku: "HW-004-SHKTO", // CAMPO CLAVE ÚNICO
        IdProducto: 4,
        NombreProducto: "Sharkruiser",
        valor_autito: 2900,
        color: "Naranja"
    }
];

// Carrito de compras (Estructura de datos tipo Lista)
let carrito = [];

// Función para mostrar los productos en el HTML
function cargarProductos() {
    const contenedor = document.getElementById('lista-productos');
    contenedor.innerHTML = '';

    inventario.forEach(auto => {
        const tarjeta = document.createElement('div');
        tarjeta.className = 'tarjeta-producto';
        tarjeta.innerHTML = `
            <h3>${auto.NombreProducto}</h3>
            <p class="sku">SKU: ${auto.codigo_sku}</p>
            <p class="precio">$${auto.valor_autito}</p>
            <button onclick="agregarAlCarrito('${auto.codigo_sku}')">Agregar al Carrito</button>
        `;
        contenedor.appendChild(tarjeta);
    });
}

// Función para agregar un registro al carrito usando el campo clave
function agregarAlCarrito(skuBuscado) {
    // Búsqueda secuencial del registro por su campo clave
    const productoEncontrado = inventario.find(auto => auto.codigo_sku === skuBuscado);
    
    if (productoEncontrado) {
        carrito.push(productoEncontrado);
        actualizarCarrito();
    }
}

// Función para actualizar la vista del carrito
function actualizarCarrito() {
    const contenedorCarrito = document.getElementById('items-carrito');
    const totalCarrito = document.getElementById('total-carrito');
    contenedorCarrito.innerHTML = '';
    
    let total = 0;

    carrito.forEach((item, index) => {
        total += item.valor_autito;
        const divItem = document.createElement('div');
        divItem.className = 'item-carrito';
        divItem.innerHTML = `
            <span>${item.NombreProducto}</span>
            <span>$${item.valor_autito}</span>
        `;
        contenedorCarrito.appendChild(divItem);
    });

    totalCarrito.innerText = total;
}

// Inicializar la página
window.onload = cargarProductos;
