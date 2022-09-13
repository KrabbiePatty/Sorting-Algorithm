#!/usr/bin/python3

wordlist = []
while True:
        inp = input("Type Anything/ Press Enter: ")
        if inp == "":
                break
        wordlist.append(inp)
        
        print(wordlist)

print(ord(wordlist[0][0]))
