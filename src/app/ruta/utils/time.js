

export function FormatHour(value){
    value.length ===  3 ? value = value[0]+":"+value[1]+value[2] :
    value = value[0]+value[1]+":"+value[2]+value[3];
    return value;
}

export function ExactDay(value){
    let dayName = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
    return dayName[value];
}
