var app = new Vue ({
    el: '#root',

    data: {
        email: [],
    },

    methods: {

    },

    mounted() {
        for (var i = 0; i < 10 ; i++) {
            let self = this;
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then(function(result) {
                    console.log(result);
                    self.email.push(result.data.response);
                });

        }

    }

});
