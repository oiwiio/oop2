import { Car } from './car';
import { Motorcycle } from './motorcycle';
import { Garage } from './garage';


function main() {
    
    const garage = new Garage();
    
    
    const car1 = new Car("Toyota", 2020, "Camry");
    const car2 = new Car("BMW", 2022, "X5");
    const motorcycle1 = new Motorcycle("Harley-Davidson", 2021, "cruiser");
    const motorcycle2 = new Motorcycle("Yamaha", 2023, "sport");
    

    console.log("--- Добавление транспорта в гараж ---");
    garage.addVehicle(car1);
    garage.addVehicle(car2);
    garage.addVehicle(motorcycle1);
    garage.addVehicle(motorcycle2);
    
  
    garage.listVehicles();
    
 
    console.log("--- Поиск транспорта по ID ---");
    const searchId = car1.id; // Берем ID первого автомобиля
    const foundVehicle = garage.findVehicleById(searchId);
    
    if (foundVehicle) {
        console.log(`Найден транспорт: ${foundVehicle.getInfo()}`);
        
        
        console.log("\n--- Запуск двигателя ---");
        foundVehicle.startEngine();
    } else {
        console.log(`Транспорт с ID ${searchId} не найден`);
    }
    
    console.log("\n--- Поиск несуществующего транспорта ---");
    const notFound = garage.findVehicleById(999999);
    console.log(notFound ? "Найден" : "Транспорт не найден");
}


main();