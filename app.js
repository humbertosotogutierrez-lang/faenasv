// Base de Datos de Productos
const products = [
    {
        id: 1,
        name: "Minuta Dulcecita",
        category: "minutas-dulces",
        price: 2.00,
        description: "Hielo raspado con 3 jarabes a elección, marshmallows, galleta, gomitas, Jalea natural de tamarindo y leche condensada.",
        image: "https://6ab9e2e957212ca6e1e9f743.imgix.net/faena/dulces/dulcecita.jpg"
    },
    {
        id: 2,
        name: "Minuta Acida Coronita",
        category: "minutas-acidas",
        price: 3.00,
        description: "Hielo raspado con jugo natural de limón recién exprimido, sal, totillitas mixtas, jocote, chamoy, salsa negrita, tajín, aiguaste y jalea natural de tamarindo.",
        image: "https://6ab9e2e957212ca6e1e9f743.imgix.net/faena/acida/coronita.jpg"
    },
    {
        id: 3,
        name: "Chamoyada de Piña Tropical",
        category: "chamoyadas",
        price: 3.50,
        description: "Frozen de piña, vaso escarchado con chamoy, salsa negrita y tajín, topping (taquerito o gomita), salsa negrita y pajilla enchamoyada.",
        image: "https://6ab9e2e957212ca6e1e9f743.imgix.net/sandbox/mar%2029,%20Doc%202-im%E2%94%9C%C3%ADgenes-12.jpg"
    },
    {
        id: 4,
        name: "Coctel de Negro",
        category: "cocteles",
        price: 4.00,
        description: "Conchas negras frescas marinadas en jugo de limón, cebolla encurtida, chirimol, chamoy, salsa inglesa y tajín.",
        image: "https://6ab9e2e957212ca6e1e9f743.imgix.net/sandbox/coctel%20negro.jpg"
    },
    {
        id: 5,
        name: "Ceviche Mixto",
        category: "ceviches y aguachiles",
        price: 6.50,
        description: "Camarón, Calamar y caracol marinados en cítricos, pepino, chirimol, salsa inglesa y tajín.",
        image: "https://6ab9e2e957212ca6e1e9f743.imgix.net/faena/ceviches/ceviche%20mixto.jpg"
    },
    {
        id: 7,
        name: "Chamoyada de Fresa Especial",
        category: "chamoyadas",
        price: 4.50,
        description: "Granizado de fresa con vaso escarchado con chamoy, salsa negrita y tajín, topping (taquerito o gomita) pajilla enchamoyada.",
        image: "https://6ab9e2e957212ca6e1e9f743.imgix.net/sandbox/mar%2029,%20Doc%202-im%E2%94%9C%C3%ADgenes-14.jpg"
    },
    {
        id: 8,
        name: "Minuta Acida Especial",
        category: "minutas-acidas",
        price: 3.50,
        description: "Hielo raspado con jugo natural de limón recién exprimido, sal, mamones, nances, tortillitas mixtas, chamoy, tajín, aiguaste y jalea natural de tamarindo.",
        image: "https://6ab9e2e957212ca6e1e9f743.imgix.net/faena/acida/especial.jpg"
    },
    {
        id: 9,
        name: "Minuta Acida Festival",
        category: "minutas-acidas",
        price: 3.50,
        description: "Hielo raspado con jugo natural de limón recién exprimido, sal, tortillitas mixtas, fruta acida, chamoy, salsa negrita, tajín, aiguaste y jalea natural de tamarindo.",
        image: "https://6ab9e2e957212ca6e1e9f743.imgix.net/faena/acida/festival.jpg"
    },
    {
        id: 10,
        name: "Minuta Acida Gustito",
        category: "minutas-acidas",
        price: 3.00,
        description: "Hielo raspado con jugo natural de limón recién exprimido, sal, sandia en trozos, guayaba, chamoy, tajín, aiguaste y jalea natural de tamarindo.",
        image: "https://6ab9e2e957212ca6e1e9f743.imgix.net/faena/acida/gustito.jpg"
    },
    {
        id: 11,
        name: "Minuta Acida Limonazo",
        category: "minutas-acidas",
        price: 3.00,
        description: "Hielo raspado con jugo natural de limón recién exprimido, sal, fruta acida,  chamoy, salsa negrita, tajín, aiguaste y jalea natural de tamarindo.",
        image: "https://6ab9e2e957212ca6e1e9f743.imgix.net/faena/acida/limonazo.jpg"
    },
    {
        id: 12,
        name: "Minuta Acida Picosita",
        category: "minutas-acidas",
        price: 2.50,
        description: "Hielo raspado con jugo natural de limón recién exprimido, sal, tortillitas mixtas, chamoy, tajín, aiguaste y jalea natural de tamarindo.",
        image: "https://6ab9e2e957212ca6e1e9f743.imgix.net/faena/acida/picosita.jpg"
    },
    {
        id: 13,
        name: "Minuta Acida Tamarrica",
        category: "minutas-acidas",
        price: 2.50,
        description: "Hielo raspado con jugo natural de limón recién exprimido, sal, fruta dulce, chamoy, tajín, aiguaste y jalea natural de tamarindo.",
        image: "https://6ab9e2e957212ca6e1e9f743.imgix.net/faena/acida/tamarrica.jpg"
    },
    {
        id: 14,
        name: "Minuta Acida Tradicional",
        category: "minutas-acidas",
        price: 1.50,
        description: "Hielo raspado con jugo natural de limón recién exprimido, sal, chamoy, tajín, aiguaste y jalea natural de tamarindo.",
        image: "https://6ab9e2e957212ca6e1e9f743.imgix.net/faena/acida/tradicional.jpg"
    },
    {
        id: 15,
        name: "Minuta Dulce Coki",
        category: "minutas-dulces",
        price: 2.50,
        description: "Hielo raspado con 3 jarabes a elección, coco caramelizado, jalea natural de tamarindo y leche condensada.",
        image: "https://6ab9e2e957212ca6e1e9f743.imgix.net/faena/dulces/coki.jpg"
    },
    {
        id: 16,
        name: "Minuta Dulce Coqueta",
        category: "minutas-dulces",
        price: 3.00,
        description: "Hielo raspado con 3 jarabes a elección, fruta dulce, coco caramelizado, jalea natural de tamarindo y leche condensada.",
        image: "https://6ab9e2e957212ca6e1e9f743.imgix.net/faena/dulces/coqueta.jpg"
    },
    {
        id: 16,
        name: "Minuta Dulce Hawaiiana",
        category: "minutas-dulces",
        price: 2.50,
        description: "Hielo raspado con 3 jarabes a elección, fruta dulce, jalea natural de tamarindo y leche condensada.",
        image: "https://6ab9e2e957212ca6e1e9f743.imgix.net/faena/dulces/hawaiiana.jpg"
    },
    {
        id: 17,
        name: "Minuta Dulce Tradicional",
        category: "minutas-dulces",
        price: 1.00,
        description: "Hielo raspado con espesa jalea natural de tamarindo, leche condensada y 3 jarabes de sabores de tu elección.",
        image: "https://6ab9e2e957212ca6e1e9f743.imgix.net/faena/dulces/tradicional.jpg"
    },
    {
        id: 18,
        name: "Chamoyada de Mango Especial",
        category: "chamoyadas",
        price: 4.00,
        description: "Frozen de mango, vaso escarchado con chamoy, salsa negrita y tajín, topping (taquerito o gomita), salsa negrita y pajilla enchamoyada.",
        image: "https://6ab9e2e957212ca6e1e9f743.imgix.net/faena/chamoyada/mar%2029,%20Doc%202-im%E2%94%9C%C3%ADgenes-13.jpg"
    },
    {
        id: 19,
        name: "Ceviche Nacho de Camarón",
        category: "cevinachos",
        price: 3.50,
        description: "Crujientes nachos cubiertos con ceviche de camarón marinado en cítricos, cebolla encurtida, cebolla con jalapeños, chamoy, tajin y salsa inglesa.",
        image: "https://6ab9e2e957212ca6e1e9f743.imgix.net/faena/ceviches/cevinacho%20de%20camaron.jpg"
    },
    {
        id: 20,
        name: "Ceviche de Camarón",
        category: "ceviches y aguachiles",
        price: 5.00,
        description: "Camarón fresco marinado en limón y especies, pipino,chirimol, chamoy, salsa inglesa, tajin y cebolla encurtida.",
        image: "https://6ab9e2e957212ca6e1e9f743.imgix.net/faena/ceviches/ceviche%20de%20camaron.jpg"
    }

];

