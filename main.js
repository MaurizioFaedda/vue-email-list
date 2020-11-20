var app = new Vue ({
    el: '#root',

    data: {

    },

    methods: {

    },

    mounted() {
        let self = this;
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(function(result) {
                console.log(result);
                console.log(result.data.response);
            });
    }

});
