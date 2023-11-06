<template>
  <h1>Formulario de registro</h1>
  <v-text-field v-model="nombre" placeholder=" Introduce nombre"></v-text-field>
  <v-text-field v-model="apellido" placeholder=" Introduce apellido"></v-text-field>
  <v-btn prepend-icon="mdi-cached" color="blue" :disabled="!invisible">Submit</v-btn>
</template>

<script>

export default {
  name: 'App',

  components: {

  },

  data: () => ({
    //escribir el script aqui dentro
    invisible: false, //variable boolean, por lo que invisible por defecto sera true
    nombre: '', //variable v-model
    apellido: '' //variable v-model
  }),
  //funciones y metodos
  methods: {
    comprobarCampos: function () {
      //sera invisible mientras ambos campos sean vacios
      this.invisible = this.nombre != '' && this.apellido != ''
    }
  },
  //cuando se va a ejecutar este metodo?, listener
  watch: {
    //cuando se pulse en el campo nombre, se ejecuta la funcion comprobarCampos
    nombre: function () {
      this.comprobarCampos();
    },
    apellido: function(){
      this.comprobarCampos();
    }
  }
}
</script>
