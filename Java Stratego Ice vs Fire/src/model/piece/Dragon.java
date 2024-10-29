package model.piece;

import model.piece.Piece;

public class Dragon extends Piece {
    public Dragon(String colour) {
       // super("dragon", 10, true, colour, icon, x, y);
        super.setName("dragon"+colour);
        super.setRank(10);
        super.setCanMove(true);
        super.setColour(colour);
        super.setIcon(super.getName()+".png");
      //  super.setName("dragon");
      //  super(colour);
       // super.setIcon(super.getName()+"b.png");
    }
}