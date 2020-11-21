var app = new Vue ({
    el: '#root',

    data: {
        contacts: [],

    },

    methods: {

        // isTrue(a, i){
        //
        //     if(this.contacts[i].a.success == false){
        //     this.contacts[i].a.success = true
        //     } else {
        //     this.contacts[i].a.success = false
        //     }
        // }

        isTrue_mail(i){

            if(this.contacts[i].mail.success == false){
            this.contacts[i].mail.success = true
            } else {
            this.contacts[i].mail.success = false
            }
        },

        isTrue_phone(i){

            if(this.contacts[i].phone.success == false){
            this.contacts[i].phone.success = true
            } else {
            this.contacts[i].phone.success = false
            }
        }


    },

    mounted() {
       for (var i = 0; i < 6 ; i++) {

            let self = this;
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
               .then(function(result) {
                   let my_email = result.data;

                   axios.get('https://flynn.boolean.careers/exercises/api/random/name')
                       .then(function(result){
                           let my_name = result.data;
                           axios.get('https://flynn.boolean.careers/exercises/api/random/phone')
                                .then(function(result) {
                                    let my_phone = result.data;
                                    self.contacts.push({
                                        mail: my_email,
                                        name: my_name,
                                        phone: my_phone

                                })
                           })
                           // console.log(m);
                           // console.log(my_name);
                       })
               });



       }

   }

});
