import java.security.SecureRandom;
import java.util.Arrays;

public class OneTimePadEncryption {

    public static void main(String[] args) {
        String message = "MY NAME IS UNKNOWN";
        byte[] plaintext = message.getBytes();

        // Generate a truly random key of the same length
        byte[] key = new byte[plaintext.length];
        new SecureRandom().nextBytes(key);

        // Encrypt using XOR
        byte[] ciphertext = xorBytes(plaintext, key);

        // Decrypt using XOR again
        byte[] decrypted = xorBytes(ciphertext, key);

        System.out.println("Original Message: " + message);
        System.out.println("Key (bytes): " + Arrays.toString(key));
        System.out.println("Encrypted (bytes): " + Arrays.toString(ciphertext));
        System.out.println("Decrypted Message: " + new String(decrypted));
    }

    private static byte[] xorBytes(byte[] data, byte[] key) {
        byte[] result = new byte[data.length];
        for (int i = 0; i < data.length; i++) {
            result[i] = (byte) (data[i] ^ key[i]);
        }
        return result;
    }
}
