package model.piece;

import model.piece.Piece;

public class LavaBeast extends Piece {

    public LavaBeast(String colour) {
        super.setName("lavaBeast");
        super.setRank(5);
        super.setCanMove(true);
        super.setColour(colour);
        super.setIcon(super.getName()+".png");
    }
}


