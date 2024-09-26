// Clase para representar una solicitud HTTP
class HttpRequest {
  private url: string;
  private method: string;
  private headers: { [key: string]: string };
  private body?: string;

  constructor(builder: HttpRequestBuilder) {
    this.url = builder.url;
    this.method = builder.method;
    this.headers = builder.headers;
    this.body = builder.body;
  }

  public send(): void {
    console.log(
      `Enviando solicitud ${this.method} a ${
        this.url
      } con headers: ${JSON.stringify(this.headers)} y body: ${this.body}`
    );
  }
}

// Builder para construir la solicitud HTTP
class HttpRequestBuilder {
  public url: string;
  public method: string = "GET";
  public headers: { [key: string]: string } = {};
  public body?: string;

  constructor(url: string) {
    this.url = url;
  }

  public setMethod(method: string): HttpRequestBuilder {
    this.method = method;
    return this;
  }

  public setHeader(key: string, value: string): HttpRequestBuilder {
    this.headers[key] = value;
    return this;
  }

  public setBody(body: string): HttpRequestBuilder {
    this.body = body;
    return this;
  }

  public build(): HttpRequest {
    return new HttpRequest(this);
  }
}

// Uso del patrón Builder

// Crear una solicitud GET básica
const request1 = new HttpRequestBuilder(
  "https://api.example.com/resource"
).build();
request1.send(); // Enviando solicitud GET a https://api.example.com/resource con headers: {} y body: undefined

// Crear una solicitud POST con headers y body
const request2 = new HttpRequestBuilder("https://api.example.com/resource")
  .setMethod("POST")
  .setHeader("Content-Type", "application/json")
  .setHeader("Authorization", "Bearer token")
  .setBody(JSON.stringify({ data: "example" }))
  .build();

request2.send(); // Enviando solicitud POST a https://api.example.com/resource con headers y body
