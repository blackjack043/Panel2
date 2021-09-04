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
            <v-list-item-title>Доска</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-cog</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Задачи</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      clipped-left
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Загрузка 2.0</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container
        
        fluid
      >
        <v-row
  
        >
          <v-col  >

          <v-card
            color="ffffff"
            dark
          >
            <v-card-title class="headline">Unlimited music now</v-card-title>

            <v-card-subtitle>Listen to your favorite artists and albums whenever and wherever, online and offline.</v-card-subtitle>

            <v-card-actions>
              <v-btn text>Listen Now</v-btn>
            </v-card-actions>
          </v-card>


<template>
  <v-card

  >


    <v-list three-line>
      <template v-for="(item, index) in items">
        <v-subheader
          v-if="item.header"
          :key="item.header"
          v-text="item.header"
        ></v-subheader>

        <v-divider
          v-else-if="item.divider"
          :key="index"
          :inset="item.inset"
        ></v-divider>

        <v-list-item
          v-else
          :key="item.title"
          @click=""
        >
          <v-list-item-avatar>
            <v-img :src="item.avatar"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-html="item.title"></v-list-item-title>
            <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </v-card>
</template>





<template>
  <v-item-group>
    <v-container>
      <v-row>
        <v-col
          v-for="n in 3"
          :key="n"
          cols="12"
          md="4"
        >
          <v-item v-slot:default="{ active, toggle }">
            <v-card
              :color="active ? 'primary' : ''"
              class="d-flex align-center"
              dark
              height="200"
              @click="toggle"
            >
              <v-scroll-y-transition>
                <div
                  v-if="active"
                  class="display-3 flex-grow-1 text-center"
                >
                  Active
                </div>
              </v-scroll-y-transition>
            </v-card>
          </v-item>
        </v-col>
      </v-row>
    </v-container>
  </v-item-group>
</template>
        
          </v-col>

          <v-col>
<template>
  <v-container fluid>
    <v-sparkline
      :value="value"
      :gradient="gradient"
      :smooth="radius || false"
      :padding="padding"
      :line-width="lineWidth"
      :stroke-linecap="lineCap"
      :gradient-direction="gradientDirection"
      :fill="fill"
      :type="type"
      :auto-line-width="autoLineWidth"
      auto-draw
      :show-labels="showLabels"
      :label-size="labelSize"
    ></v-sparkline>

    <v-divider></v-divider>

    <v-row>
      <v-col cols="12">
        <v-row class="fill-height" align="center">
          <v-subheader class="pl-0">Type</v-subheader>
          <v-btn-toggle v-model="type" mandatory>
            <v-btn small text value="bar">bar</v-btn>
            <v-btn small text value="trend">trend</v-btn>
          </v-btn-toggle>
        </v-row>
      </v-col>

      <v-col cols="12" md="6">
        <v-row class="fill-height" align="center">
          <v-subheader class="pl-0">Gradient</v-subheader>
          <v-item-group v-model="gradient" mandatory>
            <v-row>
              <v-item
                v-for="(gradient, i) in gradients"
                :key="i"
                v-slot:default="{ active, toggle }"
                :value="gradient"
              >
                <v-card
                  :style="{
                    background: gradient.length > 1
                      ? `linear-gradient(0deg, ${gradient})`
                      : gradient[0],
                    border: '2px solid',
                    borderColor: active ? '#222' : 'white'
                  }"
                  width="30"
                  height="30"
                  class="mr-2"
                  @click.native="toggle"
                ></v-card>
              </v-item>
            </v-row>
          </v-item-group>
        </v-row>
      </v-col>

      <v-col cols="12" md="6">
        <v-row class="fill-height" align="center">
          <v-subheader class="pl-0">Gradient direction</v-subheader>
          <v-btn-toggle v-model="gradientDirection" mandatory>
            <v-btn small text value="top">top</v-btn>
            <v-btn small text value="right">right</v-btn>
            <v-btn small text value="left">left</v-btn>
            <v-btn small text value="bottom">bottom</v-btn>
          </v-btn-toggle>
        </v-row>
      </v-col>

      <v-col cols="12">
        <v-slider
          v-model="lineWidth"
          label="Line width"
          min="0.1"
          max="10"
          step="0.1"
          thumb-label
          :disabled="autoLineWidth"
        ></v-slider>
      </v-col>

      <v-col cols="12">
        <v-slider
          v-model="radius"
          label="Radius"
          min="0"
          max="16"
          thumb-label
        ></v-slider>
      </v-col>

      <v-col cols="12">
        <v-slider
          v-model="padding"
          label="Padding"
          min="0"
          max="16"
          thumb-label
        ></v-slider>
      </v-col>

      <v-col cols="6">
        <v-row class="fill-height" align="center">
          <v-subheader class="pl-0">Linecap</v-subheader>
          <v-btn-toggle v-model="lineCap" mandatory :disabled="type !== 'trend'">
            <v-btn small text value="butt">butt</v-btn>
            <v-btn small text value="round">round</v-btn>
            <v-btn small text value="square">square</v-btn>
          </v-btn-toggle>
        </v-row>
      </v-col>

      <v-col cols="6">
        <v-row justify="space-around">
          <v-switch v-model="showLabels" label="Show labels"></v-switch>
          <v-switch v-model="fill" label="Fill" :disabled="type !== 'trend'"></v-switch>
          <v-switch v-model="autoLineWidth" label="Auto-line-width" :disabled="type !== 'bar'"></v-switch>
        </v-row>
      </v-col>

      <v-col v-if="showLabels" cols="12">
        <v-slider
          v-model="labelSize"
          label="Label size"
          min="1"
          max="20"
          thumb-label
        ></v-slider>

        


      </v-col>
    </v-row>
  </v-container>
</template>

  
<template>
 
  <v-card>
   
    <div class="text-center ma-12">
      <v-progress-circular
        :indeterminate="indeterminate"
        :rotate="rotate"
        :size="size"
        :value="value1"
        :width="width"
        color="blue"
      >{{ value1 }}</v-progress-circular>
    </div>


  </v-card>

  
</template>



          </v-col>
        </v-row>
      </v-container>
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
      items: [12
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
      this.items.splice(event.index, 0, event.data);
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
    border: 1px solid black;
    margin: 100px auto;
    width: 200px;
    height: 500px;



    .item {
      padding: 20px;
      margin: 5px;
      background-color: rgb(220, 180, 255);
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
                  <v-container fluid class="wrapper">
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
              :items="items"
              class="list"
              @insert="onInsert1"
              @reorder="$event.apply(items)"
              mode="cut"
            >


  
              <template v-slot:item="{item,reorder}">
                <drag class="item" :key="item" :data="item" @cut="remove(items, item)">
               <span v-html="item" class="k1"> </span> 
                
               </drag>
              </template>
              <template v-slot:feedback="{data}">
                <div class="item feedback" :key="data">{{data}}</div>// данные при навигации на новую панель
              </template>
            </drop-list>
          </v-col>
        </v-row>
      </v-container>
    </v-content>