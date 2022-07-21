# Requisitos

## Requisitos Obrigatórios

### 01 - Crie a interface `Model` genérica

Crie a interface `Model`, que será usada para a conexão com o banco de dados. Ela deverá ter, pelo menos, as funções `create()`, `read()`, `readOne()`, `update()` e `delete()`.

Por ser genérica, nossa interface deverá receber um tipo `T` qualquer, e ela deve esperar, em cada função, as seguintes especificações:
 - `create()`: deve receber um objeto do tipo `T`e retornar uma Promise do tipo `T`.
 - `read()`: deve retornar uma Promise contendo um array de objetos do tipo `T`.
 - `readOne()`: deve receber uma string e retornar uma Promise do tipo `T` ou nula.
 - `update()`: deve receber uma string e um objeto do tipo `T` e retornar uma Promise do tipo `T` ou nula.
 - `delete()`: deve receber uma string e retornar uma Promise do tipo `T` ou nula.
 - O arquivo deve ficar no diretório `/src/interfaces/` e  ter o nome de `ModelInterface.ts`.
 - A interface deve ser exportada com o nome de `Model` e não deve ser exportada de forma padrão.

<details>
  <summary>Será verificado se:</summary>

 - Existe a interface Model;
 - A interface Model possui todas as funções solicitadas;
 - A interface Model pode ser implementada com qualquer tipo;
 - A interface está no local correto, com o nome correto e com a forma de exportação correta;

</details>

### 02 - Crie a interface `Vehicle` genérica

Crie a interface `Vehicle`, que será usada para criarmos nossos tipos de carro, moto e caminhão.
Ela deverá ter todos os atributos comuns de todos os veículos que listaremos aqui. São eles:

 | Atributo | Descrição |
 | :-------: | :-------- |
 | `model`   | Marca e/ou modelo do veículo. Deve ser uma string com, pelo menos, 3 caracteres |
 | `year`    | Ano de fabricação do veículo. Deve ser maior ou igual a 1900, porém menor ou igual a 2022 |
 | `color`   | Cor principal do veículo. Deve ser uma string com, pelo menos, 3 caracteres |
 | `status`  | Status que define se um veículo pode ou não ser comprado. Deve receber valores booleanos e deve ser opcional |
 | `buyValue` | Valor de compra do veículo. Deve receber apenas números inteiros |

 - O arquivo deve ficar no diretório `/src/interfaces/` e ter o nome de `VehicleInterface.ts`.
 - A interface deve ser exportada com o nome de `Vehicle` e **não deve** ser exportada de forma padrão.

<details>
  <summary>Será verificado se:</summary>

  - A interface Vehicle existe;
  - A interface possui os atributos solicitados;
  - A interface está no local correto, com o nome correto e com a forma de exportação correta.

</details>

### 03 - Crie a interface `Car` a partir da Interface `Vehicle`

Crie a interface `Car`, de modo que ela possua todos os atributos da interface `Vehicle` e, também, os atributos:

 | Atributo  | Descrição |
 | :--------: | :-------- |
 | `doorsQty` | Quantidade de portas de um carro. Deve ser maior ou igual a 2 e menor ou igual a 4 |
 | `seatsQty` | Quantidade de assentos disponíveis no carro. Deve ser maior ou igual a 2 e menor ou igual a 7 |
 
 - O arquivo deve ficar no diretório `/src/interfaces/` e  ter o nome de `CarInterface.ts`.
 - A interface deve ser exportada com o nome de `Car` e não deve ser exportada de forma padrão.

<details>
  <summary>Será verificado se:</summary>

  - A interface `Car` estende a interface `Vehicle`;
  - É possível criar um objeto do tipo `Car`;
  - A interface `Car` possui as propriedades `doorsQty` e `seatsQty`;
  - A interface está com local, nome e forma de exportação correta.

</details>


### 04 - Crie uma rota para o endpoint `/cars` onde seja possível cadastrar um novo carro

Crie uma rota que receba uma requisição `POST` para cadastrar um veículo do tipo carro.

<details>
  <summary>Será verificado se:</summary>

  - A rota retorna erro `400` caso a requisição receba um objeto vazio;
  - A rota retorna erro `400` ao tentar criar um carro com quantidade de assentos inferior a 2;
  - A rota retorna erro `400` ao tentar criar um carro com quantidade de portas inferior a 2;
  - A rota retorna erro `400` ao tentar criar um carro sem `model`, `year`, `color` e `buyValue`;
  - A rota retorna erro `400` ao tentar criar um carro sem `doorsQty` e `seatsQty`;
  - Não é possível criar um carro se os atributos `model`, `year`, `color`, `buyValue`, `doorsQty` e `seatsQty` estiverem com tipos errados;
  - É possível criar um carro se todos os parâmetros forem passados corretamente;
  - Sua API deve responder com status http `201` e o seguinte body:
  ```JSON
    _id: "4edd40c86762e0fb12000003",
    model: "Ferrari Maranello",
    year: 1963,
    color: "red",
    buyValue: 3500000,
    seatsQty: 2,
    doorsQty: 2
  ```

