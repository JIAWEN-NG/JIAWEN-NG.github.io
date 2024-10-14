// create vue app

const main = Vue.createApp({  
    data (){
        return {
            greeting: 'Hello World!',
            fullname: 'John Doe',
            pet: "<p style='color: blue'> Sweetie </p>",
            // Existing fruits in the basket
            fruits : [
                'Apple',
                'Orange',
                'Pear'
            ],
            add_fruit_name: 'new fruit name',
            remove_fruit_name: 'fruit name to remove',
            news_url: 'https://www.bbc.com/news'
    
        }
    } ,
    //business logic
    methods: {
        add_fruit() {
            // // YOUR CODE GOES HERE
            // console.log("=== [START] add_fruit() ===");
            // let add_fruit_name = document.getElementById('add_fruit_name').value;
            // console.log(fruit);
        
            // let ul = document.getElementById('fruits');
        
            // let li = document.createElement('li');
            // li_text = document.createTextNode(fruit);
            // li.appendChild(li_text);
            // ul.appendChild(li);
        
            // // fruits.push(fruit);
            // // console.log(fruits);
            // console.log("=== [END] add_fruit() ===");
            // fruit = document.getElementById('add_fruit_name').value = '';\
            console.log("=== [START] add_fruit() ===");
            //go data sections and add add_fruit_name to fruits array
            
            // to accesss add_fruit_name (data section), use 'this'
            console.log(this.add_fruit_name);
            // add the new fruit to the fruits array using push
            this.fruits.push(this.add_fruit_name);
            this.add_fruit_name = '';

            //backgroud
            //Vue's abstraction layer recoginizes the change in date value of the fruits array
           

        },
        remove_fruit() {
            // YOUR CODE GOES HERE
            console.log("=== [START] remove_fruit() ===");
            // this.fruits.splice(this.remove_fruit_name,1);
            this.remove_fruit_name_fruit_name = '';

            //Given an array it finds the a given element and return the index of thet item [0 ot n-1]
            let index = this.fruits.indexOf(this.remove_fruit_name);
            if(index >= 0){
                //remove the fruit from the array
                this.fruits.splice(index)
            }
            this.remove_fruit_name_fruit_name = '';
        
        }
    } 
});

//link vue app to html
main.mount('#main');



// Existing fruits in the basket
let fruits = [
    'Apple',
    'Orange',
    'Pear'
];




