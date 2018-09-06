class Calendar {
    constructor() {
        this.month = 9;
        this.year = 2018;
    }

    getCurrentModel() {

    }

    _getFirstMonday() {
        const d = new Date(this.year, this.month - 1, 1);
    }

    _getLastSunday() {
        const d = new Date(this.year, this.month, 1);
        d.setTime(d.getTime() - 1);
        d.setHours(0);
        d.setMinutes(0);
        d.setSeconds(0);
        d.setMilliseconds(0);

    }
}