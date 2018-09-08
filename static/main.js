class Calendar {
    constructor() {
        this.month = 9;
        this.year = 2018;
    }

    getCurrentModel() {
        const curDate = this._getFirstMonday();
        const model = [];
        let current;
        do {
            if (curDate.getDay()===1){
                current = [];
                model.push(current);
            }
            current.push({
                dayOfWeek: curDate.getDay(),
                day: curDate.getDate(),
                month: curDate.getMonth(),
                date: new Date(curDate)
            });
            curDate.setDate(curDate.getDate()+1);
        }
        while (curDate.getMonth() === this.month || curDate.getDay() !== 1)
        return model;
    }

    _getFirstMonday() {
        let d = new Date(this.year, this.month, 1);
        const dayOfWeek = d.getDay();
        while (dayOfWeek !== 1) {
            d.setDate(d.getDate() - 1);
        }
        return d;
    }
}

let calendar = new Calendar();
console.log(calendar.getCurrentModel());