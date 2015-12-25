import Vue      from 'Vue';
import TextForm from './components/TextForm.vue';
import ToDoList from './components/ToDoList.vue';
import store    from './store/';

window.onload = function(){
  var main = new Vue({
    el: "body",
    data: store.state,
    components: {
      "text-form": TextForm,
      "to-do-list": ToDoList
    }
  })
}
