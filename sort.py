#!/usr/bin/python3

# Take in standard user input and add it to the wordlist, can be optimized by not printing the prompt between words #
wordlist = []
while True:
        try:
                wordlist.append(input())
        except EOFError:
                wordlist_str = '\n'.join(wordlist)

                break


# Placeholder for the main sort logic to call the child functions #
def sort(wordlist):
        splitwords = list(split(wordlist, 1))
        
        while len(splitwords) > 1:
                groups = len(splitwords)
                i = 1
                while len(splitwords) > ((groups / 2) + (groups % 2)):
                        splitwords.append(merge(splitwords[0], splitwords[1]))
                        splitwords.remove(splitwords[0])
                        splitwords.remove(splitwords[0])
        return splitwords
               
                        
# Splits a list into groups of n #
def split(wordlist, n):
    for x in range(0, len(wordlist), n):
        every_chunk = wordlist[x: n+x]

        if len(every_chunk) < n:
            every_chunk = every_chunk + \
                [None for y in range(n-len(every_chunk))]
        yield every_chunk

# Merges two, pre sorted lists into one sorted list #
def merge(left, right):
        output = []
        while(len(left) > 0 and len(right) > 0):
                if (compare(left[0], right[0], 0)):
                        output.append(left[0])
                        left.remove(left[0])
                else:
                        output.append(right[0])
                        right.remove(right[0])
        if (len(left) > 0 and len(right) == 0):
                output.extend(left)
        elif (len(right) > 0 and len(left) == 0):
                output.extend(right)

        return output

# Compares two words and returns true if left, false if right, and true if same as it does not matter #
def compare(left, right, letter):
        left = left.lower()
        right = right.lower()
        if ((len(left) - 1) < letter):
                return True

        elif ((len(right) - 1) < letter):
                return False

        elif (left == right):
                return True

        elif (ord(left[letter]) < ord(right[letter])):
                return True

        elif (ord(left[letter]) > ord(right[letter])):
                return False
        
        elif (ord(left[letter]) == ord(right[letter])):
                return compare(left, right, letter + 1)


print(sort(wordlist))