// Estado de Filtro
let currentCategory = 'all';

// Elementos del DOM
const productsGrid = document.getElementById('products-grid');
const categoryTitle = document.getElementById('category-title');
const productsCount = document.getElementById('products-count');
const categoryBtns = document.querySelectorAll('.cat-btn');
const searchInput = document.getElementById('search-input');

// Renderizar Productos
function renderProducts(items) {
    productsGrid.innerHTML = '';

    if (items.length === 0) {
        productsGrid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 2rem;">No se encontraron productos.</p>`;
        productsCount.textContent = `0 productos`;
        return;
    }

    productsCount.textContent = `${items.length} producto(s) disponible(s)`;

    items.forEach(product => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" class="card-img">
      <div class="card-body">
        <h3 class="card-title">${product.name}</h3>
        <p class="card-desc">${product.description}</p>
        <div class="card-footer">
          <span class="price">$${product.price.toFixed(2)}</span>
        </div>
      </div>
    `;
        productsGrid.appendChild(card);
    });
}

// Filtrar por Categoría
categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        categoryBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        currentCategory = btn.getAttribute('data-category');
        categoryTitle.textContent = currentCategory === 'all'
            ? 'Todos los Productos'
            : btn.textContent.trim();

        filterProducts();
    });
});

// Filtrar por Búsqueda y Categoría
function filterProducts() {
    const searchTerm = searchInput.value.toLowerCase();

    const filtered = products.filter(product => {
        const matchesCategory = currentCategory === 'all' || product.category === currentCategory;
        const matchesSearch = product.name.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm);
        return matchesCategory && matchesSearch;
    });

    renderProducts(filtered);
}

searchInput.addEventListener('input', filterProducts);

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    renderProducts(products);
});