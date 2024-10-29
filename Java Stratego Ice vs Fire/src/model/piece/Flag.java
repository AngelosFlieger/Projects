package model.piece;

import model.piece.Piece;

public class Flag extends Piece {

    public Flag(String colour) {
        super.setName("flag"+colour);
        super.setRank(0);
        super.setCanMove(true);
        super.setColour(colour);
        super.setIcon(super.getName()+".png");
    }
}






