<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Employee Management System - VULNERABLE VERSION</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            padding: 20px;
        }

        .warning {
            background-color: #ffebee;
            border: 3px solid #f44336;
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
            background: linear-gradient(45deg, #ff6b6b, #ee5a24);
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
            border-left: 5px solid #ff6b6b;
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
            border-color: #ff6b6b;
        }

        button {
            background: linear-gradient(45deg, #ff6b6b, #ee5a24);
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
            border-left: 4px solid #ff6b6b;
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

        .vulnerability-demo {
            background: #ffebee;
            padding: 15px;
            margin: 10px 0;
            border-radius: 5px;
            border: 1px dashed #f44336;
        }
    </style>
</head>
<body>
    <div class="warning">
        <h2⚠️ CRITICAL SECURITY WARNING ⚠️</h2>
        <p><strong>2025 Summer - Secure Software Development (MSCS-535-B01) - Second Bi-term</strong></p>
        <p>Project 2 - Contains multiple XSS and code injection vulnerabilities</p>
    </div>

    <div class="container">
        <div class="header">
            <h1>Employee Management System</h1>
            <p>VULNERABLE VERSION</p>
        </div>

        <div class="content">
            <!-- Employee Registration Form -->
            <div class="form-section">
                <h2>Add New Employee</h2>
                <div class="form-group">
                    <label for="empName">Full Name:</label>
                    <input type="text" id="empName" placeholder="Enter employee name">
                </div>
                <div class="form-group">
                    <label for="empEmail">Email:</label>
                    <input type="email" id="empEmail" placeholder="Enter email address">
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
                    <input type="number" id="empSalary" placeholder="Enter salary">
                </div>
                <div class="form-group">
                    <label for="empBio">Bio/Notes:</label>
                    <textarea id="empBio" rows="3" placeholder="Enter employee bio or notes"></textarea>
                </div>
                <button onclick="addEmployee()">Add Employee</button>
            </div>

            <!-- Search and Filter Section -->
            <div class="search-section">
                <h2>Search & Filter Employees</h2>
                <div class="form-group">
                    <label for="searchQuery">Search Query:</label>
                    <input type="text" id="searchQuery" placeholder="Enter search terms">
                    <button onclick="searchEmployees()">Search</button>
                </div>
                <div class="form-group">
                    <label for="filterExpression">Advanced Filter (JavaScript Expression):</label>
                    <input type="text" id="filterExpression" placeholder="e.g., salary > 50000 && department === 'IT'">
                    <button onclick="applyAdvancedFilter()">Apply Filter</button>
                </div>
                <div id="searchResults"></div>
            </div>

            <!-- Salary Calculator Section -->
            <div class="calculator-section">
                <h2>Salary Calculator</h2>
                <div class="form-group">
                    <label for="Salary">Salary:</label>
                    <input type="number" id="Salary" placeholder="Enter base salary">
                </div>
                <div class="form-group">
                    <label for="Bonus">Bonus:</label>
                    <input type="number" id="Bonus" placeholder="Enter bonus amount">
                </div>
                <div class="form-group">
                    <label for="calcExpression">Calculation Expression:</label>
                    <input type="text" id="calcExpression" placeholder="e.g., Salary * 1.1 + Bonus">
                    <button onclick="calculateSalary()">Calculate</button>
                </div>
                <div id="calculationResult"></div>
            </div>

            <!-- Employee List -->
            <div class="form-section">
                <h2>Employee Directory</h2>
                <div id="employeeList" class="employee-list">
                    <p><em>No employees added yet...</em></p>
                </div>
                <button onclick="exportEmployees()">Export to HTML</button>
                <button onclick="clearAllEmployees()">Clear All</button>
            </div>
        </div>
    </div>

    <script>
        // Global employee storage
        let employees = [];
        let employeeIdCounter = 1;

        // VULNERABLE FUNCTION 1: XSS via innerHTML injection
        function addEmployee() {
            const name = document.getElementById('empName').value;
            const email = document.getElementById('empEmail').value;
            const department = document.getElementById('empDept').value;
            const salary = document.getElementById('empSalary').value;
            const bio = document.getElementById('empBio').value;

            if (!name || !email || !department || !salary) {
                alert('Please fill in all required fields');
                return;
            }

            const employee = {
                id: employeeIdCounter++,
                name: name,
                email: email,
                department: department,
                salary: parseFloat(salary),
                bio: bio,
                dateAdded: new Date().toLocaleDateString()
            };

            employees.push(employee);
            displayEmployees();
            clearForm();
        }

        // VULNERABLE FUNCTION 2: Direct innerHTML with user data
        function displayEmployees() {
            const listDiv = document.getElementById('employeeList');

            if (employees.length === 0) {
                listDiv.innerHTML = '<p><em>No employees added yet...</em></p>';
                return;
            }

            let html = '';
            employees.forEach(emp => {
                // VULNERABILITY: Direct insertion of user data without sanitization
                html += `
                    <div class="employee-card">
                        <h3>${emp.name}</h3>
                        <p><strong>Email:</strong> ${emp.email}</p>
                        <p><strong>Department:</strong> ${emp.department}</p>
                        <p><strong>Salary:</strong> $${emp.salary.toLocaleString()}</p>
                        <p><strong>Bio:</strong> ${emp.bio}</p>
                        <p><strong>Added:</strong> ${emp.dateAdded}</p>
                        <button onclick="editEmployee(${emp.id})">Edit</button>
                        <button onclick="deleteEmployee(${emp.id})">Delete</button>
                    </div>
                `;
            });

            // VULNERABILITY: Direct innerHTML injection
            listDiv.innerHTML = html;
        }

        // VULNERABLE FUNCTION 3: Search with XSS
        function searchEmployees() {
            const query = document.getElementById('searchQuery').value;
            const resultsDiv = document.getElementById('searchResults');

            const matchingEmployees = employees.filter(emp =>
                emp.name.toLowerCase().includes(query.toLowerCase()) ||
                emp.email.toLowerCase().includes(query.toLowerCase()) ||
                emp.department.toLowerCase().includes(query.toLowerCase())
            );

            let html = '<h3>Search Results:</h3>';
            if (matchingEmployees.length === 0) {
                // VULNERABILITY: Direct insertion of search query
                html += `<p>No results found for: <strong>${query}</strong></p>`;
            } else {
                matchingEmployees.forEach(emp => {
                    // VULNERABILITY: XSS in search results
                    html += `
                        <div class="employee-card">
                            <h4>${emp.name}</h4>
                            <p>Department: ${emp.department}</p>
                            <p>Email: ${emp.email}</p>
                        </div>
                    `;
                });
            }

            // VULNERABILITY: Direct innerHTML injection
            resultsDiv.innerHTML = html;
        }

        // VULNERABLE FUNCTION 4: Dynamic code evaluation with eval()
        function applyAdvancedFilter() {
            const expression = document.getElementById('filterExpression').value;
            const resultsDiv = document.getElementById('searchResults');

            if (!expression) {
                resultsDiv.innerHTML = '<p>Please enter a filter expression</p>';
                return;
            }

            try {
                let filteredEmployees = [];

                employees.forEach(emp => {
                    // VULNERABILITY: Using eval() with user input
                    // This allows arbitrary code execution!
                    const salary = emp.salary;
                    const department = emp.department;
                    const name = emp.name;

                    // CRITICAL VULNERABILITY: eval() with user input
                    if (eval(expression)) {
                        filteredEmployees.push(emp);
                    }
                });

                let html = '<h3>Filtered Results:</h3>';
                if (filteredEmployees.length === 0) {
                    html += '<p>No employees match the filter criteria</p>';
                } else {
                    filteredEmployees.forEach(emp => {
                        html += `
                            <div class="employee-card">
                                <h4>${emp.name}</h4>
                                <p>Department: ${emp.department}</p>
                                <p>Salary: $${emp.salary.toLocaleString()}</p>
                            </div>
                        `;
                    });
                }

                resultsDiv.innerHTML = html;

            } catch (error) {
                // VULNERABILITY: Exposing error details
                resultsDiv.innerHTML = `<p style="color: red;">Filter Error: ${error.message}</p>`;
            }
        }

        // VULNERABLE FUNCTION 5: Calculator using eval()
        function calculateSalary() {
            const expression = document.getElementById('calcExpression').value;
            const Salary = parseFloat(document.getElementById('Salary').value) || 0;
            const Bonus = parseFloat(document.getElementById('Bonus').value) || 0;
            const resultDiv = document.getElementById('calculationResult');

            if (!expression) {
                resultDiv.innerHTML = '<p>Please enter a calculation expression</p>';
                return;
            }

            try {
                // VULNERABILITY: Using eval() for calculations
                // This allows arbitrary code execution!
                const result = eval(expression);

                // VULNERABILITY: Direct innerHTML with user data
                resultDiv.innerHTML = `
                    <div class="vulnerability-demo">
                        <h4>Calculation Result:</h4>
                        <p><strong>Expression:</strong> ${expression}</p>
                        <p><strong>Result:</strong> $${result.toLocaleString()}</p>
                        <p><em>Salary: $${Salary.toLocaleString()}, Bonus: $${Bonus.toLocaleString()}</em></p>
                    </div>
                `;

            } catch (error) {
                resultDiv.innerHTML = `<p style="color: red;">Calculation Error: ${error.message}</p>`;
            }
        }

        // VULNERABLE FUNCTION 6: Export with XSS
        function exportEmployees() {
            if (employees.length === 0) {
                alert('No employees to export');
                return;
            }

            let html = '<html><head><title>Employee Export</title></head><body>';
            html += '<h1>Employee Directory Export</h1>';

            employees.forEach(emp => {
                // VULNERABILITY: XSS in exported content
                html += `
                    <div style="border: 1px solid #ccc; margin: 10px; padding: 10px;">
                        <h3>${emp.name}</h3>
                        <p>Email: ${emp.email}</p>
                        <p>Department: ${emp.department}</p>
                        <p>Bio: ${emp.bio}</p>
                    </div>
                `;
            });

            html += '</body></html>';

            // Open in new window (potential XSS execution)
            const newWindow = window.open();
            newWindow.document.write(html);
            newWindow.document.close();
        }

        // Utility functions
        function clearForm() {
            document.getElementById('empName').value = '';
            document.getElementById('empEmail').value = '';
            document.getElementById('empDept').value = '';
            document.getElementById('empSalary').value = '';
            document.getElementById('empBio').value = '';
        }

        function deleteEmployee(id) {
            employees = employees.filter(emp => emp.id !== id);
            displayEmployees();
        }

        function clearAllEmployees() {
            employees = [];
            displayEmployees();
            document.getElementById('searchResults').innerHTML = '';
            document.getElementById('calculationResult').innerHTML = '';
        }


    </script>

    <div class="warning">
        <h3>Vulnerability Test Cases:</h3>
        <div style="text-align: left; max-width: 800px; margin: 0 auto;">
            <h4>XSS in Employee Name:</h4>
            <code>&lt;script&gt;alert('XSS in Name!')&lt;/script&gt;</code>

            <h4>XSS in Bio Field:</h4>
            <code>&lt;img src="x" onerror="alert('XSS in Bio!')"&gt;</code>

            <h4>Code Injection in Filter:</h4>
            <code>true; alert('Code Injection via Filter!'); true</code>

            <h4>Code Injection in Calculator:</h4>
            <code>alert('Calculator Injection!'); 50000</code>

            <h4>Advanced Code Injection:</h4>
            <code>document.body.innerHTML = '&lt;h1&gt;HACKED!&lt;/h1&gt;'; true</code>
        </div>
    </div>
</body>
</html>
