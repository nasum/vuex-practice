<template>
  <div>
    <input type="text" v-model="input" @keyup.enter="addTodo"/>
  </div>
</template>

<script>
  import store from '../store/';

  export default {
    props: ['input'],
    methods: {
      addTodo: function(e){
        var text = e.target.value;
        store.actions.addTodo(text);
        e.target.value = '';
      }
    }
  }
</script>
