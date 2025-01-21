# Técnologías utilizadas

- NestJS: Es un framework backend basado en Node.js que utiliza TypeScript de manera nativa y que su diseño modular y estructurado está inspirado en Angular.
- PrismaJS: Es un ORM (Object-Relational Mapping) para Node.js y TypeScript que permite interactuar con la base de datos de manera sencilla y segura.

# Pasos para ejecutar el proyecto

## 1. Base de datos

Para este proyecto se utilizó una base de datos no relacional, específicamente MongoDB. Para poder ejecutar el proyecto es necesario tener instalado MongoDB en el equipo.

De acuerdo a los requerimientos de la prueba técnica, se estructuró una colección llamada `ordenes`, que almacena los datos de las órdenes y sus productos asociados.

La estructura de la colección es la siguiente:

```json
{
    "_id": "ObjectId",
    "direccion_recoleccion": "String",
    "fecha_programada": "Date",
    "nombres": "String",
    "apeliidos": "String",
    "correo_electronico": "String",
    "telefono": "String",
    "direccion_destinarario": "String",
    "departamento": "String",
    "municipio": "String",
    "punto_referencia": "String",
    "indicaciones": "String",
    "bultos": [
        {
            "contenido": "String",
            "peso_libras": "Number",
            "ancho_cm": "Number",
            "alto_cm": "Number",
            "largo_cm": "Number"
        }
    ]
}
```

## 2. Variables de entorno

Para poder ejecutar el proyecto es necesario crear un archivo `.env` en la raíz del proyecto con las siguientes variables de entorno:

```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/ordenes
```

## 3. Ejecutar el proyecto

1. Clonar el repositorio:
```bash
git clone
```

2. Instalar las dependencias:
```bash
npm install
```

3. Ejecutar el proyecto en modo desarrollo:
```bash
npm run start:dev
```
