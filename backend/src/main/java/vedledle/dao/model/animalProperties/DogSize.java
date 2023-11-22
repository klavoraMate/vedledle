package vedledle.dao.model.animalProperties;

public enum DogSize {
    SMALL(20),
    MEDIUM(40),
    LARGE(60);
    private final int groomingTime;
    DogSize(int groomingTime){
        this.groomingTime = groomingTime;
    }

    public int getGroomingTime() {
        return groomingTime;
    }

    @Override
    public String toString() {
        return name().toLowerCase();
    }
}
