# توضیحات بخش‌های سه فایل پروژه

## 1. فایل `index.html` - ساختار اصلی صفحه
مشابه صورت تمرین
ورودی های برنامه :
```html
<div class="input-box">
  <label for="fee">قیمت واحد</label>
  <input type="number" id="fee" placeholder="قیمت واحد (مثال: 20)">
</div>
```
 نتایج و فرمول های ما :
```html
<formula evaluator="count * fee - discount"></formula>
```
از این ویژگی evaluator برای محاسبه استفاده کردیم 
## 2. فایل `styles.css` - قالب بندی صفحه
در فایل css هم ریسپانسیو بودن با flex grid هندل شده است و ظاهری شکیل دادیم مثلا در این بخش :
 ```css
@media (max-width: 600px) {
    .input-group {
        flex-direction: column;
    }
}
```
## 2. فایل `script.js` - تنظیم عملکرد صفحه
سعی بر رعایت شی گرایی شده و کلاس با تمام توابعش ساخته شده

 ```js
class FormulaCalculator {
  constructor() {
    this.formulas = document.querySelectorAll('formula'); // انتخاب تمام فرمول‌ها
    this.inputs = document.querySelectorAll('input[type="number"]'); // انتخاب ورودی‌ها
    this.ids = Array.from(this.inputs).map(input => input.id); // استخراج آیدی ها
  }
```
پیاده سازی اولیه :
 ```js
initialize() {
        this.inputs.forEach(input => {
            input.addEventListener('input', () => this.calculate());
        });
        this.calculate();
    }
```

    
در این توابع هم ارزیابی و محاسبه کردیم فرمول ها رو :
 ```js
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
```
