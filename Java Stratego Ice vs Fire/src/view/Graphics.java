package view;

import model.board.Board;
import model.piece.Piece;
import javax.swing.*;
import javax.swing.border.Border;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.util.ArrayList;


public class Graphics extends JFrame {

    private JFrame main;
    private JButton[][] Cell;
    private JPanel NJPanel;
    private JPanel player1, player2, tiles;
    private Piece piece;
    private JTextArea infoBox, infoBox2, infoBox3, infoBox4, infoBox5, infoBox6, infoBox7, infoBox8;
    private JPanel frame;
    static int n=0,t=0, turn=0;
    private int lastpos=0;
    private ArrayList<String> paths = new ArrayList<String>();
    static boolean flag1=false;
    static boolean flag2=false;
    static int p=0;

    /***
     * constracts the games graphics and sets the turn of each player
     * moves the pieces while showing the player where they can move after clicking on the piece
     */
    public Graphics() {
        main = new JFrame("Stratego Ice Vs Fire");
        main.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        main.setSize(1920, 1080);
        main.setLayout(null);
        main.getContentPane().setBackground(Color.WHITE);
        tiles = new JPanel();
        tiles.setLayout(new GridLayout(5, 7));
        tiles.setPreferredSize(new Dimension(700, 500));
        Color c = new Color(90, 90, 90);
        tiles.setBackground(c);
        infoBox2 = new JTextArea(" ");
        infoBox2.setBounds(1000, 0, 400, 1080);
        infoBox2.setEditable(false);
        infoBox2.setBackground(Color.LIGHT_GRAY);
        infoBox = new JTextArea("Ενεργοί Κανόνες");
        infoBox.setBounds(1100, 0, 100, 30);
        infoBox.setEditable(false);
        infoBox.setBackground(Color.lightGray);
        infoBox3 = new JTextArea("   model.player.Player X turn\n\n   Ποσοστό επιτ. επίθεσης: XX%\n\n   Διασώσεις: X            Γύρος:Χ");
        infoBox3.setForeground(Color.white);
        infoBox3.setBounds(1050, 230, 200, 90);
        infoBox3.setEditable(false);
        infoBox3.setBackground(c);
        infoBox4 = new JTextArea("Στατιστικά");
        infoBox4.setBounds(1120, 200, 60, 30);
        infoBox4.setEditable(false);
        infoBox4.setBackground(Color.lightGray);
        infoBox5 = new JTextArea("Αιχμαλωτίσεις");
        infoBox5.setBounds(1110, 400, 75, 30);
        infoBox5.setEditable(false);
        infoBox5.setBackground(Color.lightGray);
        infoBox6 = new JTextArea(" \n\n\n\n\n\n\n\n\n\n\n\n\n\n    Συνολικές Αιχμαλωτήσεις: XX");
        infoBox6.setForeground(Color.white);
        infoBox6.setBounds(1050, 430, 200, 250);
        infoBox6.setEditable(false);
        infoBox6.setBackground(c);
        infoBox7 = new JTextArea(" ");
        infoBox7.setForeground(Color.white);
        infoBox7.setBounds(50, 50, 800, 600);
        infoBox7.setEditable(false);
        infoBox7.setBackground(c);
        JCheckBox checkBox1 = new JCheckBox("Μειωμένος Στρατός");
        checkBox1.setBounds(1050, 30, 200, 30);
        JCheckBox checkBox2 = new JCheckBox("Καμία Υποχώρηση");
        checkBox2.setBounds(1050, 60, 200, 30);
        checkBox1.setForeground(Color.white);
        checkBox2.setForeground(Color.white);
        checkBox1.setBackground(c);
        checkBox2.setBackground(c);
        JButton[][] buttontile = new JButton[10][8];
        Board a = new Board();
        a.initBluePiece();
        a.initRedPiece();
        for (int i=0; i < 10; i++) {
            for (int j=0; j < 8; j++) {
                buttontile[i][j] = new JButton();
                buttontile[i][j].setBounds(80+i*50, 40+(j*70), 50, 70);
                if(i>1 && i<4 && j>2 && j<5 || i>5&& i<8 && j>2 && j<5) {
                    buttontile[i][j].setBackground(Color.YELLOW);
                    buttontile[i][j].setActionCommand("X");

                }else {
                    buttontile[i][j].setBackground(Color.white);
                    Border border = BorderFactory.createLineBorder(Color.BLACK, 2);
                    buttontile[i][j].setBorder(border);
                    int finalJ = j;
                    int finalI = i;

                }
                buttontile[i][j].setOpaque(true);
                main.add(buttontile[i][j]);
            }
            validate();
        }
        for (int j = 5; j < 8; j++) {
            for (int i = 0; i < 10; i++) {
                ImageIcon icon = new ImageIcon("images\\redPieces\\" + a.getRedList().get(n).getIcon());
                paths.add(a.getRedList().get(n).getIcon().toString());
                buttontile[i][j].setActionCommand(String.valueOf(n+30));
                buttontile[i][j].setIcon(icon);
                n++;
            }
        }
        n=0;
        if(turn==0) {
            for (int j = 0; j < 8; j++) {
                for (int i = 0; i < 10; i++) {
                    ImageIcon icon = new ImageIcon("images\\redPieces\\" + a.getRedList().get(n).getIcon());
                    int finalI = i;
                    int finalJ = j;
                    buttontile[i][j].addActionListener(new ActionListener() {
                        @Override
                        public void actionPerformed(ActionEvent e) {
                            int act = Integer.parseInt(buttontile[finalI][finalJ].getActionCommand());
                            if (turn==0 && act>=30) {
                                Border border = BorderFactory.createLineBorder(Color.GREEN, 2);
                                if (finalJ == 7) {
                                    if (finalI == 0) {
                                        if (buttontile[finalI + 1][finalJ].getIcon() == null) {
                                            buttontile[finalI + 1][finalJ].setBorder(border);
                                        }
                                        if (buttontile[finalI][finalJ - 1].getIcon() == null) {
                                            buttontile[finalI][finalJ - 1].setBorder(border);
                                        }
                                    } else if (finalI == 9) {
                                        if (buttontile[finalI - 1][finalJ].getIcon() == null) {
                                            buttontile[finalI - 1][finalJ].setBorder(border);
                                        }
                                        if (buttontile[finalI][finalJ - 1].getIcon() == null) {
                                            buttontile[finalI][finalJ - 1].setBorder(border);
                                        }
                                    } else {
                                        if (buttontile[finalI + 1][finalJ].getIcon() == null) {
                                            buttontile[finalI + 1][finalJ].setBorder(border);
                                        }
                                        if (buttontile[finalI - 1][finalJ].getIcon() == null) {
                                            buttontile[finalI - 1][finalJ].setBorder(border);
                                        }
                                        if (buttontile[finalI][finalJ - 1].getIcon() == null) {
                                            buttontile[finalI][finalJ - 1].setBorder(border);
                                        }
                                    }
                                } else if (finalJ == 0) {
                                    if (finalI == 0) {
                                        if (buttontile[finalI + 1][finalJ].getIcon() == null) {
                                            buttontile[finalI + 1][finalJ].setBorder(border);
                                        }
                                        if (buttontile[finalI][finalJ + 1].getIcon() == null) {
                                            buttontile[finalI][finalJ + 1].setBorder(border);
                                        }
                                    } else if (finalI == 9) {
                                        if (buttontile[finalI - 1][finalJ].getIcon() == null) {
                                            buttontile[finalI - 1][finalJ].setBorder(border);
                                        }
                                        if (buttontile[finalI][finalJ + 1].getIcon() == null) {
                                            buttontile[finalI][finalJ + 1].setBorder(border);
                                        }
                                    } else {
                                        if (buttontile[finalI - 1][finalJ].getIcon() == null) {
                                            buttontile[finalI - 1][finalJ].setBorder(border);
                                        }
                                        if (buttontile[finalI + 1][finalJ].getIcon() == null) {
                                            buttontile[finalI + 1][finalJ].setBorder(border);
                                        }
                                        if (buttontile[finalI][finalJ + 1].getIcon() == null) {
                                            buttontile[finalI][finalJ + 1].setBorder(border);
                                        }
                                    }
                                } else if (finalI == 9 && finalJ > 0 && finalJ < 7) {
                                    if (buttontile[finalI - 1][finalJ].getIcon() == null) {
                                        buttontile[finalI - 1][finalJ].setBorder(border);
                                    }
                                    if (buttontile[finalI][finalJ + 1].getIcon() == null) {
                                        buttontile[finalI][finalJ + 1].setBorder(border);
                                    }
                                    if (buttontile[finalI][finalJ - 1].getIcon() == null) {
                                        buttontile[finalI][finalJ - 1].setBorder(border);
                                    }
                                } else if (finalI == 0 && finalJ > 0 && finalJ < 7) {
                                    if (buttontile[finalI + 1][finalJ].getIcon() == null) {
                                        buttontile[finalI + 1][finalJ].setBorder(border);
                                    }
                                    if (buttontile[finalI][finalJ + 1].getIcon() == null) {
                                        buttontile[finalI][finalJ + 1].setBorder(border);
                                    }
                                    if (buttontile[finalI][finalJ - 1].getIcon() == null) {
                                        buttontile[finalI][finalJ - 1].setBorder(border);
                                    }
                                } else {
                                    if (buttontile[finalI - 1][finalJ].getIcon() == null) {
                                        buttontile[finalI - 1][finalJ].setBorder(border);
                                    }
                                    if (buttontile[finalI + 1][finalJ].getIcon() == null) {
                                        buttontile[finalI + 1][finalJ].setBorder(border);
                                    }
                                    if (buttontile[finalI][finalJ - 1].getIcon() == null) {
                                        buttontile[finalI][finalJ - 1].setBorder(border);
                                    }
                                    if (buttontile[finalI][finalJ + 1].getIcon() == null) {
                                        buttontile[finalI][finalJ + 1].setBorder(border);
                                    }
                                }
                                if (finalJ > 0) {
                                    buttontile[finalI][finalJ - 1].addActionListener(new ActionListener() {
                                        @Override
                                        public void actionPerformed(ActionEvent e) {
                                            String check = (buttontile[finalI][finalJ - 1].getActionCommand());
                                            if (buttontile[finalI][finalJ - 1].getIcon() == null && buttontile[finalI][finalJ].getIcon() != null && (check.equals("X") == false)) {
                                                int act = Integer.parseInt(buttontile[finalI][finalJ].getActionCommand());
                                                ImageIcon icon = new ImageIcon("images\\redPieces\\" + a.getRedList().get(act-30).getIcon());
                                                buttontile[finalI][finalJ - 1].setIcon(icon);
                                                buttontile[finalI][finalJ - 1].setActionCommand(String.valueOf(act));
                                                buttontile[finalI][finalJ].setIcon(null);
                                                turn = 1;
                                                for (int m = 0; m < 10; m++) {
                                                    for (int n = 0; n < 8; n++) {
                                                        if (m > 1 && m < 4 && n > 2 && n < 5 || m > 5 && m < 8 && n > 2 && n < 5) {
                                                        } else {
                                                            Border border3 = BorderFactory.createLineBorder(null);
                                                            buttontile[m][n].setBorder(border3);
                                                            Border border2 = BorderFactory.createLineBorder(Color.BLACK, 2);
                                                            buttontile[m][n].setBorder(border2);
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    });
                                }
                                if (finalJ < 7) {
                                    buttontile[finalI][finalJ + 1].addActionListener(new ActionListener() {
                                        @Override
                                        public void actionPerformed(ActionEvent e) {
                                            String check = (buttontile[finalI][finalJ + 1].getActionCommand());
                                            if (buttontile[finalI][finalJ + 1].getIcon() == null && buttontile[finalI][finalJ].getIcon() != null && (check.equals("X") == false)) {
                                                int act = Integer.parseInt(buttontile[finalI][finalJ].getActionCommand());
                                                ImageIcon icon = new ImageIcon("images\\redPieces\\" + a.getRedList().get(act-30).getIcon());
                                                buttontile[finalI][finalJ + 1].setIcon(icon);
                                                buttontile[finalI][finalJ + 1].setActionCommand(String.valueOf(act));
                                                buttontile[finalI][finalJ].setIcon(null);
                                                turn = 1;
                                                for (int m = 0; m < 10; m++) {
                                                    for (int n = 0; n < 8; n++) {
                                                        if (m > 1 && m < 4 && n > 2 && n < 5 || m > 5 && m < 8 && n > 2 && n < 5) {
                                                        } else {
                                                            Border border3 = BorderFactory.createLineBorder(null);
                                                            buttontile[m][n].setBorder(border3);
                                                            Border border2 = BorderFactory.createLineBorder(Color.BLACK, 2);
                                                            buttontile[m][n].setBorder(border2);
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    });
                                }
                                if (finalI < 9) {
                                    buttontile[finalI + 1][finalJ].addActionListener(new ActionListener() {
                                        @Override
                                        public void actionPerformed(ActionEvent e) {
                                            String check = (buttontile[finalI + 1][finalJ].getActionCommand());
                                            if (buttontile[finalI + 1][finalJ].getIcon() == null && buttontile[finalI][finalJ].getIcon() != null && (check.equals("X") == false)) {
                                                int act = Integer.parseInt(buttontile[finalI][finalJ].getActionCommand());
                                                ImageIcon icon = new ImageIcon("images\\redPieces\\" + a.getRedList().get(act-30).getIcon());
                                                buttontile[finalI + 1][finalJ].setIcon(icon);
                                                buttontile[finalI + 1][finalJ].setActionCommand(String.valueOf(act));
                                                buttontile[finalI][finalJ].setIcon(null);
                                                turn = 1;
                                                for (int m = 0; m < 10; m++) {
                                                    for (int n = 0; n < 8; n++) {
                                                        if (m > 1 && m < 4 && n > 2 && n < 5 || m > 5 && m < 8 && n > 2 && n < 5) {
                                                        } else {
                                                            Border border3 = BorderFactory.createLineBorder(null);
                                                            buttontile[m][n].setBorder(border3);
                                                            Border border2 = BorderFactory.createLineBorder(Color.BLACK, 2);
                                                            buttontile[m][n].setBorder(border2);
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    });
                                }
                                if (finalI > 0) {
                                    buttontile[finalI - 1][finalJ].addActionListener(new ActionListener() {
                                        @Override
                                        public void actionPerformed(ActionEvent e) {

                                            String check = (buttontile[finalI - 1][finalJ].getActionCommand());
                                            if (buttontile[finalI - 1][finalJ].getIcon() == null && buttontile[finalI][finalJ].getIcon() != null && (check.equals("X") == false)) {
                                                int act = Integer.parseInt(buttontile[finalI][finalJ].getActionCommand());
                                                ImageIcon icon = new ImageIcon("images\\redPieces\\" + a.getRedList().get(act-30).getIcon());
                                                buttontile[finalI - 1][finalJ].setIcon(icon);
                                                buttontile[finalI - 1][finalJ].setActionCommand(String.valueOf(act));
                                                buttontile[finalI][finalJ].setIcon(null);
                                                turn = 1;
                                                for (int m = 0; m < 10; m++) {
                                                    for (int n = 0; n < 8; n++) {
                                                        if (m > 1 && m < 4 && n > 2 && n < 5 || m > 5 && m < 8 && n > 2 && n < 5) {
                                                        } else {
                                                            Border border3 = BorderFactory.createLineBorder(null);
                                                            buttontile[m][n].setBorder(border3);
                                                            Border border2 = BorderFactory.createLineBorder(Color.BLACK, 2);
                                                            buttontile[m][n].setBorder(border2);
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    });
                                }
                            }
                        }

                    });
                    //}
                    if (n < 29) {
                        n++;
                    }
                }
            }
        }
        n=0;
            for (int j = 0; j < 3; j++) {
                for (int i = 0; i < 10; i++) {
                    ImageIcon icon = new ImageIcon("images\\bluePieces\\" + a.getBlueList().get(n).getIcon());
                    paths.add(a.getRedList().get(n).getIcon().toString());
                    buttontile[i][j].setActionCommand(String.valueOf(n));
                    buttontile[i][j].setIcon(icon);
                    n++;
                }
            }
            n = 0;
            for (int j = 0; j < 8; j++) {
                for (int i = 0; i < 10; i++) {
                    int finalI = i;
                    int finalJ = j;
                    buttontile[i][j].addActionListener(new ActionListener() {
                        @Override
                        public void actionPerformed(ActionEvent e) {
                            int act = Integer.parseInt(buttontile[finalI][finalJ].getActionCommand());
                            if(turn==1 && act<30) {
                                Border border = BorderFactory.createLineBorder(Color.GREEN, 2);
                                if (finalJ == 7) {
                                    if (finalI == 0) {
                                        if (buttontile[finalI + 1][finalJ].getIcon() == null) {
                                            buttontile[finalI + 1][finalJ].setBorder(border);
                                        }
                                        if (buttontile[finalI][finalJ - 1].getIcon() == null) {
                                            buttontile[finalI][finalJ - 1].setBorder(border);
                                        }
                                    } else if (finalI == 9) {
                                        if (buttontile[finalI - 1][finalJ].getIcon() == null) {
                                            buttontile[finalI - 1][finalJ].setBorder(border);
                                        }
                                        if (buttontile[finalI][finalJ - 1].getIcon() == null) {
                                            buttontile[finalI][finalJ - 1].setBorder(border);
                                        }
                                    } else {
                                        if (buttontile[finalI + 1][finalJ].getIcon() == null) {
                                            buttontile[finalI + 1][finalJ].setBorder(border);
                                        }
                                        if (buttontile[finalI - 1][finalJ].getIcon() == null) {
                                            buttontile[finalI - 1][finalJ].setBorder(border);
                                        }
                                        if (buttontile[finalI][finalJ - 1].getIcon() == null) {
                                            buttontile[finalI][finalJ - 1].setBorder(border);
                                        }
                                    }
                                } else if (finalJ == 0) {
                                    if (finalI == 0) {
                                        if (buttontile[finalI + 1][finalJ].getIcon() == null) {
                                            buttontile[finalI + 1][finalJ].setBorder(border);
                                        }
                                        if (buttontile[finalI][finalJ + 1].getIcon() == null) {
                                            buttontile[finalI][finalJ + 1].setBorder(border);
                                        }
                                    } else if (finalI == 9) {
                                        if (buttontile[finalI - 1][finalJ].getIcon() == null) {
                                            buttontile[finalI - 1][finalJ].setBorder(border);
                                        }
                                        if (buttontile[finalI][finalJ + 1].getIcon() == null) {
                                            buttontile[finalI][finalJ + 1].setBorder(border);
                                        }
                                    } else {
                                        if (buttontile[finalI - 1][finalJ].getIcon() == null) {
                                            buttontile[finalI - 1][finalJ].setBorder(border);
                                        }
                                        if (buttontile[finalI + 1][finalJ].getIcon() == null) {
                                            buttontile[finalI + 1][finalJ].setBorder(border);
                                        }
                                        if (buttontile[finalI][finalJ + 1].getIcon() == null) {
                                            buttontile[finalI][finalJ + 1].setBorder(border);
                                        }
                                    }
                                } else if (finalI == 9 && finalJ > 0 && finalJ < 7) {
                                    if (buttontile[finalI - 1][finalJ].getIcon() == null) {
                                        buttontile[finalI - 1][finalJ].setBorder(border);
                                    }
                                    if (buttontile[finalI][finalJ + 1].getIcon() == null) {
                                        buttontile[finalI][finalJ + 1].setBorder(border);
                                    }
                                    if (buttontile[finalI][finalJ - 1].getIcon() == null) {
                                        buttontile[finalI][finalJ - 1].setBorder(border);
                                    }
                                } else if (finalI == 0 && finalJ > 0 && finalJ < 7) {
                                    if (buttontile[finalI + 1][finalJ].getIcon() == null) {
                                        buttontile[finalI + 1][finalJ].setBorder(border);
                                    }
                                    if (buttontile[finalI][finalJ + 1].getIcon() == null) {
                                        buttontile[finalI][finalJ + 1].setBorder(border);
                                    }
                                    if (buttontile[finalI][finalJ - 1].getIcon() == null) {
                                        buttontile[finalI][finalJ - 1].setBorder(border);
                                    }
                                } else {
                                    if (buttontile[finalI - 1][finalJ].getIcon() == null) {
                                        buttontile[finalI - 1][finalJ].setBorder(border);
                                    }
                                    if (buttontile[finalI + 1][finalJ].getIcon() == null) {
                                        buttontile[finalI + 1][finalJ].setBorder(border);
                                    }
                                    if (buttontile[finalI][finalJ - 1].getIcon() == null) {
                                        buttontile[finalI][finalJ - 1].setBorder(border);
                                    }
                                    if (buttontile[finalI][finalJ + 1].getIcon() == null) {
                                        buttontile[finalI][finalJ + 1].setBorder(border);
                                    }
                                }

                                buttontile[finalI][finalJ - 1].addActionListener(new ActionListener() {
                                    @Override
                                    public void actionPerformed(ActionEvent e) {
                                        String check = (buttontile[finalI][finalJ - 1].getActionCommand());
                                        if (buttontile[finalI][finalJ - 1].getIcon() == null && buttontile[finalI][finalJ].getIcon() != null && (check.equals("X") == false)) {
                                            int act = Integer.parseInt(buttontile[finalI][finalJ].getActionCommand());
                                            ImageIcon icon = new ImageIcon("images\\bluePieces\\" + a.getBlueList().get(act).getIcon());
                                            buttontile[finalI][finalJ - 1].setIcon(icon);
                                            buttontile[finalI][finalJ - 1].setActionCommand(String.valueOf(act));
                                            buttontile[finalI][finalJ].setIcon(null);
                                            turn = 0;
                                            for (int m = 0; m < 10; m++) {
                                                for (int n = 0; n < 8; n++) {
                                                    if (m > 1 && m < 4 && n > 2 && n < 5 || m > 5 && m < 8 && n > 2 && n < 5) {
                                                    } else {
                                                        Border border3 = BorderFactory.createLineBorder(null);
                                                        buttontile[m][n].setBorder(border3);
                                                        Border border2 = BorderFactory.createLineBorder(Color.BLACK, 2);
                                                        buttontile[m][n].setBorder(border2);
                                                    }
                                                }
                                            }
                                        }
                                    }
                                });
                                buttontile[finalI][finalJ + 1].addActionListener(new ActionListener() {
                                    @Override
                                    public void actionPerformed(ActionEvent e) {
                                        String check = (buttontile[finalI][finalJ + 1].getActionCommand());
                                        if (buttontile[finalI][finalJ + 1].getIcon() == null && buttontile[finalI][finalJ].getIcon() != null && (check.equals("X") == false)) {
                                            int act = Integer.parseInt(buttontile[finalI][finalJ].getActionCommand());
                                            ImageIcon icon = new ImageIcon("images\\bluePieces\\" + a.getBlueList().get(act).getIcon());
                                            buttontile[finalI][finalJ + 1].setIcon(icon);
                                            buttontile[finalI][finalJ + 1].setActionCommand(String.valueOf(act));
                                            buttontile[finalI][finalJ].setIcon(null);
                                            turn = 0;
                                            for (int m = 0; m < 10; m++) {
                                                for (int n = 0; n < 8; n++) {
                                                    if (m > 1 && m < 4 && n > 2 && n < 5 || m > 5 && m < 8 && n > 2 && n < 5) {
                                                    } else {
                                                        Border border3 = BorderFactory.createLineBorder(null);
                                                        buttontile[m][n].setBorder(border3);
                                                        Border border2 = BorderFactory.createLineBorder(Color.BLACK, 2);
                                                        buttontile[m][n].setBorder(border2);
                                                    }
                                                }
                                            }
                                        }
                                    }
                                });
                                buttontile[finalI + 1][finalJ].addActionListener(new ActionListener() {
                                    @Override
                                    public void actionPerformed(ActionEvent e) {
                                        String check = (buttontile[finalI + 1][finalJ].getActionCommand());
                                        if (buttontile[finalI + 1][finalJ].getIcon() == null && buttontile[finalI][finalJ].getIcon() != null && (check.equals("X") == false)) {
                                            int act = Integer.parseInt(buttontile[finalI][finalJ].getActionCommand());
                                            ImageIcon icon = new ImageIcon("images\\bluePieces\\" + a.getBlueList().get(act).getIcon());
                                            buttontile[finalI + 1][finalJ].setIcon(icon);
                                            buttontile[finalI + 1][finalJ].setActionCommand(String.valueOf(act));
                                            buttontile[finalI][finalJ].setIcon(null);
                                            turn = 0;
                                            for (int m = 0; m < 10; m++) {
                                                for (int n = 0; n < 8; n++) {
                                                    if (m > 1 && m < 4 && n > 2 && n < 5 || m > 5 && m < 8 && n > 2 && n < 5) {
                                                    } else {
                                                        Border border3 = BorderFactory.createLineBorder(null);
                                                        buttontile[m][n].setBorder(border3);
                                                        Border border2 = BorderFactory.createLineBorder(Color.BLACK, 2);
                                                        buttontile[m][n].setBorder(border2);
                                                    }
                                                }
                                            }
                                        }
                                    }
                                });
                                buttontile[finalI - 1][finalJ].addActionListener(new ActionListener() {
                                    @Override
                                    public void actionPerformed(ActionEvent e) {

                                        String check = (buttontile[finalI - 1][finalJ].getActionCommand());
                                        if (buttontile[finalI - 1][finalJ].getIcon() == null && buttontile[finalI][finalJ].getIcon() != null && (check.equals("X") == false)) {
                                            int act = Integer.parseInt(buttontile[finalI][finalJ].getActionCommand());
                                            ImageIcon icon = new ImageIcon("images\\bluePieces\\" + a.getBlueList().get(act).getIcon());
                                            buttontile[finalI - 1][finalJ].setIcon(icon);
                                            buttontile[finalI - 1][finalJ].setActionCommand(String.valueOf(act));
                                            buttontile[finalI][finalJ].setIcon(null);
                                            turn = 0;
                                            for (int m = 0; m < 10; m++) {
                                                for (int n = 0; n < 8; n++) {
                                                    if (m > 1 && m < 4 && n > 2 && n < 5 || m > 5 && m < 8 && n > 2 && n < 5) {
                                                    } else {
                                                        Border border3 = BorderFactory.createLineBorder(null);
                                                        buttontile[m][n].setBorder(border3);
                                                        Border border2 = BorderFactory.createLineBorder(Color.BLACK, 2);
                                                        buttontile[m][n].setBorder(border2);
                                                    }
                                                }
                                            }
                                        }
                                    }
                                });
                            }
                        }

                    });
                    //     }
                    if (n < 29) {
                        n++;
                    }
                }
            }

        main.add(checkBox1);
        main.add(checkBox2);
        main.add(infoBox);
        main.add(infoBox3);
        main.add(infoBox5);
        main.add(infoBox6);
        main.add(infoBox4);
        main.add(infoBox2);
        main.add(tiles);
        main.add(infoBox8);
        main.show();
    }
}