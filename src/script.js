class FormulaCalculator {
    constructor() {
        this.formulas = document.querySelectorAll('formula');
        this.inputs = document.querySelectorAll('input[type="number"]');
        this.ids = Array.from(this.inputs).map(input => input.id);
        this.initialize();
    }

    initialize() {
        this.inputs.forEach(input => {
            input.addEventListener('input', () => this.calculate());
        });
        this.calculate();
    }

    calculate() {
        this.formulas.forEach(formula => {
            try {
                const evaluator = formula.getAttribute('evaluator');
                formula.textContent = this.evaluateFormula(evaluator);
            } catch (e) {
                formula.textContent = 'فرمول نامعتبر';
            }
        });
    }

    evaluateFormula(evaluator) {
        const values = {};
        for (const id of this.ids) {
            const input = document.getElementById(id);
            const value = parseFloat(input.value);
            if (isNaN(value)) throw new Error('ورودی نامعتبر');
            values[id] = value;
        }

        const expression = evaluator.replace(/\b[a-zA-Z_]+\b/g, match => values[match]);
        const result = eval(expression);
        return result.toFixed(2);
    }
}

new FormulaCalculator();