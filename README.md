# oio

oio is an esoteric programming language based on Brainfuck. You can only use 0 or 1 in this language.

# Commands

Character | Meaning
:-------: | -------
000       | increment the data pointer (to point to the next cell to the right).
001       | decrement the data pointer (to point to the next cell to the left).
010       | increment (increase by one) the byte at the data pointer.
011       | decrement (decrease by one) the byte at the data pointer.
100       | output the byte at the data pointer.
110       | if the byte at the data pointer is zero, then instead of moving the instruction pointer forward to the next command, jump it forward to the command after the matching ] command.
111       | if the byte at the data pointer is nonzero, then instead of moving the instruction pointer forward to the next command, jump it back to the command after the matching [ command.

<!-- 
101       | accept one byte of input, storing its value in the byte at the data pointer.
 -->
