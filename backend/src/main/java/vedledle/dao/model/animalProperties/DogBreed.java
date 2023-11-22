package vedledle.dao.model.animalProperties;

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
    private final int groomingTime;

    DogBreed(int groomingTime) {
        this.groomingTime = groomingTime;
    }

    public int getGroomingTime() {
        return groomingTime;
    }

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
