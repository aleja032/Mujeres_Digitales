
/*Crea una función processEmployeeData que tome un objeto JSON que represente a un empleado (incluyendo nombre, edad, salario, y un arreglo de calificaciones de desempeño). La función debe:

Determinar si el empleado es elegible para un bono, que se otorga si el salario es menor o igual a $50,000.
Calcular el promedio de las calificaciones de desempeño.
Determinar el rango de desempeño basado en el promedio de calificaciones utilizando la siguiente escala:
A: 90-100
B: 80-89
C: 70-79
D: 60-69
F: 0-59
Devolver un nuevo objeto JSON que incluya el nombre del empleado, si es elegible para el bono, su promedio de calificaciones, y su rango de desempeño.
Requisitos:

La función debe usar condicionales para determinar la elegibilidad para el bono y el rango de desempeño.
La función debe recorrer el arreglo de calificaciones para calcular el promedio.
El resultado debe ser un objeto JSON bien formateado.*/

function rangoDesempeño(average) {
    if (average >= 90) return "A";
    else if (average >= 80) return "B";
    else if (average >= 70) return "C";
    else if (average >= 60) return "D";
    else return "F";
}
function processEmployeeData(person) {
    let message = "", average = 0;

    // Verificar elegibilidad para el bono
    if (person.salary <= 50000) {
        message = "Felicitaciones, eres beneficiario de un bono especial de la empresa debido a tus ingresos.";
    } else {
        message = "No eres elegible para el bono.";
    }

    // Calcular el promedio de calificaciones
    for (let i = 0; i < person.calificaciones.length; i++) {
        average += person.calificaciones[i];
    }
    average /= person.calificaciones.length;

    // Determinar el rango de desempeño
    const rango = rangoDesempeño(average);

    return {
        nombre: person.name,
        elegibleParaBono: message,
        promedioCalificaciones: average,
        rangoDesempeño: rango
    };
}
const person = {
    name: "Kevin Stiven",
    age: 20,
    salary: 70000,
    grades: [20, 10, 40, 90, 30]
};

console.log(processEmployeeData(person));