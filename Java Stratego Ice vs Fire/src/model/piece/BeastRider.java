package model.piece;

import model.piece.Piece;

public class BeastRider extends Piece {

    public BeastRider(String colour) {
        super.setName("beastRider"+colour);
        super.setRank(7);
        super.setCanMove(true);
        super.setColour(colour);
        super.setIcon(super.getName()+".png");
    }
}
