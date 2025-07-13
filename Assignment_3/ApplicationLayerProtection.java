import javax.servlet.http.*;
import javax.servlet.annotation.WebServlet;
import java.io.IOException;

@WebServlet("/login")
public class SecureLoginServlet extends HttpServlet {

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws IOException {
        // Sanitize user inputs
        String username = sanitizeInput(request.getParameter("username"));
        String password = sanitizeInput(request.getParameter("password"));

        if (authenticate(username, password)) {
            // Generate a secure session
            HttpSession session = request.getSession(true);
            session.setAttribute("username", username);
            session.setMaxInactiveInterval(15 * 60); // 15 minutes

            response.getWriter().write("Welcome, " + escapeHtml(username));
        } else {
            response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "Invalid credentials");
        }
    }

    private boolean authenticate(String user, String pass) {
        // Simulate password validation (use hashed passwords in production)
        return "admin".equals(user) && "SecurePass123".equals(pass);
    }

    private String sanitizeInput(String input) {
        return input == null ? "" : input.replaceAll("[<>\"'&]", "");
    }

    private String escapeHtml(String input) {
        return input == null ? "" : input.replaceAll("&", "&amp;")
                .replaceAll("<", "&lt;")
                .replaceAll(">", "&gt;");
    }
}
