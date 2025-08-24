document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const heroSection = document.getElementById('heroSection');
    const calculatorSection = document.getElementById('calculatorSection');
    const aboutSection = document.getElementById('aboutSection');
    const contactSection = document.getElementById('contactSection');
    const calculatorSelect = document.getElementById('calculatorSelect');
    const calculatorPanel = document.getElementById('calculatorPanel');
    const guideSteps = document.getElementById('guideSteps');
    const calcTitle = document.getElementById('calcTitle');
    const calcIcon = document.getElementById('calcIcon');
    const getStartedBtn = document.getElementById('getStartedBtn');
    const learnMoreBtn = document.getElementById('learnMoreBtn');
    const aboutLink = document.getElementById('aboutLink');
    const contactLink = document.getElementById('contactLink');
    const homeLink = document.getElementById('homeLink');
    const aboutLinkFooter = document.getElementById('aboutLinkFooter');
    const contactLinkFooter = document.getElementById('contactLinkFooter');
    const contactForm = document.getElementById('contactForm');
    
    // Calculator templates
    const calculators = {
        basic: {
            title: 'Basic Math Calculator',
            icon: 'fa-plus',
            form: `
                <form id="basicCalcForm">
                    <div class="mb-3">
                        <label for="num1" class="form-label">First Number</label>
                        <input type="number" class="form-control" id="num1" placeholder="Enter first number" required>
                    </div>
                    <div class="mb-3">
                        <label for="operator" class="form-label">Operation</label>
                        <select class="form-select" id="operator">
                            <option value="+">Addition (+)</option>
                            <option value="-">Subtraction (-)</option>
                            <option value="*">Multiplication (×)</option>
                            <option value="/">Division (÷)</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="num2" class="form-label">Second Number</label>
                        <input type="number" class="form-control" id="num2" placeholder="Enter second number" required>
                    </div>
                    <button type="submit" class="btn btn-calculate">Calculate</button>
                </form>
                <div class="result-box" id="basicResult">
                    <p class="mb-0">Result will appear here</p>
                </div>
            `,
            guide: [
                'Enter the first number in the input field',
                'Select the operation you want to perform',
                'Enter the second number',
                'Click Calculate to see the result'
            ],
            init: function() {
                document.getElementById('basicCalcForm').addEventListener('submit', function(e) {
                    e.preventDefault();
                    const num1 = parseFloat(document.getElementById('num1').value);
                    const num2 = parseFloat(document.getElementById('num2').value);
                    const operator = document.getElementById('operator').value;
                    let result;
                    
                    switch(operator) {
                        case '+': result = num1 + num2; break;
                        case '-': result = num1 - num2; break;
                        case '*': result = num1 * num2; break;
                        case '/': result = num2 !== 0 ? num1 / num2 : 'Error: Division by zero'; break;
                    }
                    
                    document.getElementById('basicResult').innerHTML = 
                        `<p class="mb-0 result-value">${result}</p>`;
                });
            }
        },
        age: {
            title: 'Age Calculator',
            icon: 'fa-birthday-cake',
            form: `
                <form id="ageCalcForm">
                    <div class="mb-3">
                        <label for="dob" class="form-label">Date of Birth</label>
                        <input type="date" class="form-control" id="dob" required>
                    </div>
                    <button type="submit" class="btn btn-calculate">Calculate Age</button>
                </form>
                <div class="result-box" id="ageResult">
                    <p class="mb-0">Your age will appear here</p>
                </div>
            `,
            guide: [
                'Enter your date of birth in the date field',
                'Click Calculate Age to process',
                'View your exact age in years, months, and days',
                'See the countdown to your next birthday'
            ],
            init: function() {
                document.getElementById('ageCalcForm').addEventListener('submit', function(e) {
                    e.preventDefault();
                    const dob = new Date(document.getElementById('dob').value);
                    const today = new Date();
                    
                    let age = today.getFullYear() - dob.getFullYear();
                    const monthDiff = today.getMonth() - dob.getMonth();
                    
                    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
                        age--;
                    }
                    
                    // Calculate next birthday
                    const nextBirthday = new Date(today.getFullYear(), dob.getMonth(), dob.getDate());
                    if (today > nextBirthday) {
                        nextBirthday.setFullYear(today.getFullYear() + 1);
                    }
                    
                    const diffTime = nextBirthday - today;
                    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                    
                    document.getElementById('ageResult').innerHTML = 
                        `<p class="mb-0">You are <span class="result-value">${age}</span> years old</p>
                         <p class="mb-0">Next birthday in <span class="result-value">${diffDays}</span> days</p>`;
                });
            }
        },
        days: {
            title: 'Days Between Dates Calculator',
            icon: 'fa-calendar-alt',
            form: `
                <form id="daysCalcForm">
                    <div class="mb-3">
                        <label for="date1" class="form-label">Start Date</label>
                        <input type="date" class="form-control" id="date1" required>
                    </div>
                    <div class="mb-3">
                        <label for="date2" class="form-label">End Date</label>
                        <input type="date" class="form-control" id="date2" required>
                    </div>
                    <button type="submit" class="btn btn-calculate">Calculate Days</button>
                </form>
                <div class="result-box" id="daysResult">
                    <p class="mb-0">Days between dates will appear here</p>
                </div>
            `,
            guide: [
                'Enter the start date in the first date field',
                'Enter the end date in the second date field',
                'Click Calculate Days to process',
                'View the result in days, weeks, and months'
            ],
            init: function() {
                document.getElementById('daysCalcForm').addEventListener('submit', function(e) {
                    e.preventDefault();
                    const date1 = new Date(document.getElementById('date1').value);
                    const date2 = new Date(document.getElementById('date2').value);
                    
                    const diffTime = Math.abs(date2 - date1);
                    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                    const diffWeeks = Math.floor(diffDays / 7);
                    const diffMonths = Math.floor(diffDays / 30.44);
                    
                    document.getElementById('daysResult').innerHTML = 
                        `<p class="mb-0"><span class="result-value">${diffDays}</span> days</p>
                         <p class="mb-0"><span class="result-value">${diffWeeks}</span> weeks</p>
                         <p class="mb-0"><span class="result-value">${diffMonths}</span> months</p>`;
                });
            }
        },
        timezone: {
            title: 'Time Zone Converter',
            icon: 'fa-globe',
            form: `
                <form id="timezoneForm">
                    <div class="mb-3">
                        <label for="datetime" class="form-label">Date & Time</label>
                        <input type="datetime-local" class="form-control" id="datetime" required>
                    </div>
                    <div class="mb-3">
                        <label for="fromTZ" class="form-label">From Time Zone</label>
                        <select class="form-select" id="fromTZ">
                            <option value="America/New_York">Eastern Time (ET)</option>
                            <option value="America/Chicago">Central Time (CT)</option>
                            <option value="America/Denver">Mountain Time (MT)</option>
                            <option value="America/Los_Angeles">Pacific Time (PT)</option>
                            <option value="Europe/London">Greenwich Mean Time (GMT)</option>
                            <option value="Europe/Paris">Central European Time (CET)</option>
                            <option value="Asia/Tokyo">Japan Standard Time (JST)</option>
                            <option value="Australia/Sydney">Australian Eastern Time (AET)</option>
                            <option value="Asia/Karachi">Pakistan Standard Time (PKT)</option>
                            <option value="Asia/Kolkata">India Standard Time (IST)</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="toTZ" class="form-label">To Time Zone</label>
                        <select class="form-select" id="toTZ">
                            <option value="America/New_York">Eastern Time (ET)</option>
                            <option value="America/Chicago">Central Time (CT)</option>
                            <option value="America/Denver">Mountain Time (MT)</option>
                            <option value="America/Los_Angeles">Pacific Time (PT)</option>
                            <option value="Europe/London">Greenwich Mean Time (GMT)</option>
                            <option value="Europe/Paris">Central European Time (CET)</option>
                            <option value="Asia/Tokyo">Japan Standard Time (JST)</option>
                            <option value="Australia/Sydney">Australian Eastern Time (AET)</option>
                            <option value="Asia/Karachi">Pakistan Standard Time (PKT)</option>
                            <option value="Asia/Kolkata">India Standard Time (IST)</option>
                        </select>
                    </div>
                    <button type="submit" class="btn btn-calculate">Convert Time</button>
                </form>
                <div class="result-box" id="timezoneResult">
                    <p class="mb-0">Converted time will appear here</p>
                </div>
            `,
            guide: [
                'Enter the date and time you want to convert',
                'Select the original time zone',
                'Select the target time zone',
                'Click Convert Time to see the result'
            ],
            init: function() {
                document.getElementById('timezoneForm').addEventListener('submit', function(e) {
                    e.preventDefault();
                    const dateTime = document.getElementById('datetime').value;
                    const fromTZ = document.getElementById('fromTZ').value;
                    const toTZ = document.getElementById('toTZ').value;
                    
                    const options = {
                        timeZone: toTZ,
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                    };
                    
                    const date = new Date(dateTime);
                    const convertedTime = date.toLocaleString('en-US', options);
                    
                    document.getElementById('timezoneResult').innerHTML = 
                        `<p class="mb-0 result-value">${convertedTime}</p>`;
                });
            }
        },
        temperature: {
            title: 'Temperature Converter',
            icon: 'fa-thermometer-half',
            form: `
                <form id="tempForm">
                    <div class="mb-3">
                        <label for="temp" class="form-label">Temperature Value</label>
                        <input type="number" class="form-control" id="temp" placeholder="Enter temperature" required>
                    </div>
                    <div class="mb-3">
                        <label for="tempUnit" class="form-label">Temperature Unit</label>
                        <select class="form-select" id="tempUnit">
                            <option value="celsius">Celsius (°C)</option>
                            <option value="fahrenheit">Fahrenheit (°F)</option>
                            <option value="kelvin">Kelvin (K)</option>
                        </select>
                    </div>
                    <button type="submit" class="btn btn-calculate">Convert Temperature</button>
                </form>
                <div class="result-box" id="tempResult">
                    <p class="mb-0">Converted temperatures will appear here</p>
                </div>
            `,
            guide: [
                'Enter the temperature value you want to convert',
                'Select the unit of the temperature you entered',
                'Click Convert Temperature to process',
                'View the converted values in all units'
            ],
            init: function() {
                document.getElementById('tempForm').addEventListener('submit', function(e) {
                    e.preventDefault();
                    const temp = parseFloat(document.getElementById('temp').value);
                    const unit = document.getElementById('tempUnit').value;
                    
                    let celsius, fahrenheit, kelvin;
                    
                    if (unit === 'celsius') {
                        celsius = temp;
                        fahrenheit = (temp * 9/5) + 32;
                        kelvin = temp + 273.15;
                    } else if (unit === 'fahrenheit') {
                        celsius = (temp - 32) * 5/9;
                        fahrenheit = temp;
                        kelvin = celsius + 273.15;
                    } else {
                        celsius = temp - 273.15;
                        fahrenheit = (celsius * 9/5) + 32;
                        kelvin = temp;
                    }
                    
                    document.getElementById('tempResult').innerHTML = 
                        `<p class="mb-0"><span class="result-value">${celsius.toFixed(2)}</span> °C</p>
                         <p class="mb-0"><span class="result-value">${fahrenheit.toFixed(2)}</span> °F</p>
                         <p class="mb-0"><span class="result-value">${kelvin.toFixed(2)}</span> K</p>`;
                });
            }
        },
      gpa: {
    title: 'GPA / CGPA Calculator',
    icon: 'fa-graduation-cap',
    form: `
        <form id="gpaForm">
            <div id="subjectsContainer">
                <div class="subject-row mb-3">
                    <div class="row">
                        <!-- Subject Name -->
                        <div class="col-md-5 mb-2">
                            <label class="form-label">Subject Name</label>
                            <input type="text" class="form-control subject-name" placeholder="Subject name" required>
                        </div>

                        <!-- Grade -->
                        <div class="col-md-3 mb-2">
                            <label class="form-label">Grade</label>
                            <select class="form-select grade">
                                <option value="A">A (4.0)</option>
                                <option value="B">B (3.0)</option>
                                <option value="C">C (2.0)</option>
                                <option value="D">D (1.0)</option>
                                <option value="F">F (0.0)</option>
                            </select>
                        </div>

                        <!-- Credit Hours -->
                        <div class="col-md-3 mb-2">
                            <label class="form-label">Credits</label>
                            <input type="number" class="form-control credits" placeholder="CH" min="1" required>
                        </div>

                        <!-- Trash Button -->
                        <div class="col-md-1 mb-2 d-flex align-items-end">
                            <button type="button" class="btn btn-danger remove-subject" style="display:none;">
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Buttons Row -->
            <div class="d-flex justify-content-between" style="gap:15px;">
                <button type="button" id="addSubjectBtn" 
                    style="flex:0.4; height:50px; font-size:16px; font-weight:600; 
                           border:2px solid #dc3545; background:#fff; color:#dc3545; 
                           border-radius:8px; transition:all 0.3s;">
                    Add Subject
                </button>

                <button type="submit" class="btn-calculate" 
                    style="flex:1; height:50px; font-size:16px; font-weight:600; 
                           background:#1e3a8a; color:#fff; border:none; border-radius:8px; 
                           transition:all 0.3s;">
                    Calculate GPA
                </button>
            </div>
        </form>

        <div class="result-box" id="gpaResult">
            <p class="mb-0">Your GPA will appear here</p>
        </div>
    `,
    guide: [
        'Enter the subject name, grade, and credit hours',
        'Add more subjects if needed using the Add Subject button',
        'Click Calculate GPA to process',
        'View your GPA result based on the entered grades'
    ],
    init: function() {
        const addSubjectBtn = document.getElementById('addSubjectBtn');
        const subjectsContainer = document.getElementById('subjectsContainer');

        // Add Subject Row
        addSubjectBtn.addEventListener('click', function() {
            const subjectRow = document.createElement('div');
            subjectRow.className = 'subject-row mb-3';
            subjectRow.innerHTML = `
                <div class="row">
                    <div class="col-md-5 mb-2">
                        <label class="form-label">Subject Name</label>
                        <input type="text" class="form-control subject-name" placeholder="Subject name" required>
                    </div>
                    <div class="col-md-3 mb-2">
                        <label class="form-label">Grade</label>
                        <select class="form-select grade">
                            <option value="A">A (4.0)</option>
                            <option value="B">B (3.0)</option>
                            <option value="C">C (2.0)</option>
                            <option value="D">D (1.0)</option>
                            <option value="F">F (0.0)</option>
                        </select>
                    </div>
                    <div class="col-md-3 mb-2">
                        <label class="form-label">Credits</label>
                        <input type="number" class="form-control credits" placeholder="CH" min="1" required>
                    </div>
                    <div class="col-md-1 mb-2 d-flex align-items-end">
                        <button type="button" class="btn btn-danger remove-subject">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            `;
            subjectsContainer.appendChild(subjectRow);
            updateRemoveButtons();
        });

        // Update Trash Button Visibility
        function updateRemoveButtons() {
            const removeButtons = document.querySelectorAll('.remove-subject');
            removeButtons.forEach(button => {
                button.style.display = 'block';
                button.onclick = function() {
                    this.closest('.subject-row').remove();
                    updateRemoveButtons();
                };
            });
            if (removeButtons.length === 1) {
                removeButtons[0].style.display = 'none';
            }
        }

        // GPA Calculation
        document.getElementById('gpaForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const subjects = document.querySelectorAll('.subject-row');
            let totalPoints = 0;
            let totalCredits = 0;

            subjects.forEach(subject => {
                const grade = subject.querySelector('.grade').value;
                const credits = parseFloat(subject.querySelector('.credits').value);

                let gradePoint = 0;
                switch(grade) {
                    case 'A': gradePoint = 4.0; break;
                    case 'B': gradePoint = 3.0; break;
                    case 'C': gradePoint = 2.0; break;
                    case 'D': gradePoint = 1.0; break;
                    case 'F': gradePoint = 0.0; break;
                }

                if (!isNaN(credits)) {
                    totalPoints += gradePoint * credits;
                    totalCredits += credits;
                }
            });

            const gpa = totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : 0;
            document.getElementById('gpaResult').innerHTML = 
                `<p class="mb-0">Your GPA: <span class="result-value">${gpa}</span></p>`;
        });
    }
},

        number: {
            title: 'Number System Converter',
            icon: 'fa-sort-numeric-up',
            form: `
                <form id="numberForm">
                    <div class="mb-3">
                        <label for="numberInput" class="form-label">Enter Number</label>
                        <input type="text" class="form-control" id="numberInput" placeholder="Enter number" required>
                    </div>
                    <div class="mb-3">
                        <label for="fromSystem" class="form-label">From Number System</label>
                        <select class="form-select" id="fromSystem">
                            <option value="decimal">Decimal (Base 10)</option>
                            <option value="binary">Binary (Base 2)</option>
                            <option value="octal">Octal (Base 8)</option>
                            <option value="hexadecimal">Hexadecimal (Base 16)</option>
                        </select>
                    </div>
                    <button type="submit" class="btn btn-calculate">Convert Number</button>
                </form>
                <div class="result-box" id="numberResult">
                    <p class="mb-0">Converted numbers will appear here</p>
                </div>
            `,
            guide: [
                'Enter the number you want to convert',
                'Select the number system of the entered number',
                'Click Convert Number to process',
                'View the converted values in all number systems'
            ],
            init: function() {
                document.getElementById('numberForm').addEventListener('submit', function(e) {
                    e.preventDefault();
                    const number = document.getElementById('numberInput').value;
                    const fromSystem = document.getElementById('fromSystem').value;
                    
                    // Convert to decimal first
                    let decimalValue;
                    if (fromSystem === 'decimal') {
                        decimalValue = parseInt(number, 10);
                    } else if (fromSystem === 'binary') {
                        decimalValue = parseInt(number, 2);
                    } else if (fromSystem === 'octal') {
                        decimalValue = parseInt(number, 8);
                    } else { // hexadecimal
                        decimalValue = parseInt(number, 16);
                    }
                    
                    // Convert to other systems
                    const binary = decimalValue.toString(2);
                    const octal = decimalValue.toString(8);
                    const hex = decimalValue.toString(16).toUpperCase();
                    
                    document.getElementById('numberResult').innerHTML = 
                        `<p class="mb-0">Binary: <span class="result-value">${binary}</span></p>
                         <p class="mb-0">Octal: <span class="result-value">${octal}</span></p>
                         <p class="mb-0">Decimal: <span class="result-value">${decimalValue}</span></p>
                         <p class="mb-0">Hexadecimal: <span class="result-value">${hex}</span></p>`;
                });
            }
        },
        discount: {
            title: 'Discount & Price Calculator',
            icon: 'fa-tag',
            form: `
                <form id="discountForm">
                    <div class="mb-3">
                        <label for="price" class="form-label">Original Price ($)</label>
                        <input type="number" class="form-control" id="price" placeholder="Enter original price" min="0" step="0.01" required>
                    </div>
                    <div class="mb-3">
                        <label for="discount" class="form-label">Discount (%)</label>
                        <input type="number" class="form-control" id="discount" placeholder="Enter discount percentage" min="0" max="100" step="0.01" required>
                    </div>
                    <button type="submit" class="btn btn-calculate">Calculate Discount</button>
                </form>
                <div class="result-box" id="discountResult">
                    <p class="mb-0">Discounted price will appear here</p>
                </div>
            `,
            guide: [
                'Enter the original price of the item',
                'Enter the discount percentage',
                'Click Calculate Discount to process',
                'View the discount amount and final price'
            ],
            init: function() {
                document.getElementById('discountForm').addEventListener('submit', function(e) {
                    e.preventDefault();
                    const price = parseFloat(document.getElementById('price').value);
                    const discount = parseFloat(document.getElementById('discount').value);
                    
                    const discountAmount = (price * discount) / 100;
                    const finalPrice = price - discountAmount;
                    
                    document.getElementById('discountResult').innerHTML = 
                        `<p class="mb-0">Discount: $<span class="result-value">${discountAmount.toFixed(2)}</span></p>
                         <p class="mb-0">Final Price: $<span class="result-value">${finalPrice.toFixed(2)}</span></p>`;
                });
            }
        },
        currency: {
            title: 'Currency Converter',
            icon: 'fa-money-bill-wave',
            form: `
                <form id="currencyForm">
                    <div class="mb-3">
                        <label for="amount" class="form-label">Amount</label>
                        <input type="number" class="form-control" id="amount" placeholder="Enter amount" min="0" step="0.01" required>
                    </div>
                    <div class="mb-3">
                        <label for="fromCurrency" class="form-label">From Currency</label>
                        <select class="form-select" id="fromCurrency">
                            <option value="USD">US Dollar (USD)</option>
                            <option value="EUR">Euro (EUR)</option>
                            <option value="GBP">British Pound (GBP)</option>
                            <option value="JPY">Japanese Yen (JPY)</option>
                            <option value="CAD">Canadian Dollar (CAD)</option>
                            <option value="AUD">Australian Dollar (AUD)</option>
                            <option value="CHF">Swiss Franc (CHF)</option>
                            <option value="CNY">Chinese Yuan (CNY)</option>
                            <option value="PKR">Pakistani Rupee (PKR)</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="toCurrency" class="form-label">To Currency</label>
                        <select class="form-select" id="toCurrency">
                            <option value="USD">US Dollar (USD)</option>
                            <option value="EUR">Euro (EUR)</option>
                            <option value="GBP">British Pound (GBP)</option>
                            <option value="JPY">Japanese Yen (JPY)</option>
                            <option value="CAD">Canadian Dollar (CAD)</option>
                            <option value="AUD">Australian Dollar (AUD)</option>
                            <option value="CHF">Swiss Franc (CHF)</option>
                            <option value="CNY">Chinese Yuan (CNY)</option>
                            <option value="PKR">Pakistani Rupee (PKR)</option>
                        </select>
                    </div>
                    <button type="submit" class="btn btn-calculate">Convert Currency</button>
                </form>
                <div class="result-box" id="currencyResult">
                    <p class="mb-0">Converted amount will appear here</p>
                </div>
            `,
            guide: [
                'Enter the amount you want to convert',
                'Select the original currency',
                'Select the target currency',
                'Click Convert Currency to see the result'
            ],
            init: function() {
                document.getElementById('currencyForm').addEventListener('submit', async function(e) {
                    e.preventDefault();
                    const amount = parseFloat(document.getElementById('amount').value);
                    const fromCurrency = document.getElementById('fromCurrency').value;
                    const toCurrency = document.getElementById('toCurrency').value;
                    
                    // For demo purposes, we'll use a mock conversion
                    // In a real application, you would use an API like exchangerate-api.com
                    const mockRates = {
                        USD: { EUR: 0.93, GBP: 0.79, JPY: 149.32, CAD: 1.36, AUD: 1.54, CHF: 0.90, CNY: 7.30, PKR: 287.50 },
                        EUR: { USD: 1.07, GBP: 0.85, JPY: 160.15, CAD: 1.46, AUD: 1.65, CHF: 0.97, CNY: 7.83, PKR: 308.50 },
                        GBP: { USD: 1.26, EUR: 1.17, JPY: 188.15, CAD: 1.72, AUD: 1.95, CHF: 1.14, CNY: 9.20, PKR: 363.20 },
                        JPY: { USD: 0.0067, EUR: 0.0062, GBP: 0.0053, CAD: 0.0091, AUD: 0.0103, CHF: 0.0060, CNY: 0.049, PKR: 1.93 },
                        CAD: { USD: 0.73, EUR: 0.68, GBP: 0.58, JPY: 109.61, AUD: 1.13, CHF: 0.66, CNY: 5.36, PKR: 211.20 },
                        AUD: { USD: 0.65, EUR: 0.60, GBP: 0.51, JPY: 96.86, CAD: 0.88, CHF: 0.58, CNY: 4.73, PKR: 186.30 },
                        CHF: { USD: 1.11, EUR: 1.03, GBP: 0.88, JPY: 165.79, CAD: 1.51, AUD: 1.71, CNY: 8.10, PKR: 319.20 },
                        CNY: { USD: 0.14, EUR: 0.13, GBP: 0.11, JPY: 20.46, CAD: 0.19, AUD: 0.21, CHF: 0.12, PKR: 39.40 },
                        PKR: { USD: 0.0035, EUR: 0.0032, GBP: 0.0028, JPY: 0.52, CAD: 0.0047, AUD: 0.0054, CHF: 0.0031, CNY: 0.025 }
                    };
                    
                    let rate;
                    if (fromCurrency === toCurrency) {
                        rate = 1;
                    } else {
                        rate = mockRates[fromCurrency][toCurrency];
                    }
                    
                    const convertedAmount = (amount * rate).toFixed(2);
                    
                    document.getElementById('currencyResult').innerHTML = 
                        `<p class="mb-0"><span class="result-value">${amount} ${fromCurrency}</span> = <span class="result-value">${convertedAmount} ${toCurrency}</span></p>
                         <p class="mt-2 text-muted small">Exchange rate: 1 ${fromCurrency} = ${rate} ${toCurrency}</p>`;
                });
            }
        },
        length: {
            title: 'Height / Length Converter',
            icon: 'fa-ruler',
            form: `
                <form id="lengthForm">
                    <div class="mb-3">
                        <label for="length" class="form-label">Length Value</label>
                        <input type="number" class="form-control" id="length" placeholder="Enter length" min="0" step="0.01" required>
                    </div>
                    <div class="mb-3">
                        <label for="fromUnit" class="form-label">From Unit</label>
                        <select class="form-select" id="fromUnit">
                            <option value="m">Meter (m)</option>
                            <option value="cm">Centimeter (cm)</option>
                            <option value="km">Kilometer (km)</option>
                            <option value="in">Inch (in)</option>
                            <option value="ft">Foot (ft)</option>
                            <option value="yd">Yard (yd)</option>
                            <option value="mi">Mile (mi)</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="toUnit" class="form-label">To Unit</label>
                        <select class="form-select" id="toUnit">
                            <option value="m">Meter (m)</option>
                            <option value="cm">Centimeter (cm)</option>
                            <option value="km">Kilometer (km)</option>
                            <option value="in">Inch (in)</option>
                            <option value="ft">Foot (ft)</option>
                            <option value="yd">Yard (yd)</option>
                            <option value="mi">Mile (mi)</option>
                        </select>
                    </div>
                    <button type="submit" class="btn btn-calculate">Convert Length</button>
                </form>
                <div class="result-box" id="lengthResult">
                    <p class="mb-0">Converted length will appear here</p>
                </div>
            `,
            guide: [
                'Enter the length value you want to convert',
                'Select the original unit of measurement',
                'Select the target unit of measurement',
                'Click Convert Length to see the result'
            ],
            init: function() {
                document.getElementById('lengthForm').addEventListener('submit', function(e) {
                    e.preventDefault();
                    const length = parseFloat(document.getElementById('length').value);
                    const fromUnit = document.getElementById('fromUnit').value;
                    const toUnit = document.getElementById('toUnit').value;
                    
                    // Convert to meters first
                    let meters;
                    switch(fromUnit) {
                        case 'm': meters = length; break;
                        case 'cm': meters = length / 100; break;
                        case 'km': meters = length * 1000; break;
                        case 'in': meters = length * 0.0254; break;
                        case 'ft': meters = length * 0.3048; break;
                        case 'yd': meters = length * 0.9144; break;
                        case 'mi': meters = length * 1609.34; break;
                        default: meters = length;
                    }
                    
                    // Convert from meters to target unit
                    let result;
                    switch(toUnit) {
                        case 'm': result = meters; break;
                        case 'cm': result = meters * 100; break;
                        case 'km': result = meters / 1000; break;
                        case 'in': result = meters / 0.0254; break;
                        case 'ft': result = meters / 0.3048; break;
                        case 'yd': result = meters / 0.9144; break;
                        case 'mi': result = meters / 1609.34; break;
                        default: result = meters;
                    }
                    
                    document.getElementById('lengthResult').innerHTML = 
                        `<p class="mb-0"><span class="result-value">${length} ${fromUnit}</span> = <span class="result-value">${result.toFixed(4)} ${toUnit}</span></p>`;
                });
            }
        }
    };

    // Show calculator
    function showCalculator(calcKey) {
        const calculator = calculators[calcKey];
        if (!calculator) return;
        
        // Update calculator header
        calcTitle.textContent = calculator.title;
        calcIcon.className = `fas ${calculator.icon}`;
        
        // Update calculator panel
        calculatorPanel.innerHTML = calculator.form;
        
        // Update guide steps
        guideSteps.innerHTML = '';
        calculator.guide.forEach((step, index) => {
            const li = document.createElement('li');
            li.className = 'guide-step';
            li.textContent = step;
            li.style.animationDelay = `${index * 0.1}s`;
            guideSteps.appendChild(li);
        });
        
        // Initialize calculator functionality
        calculator.init();
        
        // Show calculator section and hide others
        heroSection.style.display = 'none';
        calculatorSection.style.display = 'block';
        aboutSection.style.display = 'none';
        contactSection.style.display = 'none';
        
        // Scroll to top
        window.scrollTo(0, 0);
    }

    // Show section
    function showSection(sectionId) {
        heroSection.style.display = 'none';
        calculatorSection.style.display = 'none';
        aboutSection.style.display = 'none';
        contactSection.style.display = 'none';
        
        document.getElementById(sectionId).style.display = 'block';
        
        // Scroll to top
        window.scrollTo(0, 0);
    }

    // Event Listeners
    calculatorSelect.addEventListener('change', function() {
        if (this.value) {
            showCalculator(this.value);
        }
    });

    getStartedBtn.addEventListener('click', function() {
        calculatorSelect.value = 'basic';
        showCalculator('basic');
    });

    learnMoreBtn.addEventListener('click', function() {
        showSection('aboutSection');
    });

    aboutLink.addEventListener('click', function(e) {
        e.preventDefault();
        showSection('aboutSection');
    });

    contactLink.addEventListener('click', function(e) {
        e.preventDefault();
        showSection('contactSection');
    });

    homeLink.addEventListener('click', function(e) {
        e.preventDefault();
        heroSection.style.display = 'block';
        calculatorSection.style.display = 'none';
        aboutSection.style.display = 'none';
        contactSection.style.display = 'none';
        window.scrollTo(0, 0);
    });

    aboutLinkFooter.addEventListener('click', function(e) {
        e.preventDefault();
        showSection('aboutSection');
    });

    contactLinkFooter.addEventListener('click', function(e) {
        e.preventDefault();
        showSection('contactSection');
    });

    // Footer calculator links
    document.querySelectorAll('.calc-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const calcKey = this.getAttribute('data-calc');
            calculatorSelect.value = calcKey;
            showCalculator(calcKey);
        });
    });

    // Contact form submission
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // In a real application, you would submit the form to a server
        // For demo purposes, we'll just show a success message
        const resultBox = document.createElement('div');
        resultBox.className = 'result-box mt-3';
        resultBox.innerHTML = '<p class="mb-0 text-success">Thank you for your message! We will get back to you soon.</p>';
        
        this.appendChild(resultBox);
        this.reset();
        
        // Remove the message after 5 seconds
        setTimeout(() => {
            resultBox.remove();
        }, 5000);
    });
});
// Update the result display functions to include decorative elements
function updateResultBox(elementId, content) {
    const resultBox = document.getElementById(elementId);
    resultBox.innerHTML = `
        <div class="result-decoration result-decoration-1"></div>
        <div class="result-decoration result-decoration-2"></div>
        ${content}
    `;
    
    // Add animation class
    resultBox.classList.add('show');
    
    // Remove animation class after animation completes
    setTimeout(() => {
        resultBox.classList.remove('show');
    }, 1500);
}

// Example of how to use it in the basic calculator
document.getElementById('basicCalcForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operator = document.getElementById('operator').value;
    let result;
    
    switch(operator) {
        case '+': result = num1 + num2; break;
        case '-': result = num1 - num2; break;
        case '*': result = num1 * num2; break;
        case '/': result = num2 !== 0 ? num1 / num2 : 'Error: Division by zero'; break;
    }
    
    updateResultBox('basicResult', `<p class="mb-0 result-value">${result}</p>`);
});