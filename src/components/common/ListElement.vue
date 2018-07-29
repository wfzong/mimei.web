<template>
    <div>
    <h3>{{title}}</h3>
    <ul>
        <li v-for="(item,index) in list" :key="index">
            <router-link :to="{path:'item/'+item.id}">{{item.title}}</router-link>
        </li>
    </ul>
    </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    },
    list: {
      type: Array
    }
  }
}
</script>

