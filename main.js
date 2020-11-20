var app = new Vue ({
    el: '#root',

    data: {
        a: []
    },

    methods: {

    },

    mounted() {
       for (var i = 0; i < 10 ; i++) {

            let self = this;
          let m = axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
               .then(function(result) {
                   let my_email = result.data.response;

                   axios.get('https://flynn.boolean.careers/exercises/api/random/name')
                   .then(function(res){
                       let my_name = res.data.response;
                       self.a.push({
                           mail: my_email,
                           name: my_name
                       })
                       // console.log(m);
                       // console.log(my_name);
                   })
               });



       }

   }

});
