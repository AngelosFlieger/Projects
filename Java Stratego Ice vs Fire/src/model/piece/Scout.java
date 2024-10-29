package model.piece;

import model.piece.Piece;

public class Scout extends Piece {

        public Scout(String colour) {
            super.setName("scout"+colour);
            super.setRank(2);
            super.setCanMove(true);
            super.setColour(colour);
            super.setIcon(super.getName()+".png");
        }
    }




