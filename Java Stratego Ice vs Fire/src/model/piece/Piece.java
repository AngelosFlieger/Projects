package model.piece;

import javax.swing.*;

public abstract class Piece {
    private int rank, position, x, y;
    private String name;
    private boolean canMove;
    private String colour;
    private Icon icon;
    /**
     * <b>Constructor</b>: Constructs a new model.piece.Piece
     */
    public Piece(String name, int rank, boolean canMove, String colour, String icon){this.colour = colour;}
    public Piece(){}


    public void setName(String name) {this.name=name;}

    public String getName() {return this.name;}

    public void setRank(int rank) {this.rank=rank;}

    public int getRank() {return this.rank;}

    public void setCanMove(boolean canMove) {}

    public boolean getCanMove() {return canMove;}

    public void setColour(String colour){this.colour = colour;}

    public String getColour(){return colour;}

    public void setIcon(String icon){this.icon = new ImageIcon(icon);}

    public Icon getIcon(){return icon;}


}