class DogFood{
    constructor(){
        this.image = loadImage('milk.png');
        this.foodStock = 0;
        database = firebase.database();
    }
    getFoodStock(database){function feed() {
        lastfed = database.ref('lastfed');
    }}
    updateFoodStock(foodStock){
        this.foodStock = foodStock;
    }
    deductFood(){
        if(this.foodStock > 0){
            this.foodStock -= 1;
        }
        
    }
    getFoodStock(){
    return this.foodStock;
    }
  

    display(){
        var x = 50, y = 150;
        imageMode(CENTER);
        // image(this.image, 50, 150, 75, 75);
        if(this.foodStock !== 0){
            for(var i = 0; i <= this.foodStock; i++){
                if(i % 10 === 0){
                   x = 75;
                   y += 25;
                }
                image(this.image, x, y, 100, 100);
                x += 25;
            }
        }
        lastfed = database.ref('lastfed');
        lastfed.on("value", function(data){lastfed = data.val();})

        feedFood = createButton('Feed Food')
        feedFood.position(500,475)

        addFood = createButton('Add Food')
        addFood.position(750,475)

        addFood.mousePressed(function(){
            foodS++;
            foodStock++;
            database.ref('/').update({Food: foodS});
            dog.addImage(dogImg);
        })

        feedFood.mousePressed(function(){
            foodS--;
            foodStock--;
            if(foodS <= 0){
                foodS = 0;
            }
            dog.addImage(dogImg1);
            database.ref('/').update({Food: foodS})
            database.ref('/').update({lastfed: hour()})
        })
    }
}