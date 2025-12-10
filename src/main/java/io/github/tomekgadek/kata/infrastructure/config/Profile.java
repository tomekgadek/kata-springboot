package io.github.tomekgadek.kata.infrastructure.config;

public enum Profile {

    PROD("prod"),
    DEV("dev"),
    TEST("test"),
    INTEGRATION("integration"),
    LOCAL("local");

    private final String profile;

    Profile(String profile) {
        this.profile = profile;
    }

    public String getProfile() {
        return profile;
    }

    public static Profile fromProfile(String value) {

        for (Profile p : values()) {
            if (p.profile.equalsIgnoreCase(value)) {
                return p;
            }
        }

        throw new IllegalArgumentException("Unknown profile: " + value);
    }
}
