const app = Vue.createApp({
    data(){
        return{
            productos: [],
            
            nuevo: {
                nombre: "",
                cantidad: 1,
                precio: 0
            },
        }
    },
    computed: {
        totalProductos() {
            let total = 0;
            for (let i = 0; i < this.productos.length; i++) {
                total += this.productos[i].cantidad;
            }
            return total;
        },
        subtotal() {
            return this.productos.reduce(
                (s, p) => s + (p.cantidad * p.precio), 0
            );
        },
        iva() {
            return (this.subtotal * 0.16).toFixed(2);
        },
        total() {
            return (this.subtotal + parseFloat(this.iva)).toFixed(2);
        }
    },
    methods:{
        agregar() {
            if (this.nuevo.nombre && this.nuevo.precio > 0) {
                this.productos.push({ ...this.nuevo });
                this.nuevo.nombre = "";
                this.nuevo.cantidad = 1;
                this.nuevo.precio = 0;
            }
        },
        eliminar(index) {
            this.productos.splice(index, 1);
        }  
    }
});
const app1 = app.mount('#componente')
