var app = new Vue ({
    el: '#root',

    data: {
        check: false,
        email: [],
        // email: false,
    },

    methods: {

    },

    mounted() {
        for (var i = 0; i < 10 ; i++) {

            
            if (i == 9 ){
                this.check = true;
            }

            let self = this;
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(function(result) {
                console.log(result);
                self.email.push(result.data.response);
            });
        }


    }

});
