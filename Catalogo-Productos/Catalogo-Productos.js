//Práctica Catálogo de Productos
//Construye un pequeño catálogo orientado a objetos

//Task1: Clase Producto con nombre, precio y disponible
class Producto {
    constructor(nombre, precio, disponible) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = disponible;
          
    }

// Task2: Método mostrarInfo
// Agregué una condición if para que cuando haya 0 disponible muestre un mensaje
    mostrarInfo() {
    if (this.disponible === 0) {
      return `${this.nombre}: Lo sentimos, este producto no está disponible`;
    }
    return `${this.nombre} cuesta $${this.precio} | Disponible: ${this.disponible} unidades`;
    }

/*  Task3: Método cambiarDisponibilidad donde sumamos productos cuando se haga re-stock
        o restamos productos cuando se vendan */
    cambiarDisponibilidad(cantidad) {
        this.disponible += cantidad; // positivo = entra stock, negativo = se vende
        if (this.disponible < 0) {
             this.disponible = 0; // evita que quede en negativo
    }
  }
}
       

//  Task4 Crear al menos 4 productos 
const p1 = new Producto ("Blush", 450, 5);
const p2 = new Producto ("Gloss", 300, 0);
const p3 = new Producto ("Rimel", 60, 3);
const p4 = new Producto ("Esmalte", 150, 0);

//  Task5 y Task6 Agregar Maquillaje extend para incluir la propiedad tono
class Maquillaje extends Producto {
    constructor(nombre, precio, disponible, tono) {
        super(nombre, precio, disponible);
        this.tono = tono;

    }
//  Incluyo una actualización de mostrarInfo para que incluya la nueva propiedad tono
    mostrarInfo() {
        return super.mostrarInfo() + " Tono: " + this.tono ;
    }

}

//  Task7 Nuevo producto con la propiedad nueva tono
const p5 = new Maquillaje ("Base", 700, 2, "Beige");


/*  Probamos imprimir el producto con sus propiedades y posteriormente actualizar la
    disponibilidad agregando re-stock o ventas */
    
console.log(p2.mostrarInfo());
console.log(p5.mostrarInfo());

p1.cambiarDisponibilidad(-2); // se venden 2
console.log(p1.mostrarInfo()); // Blush | Disponible: 3 unidades

p2.cambiarDisponibilidad(5); // llega stock nuevo
console.log(p2.mostrarInfo()); // Gloss | Disponible: 5 unidades
