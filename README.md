# Técnologías utilizadas

- NestJS: Es un framework backend basado en Node.js que utiliza TypeScript de manera nativa y que su diseño modular y estructurado está inspirado en Angular.
- PrismaJS: Es un ORM (Object-Relational Mapping) para Node.js y TypeScript que permite interactuar con la base de datos de manera sencilla y segura.

# Pasos para ejecutar el proyecto

## 1. Base de datos

Para este proyecto se utilizó una base de datos no relacional, específicamente MongoDB. Para poder ejecutar el proyecto es necesario tener instalado MongoDB en el equipo.

De acuerdo a los requerimientos de la prueba técnica, se estructuró una colección llamada `orders`, que almacena los datos de las órdenes y sus productos asociados.

La estructura de la colección es la siguiente:

```json
{
    "_id": "ObjectId",
    "collectionAddress": "String",
    "scheduledDate": "Date",
    "firstName": "String",
    "lastName": "String",
    "email": "String",
    "phone": "String",
    "recipientAddress": "String",
    "department": "String",
    "municipality": "String",
    "referencePoint": "String",
    "instructions": "String",
    "packages": [
        {
            "content": "String",
            "weightPounds": "String",
            "width": "String",
            "height": "String",
            "length": "String"
        }
    ]
}
```

## 2. Variables de entorno

Para poder ejecutar el proyecto es necesario crear un archivo `.env` en la raíz del proyecto con las siguientes variables de entorno:

```env
MONGODB_URI=mongodb://localhost:27017/database-boxful
```
### 3. Sincronizar la base de datos

Para sincronizar la base de datos con el modelo de datos, es necesario ejecutar el siguiente comando:

```bash
npx prisma db push
```
Este comando sincronizará el esquema de Prisma (schema.prisma) con la base de datos de MongoDB.

## 4. Ejecutar el proyecto

1. Clonar el repositorio:
```bash
git clone <URL_DEL_REPOSITORIO>
```

2. Instalar las dependencias:
```bash
npm install
```

3. Ejecutar el proyecto en modo desarrollo:
```bash
npm run start:dev
```

4. Abrir el navegador y acceder a la siguiente URL:
```
http://localhost:3050
```
Se establecio el puerto 3050 en `main.ts` para el servidor de NestJS para evitar conflictos con el puerto del proyecto frontend.