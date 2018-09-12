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
            if (curDate.getDay() === 1) {
                current = [];
                model.push(current);
            }
            current.push({
                dayOfWeek: curDate.getDay(),
                day: curDate.getDate(),
                month: curDate.getMonth(),
                date: new Date(curDate)
            });
            curDate.setDate(curDate.getDate() + 1);
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

let popover = null;
let activeCell = null;
document.querySelector('.calendar_body').addEventListener('click', e => {
    if (activeCell){
        activeCell.classList.remove('calendar_cell-active');
    }

    activeCell = e.target;
    while (!activeCell.matches('.calendar_cell')) {
        if (activeCell === document.body) {
            return;
        }
        activeCell = activeCell.parentNode;
    }

    activeCell.classList.add('calendar_cell-active');

    if (popover && popover.parentNode) {
        popover.parentNode.removeChild(popover);
    }
    popover = document.createElement(`div`);
    popover.innerHTML = `<div class="calendar_popover calendar_popover-lt" style="left: ${e.clientX}px; top:${e.clientY}px">
                <form>
                    <div>
                        <input name="name" type="text"/>
                    </div>
                    <div>
                        <input name="name1" type="text"/>
                    </div>
                    <div>
                        <input name="name2" type="text"/>
                    </div>
                    <button>Сохранить</button>
                </form>
            </div>`;
    popover = popover.firstChild;


    document.body.appendChild(popover);
});
