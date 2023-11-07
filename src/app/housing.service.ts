import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  protected housingLocationList: HousingLocation[] = [
    {
      id: 0,
      name: 'Creamy Strawberry Delight Crepe',
      dessertType: 'Crepe',
      toppings: 'Cream - Strawberries',
      photo: `https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=1978&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      availableUnits: 23,
    },
    {
      id: 1,
      name: 'Chocolate Dream Crepe with Vanilla Ice Cream',
      dessertType: 'Crepe',
      toppings: 'Cream - Chocolate syrup - Vanilla Ice Cream',
      photo: `https://images.unsplash.com/photo-1649873034148-7f06e5dafbd1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      availableUnits: 14,
    },
    {
      id: 2,
      name: 'Carrot Cake Heaven with Cream Cheese Frosting',
      dessertType: 'Cake',
      toppings: 'Icing - Nuts',
      photo: `https://images.unsplash.com/photo-1607269832078-1a3bd22a306d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      availableUnits: 17,
    },
    {
      id: 3,
      name: 'Chocolate-Kissed Red Velvet Cake',
      dessertType: 'Cake',
      toppings: 'Icing - Cocoa',
      photo: `https://images.unsplash.com/photo-1586788680434-30d324b2d46f?q=80&w=1902&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      availableUnits: 24,
    },
    {
      id: 4,
      name: 'Blueberry Bliss Cheesecake',
      dessertType: 'Cake',
      toppings: 'Jam - Blueberries',
      photo: `https://images.unsplash.com/photo-1567171466295-4afa63d45416?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      availableUnits: 20,
    },
    {
      id: 5,
      name: 'Glazed Lemon Burst Cookies',
      dessertType: 'Cookie',
      toppings: 'Sugar glass',
      photo: `https://images.unsplash.com/photo-1641557309674-771c5ec8dee5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      availableUnits: 12,
    },
    {
      id: 6,
      name: 'Gourmet Chocolate Chip Treats',
      dessertType: 'Cookie',
      toppings: 'Sprinkled lemon',
      photo: `https://images.unsplash.com/photo-1557310717-d6bea9f36682?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      availableUnits: 18,
    }
  ];

  getAllHousingLocations(): HousingLocation[] {
    return this.housingLocationList;
  }

  getHousingLocationById(id: number): HousingLocation | undefined {
    return this.housingLocationList.find(housingLocation => housingLocation.id === id);
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(`Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`);
  }
}

