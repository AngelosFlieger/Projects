package model.piece;

import model.piece.Piece;

public class Trap extends Piece {

    public Trap(String colour) {
        super.setName("trap"+colour);
        super.setRank(100);
        super.setCanMove(true);
        super.setColour(colour);
        super.setIcon(super.getName()+".png");
    }
}