</details>

### 05 - Escreva testes para cobrir 15% da camada de Model

Escreva testes que cubram, pelo menos, 15% da camada Model. Seus arquivos de teste deverão estar na pasta `src/tests/unit/model`.

<details>
  <summary>Será verificado se:</summary>

  - A cobertura total das linhas dos arquivos na pasta `models` é maior ou igual a 15%.

</details>

### 06 - Escreva testes para cobrir 15% da camada de Service

Escreva testes que cubram, pelo menos, 15% da camada Service. Seus arquivos de teste deverão estar na pasta `src/tests/unit/services`.

<details>
  <summary>Será verificado se:</summary>

  - A cobertura total das linhas dos arquivos na pasta `services` é maior ou igual a 15%.

</details>

### 07 - Escreva testes para cobrir 15% da camada de Controller

Escreva testes que cubram, pelo menos, 15% da camada Controller. Seus arquivos de teste deverão estar na pasta `src/tests/unit/controllers`.

<details>
  <summary>Será verificado se:</summary>
  
  - A cobertura total das linhas dos arquivos na pasta `controllers` é maior ou igual a 15%.

</details>

### 08 - Crie uma rota para o endpoint `/cars` onde seja possível listar todos os carros registrados

Crie uma rota que receba uma requisição `GET` para receber todos os veículos do tipo carro registrados no banco de dados.

<details>
  <summary>Será verificado se:</summary>

  - É possível listar os carros com sucesso;
  - Haverá retorno de uma lista vazia se não houver carros;
  - Sua API responderá com status http `200` em caso de sucesso.
  
</details>

### 09 - Crie uma rota para o endpoint `/cars/id` onde seja possível listar um único carro através do seu id

Crie uma rota que receba uma requisição `GET` para receber determinado veículo do tipo carro que possua o `id` passado como parâmetro na rota.

<details>
  <summary>Será verificado se:</summary>

  - É possível listar um carro com sucesso através do id;
  - Sua API responderá com status http `200` em caso de sucesso;
  - É disparado o erro `400` `Id must have 24 hexadecimal characters` caso o id possua menos que 24 caracteres;
  - É disparado o erro `404` `Object not found` caso o id possua 24 caracteres, mas seja inválido;
  
</details>

### 10 - Escreva testes para cobrir 30% da camada de Model

Escreva testes que cubram, pelo menos, 30% da camada Model. Seus arquivos de teste deverão estar na pasta `src/tests/unit/model`.

<details>
  <summary>Será verificado se:</summary>

  - A cobertura total das linhas dos arquivos na pasta `models` é maior ou igual a 30%.
  
</details>

### 11 - Escreva testes para cobrir 30% da camada de Service

Escreva testes que cubram, pelo menos, 30% da camada Service. Seus arquivos de teste deverão estar na pasta `src/tests/unit/services`.

<details>
  <summary>Será verificado se:</summary>

  - A cobertura total das linhas dos arquivos na pasta `services` é maior ou igual a 30%.
  
</details>

### 12 - Escreva testes para cobrir 30% da camada de Controller

Escreva testes que cubram, pelo menos, 30% da camada Controller. Seus arquivos de teste deverão estar na pasta `src/tests/unit/controllers`.

<details>
  <summary>Será verificado se:</summary>

  - A cobertura total das linhas dos arquivos na pasta `controllers` é maior ou igual a 30%.
  
</details>

### 13 - Crie uma rota para o endpoint `/cars/id`, onde é possível atualizar o registro de um carro através do seu id

Crie uma rota que receba uma requisição `PUT` para atualizar determinado veículo do tipo carro que possua o `id` passado como parâmetro na rota.

<details>
  <summary>Será verificado se:</summary>

  - É disparado o erro `404` `Object not found` caso o id possua 24 caracteres, mas seja inválido;
  - É disparado o erro `400` `Id must have 24 hexadecimal characters` caso o id possua menos que 24 caracteres;
  - É disparado o erro `400` caso o `body` esteja vazio;
  - Um carro é atualizado com sucesso;
  - Sua API responderá com status http `200` e o seguinte body, em caso de sucesso:
  ```JSON
    _id: "4edd40c86762e0fb12000003",
    model: "Fiat Uno",
    year: 1963,
    color: "blue",
    buyValue: 3500,
    seatsQty: 4,
    doorsQty: 4
  ```
  
