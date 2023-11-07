const initializeLocalStorage = () => {

  const productosPromociones = localStorage.getItem("productosPromociones");
  if (!productosPromociones || productosPromociones === '[]') {
      const productosIniciales = [
        { num: "1", name: "Producto 1", cost: 1000 },
        { num: "2", name: "Producto 2", cost: 2000 },
        { num: "3", name: "Producto 3", cost: 3000 },
        { num: "4", name: "Producto 4", cost: 4000 },
        { num: "5", name: "Producto 5", cost: 5000 },
        { num: "6", name: "Producto 6", cost: 6000 },
        { num: "7", name: "Producto 7", cost: 7000 },
        { num: "8", name: "Producto 8", cost: 8000 },
        { num: "1", name: "Producto 9", cost: 9000 }
      ];
      localStorage.setItem("productosPromociones", JSON.stringify(productosIniciales));
    }


    const productosLoUltimo = localStorage.getItem("productosLoUltimo");
    if (!productosLoUltimo || productosLoUltimo === '[]') {
      const productosIniciales = [
        { num: "1", name: "Producto 1", cost: 1000 },
        { num: "2", name: "Producto 2", cost: 2000 },
        { num: "3", name: "Producto 3", cost: 3000 },
        { num: "4", name: "Producto 4", cost: 4000 },
        { num: "5", name: "Producto 5", cost: 5000 },
        { num: "6", name: "Producto 6", cost: 6000 }
      ];
      localStorage.setItem("productosLoUltimo", JSON.stringify(productosIniciales));
    }


    const productosCompras = localStorage.getItem("productosCompras");
    if (!productosCompras || productosCompras === '[]') {
      const productosIniciales = [
        { num: "1", name: "Producto 1", cost: 1000 },
        { num: "2", name: "Producto 2", cost: 2000 },
        { num: "3", name: "Producto 3", cost: 3000 },
        { num: "4", name: "Producto 4", cost: 4000 },
        { num: "5", name: "Producto 5", cost: 5000 }
      ];  
      localStorage.setItem("productosCompras", JSON.stringify(productosIniciales));
    }


    const productosNuevos = localStorage.getItem("productosNuevos");
    if (!productosNuevos || productosNuevos === '[]') {
      const productosIniciales = [
        { num: "1", name: "Producto 1", cost: 1000 },
        { num: "2", name: "Producto 2", cost: 2000 },
        { num: "3", name: "Producto 3", cost: 3000 },
        { num: "4", name: "Producto 4", cost: 4000 },
        { num: "5", name: "Producto 5", cost: 5000 },
        { num: "6", name: "Producto 6", cost: 6000 },
        { num: "7", name: "Producto 7", cost: 7000 },
        { num: "8", name: "Producto 8", cost: 8000 },
        { num: "1", name: "Producto 9", cost: 9000 },
        { num: "2", name: "Producto 10", cost: 10000 }
      ];
      localStorage.setItem("productosNuevos", JSON.stringify(productosIniciales));
    }


    const productosVendidos = localStorage.getItem("productosVendidos");
    if (!productosVendidos || productosVendidos === '[]') {
      const productosIniciales = [
        { num: "1", name: "Producto 1", cost: 1000 },
        { num: "2", name: "Producto 2", cost: 2000 },
        { num: "3", name: "Producto 3", cost: 3000 },
        { num: "4", name: "Producto 4", cost: 4000 },
        { num: "5", name: "Producto 5", cost: 5000 },
        { num: "6", name: "Producto 6", cost: 6000 }
      ];
      localStorage.setItem("productosVendidos", JSON.stringify(productosIniciales));
    }

  };
  
  export default initializeLocalStorage;
  