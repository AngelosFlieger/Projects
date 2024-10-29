package model.board;

import model.piece.*;
import model.piece.Piece;
import java.util.*;

public class Board extends Piece {
    static int posx=0, posy=0;
    ArrayList <Piece> blueAll = new ArrayList<>();
    ArrayList <Piece> redAll = new ArrayList<>();
    Piece[][] Table;
    public Board() {
        Table = new Piece[10][8];
    }
    public Piece getPiece(int x, int y) {
        return Table[x][y];
    }
    public void setPiece(Piece piece, int x, int y) {
        Table[x][y] = piece;
    }
    public void deletePiece(int x, int y) {
        Table[x][y] = null;
    }
    public List<Piece> getBlueList() {
        return blueAll;
    }
    public List<Piece> getRedList() {
        return redAll;
    }
    public void initBluePiece(){

        blueAll.add(new Dragon("B"));
        blueAll.add(new Mage("B"));
        blueAll.add(new Knight("B"));
        blueAll.add(new Knight("B"));
        blueAll.add(new BeastRider("B"));
        blueAll.add(new BeastRider("B"));
        blueAll.add(new BeastRider("B"));
        blueAll.add(new Sorceress("B"));
        blueAll.add(new Sorceress("B"));
        blueAll.add(new Yeti("B"));
        blueAll.add(new Yeti("B"));
        blueAll.add(new Elf("B"));
        blueAll.add(new Elf("B"));
        blueAll.add(new Dwarf("B"));
        blueAll.add(new Dwarf("B"));
        blueAll.add(new Dwarf("B"));
        blueAll.add(new Dwarf("B"));
        blueAll.add(new Dwarf("B"));
        blueAll.add(new Scout("B"));
        blueAll.add(new Scout("B"));
        blueAll.add(new Scout("B"));
        blueAll.add(new Scout("B"));
        blueAll.add(new Slayer("B"));
        blueAll.add(new Trap("B"));
        blueAll.add(new Trap("B"));
        blueAll.add(new Trap("B"));
        blueAll.add(new Trap("B"));
        blueAll.add(new Trap("B"));
        blueAll.add(new Trap("B"));
        blueAll.add(new Flag("B"));
    }

    public void initRedPiece(){

        redAll.add(new Dragon("R"));
        redAll.add(new Mage("R"));
        redAll.add(new Knight("R"));
        redAll.add(new Knight("R"));
        redAll.add(new BeastRider("R"));
        redAll.add(new BeastRider("R"));
        redAll.add(new BeastRider("R"));
        redAll.add(new Sorceress("R"));
        redAll.add(new Sorceress("R"));
        redAll.add(new LavaBeast("R"));
        redAll.add(new LavaBeast("R"));
        redAll.add(new Elf("R"));
        redAll.add(new Elf("R"));
        redAll.add(new Dwarf("R"));
        redAll.add(new Dwarf("R"));
        redAll.add(new Dwarf("R"));
        redAll.add(new Dwarf("R"));
        redAll.add(new Dwarf("R"));
        redAll.add(new Scout("R"));
        redAll.add(new Scout("R"));
        redAll.add(new Scout("R"));
        redAll.add(new Scout("R"));
        redAll.add(new Slayer("R"));
        redAll.add(new Trap("R"));
        redAll.add(new Trap("R"));
        redAll.add(new Trap("R"));
        redAll.add(new Trap("R"));
        redAll.add(new Trap("R"));
        redAll.add(new Trap("R"));
        redAll.add(new Flag("R"));
    }
}