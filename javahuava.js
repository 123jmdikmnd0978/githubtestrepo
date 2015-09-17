 ;; tictactoe.el --play tic tac toe in Emacs

(defun tictactoe ()
  "Start playing tic tac toe"
   (interactive)
   (switch-to-buffer "tictactoe"))
   (tictactoe-init))

(defun tictactoe-init ()
  "Start a new game of tic tac toe."
  (setq *tictactoe-board* (make vector 9)

(defvar *tictactoe-boar* nil
  "The board itself.") 
