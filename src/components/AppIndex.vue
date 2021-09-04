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



      <v-container
        
        fluid
      >
        <v-row
  
        >
          <v-col >
            <v-row>
              <v-col>



<v-card class="center" >
  
<vue-ellipse-progress 
  :data="circles"                    
  :progress="3"
  :angle="-90"
  color="red"
  :colorFill="colorFillGradient"
  emptyColor="rgba(255,255,255,0.1)"
  :emptyColorFill="emptyColorFillGradient"                      
  :size="300"
  :thickness="10"
  emptyThickness="10%"
  lineMode="in 10"
  :legend="true"
  :legendValue="3"
  legendClass="legend-custom-style"
  dash="60 0.9"
  animation="reverse 700 400"
  :noData="false"
  :loading="false"                      
  fontColor="white"
  :half="false"
  :gap="10"
  determinate="true"
  
  fontSize="5rem">
  
  <span slot="legend-value"></span>
  <p slot="legend-caption">В ожидании</p>
  
</vue-ellipse-progress>




</v-card>

</v-col>

<v-col>
<v-card class="center"  >
  
<vue-ellipse-progress 
  :data="circles"                    
  :progress="3"
  :angle="-90"
  color="red"
  :colorFill="colorFillGradient"
  emptyColor="rgba(255,255,255,0.1)"
  :emptyColorFill="emptyColorFillGradient"                      
  :size="300"
  :thickness="10"
  emptyThickness="10%"
  lineMode="in 10"
  :legend="true"
  :legendValue="3"
  legendClass="legend-custom-style"
  dash="60 0.9"
  animation="reverse 700 400"
  :noData="false"
  :loading="false"                      
  fontColor="white"
  :half="false"
  :gap="10"
  determinate="true"
  
  fontSize="5rem">
  
  <span slot="legend-value"></span>
  <p slot="legend-caption">В ожидании</p>
  
</vue-ellipse-progress>




</v-card>



</v-col> 
</v-row>


<template>
  <v-card>


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







        
          </v-col>

          <v-col>


    <v-row>
     <v-col cols="12" md="12" sm="12" xs="12">
    
    


 
 
 <v-card 
            color="ffffff"
            dark
          >
            <v-card-title class="headline">Настройка параметров панели</v-card-title>

            <v-card-subtitle>Датчики.</v-card-subtitle>






            <v-card-actions>
              <v-btn text>Применить настройки</v-btn>
            </v-card-actions>
        </v-card>

        <div style="height: 1vh"></div>

<v-card class="d-none d-lg-flex" style="align-items: center;justify-content: center; padding: 20px">

   <div >
     <apexchart  width="250%" height="300px" type="bar" :options="chartOptions" :series="series"></apexchart>
   </div>


</v-card>


<template>
  <v-item-group>

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
                  line {{n}}
                </div>
              </v-scroll-y-transition>
            </v-card>
          </v-item>
        </v-col>
      </v-row>

  </v-item-group>
</template>









     
       
     


      </v-col>
    </v-row>



  




          </v-col>
        </v-row>
      </v-container>
    </v-main>




    <v-footer app >
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
      switch1: true,
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


      chartOptions: {
          chart: {
            id: 'vuechart-example',
            

          },
            theme: {
      mode: 'dark', 
      palette: 'palette1', 
      monochrome: {
          enabled: false,
          color: '#255aee',
          shadeTo: 'light',
          shadeIntensity: 0.65
      },
  },
          xaxis: {
            categories: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
          }
        },
        series: [{
          name: 'Кол-во звонков',
          data: [30, 40, 35, 50, 49, 60, 70, 91,27,58,47,96,55,21,78,45,65,99,71,45,64,50,87,88,57,68,93,35,45,62]
        }]
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


  .center {
     display: flex;
     align-items: center;
     justify-content: center;
     position: relative;
     padding: 1vh;

     min-width: 200px;

  }

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








