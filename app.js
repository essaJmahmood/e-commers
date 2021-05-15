const dash={
    data(){
        return{

            label :'',
            displayIn:1,
            player_one_color: "#ffffff",
            player_two_color: "#000000",
            rows:[
                {index: 8},
                {index: 7},
                {index: 6},
                {index: 5},
                {index: 4},
                {index: 3},
                {index: 2},
                {index: 1}
            ],
            cols:[
                {letter:'A', index: 1},
                {letter:'B', index: 2},
                {letter:'C', index: 3},
                {letter:'D', index: 4},
                {letter:'E', index: 5},
                {letter:'F', index: 6},
                {letter:'G', index: 7},
                {letter:'H', index: 8}
            ],
        }
    },
    methods: 
    {
        changePlayerOnecolor(){
            element = document.getElementsByClassName('playerOneColorPicker')[0].value;
            this.player_one_color = element;
        },
        changePlayerTwocolor()
        {
            element = document.getElementsByClassName('playerTwoColorPicker')[0].value;
            this.player_two_color = element;
        },
        reverseboard()
        {
            this.cols = this.cols.reverse();
            this.rows = this.rows.reverse();
            if (this.displayIn == 1) {
                this.displayIn = 8;
            } else {
                this.displayIn = 1;    
            }
            this.label ='';
            
            
        },
        diplayLabel(letter,index)
        {
            this.label ='';
            this.label += letter;
            this.label += index;
        }

    }
}
Vue.createApp(dash).mount('#container')