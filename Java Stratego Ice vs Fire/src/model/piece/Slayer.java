package model.piece;

import model.piece.Piece;

public class Slayer extends Piece {

    public Slayer(String colour) {
        super.setName("slayer"+colour);
        super.setRank(1);
        super.setCanMove(true);
        super.setColour(colour);
        super.setIcon(super.getName()+".png");
    }
}





