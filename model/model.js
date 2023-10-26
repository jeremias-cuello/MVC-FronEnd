class Person{
    constructor(nameParam, birthParam){
        this.name = nameParam;
        this.birth = birthParam;
    }

    get age() {
        const dateCurr = new Date();
        dateCurr.setHours(0);
        dateCurr.setMinutes(0);
        dateCurr.setSeconds(0);
        dateCurr.setMilliseconds(0);

        const dateBirth = new Date(this.birth);
        dateBirth.setDate(dateBirth.getDate() + 1);
        dateBirth.setHours(0);
        dateBirth.setMinutes(0);
        dateBirth.setSeconds(0);
        dateBirth.setMilliseconds(0);

        const age = dateCurr.getFullYear() - dateBirth.getFullYear();

        dateCurr.setFullYear(0);
        dateBirth.setFullYear(0);

        return dateCurr >= dateBirth ? age : age - 1;
    }

    saludar = function(){
        return `Hola ${this.name}!`;
    }

}

export { Person };
