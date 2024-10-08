// Entry
class Entry {
    constructor(date, amount, description) {
        this.date = date;
        this.amount = amount;
        this.description = description;

    }
    getFormattedAmount(){
        return `${this.amount} €`
    }
}

// Income
class Income extends Entry {
    constructor(date, amount, description) {
       super(date)
        this.amount = amount;
        this.description = description;
        this.type = "income";
    }
}

// Expense

class Expense extends Entry {
    constructor(date, amount, description, paid) {
     super(date)
        this.amount = amount;
        this.description = description;
        this.paid = paid;
        this.type = "expense";
    }
    getFormattedAmount() {
        return '-'+ this.amount + ' €' ;
    }
}

// Budget
class Budget {
    constructor(){
        this.entries = [];
    }
      addEntry(newEntry){
        this.entries.push(newEntry);

      }
      getCurrentBalance (){
        if (this.entries.length === 0) {
            return 0;
        }

        let totalIncome = 0;
        let totalExpense = 0;

        this.entries.forEach(function(entry) {
            if (entry.type === "income") {
                totalIncome += entry.amount
            } else if (entry.type === "expense") {
                totalExpense += entry.amount;
            }

            
        });

        let balance = totalIncome - totalExpense;
            
        return balance;
    
    }

    getFormattedEntries() {

        let formatedARR =[];
        this.entries.forEach(function(entry) {
            if (entry.type === "income") {
                formatedARR.push(`${entry.date} | ${entry.description} | ${entry.amount} €`)
            } else {
                formatedARR.push(`${entry.date} | ${entry.description} | -${entry.amount} €`)
            }
        });
        //console.log(formatedARR)
        return formatedARR;
    };

        

}

