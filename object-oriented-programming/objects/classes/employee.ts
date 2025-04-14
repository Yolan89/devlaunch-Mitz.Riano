class Employee {
    constructor(public _firsName: string,
        public _lastName: string,
        private _salary: number,
    ) {
        this._firsName = _firsName
        this._lastName = _lastName
        this._salary = _salary
    }

    set salary(salary: number) {
        if (salary > 0) {
            this._salary = salary
        }

    }

    get salary() {
        return this._salary

    }

    giveRaise(extra:number){
        const newSalary = this._salary + extra
        this._salary = newSalary
        return newSalary
    }
}

const e1 = new Employee('Mitz', 'Riaño', 18000)
console.log(e1.giveRaise(3000))