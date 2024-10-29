package Controller;

import model.board.Board;
import model.player.Player;
import view.Graphics;

public class Controller {
    private Player player1, player2;
    private Board board;
    public Controller(String name1, String name2) {
        player1 = new Player("B", "Blue model.player.Player");
        player2 = new Player("R", "Red model.player.Player");
        board = new Board();
    }
    public static void main(String[] args) {
        new Graphics();
    }
}