package io.github.tomekgadek.kata.password;

import lombok.AllArgsConstructor;
import lombok.experimental.FieldDefaults;

@AllArgsConstructor
@FieldDefaults(level = lombok.AccessLevel.PRIVATE, makeFinal = true)
public class StrengthValidator {

    int minLength;

    public PasswordOutcome validate(String password) {

        if(password == null || password.isEmpty()) {
            return PasswordOutcome.EMPTY;
        }

        if(password.length() < minLength) {
            return PasswordOutcome.TOO_SHORT;
        }

        return PasswordOutcome.STRONG;
    }
}
