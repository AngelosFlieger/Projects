package model.piece;

import model.piece.Piece;

public class Elf extends Piece {

        public Elf(String colour) {
            super.setName("elf"+colour);
            super.setRank(4);
            super.setCanMove(true);
            super.setColour(colour);
            super.setIcon(super.getName()+".png");
        }
    }


