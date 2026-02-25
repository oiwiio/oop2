import { Vehicle } from './vehicle';


export class Garage {
    private vehicles: Vehicle[] = [];
    
  
    addVehicle(vehicle: Vehicle): void {
        this.vehicles.push(vehicle);
        console.log(`Транспорт добавлен в гараж. Всего транспорта: ${this.vehicles.length}`);
    }
    
  
    listVehicles(): void {
        if (this.vehicles.length === 0) {
            console.log("Гараж пуст");
            return;
        }
        
        console.log("\n=== Список транспортных средств в гараже ===");
        this.vehicles.forEach((vehicle, index) => {
            console.log(`${index + 1}. ${vehicle.getInfo()}`);
        });
        console.log("===========================================\n");
    }
    
    
    findVehicleById(id: number): Vehicle | undefined {
        return this.vehicles.find(vehicle => vehicle.id === id);
    }
}