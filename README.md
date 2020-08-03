# Brainfuck

>Brainfuck is an esoteric programming language created in 1993 by Urban Müller.
>
>Notable for its extreme minimalism, the language consists of only eight simple commands and an instruction pointer. While it is fully Turing complete, it is not intended for practical use, but to challenge and amuse programmers. Brainfuck simply requires one to break commands into microscopic steps.
>
>The language's name is a reference to the slang term brainfuck, which refers to things so complicated or unusual that they exceed the limits of one's understanding.

https://en.wikipedia.org/wiki/Brainfuck


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
