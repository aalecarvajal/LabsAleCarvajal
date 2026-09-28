export function rubricPassFail(calificacion) {
    calificacion = Number(calificacion);

    if (calificacion >= 5) {
        return "Pass";
    } else {
        return "Fail";
    }


}