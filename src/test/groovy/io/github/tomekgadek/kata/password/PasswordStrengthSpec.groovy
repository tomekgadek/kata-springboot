package io.github.tomekgadek.kata.password

import spock.lang.Specification
import spock.lang.Unroll

class PasswordStrengthSpec extends Specification {

    static int MIN_PASSWORD_LENGTH = 8
    def validator = new StrengthValidator(MIN_PASSWORD_LENGTH);

    @Unroll
    def "#password as a password is #outcome"() {
        expect:
            validator.validate(password) == outcome
        where:
            password                        | outcome
            '1@#*)%gy@1'                    | PasswordOutcome.STRONG
            null                            | PasswordOutcome.EMPTY
            ''                              | PasswordOutcome.EMPTY
            '$' * (MIN_PASSWORD_LENGTH - 1) | PasswordOutcome.TOO_SHORT
            '$' * MIN_PASSWORD_LENGTH       | PasswordOutcome.STRONG
    }
}
