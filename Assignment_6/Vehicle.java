// Base Vehicle class
class Vehicle {
    public void forward() {
        System.out.println("Vehicle is moving forward.");
    }

    public void reverse() {
        System.out.println("Vehicle is reversing.");
    }
}

// SUV class overrides Vehicle methods
class SUV extends Vehicle {
    @Override
    public void forward() {
        System.out.println("SUV is moving forward with off-road capability.");
    }

    @Override
    public void reverse() {
        System.out.println("SUV is reversing using rear view camera.");
    }
}

// SportsCar class overrides Vehicle methods
class SportsCar extends Vehicle {
    @Override
    public void forward() {
        System.out.println("SportsCar is moving forward at high speed.");
    }

    @Override
    public void reverse() {
        System.out.println("SportsCar is reversing with performance tuning.");
    }
}

// Hybrid class overrides Vehicle methods
class Hybrid extends Vehicle {
    @Override
    public void forward() {
        System.out.println("Hybrid is moving forward using gas or electric power.");
    }

    @Override
    public void reverse() {
        System.out.println("Hybrid is reversing with energy regeneration.");
    }
}

// Main class to test the functionality
class VehicleMove {
    public static void main(String[] args) {
        Vehicle suv = new SUV();
        Vehicle sports = new SportsCar();
        Vehicle hybrid = new Hybrid();

        suv.forward();
        suv.reverse();

        sports.forward();
        sports.reverse();

        hybrid.forward();
        hybrid.reverse();
    }
}
