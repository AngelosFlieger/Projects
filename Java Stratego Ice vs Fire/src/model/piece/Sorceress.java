package model.piece;

import model.piece.Piece;

public class Sorceress extends Piece {

        public Sorceress(String colour) {
            super.setName("sorceress"+colour);
            super.setRank(6);
            super.setCanMove(true);
            super.setColour(colour);
            super.setIcon(super.getName()+".png");
        }
    }

