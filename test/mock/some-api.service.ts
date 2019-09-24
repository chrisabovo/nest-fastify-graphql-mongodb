export class SomeAPIServiceMock {
  private static carsP = [];
  static setCarsResponse(cars) {
    this.carsP = cars;
  }
  public static get cars() {
    return this.carsP;
  }
  public async getCars(): Promise<any> {
    return SomeAPIServiceMock.cars;
  }
  public async postCar(car: any): Promise<any> {
    SomeAPIServiceMock.cars.push(car);
    return car;
  }
}
