<template>

 <v-app id="inspire">
 	
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
    >
      <v-list dense>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <router-link to="/">
            <v-list-item-title>Доска</v-list-item-title>
            </router-link>
          </v-list-item-content>
        </v-list-item>
        
        <v-list-item link>

          <v-list-item-action>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-action>
          
          <v-list-item-content>
            <router-link to="/p2">
            <v-list-item-title>Задачи</v-list-item-title>
             </router-link>
          </v-list-item-content>
         
        </v-list-item>

      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      clipped-left
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Панель управления 2.0</v-toolbar-title>

    </v-app-bar>

    <v-main>


                  <v-container fluid class="wrapper">


        <v-row>

          <v-col cols="12" sm="12" md="12" style="justify-content: center">


            <v-label> Список задач</v-label>
                        <drop-list class="list2" :items="items5" @reorder="$event.apply(items5)" @insert="onInsert5"
                                   mode="cut">
                            <template v-slot:item="{item,reorder}">
                                <drag :key="item"  class="chip" :data="item" @cut="remove(items5, item)">
                                    <v-chip  :color="reorder ? null : 'primary'">{{item}}</v-chip>
                                </drag>
                            </template>
                            <template v-slot:feedback="{data}">
                                <div class="chip" :key="data">
                                    <v-chip color="normal">{{data}}</v-chip>
                                </div>
                            </template>
                            <template v-slot:inserting-drag-image="{data}">
                                <v-chip :key="data" style="transform: translate(-50%, -50%)">{{data}}
                                </v-chip>
                            </template>
                            <template v-slot:reordering-drag-image="{item}">
                            </template>
                        </drop-list>



          </v-col>
        </v-row>        
        <v-row>
          <v-col>
          
          <drop-list
              :items="items1"
              class="list"
              @insert="onInsert2"
              @reorder="$event.apply(items1)"
              mode="cut"
            >
            
              <template v-slot:item="{item, reorder}">
                
               <drag class="item" :key="item" :data="item" @cut="remove(items1, item)">
                 
                   {{item}}
    
               </drag>
               
              </template>
               
              <template v-slot:feedback="{data}">
                <div class="item feedback" :key="data">{{data}}</div>// данные при навигации на новую панель
              </template>
            </drop-list>
            
          </v-col>
          <v-col>
            <drop-list
              :items="items3"
              class="list"
              @insert="onInsert1"
              @reorder="$event.apply(items)"
              mode="cut"
            >


  
              <template v-slot:item="{item,reorder}">
                <drag class="item" :key="item" :data="item" @cut="remove(items3, item)">
               <span v-html="item" class="k1"> </span> 
                
               </drag>
              </template>
            <template v-slot:feedback="{data}">
                <div class="item feedback" :key="data">{{data}}</div>// данные при навигации на новую панель
              </template>
            </drop-list>
          </v-col>

          <v-col>

          <drop-list
              :items="items4"
              class="list"
              @insert="onInsert4"
              @reorder="$event.apply(items4)"
              mode="cut"
            >
            
              <template v-slot:item="{item, reorder}">
                
               <drag class="item" :key="item" :data="item" @cut="remove(items4, item)">
                 
                   {{item}}
    
               </drag>
               
              </template>
               
              <template v-slot:feedback="{data}">
                <div class="item feedback" :key="data">{{data}}</div>// данные при навигации на новую панель
              </template>
            </drop-list>

          </v-col>



           <v-col >
  

          <drop-list
              :items="items6"
              class="list"
              @insert="onInsert6"
              @reorder="$event.apply(items6)"
              mode="cut"
            >
            
              <template v-slot:item="{item, reorder}">
                
               <drag class="item" :key="item" :data="item" @cut="remove(items6, item)">
                 
                   {{item}}
    
               </drag>
               
              </template>
               
              <template v-slot:feedback="{data}">
                <div class="item feedback" :key="data">{{data}}</div>// данные при навигации на новую панель
              </template>
            </drop-list>



        <v-overlay
          :absolute="relative"
          :value="overlay"
          :opacity="opacity"
          color=rgba(255,255,255,0.7)
          light="true"

        >

             <v-card  style="width: 400px" >
  

              <v-col cols="12" sm="12" md="12" >
          <v-text-field
            label="Новая задача"
            id="text"
          ></v-text-field>
        </v-col>

        

        <v-col cols="12" sm="12" md="12">
          <v-btn v-on:click="addTask">Добавить задачу</v-btn>
        </v-col>

</v-card>

          <v-btn
            color="success"
            @click="overlay = false"

          >
            Hide Overlay
          </v-btn>
        </v-overlay>

         
  

   </v-col>


        </v-row>
   
      </v-container>

 <v-fab-transition >
              <v-btn
                v-show="!hidden"
                color="blue"
                dark
                absolute="true"
                right
                fixed
                fab
                style="bottom: 50px;right: 30px"
                @click="overlay = true"
              >
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </v-fab-transition>  



    </v-main>

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
      items3: ['Оператор 2'
              ],
      items1: ['Оператор 1',2,3,4,5,6], 
      items4: ['Оператор 3',74,55],
      items5: ['Список задач',147],
      items6: ["Корзина"],
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
      absolute: true,
      overlay: false,
      opacity: 0.7,
    };
  },
  methods: {
    onInsert1(event) {
      this.items3.splice(event.index, 0, event.data);
    },
      onInsert2(event) {
      this.items1.splice(event.index, 0, event.data);
    },
      onInsert4(event) {
      this.items4.splice(event.index, 0, event.data);
    },

      onInsert5(event) {
      this.items5.splice(event.index, 0, event.data);
    },

      onInsert6(event) {
      this.items6.splice(event.index, 0, event.data);
    },
       remove(array, value) {
      let index = array.indexOf(value);
       array.splice(index, 1);
    },

    addTask: function (event) {
      var text = document.getElementById('text');
      
      if(text.value.length >= 1){
          this.items5.push(text.value);
          text.value = '';
      }
    },
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

a:link {
  color: white;
   text-decoration: none;
}

/* visited link */
a:visited {
  color: white;
   text-decoration: none;
}

/* mouse over link */
a:hover {
  color: white;
   text-decoration: none;
}

/* selected link */
a:active {
  color: white;
   text-decoration: none;
}


.wrapper {

    .list2 {
        display: flex;
        width: 100%;
        height: 100px;
        border: 1px solid white;
        justify-content: center;
        align-items: center;
    }

    .chip {
        margin: 10px;
    }


  .list {
    border: 1px solid white;
    margin: 10px auto;
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
        background-color: rgb(60, 60, 60);
        border: 2px dashed white;
      }

      &.drag-image {
        background-color: rgb(220, 255, 220);
        transform: translate(-50%, -50%);
      }
    }
  }
}
</style>

