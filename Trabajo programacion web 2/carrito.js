document.addEventListener('DOMContentLoaded', function(){
    mostrarProductos();
});

function mostrarProductos(){
    let productos = [
        {
            url:'https://p2-ofp.static.pub/fes/cms/2023/05/30/webi9et9bh61fej6nl54nrxnwrz8lu648215.png',
            desc:'Especificaciones: Procesador potente, RAM amplia, almacenamiento SSD, tarjeta gráfica dedicada (opcional).',
            precio:"$1.399.990",
            nombre:"Lenovo ThinkPad X1 Carbon Gen 9"
        },  
        {
            url:'https://i5.walmartimages.com/asr/9fb3f5a7-d367-4b79-8e9b-4659e093671d.63dff105ea53d3495bd51ab579462a67.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF',
            desc:'Especificaciones: Procesador de alto rendimiento, tarjeta gráfica potente, RAM amplia, almacenamiento SSD.',
            precio:"$1.899.990",
            nombre:"Alienware Aurora R12 Gaming Desktop"
        },
        {
            url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcVD1-h6wXkQ_uVo7YbNGFwGNxOgrEdiuoqVDlULmvaA&s',
            desc:'Especificaciones: Alta sensibilidad a la presión, área de trabajo grande, compatible con software de diseño.',
            precio:"$412.090",
            nombre:"Wacom Intuos Pro"
        },
        {
            url:'https://images-na.ssl-images-amazon.com/images/I/61qGP56HsbL._AC_UL600_SR600,600_.jpg',
            desc:'Este microondas cuenta con una capacidad de 1.2 pies cúbicos y una potencia de 1200 watts. Viene con tecnología Inverter para una cocción más uniforme y rápida, además de un panel de control intuitivo con programas preestablecidos.',
            precio:"$72.990",
            nombre:"Microondas Panasonic NN-SN65KB"
        },
        {
            url:'https://image-us.samsung.com/SamsungUS/home/home-appliances/refrigerators/4-door-french-door/pdp/rf28r7351sr-aa/RF287351SR_GALLERY1_v2.jpg?$product-details-jpg$',
            desc:'Este refrigerador tiene una capacidad total de 28 pies cúbicos y cuenta con tecnología FlexZone que te permite convertir un compartimento en refrigerador o congelador según tus necesidades. Además, cuenta con dispensador de agua y hielo.',
            precio:"$349.990",
            nombre:"Refrigerador Samsung RF28R7351SR"
        },
        {
            url:'https://m.media-amazon.com/images/I/810YCk9OpiL._AC_UF894,1000_QL80_.jpg',
            desc:'Esta pantalla de gaming ofrece una frecuencia de actualización de 144Hz y una resolución de 2560x1440 píxeles para una experiencia visual impresionante. Cuenta con tecnología NVIDIA G-SYNC para eliminar el desgarro de la pantalla y el stuttering. Además, tiene un diseño ergonómico con ajuste de altura, inclinación y giro',
            precio:"$842.346",
            nombre:"ASUS ROG Swift PG279Q"
        },
        {
            url:'https://cdnx.jumpseller.com/gtigx1/image/19900405/resize/640/640?1634678226',
            desc:'Este mouse gaming ofrece un sensor HERO de próxima generación con hasta 16000 DPI para un seguimiento preciso y una respuesta rápida. Cuenta con 11 botones programables, ajuste de peso personalizable y tecnología de iluminación LIGHTSYNC RGB para personalizar la apariencia del mouse según tus preferencias.',
            precio:"$54.990",
            nombre:"Logitech G502 HERO"
        },
        {
            url:'https://falabella.scene7.com/is/image/Falabella/gsc_125112067_4168436_2?wid=800&hei=800&qlt=70',
            desc:'Este teclado gaming está equipado con interruptores mecánicos Razer de alta calidad para una respuesta táctil y duradera. Cuenta con retroiluminación Razer Chroma RGB personalizable, teclas programables y un reposamuñecas magnético para mayor comodidad durante sesiones de juego prolongadas.',
            precio:"$37.177",
            nombre:"Razer BlackWidow Elite"
        },
        {
            url:'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6554/6554576cv11d.jpg',
            desc:'Este aire acondicionado tiene una capacidad de enfriamiento de 8000 BTU y es adecuado para habitaciones de hasta 340 pies cuadrados. Cuenta con un control remoto y varias velocidades de ventilador para una experiencia personalizada.',
            precio:"$274.990",
            nombre:"Aire acondicionado LG LW8017ERSM"
        }
    ];

    const contenedorProductos = document.getElementById('productos');

    productos.forEach(function(producto) {
        const divCol = document.createElement('div');
        divCol.classList.add('col-12', 'col-sm-12', 'col-md-6', 'col-lg-4', 'mb-3');

        const divCard = document.createElement('div');
        divCard.classList.add('card');

        const img = document.createElement('img');
        img.classList.add('card-img-top');
        img.setAttribute('src', producto.url);
        img.setAttribute('alt', producto.nombre);

        const divCardBody = document.createElement('div');
        divCardBody.classList.add('card-body');

        const h5 = document.createElement('h5');
        h5.classList.add('card-title');
        h5.textContent = producto.nombre;

        const pPrecio = document.createElement('p');
        pPrecio.classList.add('card-text');
        pPrecio.textContent = `Precio: ${producto.precio}`;

        const pDesc = document.createElement('p');
        pDesc.classList.add('card-text');
        pDesc.textContent = producto.desc;

        divCardBody.appendChild(h5);
        divCardBody.appendChild(pPrecio);
        divCardBody.appendChild(pDesc);


        const botonAgregar = document.createElement('button');
        botonAgregar.classList.add('btn', 'btn-primary');
        botonAgregar.textContent = 'Añadir al carrito';
        botonAgregar.addEventListener('click', function() {
        alert('Su Producto fue añadido al carrito.');
        });


        divCard.appendChild(img);
        divCard.appendChild(divCardBody);
        divCol.appendChild(divCard);
        divCardBody.appendChild(botonAgregar);
        contenedorProductos.appendChild(divCol);



    });
}
