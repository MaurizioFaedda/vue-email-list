var app = new Vue ({
    el: '#root',

    data: {
        contacts: [],
        // email: false,
    },

    methods: {

    },

    mounted() {
        for (var i = 0; i < 1 ; i++) {

            let self = this;
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(function(result) {

                let email_corrente = result.data.response;
                self.contacts.push({
                    email: email_corrente
                })
            });


        }

        for (var i = 0; i < 1 ; i++) {

            let self = this;
            axios.get('https://flynn.boolean.careers/exercises/api/random/name')
            .then(function(result) {

                let nome_corrente = result.data.response;
                self.contacts[0].name = nome_corrente;
            });


        }


    }

});
