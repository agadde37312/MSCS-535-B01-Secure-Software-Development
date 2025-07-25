import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

class SafeFileReader {

    public static void main(String[] args) {
        String filePath = "data.txt"; // Assume this file may or may not exist

        BufferedReader reader = null;

        try {
            reader = new BufferedReader(new FileReader(filePath));
            String line;

            while ((line = reader.readLine()) != null) {
                System.out.println(line);
            }

        } catch (IOException e) {
            System.err.println("Error reading the file: " + e.getMessage());
        } finally {
            // Ensure the resource is closed to avoid memory leaks
            try {
                if (reader != null) {
                    reader.close();
                }
            } catch (IOException ex) {
                System.err.println("Error closing the file: " + ex.getMessage());
            }
        }
    }
}