</details>

### 14 - Escreva testes para cobrir 60% da camada de Model

Escreva testes que cubram, pelo menos, 60% da camada Model. Seus arquivos de teste deverão estar na pasta `src/tests/unit/model`.

<details>
  <summary>Será verificado se:</summary>

  - A cobertura total das linhas dos arquivos na pasta `models` é maior ou igual a 60%.
  
</details>

### 15 - Escreva testes para cobrir 60% da camada de Service

Escreva testes que cubram, pelo menos, 60% da camada Service. Seus arquivos de teste deverão estar na pasta `src/tests/unit/services`.

<details>
  <summary>Será verificado se:</summary>

  - A cobertura total das linhas dos arquivos na pasta `services` é maior ou igual a 60%.
  
</details>

### 16 - Escreva testes para cobrir 60% da camada de Controller

Escreva testes que cubram, pelo menos, 60% da camada Controller. Seus arquivos de teste deverão estar na pasta `src/tests/unit/controllers`.

<details>
  <summary>Será verificado se:</summary>

  - A cobertura total das linhas dos arquivos na pasta `controllers` é maior ou igual a 60%.
  
</details>

### 17 - Crie uma rota para o endpoint `/cars/id` para excluir os registros de um carro

Crie uma rota que receba uma requisição `DELETE` para excluir determinado veículo do tipo carro que possua o `id` passado como parâmetro na rota. 

<details>
  <summary>Será verificado se:</summary>

  - É disparado o erro `404` `Object not found` caso o id possua 24 caracteres, mas seja inválido;
  - É disparado o erro `400` `Id must have 24 hexadecimal characters` caso o id possua menos que 24 caracteres;
  - Um carro é removido com sucesso;
  - Sua API deve responder com status http `204` sem body;
  
</details>

## Requisitos Bônus

### 18 - Crie a interface `Motorcycle` a partir da Interface `Vehicle`

Crie a interface `Motorcycle`, de modo que ela possua todos os atributos da interface `Vehicle` e, também, os atributos:

 | Atributos        | Descrição |
 | :--------------: | :-------- |
 | `category`       | Categoria da moto. Deve poder ser **apenas** `Street`, `Custom` ou `Trail` |
 | `engineCapacity` | A capacidade do motor. Deve ser um valor inteiro positivo menor ou igual a 2500 |

 - O arquivo deve ficar no diretório `/src/interfaces/` e  ter o nome de `MotorcycleInterface.ts`.
 - A interface deve ser exportada com o nome de `Motorcycle` e não deve ser exportada de forma padrão.

<details>
  <summary>Será verificado se:</summary>

  - A interface `Motorcycle` estende a interface `Vehicle`;
  - É possível criar um objeto do tipo `Motorcycle`;
  - A interface `Motorcycle` possui as propriedades `category` e `engineCapacity`;
  - Não é possível criar um objeto do tipo `Motorcycle` com uma categoria errada;
  - A interface está com local, nome e forma de exportação correta.
  
</details>

### 19 - Crie uma rota para o endpoint `/motorcycles` onde seja possível cadastrar uma nova moto

Crie uma rota que receba uma requisição `POST` para cadastrar um veículo do tipo moto.

<details>
  <summary>Será verificado se:</summary>

  - A rota retorna erro `400` caso a requisição receba um objeto vazio;
  - A rota retorna erro `400` ao tentar criar uma moto com `category` diferente de `Street`, `Custom` ou `Trail`;
  - A rota retorna erro `400` ao tentar criar uma moto com `category` diferente de `string`;
  - A rota retorna erro `400` ao tentar criar uma moto com `engineCapacity` menor ou igual a zero;
  - A rota retorna erro `400` ao tentar criar uma moto com `engineCapacity` maior que 2500;
  - A rota retorna erro `400` ao tentar criar um moto sem `model`, `year`, `color` e `buyValue`;
  - A rota retorna erro `400` ao tentar criar um moto sem `category` e `engineCapacity`;
  - Não é possível criar uma moto se os atributos `model`, `year`, `color`, `buyValue`, `category` e `engineCapacity` estiverem com tipos errados;
  - É possível criar uma moto se todos os parâmetros forem passados corretamente;
  - Sua API responderá com status http `201` e o seguinte body:
  ```JSON
    _id: "4edd40c86762e0fb12000003",
    model: "Honda CG Titan 125",
    year: 1963,
    color: "red",
    buyValue: 3500,
    category: "Street",
    engineCapacity: 125
  ```
  
