import Vue from "vue"
import Router from "vue-router"
import Home from "@/views/Home"


Vue.use(Router)

export default new Router({
  mode: 'history',// чтобы корректно отрабатывали / в путях
  routes: [ // укажем массив routes
    // где каждый объект будет представлять из себя новую страницу
    // у объекта есть два обязательных параметра:
    {
      path: '/', // это будет главная страница
      component: Home // компонент, который должен быть загружен
    },
    {
      path: '/todos',
      // здесь же можем применить lazy-loading для каких-либо страниц:
      component: () => import('./views/Todos.vue') // в component передаем колбэк функцию, где указываем динамический импорт - где указываем путь до страницы, которую хотим получить
    }

  ]
})