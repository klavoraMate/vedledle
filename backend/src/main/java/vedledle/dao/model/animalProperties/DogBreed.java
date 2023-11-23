package vedledle.dao.model.animalProperties;

import lombok.Getter;

/**
 * The {@code DogBreed} enum represents different breeds of dogs, each associated with a grooming time.
 */
@Getter
public enum DogBreed {
    LABRADOR_RETRIEVER(30),
    GERMAN_SHEPHERD(45),
    GOLDEN_RETRIEVER(35),
    BEAGLE(20),
    BULLDOG(25),
    POODLE(40),
    BOXER(30),
    DACHSHUND(15),
    SHIH_TZU(25),
    SIBERIAN_HUSKY(50),
    CHIHUAHUA(10);

    /**
     * The grooming time required for the dog breed, in minutes.
     */
    private final int groomingTime;

    /**
     * Constructs a new {@code DogBreed} enum constant with the specified grooming time.
     *
     * @param groomingTime The grooming time required for the dog breed, in minutes.
     */ 
    DogBreed(int groomingTime) {
        this.groomingTime = groomingTime;
    }

    /**
     * Generates a human-readable string representation of the dog breed's name.
     *
     * @return A formatted string representing the dog breed's name.
     */
    @Override
    public String toString() {
        String[] words = name().toLowerCase().split("_");
        StringBuilder result = new StringBuilder();

        for (String word : words) {
            result.append(word.substring(0, 1).toUpperCase()).append(word.substring(1)).append(" ");
        }

        return result.toString().trim();
    }
}
