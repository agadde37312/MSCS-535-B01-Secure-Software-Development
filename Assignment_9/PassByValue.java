public class PassByValueEmployee {

    public static void modifySalary(int salary) {
        salary = salary + 5000;
        System.out.println("Inside modifySalary: salary = $" + salary);
    }

    public static void updateEmployeeDetails(Employee emp) {
        emp.name = "Arun Gadde";
        emp.position = "Senior Developer";
        System.out.println("Inside updateEmployeeDetails: " + emp);
    }

    public static void reassignEmployee(Employee emp) {
        emp = new Employee("New Employee", "Intern", 30000);
        System.out.println("Inside reassignEmployee: " + emp);
    }

    public static void main(String[] args) {
        int baseSalary = 60000;
        modifySalary(baseSalary);
        System.out.println("After modifySalary: baseSalary = $" + baseSalary);

        Employee employee = new Employee("John Smith", "Developer", 60000);
        updateEmployeeDetails(employee);
        System.out.println("After updateEmployeeDetails: " + employee);

        reassignEmployee(employee);
        System.out.println("After reassignEmployee: " + employee);
    }
}

class Employee {
    String name;
    String position;
    int salary;

    Employee(String name, String position, int salary) {
        this.name = name;
        this.position = position;
        this.salary = salary;
    }

    @Override
    public String toString() {
        return "[Name: " + name + ", Position: " + position + ", Salary: $" + salary + "]";
    }
}
