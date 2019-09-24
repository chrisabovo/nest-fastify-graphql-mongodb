export class AppServiceMock {
  public async getHello(): Promise<any> {
    return 'Hello World - Mocked!';
  }
}
