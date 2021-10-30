<template>
  <div>
    <h1>{{ title }}</h1>
    <input type="text" v-model="title" />
    <p v-if="show">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
      perspiciatis.
    </p>
    <!-- <button @click="show = !show">Toggle</button> -->
    <button @click="toggleIt">Toggle</button>
    <p>karakter sayısı {{ titleLength }}</p>
  </div>
<hr>
  <div>
    <button @click="counter++">{{ oddOrEven }} * {{ counter }}</button>
  </div>
  <hr>
  <h2>{{exampleTitle}}</h2>

</template>

<script>
import { ref, computed, watch } from "vue"; // reactivity vermek için inputa // hepsini composablesa taşıdıysan burada importa gerek yok. 

// onun yerine composablesleri import et

import Example from './composables/Example'; // DOSYAYI ÇEKTİK

export default {
  // beforecreated ve created'den önce çalışıyor. Bunlara artık gerek yok. Setup yeterli
  setup() {
    const title = ref("baslik");
    const show = ref(true); // cosnt ile bir objenin içerisini set edebilirsiniz ancak tamamını değiştiremezsiniz.
    const toggleIt = () => {
      show.value = !show.value;

      console.log(show); // .value eklememiz gerek.  ref'ten kaynaklı bir durum.
    };
    const titleLength = computed(() => {
      return title.value.length + " adet ";
    });
    console.log(titleLength.value); // computed'in dısında kullanmak için value eklemen gerek

    const counter = ref(0);
    const oddOrEven = computed(() => {
      return counter.value % 2 === 0 ? "cift" : "tek" // return şart veya köşeli parantezsiz func yaz
    });

    // WATCHER
    watch([counter,oddOrEven], (newW,oldW)=> { // iki değeri de izleyebilirim
      console.log(newW, oldW);
    })

    
    

    // COMPOSABLESTAN ALMA

    const {exampleTitle} = Example(); // fonksiyon ismi(return ve templatedekiyle aynı) + dosyanın ismi

   

    return {
      // mecburi
      title,
      show,
      toggleIt,
      titleLength,
      oddOrEven,
      exampleTitle,
      counter,
    };
  },
};
</script>
