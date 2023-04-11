package vedledle.client.dto;

import vedledle.client.Client;

import java.util.Objects;

public final class ClientDTO {
    private final String name;
    private final int dogId;

    public ClientDTO(Client client) {
        this.name = client.name();
        this.dogId = client.dogId();
    }

    public String getName() {
        return name;
    }

    public int getDogId() {
        return dogId;
    }

    @Override
    public boolean equals(Object obj) {
        if (obj == this) return true;
        if (obj == null || obj.getClass() != this.getClass()) return false;
        var that = (ClientDTO) obj;
        return Objects.equals(this.name, that.name) &&
                this.dogId == that.dogId;
    }

    @Override
    public int hashCode() {
        return Objects.hash(name, dogId);
    }

    @Override
    public String toString() {
        return "ClientDTO[" +
                "name=" + name + ", " +
                "dogId=" + dogId + ']';
    }

}
