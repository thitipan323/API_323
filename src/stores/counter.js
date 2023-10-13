import { ref } from 'vue';
import { defineStore } from 'pinia'

export const Travel = defineStore('Travel_list', () => {

const travel_list  = ref([
  {name: 'France,Paris', img:'https://dimg04.c-ctrip.com/images/0M75e120008wpgx09BE73.jpg_.webp',
    ip:'api.openweathermap.org/data/2.5/forecast?lat=48.8566&lon=2.3522&appid=7991905263c806d671c522aecf186c1f'},
  {name: 'Rome,Italy', img:'https://www.thediaryofanomad.com/wp-content/uploads/2020/11/rome-for-3-days-in-rome-itinerary-vatican-dome-view.jpg',
    ip:'api.openweathermap.org/data/2.5/forecast?lat=41.9028&lon=2.3522&appid=7991905263c806d671c522aecf186c1f'},
  {name: 'Tokyo,Japan', img:'https://kiji.life/newkiji/wp-content/uploads/2018/09/7-must-visit-in-Tokyo-03.jpg',
    ip:'api.openweathermap.org/data/2.5/forecast?lat=35.6895&lon=139.6917&appid=7991905263c806d671c522aecf186c1f'},
  {name: 'Chiang Mai,Thailand ', img:'https://res.klook.com/image/upload/c_fill,w_750,h_560/q_80/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/qff2avwuircsz9c44owd.jpg',
    ip:'api.openweathermap.org/data/2.5/forecast?lat=18.7877&lon=98.9931&appid=7991905263c806d671c522aecf186c1f'},
  {name: 'Bern,Switzerland ', img:'https://static.thairath.co.th/media/dFQROr7oWzulq5Fa5BcWyVv8dAukqW56jTHKAvtYt3DeMsMWBqBDQQ7wrcaGYqIlgaZ.webp',
    ip:'api.openweathermap.org/data/2.5/forecast?lat=-76.2538974098341&lon=50.957200124603894&appid=7991905263c806d671c522aecf186c1f'},
  {name: 'Greenland ', img:'https://www.celebritycruises.com/blog/content/uploads/2020/12/things-to-do-in-greenland-hero.jpg',
    ip:'api.openweathermap.org/data/2.5/forecast?lat=76.8074&lon=-42.39296&appid=7991905263c806d671c522aecf186c1f'},
])

return { travel_list }
})