package model.piece;

import model.piece.Piece;

public class Knight extends Piece {

    public Knight(String colour) {
        super.setName("knight"+colour);
        super.setRank(8);
        super.setCanMove(true);
        super.setColour(colour);
        super.setIcon(super.getName()+".png");
    }
}
