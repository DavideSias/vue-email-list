new Vue({
    el: '#app',
    data: {
        arrMails: [],
    },

    // Alternativa funzione da attaccare al click di un bottone
    // methods: {
    //     generateMails(){
    //         this.arrMails = [];
    //         for(let i = 0; i < 10; i++){
    //             axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
    //             .then(axiosResponse => {
    //                 this.arrMails.push(axiosResponse.data.response);
    //             })
    //         }
    //         console.log(this.arrMails);
    //     },
      
    // },

    //funzione per generare automaticamente le mail
    created() {
            this.arrMails = [];
            for(let i = 0; i < 10; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then(axiosResponse => {
                    this.arrMails.push(axiosResponse.data.response);
                })
            }
            console.log(this.arrMails);
    },
})