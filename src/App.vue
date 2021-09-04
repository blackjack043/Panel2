<template>

    

 <v-app id="inspire">
 <router-view ></router-view>

    <v-footer app>
      ********************
    </v-footer>
  </v-app>






</template>

<script lang="ts">
import { Drag, DropList } from "vue-easy-dnd";


const gradients = [
    ['#222'],
    ['#42b3f4'],
    ['red', 'orange', 'yellow'],
    ['purple', 'violet'],
    ['#00c6ff', '#F0F', '#FF0'],
    ['#f72047', '#ffd200', '#1feaea'],
  ]

export default {
  name: "App",
  components: {
    Drag,
    DropList
  },
  data: function() {
    return {
      items3: [12
              ],
      items1: [1,2,3,4,5,6], 
      code1: '<div> <button> ggg </button> </div>',
        drawer: false,
        colors: [
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],
        slides: [
          'First',
          'Second',
          'Third',
          'Fourth',
          'Fifth',
        ],
      showLabels: false,
      lineWidth: 2,
      labelSize: 7,
      radius: 10,
      padding: 8,
      lineCap: 'round',
      gradient: gradients[5],
      value: [0, 2, 5, 9, 5, 10, 3, 5, -4, -10, 1, 8, 2, 9, 0],
      gradientDirection: 'top',
      gradients,
      fill: false,
      type: 'trend',
      autoLineWidth: false,
   items: [
        { header: 'Today' },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'Brunch this weekend?',
          subtitle: "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
          subtitle: "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.",
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          title: 'Oui oui',
          subtitle: "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?",
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
          title: 'Birthday gift',
          subtitle: "<span class='text--primary'>Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?",
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
          title: 'Recipe to try',
          subtitle: "<span class='text--primary'>Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.",
        },
      ],

      indeterminate: false,
      rotate: 270,
      size: 96,
      value1: 23,
      width: 15,
    };
  },
  methods: {
    onInsert1(event) {
      this.items3.splice(event.index, 0, event.data);
    },
      onInsert2(event) {
      this.items1.splice(event.index, 0, event.data);
    },
       remove(array, value) {
      let index = array.indexOf(value);
       array.splice(index, 1);
    }
  },
  created () {
      this.$vuetify.theme.dark = true
    },

};
</script>

<style lang="scss">
html,
body,
#app,
.v-application--wrap,
.v-content,
.v-content__wrap {
  height: 100%;
}

.drop-in {
  box-shadow: 0 0 10px rgba(0, 0, 255, 0.3);
}


</style>

<style scoped lang="scss">
.wrapper {

  .list {
    border: 1px solid white;
    margin: 100px auto;
    width: 200px;
    height: 500px;



    .item {
      padding: 20px;
      margin: 5px;
      background-color: rgb(0, 180, 255);
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid;

      &.k1 {
        border:  1px solid red;
        margin: 20px;
      }


      &.feedback {
        background-color: rgb(255, 220, 220);
        border: 2px dashed black;
      }

      &.drag-image {
        background-color: rgb(220, 255, 220);
        transform: translate(-50%, -50%);
      }
    }
  }
}
</style>


            <div class="list">      
              <drag v-for="n in [1,2,3,4,5]" :data="n" class="item" :key="n">{{n}}</drag>
              <drag class="item" :data="a" key="a">a</drag>
            </div>











<v-content>

    </v-content>