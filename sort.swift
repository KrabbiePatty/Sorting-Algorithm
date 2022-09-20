import Foundation




/* get standard imput */
var wordlist:[String] = []

/*might not work
  */

if "A" > "a" {
    print("it works")
} else {
    print("nop")
}




/*compare funoaction
  */

func compare(Left:String, Right:String) -> Bool {
    let L = Left.lowercased().filter({("abcdefghijklmnopqrstuvwxyz").contains($0)})
    let R =  Right.lowercased().filter({("abcdefghijklmnopqrstuvwxyz").contains($0)})
    if L < R {
        return true
    } else if Left > Right {
        return false
    }
    return true
}

print(compare(Left:"apple", Right: "banana"))
