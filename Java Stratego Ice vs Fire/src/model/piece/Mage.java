package model.piece;

import model.piece.Piece;

public class Mage extends Piece {
    public Mage(String colour) {
        super.setName("mage"+colour);
        super.setRank(9);
        super.setCanMove(true);
        super.setColour(colour);
        super.setIcon(super.getName()+".png");
    }

}
