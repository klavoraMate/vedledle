package vedledle.dog.dto;

import vedledle.dog.Dog;

import java.util.Objects;

public final class DogDTO {
    private final String name;
    private final String breed;
    private final int age;

    public DogDTO(Dog dog){
        this.name = dog.name();
        this.breed = dog.breed();
        this.age = dog.age();
    }

    public String getName() {
        return name;
    }

    public String getBreed() {
        return breed;
    }

    public int getAge() {
        return age;
    }

    @Override
    public boolean equals(Object obj) {
        if (obj == this) return true;
        if (obj == null || obj.getClass() != this.getClass()) return false;
        var that = (DogDTO) obj;
        return Objects.equals(this.name, that.name) &&
                Objects.equals(this.breed, that.breed) &&
                this.age == that.age;
    }

    @Override
    public int hashCode() {
        return Objects.hash(name, breed, age);
    }

    @Override
    public String toString() {
        return "DogDTO[" +
                "name=" + name + ", " +
                "breed=" + breed + ", " +
                "age=" + age + ']';
    }

}
