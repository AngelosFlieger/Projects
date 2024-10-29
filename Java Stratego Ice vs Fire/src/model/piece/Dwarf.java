package model.piece;

import model.piece.Piece;

public class Dwarf extends Piece {

    public Dwarf(String colour) {
        super.setName("dwarf"+colour);
        super.setRank(3);
        super.setCanMove(true);
        super.setColour(colour);
        super.setIcon(super.getName()+".png");
    }
}



