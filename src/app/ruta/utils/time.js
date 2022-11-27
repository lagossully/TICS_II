

export function FormatHour(value){
    value.length ===  3 ? value = value[0]+":"+value[1]+value[2] :
    value = value[0]+value[1]+":"+value[2]+value[3];
    return value;
}
