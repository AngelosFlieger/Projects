package model.piece;

import model.piece.Piece;

public class Yeti extends Piece {

        public Yeti(String colour) {
            super.setName("yeti");
            super.setRank(5);
            super.setCanMove(true);
            super.setColour(colour);
            super.setIcon(super.getName()+".png");
        }
    }

