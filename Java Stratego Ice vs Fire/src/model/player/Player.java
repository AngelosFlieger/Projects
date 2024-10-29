package model.player;

public class Player {
    final private String colour;
    final private String name;
    public Player(String colour, String name) {
        this.colour = colour;
        this.name = name;
    }
    public String getName() {
        return name;
    }
    public String getColour() {
        return colour;
    }
}
