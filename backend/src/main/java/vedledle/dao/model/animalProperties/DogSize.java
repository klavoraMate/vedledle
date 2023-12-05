package vedledle.dao.model.animalProperties;

import lombok.Getter;

/**
 * The {@code DogSize} enum represents different sizes of dogs, each associated with a grooming time.
 */
public enum DogSize implements AnimalProperty {
    SMALL(20),
    MEDIUM(40),
    LARGE(60);
    /**
     * The grooming time required for the dog size, in minutes.
     */
    private final int groomingTime;

    /**
     * Constructs a new {@code DogSize} enum constant with the specified grooming time.
     *
     * @param groomingTime The grooming time required for the dog size, in minutes.
     */
    DogSize(int groomingTime) {
        this.groomingTime = groomingTime;
    }

    @Override
    public int getGroomingTime() {
        return groomingTime;
    }

    /**
     * Generates a lowercase string representation of the dog size's name.
     *
     * @return A string representing the dog size's name in lowercase.
     */
    @Override
    public String toString() {
        return name().toLowerCase();
    }


}
