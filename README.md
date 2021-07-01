# Curso de Javascript Engine (v8) y el Navegador
## Introduction
En este repositorio encontrarás mi práctica personal durante el curso de Javascript Engine (v8) y el Navegador de [Platzi](https://platzi.com/clases/javascript-navegador/).
## Table of contents

* [Introduction](#introduction)
* [General info](#general-info)

## General info

El [motor v8](https://nodejs.dev/learn/the-v8-javascript-engine) es el que permite la ejecucion de Javascript en el navegador de Chrome, que en este caso es el navegador que he utilizado a la hora de hacer los ejercicios. Cada navegador tiene su propio motor, que practicamente es el encargado de proveer a Javascript del entorno de ejecucion en tiempo real. 

Los ejercicios que se encuentran en el archivo _ejemplo.js_ es la práctica personal que realicé durante el curso. Su sintáxis funciona directamente en la consola de nuestro navegador. 

Las funciones que se encuentran en dicho archivo, son ejemplos que buscan explicar el significado de algunos de los temas vistos durante el curso, como son:
* Hoisting - Comportamiento por defecto de JS, que permite utilizar las variables antes de ser declaradas, puesto que las mueve al principio de su scope o ambito.
* Memory heap - Es el espacio que Javascript utilizara para almacenar todas las estructuras de datos (objetos, arrays, funciones, etc) no primitivas que vayan siendo declaradas.
* Call stack - Lugar donde se almacenan todas las llamadas de funciones dentro de nuestro codigo. Opera bajo el principio ***LIFO***(Last In, First Out).
* Garbage collection - Encargado de gestionar el almacenamiento en memoria de nuestro codigo, liberando el espacio de aquellos objetos que ya no se estan usando en el programa.
  * Mark - El recolector encuentra todos los objetos inalcanzables, es decir, aquellos que cuentan con cero referencias de otros objetos dentro de un mismo codigo.
  * Sweep - Elimina todos los objetos encontrados en el paso anterior.
* Js runtime - Tiempo de ejecucion de procesos que corre Javascript; puede ser:
  * Síncrono - Estructura de monohilo, en el que solo se puede ejecutar un proceso a la vez, en el orden en que aparecen en nuestro codigo.
  * Asíncrono - Permite la ejecucion en paralelo de otros procesos, sin afectar el hilo principal de ejecucion (*callbacks*, *promises*, and *async/await*).
