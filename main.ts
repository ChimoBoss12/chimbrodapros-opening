namespace opening {
    //%block
    export function beginOpening() {
let mySprite = sprites.create(img`
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    .....................................1..........................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ......................................................1.........................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ....................11...............111........................................................................................................................
    ....................11...............1c1........................................................................................................................
    .....................................111..................11.......1............................................................................................
    .........................................................1111...................................................................................................
    .........................................................1111...................................................................................................
    ..........................................................11....................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    .............................................1...............111..11............................................................................................
    ...........................................................11cbb11b1............................................................................................
    ..........................................................1b11cb1bc1............................................................................................
    ...................................1.....................1bd1cb1bc1...........1.................................................................................
    ..................................111.................111bd1cbbb11c1............................................................................................
    ...................................1................11bbddccb6116616111.........................................................................................
    .........1........................................11bddcc616696119691661........................................................................................
    .........1.......................................1cbcc66111116961699661.........................................................................................
    .......11111....................................1bdc661bbbb11169996c6c61...11...................................................................................
    .........1..................11..........11.....1bdbb1bbbb11c69966cc6c11...1cc1..................................................................................
    .........1...........1......11..........1b11..1bdbb1bbbb1bb1cf6611c161....1cbe1......11.........................................................................
    ........................................11bb11cdb11bbbb1bc111fff1c6611.11.1cebe111111ee1........................................................................
    .......................................1c1cbb1bbc1cccbb1ccb1bfcccfffcc1ec111cbbbeeebbbe1........................................................................
    ......................................11bc1cbb1dccdbbcb1ccccfcffccccbcbceee1cecbbbbeee1.........................................................................
    ...................................111cbbb11bccbddbbccbb1ccfffccffcf1cbbceeccceecbbbbee111..........a...................a.......................................
    ................................111ccbbbccbcbbcccbcbbbbbffffffccccff1cbbbcceeeccbbbbeeeeee1.....................................................................
    .............................111bbbdddbc1ccbbcccb111bbb1111166fcccb1cbbcceeecccbebebbbbbbee1....................................................................
    ..........................111bbbdddbcc11c1cbbbc1bd11111cc166ccbffb1bfceeeccfeccbcbcbbebec11.....................................................................
    .......................111bbbdddbcc111cccc1cbbbbbbddb11166ccbbbbcffccecccffcecbcebfebcebbec1....................................................................
    ....................111bbbdddbcc111cccccc1ccbbcbc1cbddbdbbbbbccbb11bffffffcecbecbffcbecbec1.....................................................................
    ..................11bbbdddbcc111cccccc111ccbbc1c1c1ccccbb111111cb1b1fffccfcceecefbbfcbcebee1.................a..................................................
    .........111.....14bdddcc1111cccccc111ccbdddc1cbb1.111111......1c11.1fffffcecfefbbccfbecee1..................a..................................................
    ........1bbb11..14ddcc111ccccccc111ccbdddbcc11cb1...............11...1fefcecffcbbcdccbecc1.................aacaa................................................
    .......1b111bb114dd411ccccccc111ccbdddbcc111c1b1...........1........1fcffeffcbcbdd16bebcee1.......aa.........a..........................a.......................
    ......1b1ccc11bbddbb111ccc111ccbdddbcc111...1c1......................1ffefccfd6ddddddcbcf1........aa.........a..................................................
    ......1b1c11c114d411bb1111ccbdddbbb111......11........................1fffcffbdddddddbefff11..........................a.a........a..............................
    .......1b1d414ddd1111b1ccbdddbbb111.....................1........1.....11ffffcbdddcedbffffcc1......................a.a..aa......aca.............................
    .......14d41c14d411bbbbdddbb1111........................1................1ffffbbcceebccffffbc1....................a......a.......a..............................
    .....11cdd1114dd1bbbdddbb111..........................11c11.............1fcffffbbeebcbcfcfcbbc1..................a........a.....................................
    ....1ccb4dddddd4bbbbbb111c111...........................1...............1cccffffbbbcbbbfcfbbbcc111.1111.........a.........a.....................................
    ...1cbbbb4ddd4bbbb61111141d41.................11........1...............1cccffcffffbdbfcccbbbbccbc1cccb1........................................................
    ..1cbbcbcc6661111691116addd1..................11........................1ccccffcfcbdddfcfbbbbc1c1ccbc1bb1.......11..............................................
    ..1bb1bc11169611691696a4dd41.....1.......................................1cccfbfcbbddbffccbbccb1c1c1c11c1.11....1f1...........a.................................
    ..1b1b11...1696169996611141.....111......................................1fcfcbbcb1d1bb111cccfcccb1cb1bc11ff1.1.1c1.....a.......................................
    ..11.1.....11699961111...1.......1........................................1ffbcbfbb1bc1111bcfccffcccbbbfc1fcf1f11cf11...a.......................................
    .......1.11699699966111.............................................111...1fcbbbfcbbcb111b1ffccffccfbbccbb1fcfc1fcccf11.a.......................................
    ......141a666119699966a11...........................................1c1...1fcbbbfbcfc11111bfffcccfccbcfbddbbfbbcfffcccf1.......a................................
    .....14dd4a1116919616a4dd1..............1...........................111....1fcbbffbcb111bccfffffcccbbcfbdddbb1ccf1111ccf1....afaa...............................
    ....14dd111..1961691111ddd1................................................1fccbffff11bccbbcffffffcbcccbbdbb1ccc1cc1ffccf11.....aa........a......a..............
    ....1114d1..1a61.16a1..1111.................................1...............1ccc1fff1bccbcbcff11ffcccf1cbbb1ccccc1cc111fcff1......a......aaa....................
    .......11...14a1.1a41.......................................................1cbb1bfff1cbbbbcf1..11fff1.1fbb1cccccc11c1ffccff1.......a.....a.....................
    1..........14d1...1d41......................................................1cbb1fffbbcbbbcf1.....111...1ffcccccb1bc1c1fcf1f1.......a...........................
    ...........1d41....1d1...........1.................1.................1.....1fbcb1bfff1bbcbcc1..........1fffffccc111cbb11fc1f1........a..........................
    ...........1d1......11....................................................1fcbbb1fffb1bbbbc1..........1ff1ff1fccb1bc1dbffcf1.........a..........................
    ...........11............................................................1fcbbb1fffff1bbbbc1....a.....1f11fff1fcccc1bbdffff1.........a..........................
    ........................................................................1fcbbbb1bfffb1bbbbcc1........1ff11fff1fccc1bddbf1ff1........aa..........................
    ......................11...............................................1fb111bb1fffff1cbbbbc1........1f1c11fff1cc1bbffb1fff1....................................
    ..1.....1............1cc1...........................1.................1fccccc11fffffff111bbcc1.......1f1cc1ffff1bbdbffff11f1.......a...........aa...............
    .1c1.................1cc1..........................111...............1fccccccc1bfffffb1cc111cc1......1ff1c1fffff1fbdbc6fff111..................aa...............
    ..1...................11............................1...............1fbccccccc1fffffff1ccccc1bc1......1f1cc1fffffffff886ccccc1....a......a......................
    ....................................................................1fbbccccc1fffffffb1cccccccc1......1f1cc1ffffff11ffccbcccc1....a.............................
    .....................................................................1fbbbccc1b11fffccf1ccccccc1...a..1f1ccc1ff1ffff1ffbcbbcc1.....a............................
    ....................................................................1fffb11c1bfcc1ccccb1cccccbbc1.....11f11c1fff11111fffbbbbcc1.....a.................a.........
    ...................................................................11fcffb111cffcbccccc11111bbbc1....1f1f1f1.1ffff1..1fcbbccbcc1.....aa.........................
    .................................................................11ffccccff1bfcbbfccffffb11bbff1.....1f1f1f1..11111..1ffccbccbcc11.....a........................
    ............................................1...................1fffccccccfffffffffffcccffffff1......1fffff1.........1ffffcbbcbbcc1.............................
    ..............................................................11fccffccccccfccffcfcffcccccccff1.......1fff1.......a...1111cccbccbcc1....a.......................
    ..............1..............................................1ffccccfcccccffbccccfccfccccccccff1.......111......a.........11ccbccbcc1...a.......................
    ............................................................1ffcccccffcbcffcbbccfcccfcccccccccff1..............a...a........1ccbbcbbc1......a..a................
    ...1.......................1...............................1fcfcccccfffcffcbbbccfcccfccccccccfff1.........a..........aa..a...1fccbccbc1.........................
    ..........................................................1fccccccccffcffbccccfcfccccfcccccccfcff1....a..a..............a..a..11ccbccbc11......a........aa......
    ..........................................................1fcccfcbffcbcbbbbcfffffffccfcbccccfcccff1....aa.....a........a..a.....11cbbcbbc1.....a........aa......
    .........................................................1fccccffffcbcccbcbccffffffffcfcccfccccccff1...a......a........a..a.......11cbccbc11....................
    .........................................................1fcccbfffffcbcbbbccff111ffccccfffcccccccfcf1.........a..........a..........1cbbcbcc111.................
    ...caaaaa..caaaaac.............caaaaa...........caaaaac.1fccccfcbbfccbbbbccff1...11fccccfcccccccfcccf1........a.........a.....a..aa..1ccbcbbbbc1................
    ...caaaaa..caaaaac.............caaaaa...........caaaaac.1ffccfcb1bcfccbbcff11......1fccccffcbccccccccf1................a.....a.....a..1ccbccbcb1................
    ..caaaaaaa.aaaaaaa.............aaaaaac..........aaaaaaa1fcfcf1b111bbfcfcf11.........1fccccffcccccccccf1.........a...................a..1ccbbcccb1...............
    ..aaabbbaacaaabbaaa...........caabbaaac.........aaabaaacccff11bb1bbbbfff1............1fccffffcbcccccccf1.......f............a......f.a..1cbfcbccb1111...........
    ..aaabbbaacaaabbaaac..........caabbaaac.........aabbaaacccccb11b1b11bbfff1...........1fffffcfcccccccccf1...................a.........a...11bfcbcccbbc1......a...
    ..aaabbbaaaaabbbaaaaaaaaaa.ccaaaabbaaaaaaaac....aabbaaaaaaaaaaaaaaaaafffff1...........1fffcccfcccccccccf11.........a.....a.............111c1bfcbccccb1..........
    ..aaabbbaaaaabbbaaaaaaaaaaaaaaaaabbaaaaaaaaac...aabbaaaaaaaaaaaaaaaaaafcff1............1fcccccfccccccccfff1...........................1ccf11bffcbcccb11.........
    ccaaabbbbaaabbbbaaabbbbbaaaaabbbbbbaaabbbbaaaa..aabbbbbbbaaabbaaabbaaacccf1.............1f1b1bcfcccccccffff1..........................1cccffcbbfcbbcc1c111......
    ccaaabbabaaabbbbaaaaabbbbaaaabbabbbaaababbbaaa..aabbbabbbaaabbaaabbaaaccf1...............1f1b11cffccccffffff1................a.........1cccf111bfcbbccb1b1......
    ccaaabbabbabbabbbaaaaaabbaaaabaaabbaaabaabbaaac.aabbaaabbbaabbaaabbaaaccf1................1f11c1bccfffccffff1..........................1ccfcf11cfbfcbccbc1......
    ccaaabbabbabbabbbaaaaaabbaabbbaaabbaabbaabbaaac.aabbaaaaabaabbaaabbaaacc1..................1bc1c111cccffcfff1.........................1ccc1fcffcbcbfcbccb1......
    ccaaabbabbabbabbbaaaaaabbaabbbaaabbaabbaabbaaac.aabbaaaaabaabbaaabbaaacc...................1f1bcb1ccfcffcfff1........................1ccc111ffcbc11bfcbcc1......
    aaaaabaabbabaabbbaabbbbbbaabbbaaabbaabbbbbbaaaccaabbaaaaabaabbaaabbaaacc...................1fc1bc1ccccccfff1.................a......1cccf1f1fcbcf1cbcfcbcc1.....
    aaaaabaaabbbaabbbaabaaabbaabbbaaabbaabbbbbbaaaccaabbaaaaabaabbaaabbaaacc....................1fc1cccfcccffff11........a..............111fcf1f1ccfcf1cbcbcbcc1....
    aaaaabaaabbaaabbbaabaaabbaabbbaaabbaabbaaaaaaaccaabbaaaaabaabbaaabbaaacc....................1f1ccccccffffffb1111.......................1fcf1ccfccf111bc1cbc1....
    aaaaabaaaabaaabbbaabaaabbaaaabaaabbaaabaaaaaaaccaabbaaabbbaabbaaabbaaacc.....................1ffccffffffffbb1ccb1.......................1cfccf1ff1ff111.111.....
    aaaaabaaaaaaaaabbaabbabbbaaaabbabbbaaabbaaaaaaccaabbaabbbaaaabbbabbaaacc......................11fff11ffffbbdbc11b1......................1fccf1f11ffcf11.........
    aaaaabaaaaaaaaabbaabbbbbbaaaabbbbbbaaaabbbbaaac.aaabbbbbbaaaaabbbbbaaacc........................111..11ebbdddb111c1....................1fccfff11fcccccc1........
    aaaaaaaaccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccaaaaaaaaaaaaaaaaabbaaacc...............................1cbbddbb11bc11..........a.......1ff11fcffcccccc1.........
    ..aaaaaacccccaaaaaaaaaaaaaaaaaaaaaaaacaaaaaaacc.caaaaaaaaaaaaaaaabbaaacc................................1fbbddfb1bfff1.........a.......111..1fccccc111..........
    ....cccccc.....cccccccccccccccccccccccccccccccc....ccccccccaabbbbbaaaccc................................1fccbbfcb1cfff1......aacaa..a.......1fccc11.............
    ...........................................................aaaaaaaaaccc..................................1fccb1ccbfcbff1.......a.............1cc1...............
    ...........................................................aaaaaaaaaccc..................................1fffb11bfcb1bff1......a.............1c1................
    .....aaaaaaaaaaaa....caaac.............aaaaa.................caaaaaaaaaac............aaaaaaac.............11ffb1ccf1ffbf1....................11.................
    ....caaaaaaaaaaaa...aaaaaaa............aaaaaa.................cccaaaaaaaaac.......caaaaaaaaaaa..............1ffccffbf1bc1.......................................
    ...aaaabbbbaabaaacc.aaaaaaa...........cabbaaaa..................aabbbbbaaaa.......aaabbbbbbaaa...............11fffff1b1c1.......................................
    ..aaaabbbbbaabaaacc.aabbaaacc.........cabbaaaac.................aabbbbbbaaa.......aaabbbbbbaaac...............1ffffbbb1cf1...............................a......
    ccaaabbaaaaaabaaaaaaaabbaaaaaaaaaaaaaaaabbaaaaacaaaaaaaaaaaaaaaaaabbaaabbbaaaaaaaaaaabbaaaabbaaaaaaaaaaaaaaa...1ffb1bb1cf1......................................
    aaaaabbaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaabbaaaaaaaaaaaaaaaaaaaaaaaabbaaabbbaaaaaaaaaaabbaaaabbaaaaaaaaaaaaaaaa.1ffbc1b11cc1.......................aa.............
    aaaaabaaacaaabbbbbbaaabbaaabbabbbabbbbaabbbbbbaaabbbbbbaaabbbbaaaabbaaaabbaabbbbaaaaabbaaaabbabbbbbbaaabbbaaaa1fcbcc11ccc1......................acca............
    aaaaabaaacaaabbbabbaaabbaaabbbabbbbabbaabbbabbbaabbbbbbaabbaabbaaabbaaaabbbaaabbbaaaabbaaaabbabbbbbbaabaabbaaaccbcccccccc1......................acca............
    aaaabbaaaccaabaaaabbaabbaaabbaaabbaaabaabbaaaabaabbbaaaaabbaaabbaabbaaaabbbaaaaabbaaabbaaaabbabbaaaaabbaaabbaaafccccccccc1..............a........aa.............
    aaaabbaaaccaabaaaabbaabbaaabbaaabbaaabaabbaaaabaabbbaaaaabbaaabbaabbaaaabbbaaaaabbaaabbaaaabbabbaaaaabbaaabbaaacccccccccc1......................................
    aaaabbaaaccaabaaaabbaabbaaabbaaabbaaabaabbaaaabaabbbaaaaabaaaabbaabbaaaabbbaaaaabbaaabbaaaabbabbaaaaabbaaabbaaafccccccccc1......................................
    aaaaabaaaccaabaaaabbaabbaaabbaaabbaaabaabbaaaabaabbbaaaaabaaaabbaabbaaaabbbbbbbbbbaaabbbbbbbaabbaaaaabbaaabbaaaffccccccc1.......................................
    aaaaabaaaccaabaaaabbaabbaaabbaaabbaaabaabbaaaabaabbbaaaaabaaaabbaabbaaaabbabbaaabbaaabbbbbbaaabbaaaaabbaaabbaaa1ffffccc1........................................
    aaaaabbaaaaaabaaaabbaabbaaabbaaabbaaabaabbaaaabaabbbaaaaabaaaabbaabbaaaabbabbaaabbaaabbaaaaaaabbaaaaabbaaabbaaa.1111111.........................................
    ccaaabbaaaaaabaaaabbaabbaaabbaaabbaaabaabbaaaabaabbbaaaaabbaaabbaabbaaabbbabbaaabbaaabbaaaaaaabbaaaaabbaaabbaaa.................................................
    ..aaabbbbbbaabaaaabbaabbaaabbaaabbaaabaabbbabbbaabbbaaaaabbaabbaaabbbbbbbaabbbabbbaaabbaaacccabbaaaaaabaabbaaac.................................................
    ..caaabbbbbaabaaaabbaabbaaabbaaabbaaabaabbbbbbaaabbbaaaaaabbbbaaaabbbbbaaaaabbbbbbaaabbaaacccabbaaaaaaabbbaaaac.................................................
    ....aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacc.aaaaaacaaaaaaaaacc.................................................
    .....aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaacaaaaaaaaacaaaaaaaaaaaaaaccc.caaaacccaaaaaaaccc.................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    `, SpriteKind.Player)
color.FadeToWhite.startScreenEffect(10000)
timer.after(8000, function () {
    color.FadeToBlack.startScreenEffect(2000)
    pause(2000)
    sprites.destroy(mySprite)
color.startFade(color.originalPalette, color.originalPalette)
})
    }
}