</details>

### 20 - Crie uma rota para o endpoint `/motorcycles` onde seja possível listar todas as motos registradas

Crie uma rota que receba uma requisição `GET` para receber todos os veículos do tipo moto registrados no banco de dados.

<details>
  <summary>Será verificado se:</summary>

  - É possível listar as motos com sucesso;
  - Haverá retorno de uma lista vazia se não houver motos;
  - Sua API responderá com status http `200`.
  
</details>

### 21 - Crie uma rota para o endpoint `/motorcycles/id` onde seja possível listar uma única moto através do seu id

Crie uma rota que receba uma requisição `GET` para receber determinado veículo do tipo moto que possua o `id` passado como parâmetro na rota.

<details>
  <summary>Será verificado se:</summary>

  - É possível listar uma moto com sucesso através do id;
  - Sua API responderá com status http `200` em caso de sucesso;
  - É disparado o erro `400` `Id must have 24 hexadecimal characters` caso o id possua menos que 24 caracteres;
  - É disparado o erro `404` `Object not found` caso o id possua 24 caracteres, mas seja inválido;
  
</details>

### 22 - Crie uma rota para o endpoint `/motorcycles/id` onde é possível atualizar o registro de uma moto através do seu id

Crie uma rota que receba uma requisição `PUT` para atualizar determinado veículo do tipo moto que possua o `id` passado como parâmetro na rota.

<details>
  <summary>Será verificado se:</summary>

  - É disparado o erro `404` `Object not found` caso o id possua 24 caracteres, mas seja inválido;
  - É disparado o erro `400` `Id must have 24 hexadecimal characters` caso o id possua menos que 24 caracteres;
  - É disparado o erro `400` caso o `body` esteja vazio;
  - Una moto é atualizada com sucesso;
  - Sua API responderá com status http `200` e o seguinte body, em caso de sucesso:
  ```JSON
    _id: "4edd40c86762e0fb12000003",
    model: "Honda CG Titan 125",
    year: 1963,
    color: "black",
    buyValue: 3500,
    category: "Street",
    engineCapacity: 125
  ```

</details>

### 23 - Crie uma rota para o endpoint `/motorcycles/id` para excluir os registros de uma moto

Crie uma rota que receba uma requisição `DELETE` para excluir determinado veículo do tipo moto que possua o `id` passado como parâmetro na rota.

<details>
  <summary>Será verificado se:</summary>

  - É disparado o erro `404` `Object not found` caso o id possua 24 caracteres, mas seja inválido;
  - É disparado o erro `400` `Id must have 24 hexadecimal characters` caso o id possua menos que 24 caracteres;
  - Uma moto é removida com sucesso;
  - Sua API responderá com status http `204` sem body, em caso de sucesso;

</details>

### 24 - Escreva testes para cobrir 90% da camada de Model

Escreva testes que cubram 90% da camada Model. Seus arquivos de teste deverão estar na pasta `src/tests/unit/models`.

<details>
  <summary>Será verificado se:</summary>

  - A cobertura total das linhas dos arquivos na pasta `models` é igual a 90%.
  
</details>

### 25 - Escreva testes para cobrir 90% da camada de Service

Escreva testes que cubram 90% da camada Service. Seus arquivos de teste deverão estar na pasta `src/tests/unit/services`.

<details>
  <summary>Será verificado se:</summary>

  - A cobertura total das linhas dos arquivos na pasta `services` é igual a 90%.
  
</details>

### 26 - Escreva testes para cobrir 90% da camada de Controller

Escreva testes que cubram 90% da camada Controller. Seus arquivos de teste deverão estar na pasta `src/tests/unit/controllers`.

<details>
  <summary>Será verificado se:</summary>

  - A cobertura total das linhas dos arquivos na pasta `controllers` é igual a 90%.
  
</details>

## Requisitos não avaliativos

### 27 - Escreva testes para cobrir 100% da camada de Model

Escreva testes que cubram 100% da camada Model. Seus arquivos de teste deverão estar na pasta `src/tests/unit/models`.

### 28 - Escreva testes para cobrir 100% da camada de service

Escreva testes que cubram 100% da camada Service. Seus arquivos de teste deverão estar na pasta `src/tests/unit/services`.

### 29 - Escreva testes para cobrir 100% da camada de controller

Escreva testes que cubram 100% da camada Controller. Seus arquivos de teste deverão estar na pasta `src/tests/unit/controllers`.
