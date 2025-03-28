# توضیحات کامل بخش‌های سه فایل پروژه

## 1. فایل `index.html` - ساختار اصلی صفحه
ورودی های برنامه :
<div class="input-box">
  <label for="fee">قیمت واحد</label>
  <input type="number" id="fee" placeholder="قیمت واحد (مثال: 20)">
</div>
نتایج و فرمول های ما :
<formula evaluator="count * fee - discount"></formula>
از این ویژگی evaluator برای محاسبه استفاده کردیم 
در فایل css هم ریسپانسیو بودن با flex grid هندل شده است و ظاهری شکیل دادیم.
class FormulaCalculator {
  constructor() {
    this.formulas = document.querySelectorAll('formula'); // انتخاب تمام فرمول‌ها
    this.inputs = document.querySelectorAll('input[type="number"]'); // انتخاب ورودی‌ها
    this.ids = Array.from(this.inputs).map(input => input.id); // استخراج idها
  }
