<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Employee Management System - SECURE VERSION</title>
    <meta http-equiv="Content-Security-Policy" content="
        default-src 'self';
        script-src 'self';
        style-src 'self' 'unsafe-inline';
        img-src 'self' data:;
        object-src 'none';
        base-uri 'none';
        form-action 'self';
        frame-ancestors 'none';
        upgrade-insecure-requests;
    ">


    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #4CAF50 0%, #45a049 100%);
            min-height: 100vh;
            padding: 20px;
        }

        .success {
            background-color: #e8f5e8;
            border: 3px solid #4caf50;
            padding: 20px;
            margin: 20px 0;
            border-radius: 10px;
            text-align: center;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            background: white;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
            overflow: hidden;
        }

        .header {
            background: linear-gradient(45deg, #4CAF50, #45a049);
            color: white;
            padding: 30px;
            text-align: center;
        }

        .content {
            padding: 30px;
        }

        .form-section {
            background: #f8f9fa;
            padding: 25px;
            margin: 20px 0;
            border-radius: 10px;
            border-left: 5px solid #4CAF50;
        }

        .form-group {
            margin: 15px 0;
        }

        label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
            color: #333;
        }

        input, textarea, select {
            width: 100%;
            padding: 12px;
            border: 2px solid #ddd;
            border-radius: 8px;
            font-size: 16px;
            transition: border-color 0.3s;
        }

        input:focus, textarea:focus, select:focus {
            outline: none;
            border-color: #4CAF50;
        }

        button {
            background: linear-gradient(45deg, #4CAF50, #45a049);
            color: white;
            padding: 12px 25px;
            border: none;
            border-radius: 8px;
            font-size: 16px;
            cursor: pointer;
            margin: 5px;
            transition: transform 0.2s;
        }

        button:hover {
            transform: translateY(-2px);
        }

        .employee-list {
            background: #f8f9fa;
            padding: 20px;
            margin: 20px 0;
            border-radius: 10px;
            max-height: 400px;
            overflow-y: auto;
        }

        .employee-card {
            background: white;
            padding: 15px;
            margin: 10px 0;
            border-radius: 8px;
            border-left: 4px solid #4CAF50;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }

        .search-section {
            background: #e3f2fd;
            padding: 20px;
            margin: 20px 0;
            border-radius: 10px;
            border-left: 5px solid #2196f3;
        }

        .calculator-section {
            background: #fff3e0;
            padding: 20px;
            margin: 20px 0;
            border-radius: 10px;
            border-left: 5px solid #ff9800;
        }

        .security-info {
            background: #e8f5e8;
            padding: 15px;
            margin: 10px 0;
            border-radius: 5px;
            border: 1px solid #4CAF50;
        }

        .error {
            color: #d32f2f;
            background: #ffebee;
            padding: 10px;
            border-radius: 5px;
            margin: 10px 0;
        }

        .success-msg {
            color: #2e7d32;
            background: #e8f5e8;
            padding: 10px;
            border-radius: 5px;
            margin: 10px 0;
        }
    </style>
</head>
<body>
    <div class="success">
        <p><strong>2025 Summer - Secure Software Development (MSCS-535-B01) - Second Bi-term</strong></p>
        <p>Project 2 - Protected against XSS, code injection, and eval() vulnerabilities.</p>
    </div>

    <div class="container">
        <div class="header">
            <h1>Employee Management System</h1>
            <p>SECURE VERSION</p>
        </div>

        <div class="content">
            <!-- Employee Registration Form -->
            <div class="form-section">
                <h2>Add New Employee</h2>
                <div class="form-group">
                    <label for="empName">Full Name:</label>
                    <input type="text" id="empName" placeholder="Enter employee name" maxlength="100">
                </div>
                <div class="form-group">
                    <label for="empEmail">Email:</label>
                    <input type="email" id="empEmail" placeholder="Enter email address" maxlength="100">
                </div>
                <div class="form-group">
                    <label for="empDept">Department:</label>
                    <select id="empDept">
                        <option value="">Select Department</option>
                        <option value="IT">IT</option>
                        <option value="HR">HR</option>
                        <option value="Finance">Finance</option>
                        <option value="Marketing">Marketing</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="empSalary">Salary:</label>
                    <input type="number" id="empSalary" placeholder="Enter salary" min="0" max="1000000">
                </div>
                <div class="form-group">
                    <label for="empBio">Bio/Notes:</label>
                    <textarea id="empBio" rows="3" placeholder="Enter employee bio or notes" maxlength="500"></textarea>
                </div>
                <button onclick="addEmployeeSecure()">Add Employee</button>
                <div id="addEmployeeMessage"></div>
            </div>

            <!-- Search and Filter Section -->
            <div class="search-section">
                <h2>Search & Filter Employees</h2>
                <div class="form-group">
                    <label for="searchQuery">Search Query:</label>
                    <input type="text" id="searchQuery" placeholder="Enter search terms" maxlength="100">
                    <button onclick="searchEmployeesSecure()">Search</button>
                </div>
                <div class="form-group">
                    <label for="filterDept">Filter by Department:</label>
                    <select id="filterDept">
                        <option value="">All Departments</option>
                        <option value="IT">IT</option>
                        <option value="HR">HR</option>
                        <option value="Finance">Finance</option>
                        <option value="Marketing">Marketing</option>
                    </select>
                    <button onclick="filterByDepartment()">Filter</button>
                </div>
                <div class="form-group">
                    <label for="salaryRange">Salary Range:</label>
                    <select id="salaryRange">
                        <option value="">All Salaries</option>
                        <option value="0-50000">$0 - $50,000</option>
                        <option value="50000-75000">$50,000 - $75,000</option>
                        <option value="75000-100000">$75,000 - $100,000</option>
                        <option value="100000+">$100,000+</option>
                    </select>
                    <button onclick="filterBySalary()">Apply</button>
                </div>
                <div id="searchResults"></div>
            </div>

            <!-- Salary Calculator Section -->
            <div class="calculator-section">
                <h2>Salary Calculator</h2>
                <div class="form-group">
                    <label for="calcType">Calculation Type:</label>
                    <select id="calcType">
                        <option value="raise">Salary Raise</option>
                        <option value="Bonus">Add Bonus</option>
                        <option value="annual">Annual Total</option>
                        <option value="tax">After Tax (25%)</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="Salary">Salary:</label>
                    <input type="number" id="Salary" placeholder="Enter base salary" value="50000" min="0" max="1000000">
                </div>
                <div class="form-group">
                    <label for="percentage">Percentage/Amount:</label>
                    <input type="number" id="percentage" placeholder="Enter percentage or amount" value="10" min="0" max="100">
                </div>
                <button onclick="calculateSalarySecure()">Calculate</button>
                <div id="calculationResult"></div>
            </div>

            <!-- Employee List -->
            <div class="form-section">
                <h2>Employee Directory</h2>
                <div id="employeeList" class="employee-list">
                    <p><em>No employees added yet...</em></p>
                </div>
                <button onclick="exportEmployeesSecure()">Export to CSV</button>
                <button onclick="clearAllEmployeesSecure()">Clear All</button>
            </div>
        </div>
    </div>

    <script>
        // Global employee storage
        let employees = [];
        let employeeIdCounter = 1;

        // SECURITY UTILITY FUNCTIONS

        // Function to escape HTML characters to prevent XSS
        function escapeHtml(unsafe) {
            if (typeof unsafe !== 'string') {
                return '';
            }
            return unsafe
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/"/g, "&quot;")
                .replace(/'/g, "&#039;");
        }

        // Function to validate and sanitize input
        function validateInput(input, maxLength = 200, allowEmpty = false) {
            if (!allowEmpty && (!input || typeof input !== 'string' || input.trim() === '')) {
                return null;
            }

            if (typeof input !== 'string') {
                return allowEmpty ? '' : null;
            }

            // Remove any potentially dangerous characters and limit length
            const sanitized = input.trim().substring(0, maxLength);
            return escapeHtml(sanitized);
        }

        // Email validation
        function validateEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }

        // Number validation
        function validateNumber(num, min = 0, max = 1000000) {
            const parsed = parseFloat(num);
            return !isNaN(parsed) && parsed >= min && parsed <= max ? parsed : null;
        }

        // SECURE FUNCTION 1: Safe employee addition with validation
        function addEmployeeSecure() {
            const messageDiv = document.getElementById('addEmployeeMessage');

            // Get and validate all inputs
            const name = validateInput(document.getElementById('empName').value, 100);
            const email = document.getElementById('empEmail').value.trim();
            const department = document.getElementById('empDept').value;
            const salaryInput = document.getElementById('empSalary').value;
            const bio = validateInput(document.getElementById('empBio').value, 500, true);

            // Validation checks
            if (!name) {
                showMessage(messageDiv, 'Please enter a valid name (max 100 characters)', 'error');
                return;
            }

            if (!email || !validateEmail(email)) {
                showMessage(messageDiv, 'Please enter a valid email address', 'error');
                return;
            }

            if (!department) {
                showMessage(messageDiv, 'Please select a department', 'error');
                return;
            }

            const salary = validateNumber(salaryInput, 0, 1000000);
            if (salary === null) {
                showMessage(messageDiv, 'Please enter a valid salary (0 - 1,000,000)', 'error');
                return;
            }

            // Check for duplicate email
            if (employees.some(emp => emp.email.toLowerCase() === email.toLowerCase())) {
                showMessage(messageDiv, 'An employee with this email already exists', 'error');
                return;
            }

            const employee = {
                id: employeeIdCounter++,
                name: name,
                email: escapeHtml(email),
                department: department,
                salary: salary,
                bio: bio || '',
                dateAdded: new Date().toLocaleDateString()
            };

            employees.push(employee);
            displayEmployeesSecure();
            clearForm();
            showMessage(messageDiv, 'Employee added successfully!', 'success');
        }

        // SECURE FUNCTION 2: Safe employee display using DOM methods
        function displayEmployeesSecure() {
            const listDiv = document.getElementById('employeeList');

            // Clear existing content
            listDiv.innerHTML = '';

            if (employees.length === 0) {
                const emptyMsg = document.createElement('p');
                const emElement = document.createElement('em');
                emElement.textContent = 'No employees added yet...';
                emptyMsg.appendChild(emElement);
                listDiv.appendChild(emptyMsg);
                return;
            }

            employees.forEach(emp => {
                // Create employee card using safe DOM methods
                const card = document.createElement('div');
                card.className = 'employee-card';

                // Name header
                const nameHeader = document.createElement('h3');
                nameHeader.textContent = emp.name;
                card.appendChild(nameHeader);

                // Employee details
                const details = [
                    { label: 'Email', value: emp.email },
                    { label: 'Department', value: emp.department },
                    { label: 'Salary', value: `$${emp.salary.toLocaleString()}` },
                    { label: 'Bio', value: emp.bio || 'No bio provided' },
                    { label: 'Added', value: emp.dateAdded }
                ];

                details.forEach(detail => {
                    const p = document.createElement('p');
                    const strong = document.createElement('strong');
                    strong.textContent = detail.label + ': ';
                    p.appendChild(strong);
                    p.appendChild(document.createTextNode(detail.value));
                    card.appendChild(p);
                });

                // Action buttons
                const editBtn = document.createElement('button');
                editBtn.textContent = 'Edit';
                editBtn.onclick = () => editEmployeeSecure(emp.id);
                card.appendChild(editBtn);

                const deleteBtn = document.createElement('button');
                deleteBtn.textContent = 'Delete';
                deleteBtn.onclick = () => deleteEmployeeSecure(emp.id);
                card.appendChild(deleteBtn);

                listDiv.appendChild(card);
            });
        }

        // SECURE FUNCTION 3: Safe search without XSS
        function searchEmployeesSecure() {
            const query = validateInput(document.getElementById('searchQuery').value, 100);
            const resultsDiv = document.getElementById('searchResults');

            resultsDiv.innerHTML = '';

            if (!query) {
                showMessage(resultsDiv, 'Please enter a search term', 'error');
                return;
            }

            const matchingEmployees = employees.filter(emp =>
                emp.name.toLowerCase().includes(query.toLowerCase()) ||
                emp.email.toLowerCase().includes(query.toLowerCase()) ||
                emp.department.toLowerCase().includes(query.toLowerCase()) ||
                emp.bio.toLowerCase().includes(query.toLowerCase())
            );

            const header = document.createElement('h3');
            header.textContent = 'Search Results:';
            resultsDiv.appendChild(header);

            if (matchingEmployees.length === 0) {
                const noResults = document.createElement('p');
                noResults.textContent = `No results found for: "${query}"`;
                resultsDiv.appendChild(noResults);
            } else {
                matchingEmployees.forEach(emp => {
                    const card = document.createElement('div');
                    card.className = 'employee-card';

                    const name = document.createElement('h4');
                    name.textContent = emp.name;
                    card.appendChild(name);

                    const dept = document.createElement('p');
                    dept.textContent = `Department: ${emp.department}`;
                    card.appendChild(dept);

                    const email = document.createElement('p');
                    email.textContent = `Email: ${emp.email}`;
                    card.appendChild(email);

                    resultsDiv.appendChild(card);
                });
            }
        }

        // SECURE FUNCTION 4: Safe filtering without eval()
        function filterByDepartment() {
            const selectedDept = document.getElementById('filterDept').value;
            const resultsDiv = document.getElementById('searchResults');

            resultsDiv.innerHTML = '';

            let filteredEmployees = employees;
            if (selectedDept) {
                filteredEmployees = employees.filter(emp => emp.department === selectedDept);
            }

            displayFilterResults(filteredEmployees, `Department: ${selectedDept || 'All'}`);
        }

        function filterBySalary() {
            const selectedRange = document.getElementById('salaryRange').value;
            const resultsDiv = document.getElementById('searchResults');

            resultsDiv.innerHTML = '';

            let filteredEmployees = employees;

            if (selectedRange) {
                if (selectedRange === '100000+') {
                    filteredEmployees = employees.filter(emp => emp.salary >= 100000);
                } else {
                    const [min, max] = selectedRange.split('-').map(Number);
                    filteredEmployees = employees.filter(emp => emp.salary >= min && emp.salary <= max);
                }
            }

            displayFilterResults(filteredEmployees, `Salary Range: ${selectedRange || 'All'}`);
        }

        function displayFilterResults(filteredEmployees, filterType) {
            const resultsDiv = document.getElementById('searchResults');

            const header = document.createElement('h3');
            header.textContent = `Filtered Results (${filterType}):`;
            resultsDiv.appendChild(header);

            if (filteredEmployees.length === 0) {
                const noResults = document.createElement('p');
                noResults.textContent = 'No employees match the filter criteria';
                resultsDiv.appendChild(noResults);
            } else {
                filteredEmployees.forEach(emp => {
                    const card = document.createElement('div');
                    card.className = 'employee-card';

                    const name = document.createElement('h4');
                    name.textContent = emp.name;
                    card.appendChild(name);

                    const dept = document.createElement('p');
                    dept.textContent = `Department: ${emp.department}`;
                    card.appendChild(dept);

                    const salary = document.createElement('p');
                    salary.textContent = `Salary: $${emp.salary.toLocaleString()}`;
                    card.appendChild(salary);

                    resultsDiv.appendChild(card);
                });
            }
        }

        // SECURE FUNCTION 5: Safe calculator without eval()
        function calculateSalarySecure() {
            const calcType = document.getElementById('calcType').value;
            const SalaryInput = document.getElementById('Salary').value;
            const percentageInput = document.getElementById('percentage').value;
            const resultDiv = document.getElementById('calculationResult');

            resultDiv.innerHTML = '';

            const Salary = validateNumber(SalaryInput, 0, 1000000);
            const percentage = validateNumber(percentageInput, 0, 100);

            if (Salary === null) {
                showMessage(resultDiv, 'Please enter a valid base salary', 'error');
                return;
            }

            if (percentage === null) {
                showMessage(resultDiv, 'Please enter a valid percentage/amount', 'error');
                return;
            }

            let result = 0;
            let description = '';

            // Safe calculation without eval()
            switch (calcType) {
                case 'raise':
                    result = Salary + (Salary * percentage / 100);
                    description = `${percentage}% salary raise`;
                    break;
                case 'Bonus':
                    result = Salary + (percentage * 1000); // Treat as thousands
                    description = `$${(percentage * 1000).toLocaleString()} Bonus added`;
                    break;
                case 'annual':
                    result = Salary * 12;
                    description = 'Annual salary calculation';
                    break;
                case 'tax':
                    result = Salary * 0.75; // 25% tax
                    description = 'After 25% tax deduction';
                    break;
                default:
                    showMessage(resultDiv, 'Please select a calculation type', 'error');
                    return;
            }

            // Display result safely
            const resultContainer = document.createElement('div');
            resultContainer.className = 'security-info';

            const title = document.createElement('h4');
            title.textContent = 'Calculation Result:';
            resultContainer.appendChild(title);

            const calcDesc = document.createElement('p');
            calcDesc.innerHTML = `<strong>Type:</strong> ${description}`;
            resultContainer.appendChild(calcDesc);

            const resultP = document.createElement('p');
            resultP.innerHTML = `<strong>Result:</strong> $${result.toLocaleString()}`;
            resultContainer.appendChild(resultP);

            const baseP = document.createElement('p');
            baseP.innerHTML = `<em>Base Salary: $${Salary.toLocaleString()}</em>`;
            resultContainer.appendChild(baseP);

            resultDiv.appendChild(resultContainer);
        }

        // SECURE FUNCTION 6: Safe export without XSS
        function exportEmployeesSecure() {
            if (employees.length === 0) {
                alert('No employees to export');
                return;
            }

            // Create CSV content safely
            let csvContent = 'Name,Email,Department,Salary,Bio,Date Added\n';

            employees.forEach(emp => {
                // Escape CSV special characters
                const escapeCsv = (field) => {
                    if (typeof field !== 'string') field = String(field);
                    if (field.includes(',') || field.includes('"') || field.includes('\n')) {
                        return '"' + field.replace(/"/g, '""') + '"';
                    }
                    return field;
                };

                csvContent += [
                    escapeCsv(emp.name),
                    escapeCsv(emp.email),
                    escapeCsv(emp.department),
                    emp.salary,
                    escapeCsv(emp.bio),
                    escapeCsv(emp.dateAdded)
                ].join(',') + '\n';
            });

            // Create and download file safely
            const blob = new Blob([csvContent], { type: 'text/csv' });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'employees_export.csv';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        }

        // Utility functions
        function showMessage(container, message, type) {
            container.innerHTML = '';
            const msgDiv = document.createElement('div');
            msgDiv.className = type === 'error' ? 'error' : 'success-msg';
            msgDiv.textContent = message;
            container.appendChild(msgDiv);
        }

        function clearForm() {
            document.getElementById('empName').value = '';
            document.getElementById('empEmail').value = '';
            document.getElementById('empDept').value = '';
            document.getElementById('empSalary').value = '';
            document.getElementById('empBio').value = '';
        }

        function editEmployeeSecure(id) {
            const employee = employees.find(emp => emp.id === id);
            if (employee) {
                // Populate form with existing data for editing
                document.getElementById('empName').value = employee.name;
                document.getElementById('empEmail').value = employee.email;
                document.getElementById('empDept').value = employee.department;
                document.getElementById('empSalary').value = employee.salary;
                document.getElementById('empBio').value = employee.bio;

                // Remove the employee so it can be re-added with updates
                deleteEmployeeSecure(id);
            }
        }

        function deleteEmployeeSecure(id) {
            if (confirm('Are you sure you want to delete this employee?')) {
                employees = employees.filter(emp => emp.id !== id);
                displayEmployeesSecure();
            }
        }

        function clearAllEmployeesSecure() {
            if (confirm('Are you sure you want to delete all employees?')) {
                employees = [];
                displayEmployeesSecure();
                document.getElementById('searchResults').innerHTML = '';
                document.getElementById('calculationResult').innerHTML = '';
            }
        }


    </script>

    <div class="success">
        <h3>Security Measures Implemented:</h3>
        <div style="text-align: left; max-width: 800px; margin: 0 auto;">
            <ul>
                <li><strong>Input Validation:</strong> All inputs are validated for type, length, and format</li>
                <li><strong>CSP implementation</strong> provides a robust security layer that complements the input validation, HTML escaping, and safe DOM manipulation</li>
                <li><strong>HTML Escaping:</strong> All user content is properly escaped before display</li>
                <li><strong>Safe DOM Manipulation:</strong> Using createElement() and textContent instead of innerHTML</li>
                <li><strong>No eval():</strong> Eliminated all eval() usage - using safe calculation methods</li>
                <li><strong>Email Validation:</strong> Proper email format validation</li>
                <li><strong>Number Validation:</strong> Range checking for numeric inputs</li>
                <li><strong>Duplicate Prevention:</strong> Checking for duplicate email addresses</li>
                <li><strong>Safe Export:</strong> CSV export with proper escaping</li>
                <li><strong>User Confirmation:</strong> Confirmation dialogs for destructive actions</li>
                <li><strong>Length Limits:</strong> Maximum length restrictions on all text inputs</li>
            </ul>
        </div>
    </div>

    <div class="security-info">
        <h3>Vulnerability Test Cases:</h3>
        <div style="text-align: left; max-width: 800px; margin: 0 auto;">
          <ul>
            <li><code>&lt;script&gt;alert('XSS')&lt;/script&gt;</code> → Will display as text, not execute</li>
            <li><code>&lt;img src="x" onerror="alert('XSS')"&gt;</code> → Will be escaped and safe</li>
            <li>Long inputs → Will be truncated to safe lengths</li>
            <li>Invalid emails → Will be rejected with proper validation</li>
        </ul>
    </div>
</body>
</html>
