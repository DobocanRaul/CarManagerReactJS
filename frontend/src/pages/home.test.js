// Test File for Home.js
import Home from './home';

describe(Home,()=>{
  it('should display the correct cars',()=>{
    const list = [
      {
        carId: 1,
        carName: "Toyota",
        carModel: "Corolla",
        carColor: "Black",
        carPrice: 10000
      },
    ];
    const result = Home({list});
    expect(list).toHaveLength(1);
    expect(result).toContain('Toyota');
    expect(result).toContain('Corolla');
    expect(result).toContain('Black');
    expect(result).toContain('10000');
  });
}

);