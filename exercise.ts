enum CAR_COLOR{
    RED = "red",
    GREEN = "green",
    BLUE = "blue",
}

class Mercedes extends Car {
    private color: CAR_COLOR = "" as CAR_COLOR;

    setColor(color: CAR_COLOR): void{
        this.color=color
    }

   getColor(): CAR_COLOR
    }
}
const car = new Car();
car.setType(CAR_TYPES.SEDAN)

