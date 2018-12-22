'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const A = 65;
const a = 97;
const ACKNOWLEDGE = 6;
const AMPERSAND = 38;
const ASTERISK = 42;
const AT = 64;
const B = 66;
const b = 98;
const BACKSLASH = 92;
const BACKSPACE = 8;
const BELL = 7;
const C = 67;
const c = 99;
const CANCEL = 24;
const CARET = 94;
const CARRIAGE_RETURN = 13;
const CLOSE_CURLY = 125;
const CLOSE_PARENTH = 41;
const CLOSE_SQUARE = 93;
const COLON = 58;
const COMMA = 44;
const d = 100;
const D = 68;
const DATA_LINK_ESCAPE = 16;
const DELETE = 127;
const DEVICE_CTRL_1 = 17;
const DEVICE_CTRL_2 = 18;
const DEVICE_CTRL_3 = 19;
const DEVICE_CTRL_4 = 20;
const DOLLAR = 36;
const DOUBLE_QUOTE = 34;
const e = 101;
const E = 69;
const EIGHT = 56;
const END_OF_MEDIUM = 25;
const END_OF_TRANSMISSION = 4;
const END_OF_TRANSMISSION_BLOCK = 23;
const END_OF_TXT = 3;
const ENQUIRY = 5;
const EQUAL = 61;
const ESCAPE = 27;
const EXCLAMATION = 33;
const f = 102;
const F = 70;
const FILE_SEPERATOR = 28;
const FIVE = 53;
const FORM_FEED = 12;
const FORWARD_SLASH = 47;
const FOUR = 52;
const g = 103;
const G = 71;
const GRAVE = 96;
const GREATER_THAN = 62;
const GROUP_SEPERATOR = 29;
const h = 104;
const H = 72;
const HASH = 35;
const HORIZONTAL_TAB = 9;
const HYPHEN = 45;
const i = 105;
const I = 73;
const j = 106;
const J = 74;
const k = 107;
const K = 75;
const l = 108;
const L = 76;
const LESS_THAN = 60;
const LINE_FEED = 10;
const m = 109;
const M = 77;
const n = 110;
const N = 78;
const NEGATIVE_ACKNOWLEDGE = 21;
const NINE = 57;
const NULL = 0;
const o = 111;
const O = 79;
const ONE = 49;
const OPEN_CURLY = 123;
const OPEN_PARENTH = 40;
const OPEN_SQUARE = 91;
const p = 112;
const P = 80;
const PERCENT = 37;
const PERIOD = 46;
const PLUS = 43;
const q = 113;
const Q = 81;
const QMARK = 63;
const QUOTE = 39;
const r = 114;
const R = 82;
const RECORD_SEPERATOR = 30;
const s = 115;
const S = 83;
const SEMICOLON = 59;
const SEVEN = 55;
const SHIFT_IN = 15;
const SHIFT_OUT = 14;
const SIX = 54;
const SPACE = 32;
const START_OF_HEADER = 1;
const START_OF_TEXT = 2;
const SUBSTITUTE = 26;
const SYNCH_IDLE = 22;
const t = 116;
const T = 84;
const THREE = 51;
const TILDE = 126;
const TWO = 50;
const u = 117;
const U = 85;
const UNDER_SCORE = 95;
const UNIT_SEPERATOR = 31;
const v = 118;
const V = 86;
const VERTICAL_BAR = 124;
const VERTICAL_TAB = 11;
const w = 119;
const W = 87;
const x = 120;
const X = 88;
const y = 121;
const Y = 89;
const z = 122;
const Z = 90;
const ZERO = 48;

/**
 * Lexer Jump table reference 
 * 0. NUMBER
 * 1. IDENTIFIER
 * 2. QUOTE STRING
 * 3. SPACE SET
 * 4. TAB SET
 * 5. CARIAGE RETURN
 * 6. LINEFEED
 * 7. SYMBOL
 * 8. OPERATOR
 * 9. OPEN BRACKET
 * 10. CLOSE BRACKET 
 * 11. DATA_LINK
 */ 
const jump_table = [
7, 	 	/* A */
7, 	 	/* a */
7, 	 	/* ACKNOWLEDGE */
7, 	 	/* AMPERSAND */
7, 	 	/* ASTERISK */
7, 	 	/* AT */
7, 	 	/* B */
7, 	 	/* b */
7, 	 	/* BACKSLASH */
4, 	 	/* BACKSPACE */
6, 	 	/* BELL */
7, 	 	/* C */
7, 	 	/* c */
5, 	 	/* CANCEL */
7, 	 	/* CARET */
11, 	/* CARRIAGE_RETURN */
7, 	 	/* CLOSE_CURLY */
7, 	 	/* CLOSE_PARENTH */
7, 	 	/* CLOSE_SQUARE */
7, 	 	/* COLON */
7, 	 	/* COMMA */
7, 	 	/* d */
7, 	 	/* D */
7, 	 	/* DATA_LINK_ESCAPE */
7, 	 	/* DELETE */
7, 	 	/* DEVICE_CTRL_1 */
7, 	 	/* DEVICE_CTRL_2 */
7, 	 	/* DEVICE_CTRL_3 */
7, 	 	/* DEVICE_CTRL_4 */
7, 	 	/* DOLLAR */
7, 	 	/* DOUBLE_QUOTE */
7, 	 	/* e */
3, 	 	/* E */
8, 	 	/* EIGHT */
2, 	 	/* END_OF_MEDIUM */
7, 	 	/* END_OF_TRANSMISSION */
7, 	 	/* END_OF_TRANSMISSION_BLOCK */
8, 	 	/* END_OF_TXT */
8, 	 	/* ENQUIRY */
2, 	 	/* EQUAL */
9, 	 	/* ESCAPE */
10, 	 /* EXCLAMATION */
8, 	 	/* f */
8, 	 	/* F */
7, 	 	/* FILE_SEPERATOR */
7, 	 	/* FIVE */
7, 	 	/* FORM_FEED */
7, 	 	/* FORWARD_SLASH */
0, 	 	/* FOUR */
0, 	 	/* g */
0, 	 	/* G */
0, 	 	/* GRAVE */
0, 	 	/* GREATER_THAN */
0, 	 	/* GROUP_SEPERATOR */
0, 	 	/* h */
0, 	 	/* H */
0, 	 	/* HASH */
0, 	 	/* HORIZONTAL_TAB */
8, 	 	/* HYPHEN */
7, 	 	/* i */
8, 	 	/* I */
8, 	 	/* j */
8, 	 	/* J */
7, 	 	/* k */
7, 	 	/* K */
1, 	 	/* l */
1, 	 	/* L */
1, 	 	/* LESS_THAN */
1, 	 	/* LINE_FEED */
1, 	 	/* m */
1, 	 	/* M */
1, 	 	/* n */
1, 	 	/* N */
1, 	 	/* NEGATIVE_ACKNOWLEDGE */
1, 	 	/* NINE */
1, 	 	/* NULL */
1, 	 	/* o */
1, 	 	/* O */
1, 	 	/* ONE */
1, 	 	/* OPEN_CURLY */
1, 	 	/* OPEN_PARENTH */
1, 	 	/* OPEN_SQUARE */
1, 	 	/* p */
1, 	 	/* P */
1, 	 	/* PERCENT */
1, 	 	/* PERIOD */
1, 	 	/* PLUS */
1, 	 	/* q */
1, 	 	/* Q */
1, 	 	/* QMARK */
1, 	 	/* QUOTE */
9, 	 	/* r */
7, 	 	/* R */
10, 	/* RECORD_SEPERATOR */
7, 	 	/* s */
7, 	 	/* S */
2, 	 	/* SEMICOLON */
1, 	 	/* SEVEN */
1, 	 	/* SHIFT_IN */
1, 	 	/* SHIFT_OUT */
1, 	 	/* SIX */
1, 	 	/* SPACE */
1, 	 	/* START_OF_HEADER */
1, 	 	/* START_OF_TEXT */
1, 	 	/* SUBSTITUTE */
1, 	 	/* SYNCH_IDLE */
1, 	 	/* t */
1, 	 	/* T */
1, 	 	/* THREE */
1, 	 	/* TILDE */
1, 	 	/* TWO */
1, 	 	/* u */
1, 	 	/* U */
1, 	 	/* UNDER_SCORE */
1, 	 	/* UNIT_SEPERATOR */
1, 	 	/* v */
1, 	 	/* V */
1, 	 	/* VERTICAL_BAR */
1, 	 	/* VERTICAL_TAB */
1, 	 	/* w */
1, 	 	/* W */
1, 	 	/* x */
1, 	 	/* X */
9, 	 	/* y */
7, 	 	/* Y */
10,  	/* z */
7,  	/* Z */
7 		/* ZERO */
];	

/**
 * LExer Number and Identifier jump table reference
 * Number are masked by 12(4|8) and Identifiers are masked by 10(2|8)
 * entries marked as `0` are not evaluated as either being in the number set or the identifier set.
 * entries marked as `2` are in the identifier set but not the number set
 * entries marked as `4` are in the number set but not the identifier set
 * entries marked as `8` are in both number and identifier sets
 */
const number_and_identifier_table = [
0, 		/* A */
0, 		/* a */
0, 		/* ACKNOWLEDGE */
0, 		/* AMPERSAND */
0, 		/* ASTERISK */
0, 		/* AT */
0,		/* B */
0,		/* b */
0,		/* BACKSLASH */
0,		/* BACKSPACE */
0,		/* BELL */
0,		/* C */
0,		/* c */
0,		/* CANCEL */
0,		/* CARET */
0,		/* CARRIAGE_RETURN */
0,		/* CLOSE_CURLY */
0,		/* CLOSE_PARENTH */
0,		/* CLOSE_SQUARE */
0,		/* COLON */
0,		/* COMMA */
0,		/* d */
0,		/* D */
0,		/* DATA_LINK_ESCAPE */
0,		/* DELETE */
0,		/* DEVICE_CTRL_1 */
0,		/* DEVICE_CTRL_2 */
0,		/* DEVICE_CTRL_3 */
0,		/* DEVICE_CTRL_4 */
0,		/* DOLLAR */
0,		/* DOUBLE_QUOTE */
0,		/* e */
0,		/* E */
0,		/* EIGHT */
0,		/* END_OF_MEDIUM */
0,		/* END_OF_TRANSMISSION */
8,		/* END_OF_TRANSMISSION_BLOCK */
0,		/* END_OF_TXT */
0,		/* ENQUIRY */
0,		/* EQUAL */
0,		/* ESCAPE */
0,		/* EXCLAMATION */
0,		/* f */
0,		/* F */
0,		/* FILE_SEPERATOR */
2,		/* FIVE */
4,		/* FORM_FEED */
0,		/* FORWARD_SLASH */
8,		/* FOUR */
8,		/* g */
8,		/* G */
8,		/* GRAVE */
8,		/* GREATER_THAN */
8,		/* GROUP_SEPERATOR */
8,		/* h */
8,		/* H */
8,		/* HASH */
8,		/* HORIZONTAL_TAB */
0,		/* HYPHEN */
0,		/* i */
0,		/* I */
0,		/* j */
0,		/* J */
0,		/* k */
0,		/* K */
2,		/* l */
8,		/* L */
2,		/* LESS_THAN */
2,		/* LINE_FEED */
8,		/* m */
2,		/* M */
2,		/* n */
2,		/* N */
2,		/* NEGATIVE_ACKNOWLEDGE */
2,		/* NINE */
2,		/* NULL */
2,		/* o */
2,		/* O */
2,		/* ONE */
8,		/* OPEN_CURLY */
2,		/* OPEN_PARENTH */
2,		/* OPEN_SQUARE */
2,		/* p */
2,		/* P */
2,		/* PERCENT */
2,		/* PERIOD */
2,		/* PLUS */
2,		/* q */
8,		/* Q */
2,		/* QMARK */
2,		/* QUOTE */
0,		/* r */
0,		/* R */
0,		/* RECORD_SEPERATOR */
0,		/* s */
2,		/* S */
0,		/* SEMICOLON */
2,		/* SEVEN */
8,		/* SHIFT_IN */
2,		/* SHIFT_OUT */
2,		/* SIX */
2,		/* SPACE */
2,		/* START_OF_HEADER */
2,		/* START_OF_TEXT */
2,		/* SUBSTITUTE */
2,		/* SYNCH_IDLE */
2,		/* t */
2,		/* T */
2,		/* THREE */
2,		/* TILDE */
2,		/* TWO */
8,		/* u */
2,		/* U */
2,		/* UNDER_SCORE */
2,		/* UNIT_SEPERATOR */
2,		/* v */
2,		/* V */
2,		/* VERTICAL_BAR */
2,		/* VERTICAL_TAB */
2,		/* w */
8,		/* W */
2,		/* x */
2,		/* X */
0,		/* y */
0,		/* Y */
0,		/* z */
0,		/* Z */
0		/* ZERO */
];

const number = 1,
    identifier = 2,
    string = 4,
    white_space = 8,
    open_bracket = 16,
    close_bracket = 32,
    operator = 64,
    symbol = 128,
    new_line = 256,
    data_link = 512,
    alpha_numeric = (identifier | number),
    white_space_new_line = (white_space | new_line),
    Types = {
        num: number,
        number,
        id: identifier,
        identifier,
        str: string,
        string,
        ws: white_space,
        white_space,
        ob: open_bracket,
        open_bracket,
        cb: close_bracket,
        close_bracket,
        op: operator,
        operator,
        sym: symbol,
        symbol,
        nl: new_line,
        new_line,
        dl: data_link,
        data_link,
        alpha_numeric,
        white_space_new_line,
    },

/*** MASKS ***/

TYPE_MASK = 0xF,
PARSE_STRING_MASK = 0x10,
IGNORE_WHITESPACE_MASK = 0x20,
TOKEN_LENGTH_MASK = 0xFFFFFFC0,

//De Bruijn Sequence for finding index of right most bit set.
//http://supertech.csail.mit.edu/papers/debruijn.pdf
debruijnLUT = [ 
    0, 1, 28, 2, 29, 14, 24, 3, 30, 22, 20, 15, 25, 17, 4, 8, 
    31, 27, 13, 23, 21, 19, 16, 7, 26, 12, 18, 6, 11, 5, 10, 9
];

function getNumbrOfTrailingZeroBitsFromPowerOf2(value){
    return debruijnLUT[(value * 0x077CB531) >>> 27];
}

class Lexer {

    constructor(string = "", INCLUDE_WHITE_SPACE_TOKENS = false, PEEKING = false) {

        if (typeof(string) !== "string") throw new Error("String value must be passed to Lexer");

        /**
         * The string that the Lexer tokenizes.
         */
        this.str = string;

        /**
         * Reference to the peeking Lexer.
         */
        this.p = null;

        /**
         * The type id of the current token.
         */
        this.type = 32768; //Default "non-value" for types is 1<<15;

        /**
         * The offset in the string of the start of the current token.
         */
        this.off = 0;

        this.masked_values = 0;

        /**
         * The character offset of the current token within a line.
         */
        this.char = 0;
        /**
         * The line position of the current token.
         */
        this.line = 0;
        /**
         * The length of the string being parsed
         */
        this.sl = string.length;
        /**
         * The length of the current token.
         */
        this.tl = 0;

        /**
         * Flag to ignore white spaced.
         */
        this.IWS = !INCLUDE_WHITE_SPACE_TOKENS;

        /**
         * Flag to force the lexer to parse string contents
         */
         this.PARSE_STRING = false;

        if (!PEEKING) this.next();
    }

    /**
     * Restricts max parse distance to the other Lexer's current position.
     * @param      {Lexer}  Lexer   The Lexer to limit parse distance by.
     */
    fence(marker = this) {
        if (marker.str !== this.str)
            return;
        this.sl = marker.off;
        return this;
    }

    /**
     * Copies the Lexer.
     * @return     {Lexer}  Returns a new Lexer instance with the same property values.
     */
    copy( destination = new Lexer(this.str, false, true) ) {
        destination.off = this.off;
        destination.char = this.char;
        destination.line = this.line;
        destination.sl = this.sl;
        destination.masked_values = this.masked_values;
        return destination;
    }

    /**
     * Given another Lexer with the same `str` property value, it will copy the state of that Lexer.
     * @param      {Lexer}  [marker=this.peek]  The Lexer to clone the state from. 
     * @throws     {Error} Throws an error if the Lexers reference different strings.
     * @public
     */
    sync(marker = this.p) {

        if (marker instanceof Lexer) {
            if (marker.str !== this.str) throw new Error("Cannot sync Lexers with different strings!");
            this.off = marker.off;
            this.char = marker.char;
            this.line = marker.line;
            this.masked_values = marker.masked_values;
        }

        return this;
    }

    /**
     * Will throw a new Error, appending the parsed string line and position information to the the error message passed into the function.
     * @instance
     * @public
     * @param {String} message - The error message.
     */
    throw (message) {
        let t$$1 = ("________________________________________________"),
            n$$1 = "\n",
            is_iws = (!this.IWS) ? "\n The Lexer produced whitespace tokens" : "";
        this.IWS = false;
        let pk = this.copy();
        while (!pk.END && pk.ty !== Types.nl) { pk.next(); }
        let end = pk.off;
        throw new Error(`${message} at ${this.line}:${this.char}\n${t$$1}\n${this.str.slice(this.off + this.tl + 1 - this.char, end)}\n${("").padStart(this.char - 2)}^\n${t$$1}\n${is_iws}`);
    }

    /**
     * Proxy for Lexer.prototype.reset
     * @public
     */
    r() { return this.reset(); }

    /**
     * Restore the Lexer back to it's initial state.
     * @public
     */
    reset() {
        this.p = null;
        this.type = 32768;
        this.off = 0;
        this.tl = 0;
        this.char = 0;
        this.line = 0;
        this.n;
        return this;
    }

    resetHead() {
        this.off = 0;
        this.tl = 0;
        this.char = 0;
        this.line = 0;
        this.p = null;
        this.type = 32768;
    }

    /**
     * Sets the internal state to point to the next token. Sets Lexer.prototype.END to `true` if the end of the string is hit.
     * @public
     * @param {Lexer} [marker=this] - If another Lexer is passed into this method, it will advance the token state of that Lexer.
     */
    next(marker = this) {

        let str = marker.str;

        if (marker.sl < 1) {
            marker.off = 0;
            marker.type = 32768;
            marker.tl = 0;
            return marker;
        }

        //Token builder
        let length = marker.tl;
        let off = marker.off + length;
        let l$$1 = marker.sl;
        let IWS = marker.IWS;
        let type = symbol;
        let char = marker.char + length;
        let line = marker.line;
        let base = off;

        if (off >= l$$1) {
            length = 0;
            base = l$$1;
            char -= base - off;
            marker.type = type;
            marker.off = base;
            marker.tl = length;
            marker.char = char;
            marker.line = line;
            return marker;
        }

        while (true) {

            base = off;

            length = 1;

            let code = str.charCodeAt(off);

            if (code < 128) {

                switch (jump_table[code]) {
                    case 0: //NUMBER
                        while (++off < l$$1 && (12 & number_and_identifier_table[str.charCodeAt(off)])) {}

                        if (str[off] == "e" || str[off] == "E") {
                            off++;
                            if (str[off] == "-") off++;
                            marker.off = off;
                            marker.tl = 0;
                            marker.next();
                            off = marker.off + marker.tl;
                            //Add e to the number string
                        }

                        type = number;
                        length = off - base;

                        break;
                    case 1: //IDENTIFIER
                        while (++off < l$$1 && ((10 & number_and_identifier_table[str.charCodeAt(off)]))) {}
                        type = identifier;
                        length = off - base;
                        break;
                    case 2: //QUOTED STRING
                        if (this.PARSE_STRING) {
                            type = symbol;
                        } else {
                            while (++off < l$$1 && str.charCodeAt(off) !== code) {}
                            type = string;
                            length = off - base + 1;
                        }
                        break;
                    case 3: //SPACE SET
                        while (++off < l$$1 && str.charCodeAt(off) === SPACE) {}
                        type = white_space;
                        length = off - base;
                        break;
                    case 4: //TAB SET
                        while (++off < l$$1 && str[off] === HORIZONTAL_TAB) {}
                        type = white_space;
                        length = off - base;
                        break;
                    case 5: //CARIAGE RETURN
                        length = 2;
                    case 6: //LINEFEED
                        type = new_line;
                        char = 0;
                        line++;
                        off += length;
                        break;
                    case 7: //SYMBOL
                        type = symbol;
                        break;
                    case 8: //OPERATOR
                        type = operator;

                        break;
                    case 9: //OPEN BRACKET
                        type = open_bracket;
                        break;
                    case 10: //CLOSE BRACKET
                        type = close_bracket;
                        break;
                    case 11: //Data Link Escape
                        type = data_link;
                        length = 4; //Stores two UTF16 values and a data link sentinel
                        break;
                }
            }

            if (IWS && (type & white_space_new_line)) {
                if (off < l$$1) {
                    char += length;
                    type = symbol;
                    continue;
                } else {
                    length = 0;
                    base = l$$1;
                    char -= base - off;
                }
            }

            break;
        }

        marker.type = type;
        marker.off = base;
        marker.tl = length;
        marker.char = char;
        marker.line = line;

        return marker;
    }
    

    /**
     * Proxy for Lexer.prototype.assert
     * @public
     */
    a(text) {
        return this.assert(text);
    }

    /**
     * Compares the string value of the current token to the value passed in. Advances to next token if the two are equal.
     * @public
     * @throws {Error} - `Expecting "${text}" got "${this.text}"`
     * @param {String} text - The string to compare.
     */
    assert(text) {

        if (this.off < 0) this.throw(`Expecting ${text} got null`);

        if (this.text == text)
            this.next();
        else
            this.throw(`Expecting "${text}" got "${this.text}"`);

        return this;
    }

    /**
     * Proxy for Lexer.prototype.assertCharacter
     * @public
     */
    aC(char) { return this.assertCharacter(char); }
    /**
     * Compares the character value of the current token to the value passed in. Advances to next token if the two are equal.
     * @public
     * @throws {Error} - `Expecting "${text}" got "${this.text}"`
     * @param {String} text - The string to compare.
     */
    assertCharacter(char) {

        if (this.off < 0) this.throw(`Expecting ${text} got null`);

        if (this.tx[this.off] == char[0])
            this.next();
        else
            this.throw(`Expecting "${char[0]}" got "${this.tx[this.off]}"`);

        return this;
    }

    /**
     * Returns the Lexer bound to Lexer.prototype.p, or creates and binds a new Lexer to Lexer.prototype.p. Advences the other Lexer to the token ahead of the calling Lexer.
     * @public
     * @type {Lexer}
     * @param {Lexer} [marker=this] - The marker to originate the peek from. 
     * @param {Lexer} [peek_marker=this.p] - The Lexer to set to the next token state.
     * @return {Lexer} - The Lexer that contains the peeked at token.
     */
    peek(marker = this, peek_marker = this.p) {

        if (!peek_marker) {
            if (!marker) return null;
            if (!this.p) {
                this.p = new Lexer(this.str, false, true);
                peek_marker = this.p;
            }
        }
        peek_marker.masked_values = marker.masked_values;
        peek_marker.type = marker.type;
        peek_marker.off = marker.off;
        peek_marker.tl = marker.tl;
        peek_marker.char = marker.char;
        peek_marker.line = marker.line;
        this.next(peek_marker);
        return peek_marker;
    }


    /**
     * Proxy for Lexer.prototype.slice
     * @public
     */
    s(start) { return this.slice(start); }

    /**
     * Returns a slice of the parsed string beginning at `start` and ending at the current token.
     * @param {Number | LexerBeta} start - The offset in this.str to begin the slice. If this value is a LexerBeta, sets the start point to the value of start.off.
     * @return {String} A substring of the parsed string.
     * @public
     */
    slice(start) {

        if (typeof start === "number" || typeof start === "object") {
            if (start instanceof Lexer) start = start.off;
            return (this.END) ? this.str.slice(start, this.sl) : this.str.slice(start, this.off);
        }
        return this.str.slice(this.off, this.sl);
    }

    /**
     * Skips to the end of a comment section.
     * @param {boolean} ASSERT - If set to true, will through an error if there is not a comment line or block to skip.
     * @param {Lexer} [marker=this] - If another Lexer is passed into this method, it will advance the token state of that Lexer.
     */
    comment(ASSERT = false, marker = this) {

        if (!(marker instanceof Lexer)) return marker;

        if (marker.tx == "/") {
            if (marker.pk.tx == "*") {
                marker.sync();
                while (!marker.END && (marker.nexts().tx != "*" || marker.pk.tx != "/")) { /* NO OP */ }
                marker.sync().assert("/");
            } else if (marker.pk.tx == "/") {
                let IWS = marker.IWS;
                while (marker.next().ty != types.new_line && !marker.END) { /* NO OP */ }
                marker.IWS = IWS;
                marker.next();
            } else
            if (ASSERT) marker.throw("Expecting the start of a comment");
        }

        return marker;
    }


    setString(string, RESET = true) {
        this.str = string;
        this.sl = string.length;
        if (RESET) this.resetHead();
    }

    toString(){
        return this.slice();
    }

    /*** Getters and Setters ***/
    get string() {
        return this.str;
    }

    /**
     * The current token in the form of a new Lexer with the current state.
     * Proxy property for Lexer.prototype.copy
     * @type {Lexer}
     * @public
     * @readonly
     */
    get token() {
        return this.copy();
    }


    get ch() {
        return this.str[this.off];
    }

    /**
     * Proxy for Lexer.prototype.text
     * @public
     * @type {String}
     * @readonly
     */
    get tx() { return this.text; }
    
    /**
     * The string value of the current token.
     * @type {String}
     * @public
     * @readonly
     */
    get text() {
        return (this.off < 0) ? "" : this.str.slice(this.off, this.off + this.tl);
    }

    /**
     * The type id of the current token.
     * @type {Number}
     * @public
     * @readonly
     */
    get ty() { return this.type; }

    /**
     * The current token's offset position from the start of the string.
     * @type {Number}
     * @public
     * @readonly
     */
    get pos() {
        return this.off;
    }

    /**
     * Proxy for Lexer.prototype.peek
     * @public
     * @readonly
     * @type {Lexer}
     */
    get pk() { return this.peek(); }

    /**
     * Proxy for Lexer.prototype.next
     * @public
     */
    get n() { return this.next(); }

    get END(){ return this.off >= this.sl; }
    set END(v$$1){}

    get type(){
        return 1 << (this.masked_values & TYPE_MASK);
    }

    set type(value){
        //assuming power of 2 value.

        this.masked_values = (this.masked_values & ~TYPE_MASK) | ((getNumbrOfTrailingZeroBitsFromPowerOf2(value)) & TYPE_MASK); 
    }

    get tl (){
        return this.token_length;
    }

    set tl(value){
        this.token_length = value;
    }

    get token_length(){
        return ((this.masked_values & TOKEN_LENGTH_MASK) >> 6);
    }

    set token_length(value){
        this.masked_values = (this.masked_values & ~TOKEN_LENGTH_MASK) | (((value << 6) | 0) & TOKEN_LENGTH_MASK); 
    }

    get IGNORE_WHITE_SPACE(){
        return this.IWS;
    }

    get IWS(){
        return !!(this.masked_values & IGNORE_WHITESPACE_MASK);
    }

    set IWS(boolean){
        this.masked_values = (this.masked_values & ~IGNORE_WHITESPACE_MASK) | ((boolean | 0) << 5); 
    }

    get PARSE_STRING(){
        return !!(this.masked_values & PARSE_STRING_MASK);
    }

    set PARSE_STRING(boolean){
        this.masked_values = (this.masked_values & ~PARSE_STRING_MASK) | ((boolean | 0) << 4); 
    }

    /**
     * Reference to token id types.
     */
    get types() {
        return Types;
    }
}

function whind(string, INCLUDE_WHITE_SPACE_TOKENS = false) { return new Lexer(string, INCLUDE_WHITE_SPACE_TOKENS); }

whind.constructor = Lexer;

Lexer.types = Types;
whind.types = Types;

const uri_reg_ex = /(?:([^\:\?\[\]\@\/\#\b\s][^\:\?\[\]\@\/\#\b\s]*)(?:\:\/\/))?(?:([^\:\?\[\]\@\/\#\b\s][^\:\?\[\]\@\/\#\b\s]*)(?:\:([^\:\?\[\]\@\/\#\b\s]*)?)?\@)?(?:(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})|((?:\[[0-9a-f]{1,4})+(?:\:[0-9a-f]{0,4}){2,7}\])|([^\:\?\[\]\@\/\#\b\s\.]{2,}(?:\.[^\:\?\[\]\@\/\#\b\s]*)*))?(?:\:(\d+))?((?:[^\?\[\]\#\s\b]*)+)?(?:\?([^\[\]\#\s\b]*))?(?:\#([^\#\s\b]*))?/i;

const STOCK_LOCATION = {
    protocol :"",
    host :"",
    port :"",
    path :"",
    hash :"",
    query :"",
    search:""
};

function fetchLocalText(URL, m = "same-origin") {
    return new Promise((res, rej) => {
        fetch(URL, {
            mode: m, // CORs not allowed
            credentials: m,
            method: "Get"
        }).then(r => {
            if (r.status < 200 || r.status > 299)
                r.text().then(rej);
            else
                r.text().then(res);
        }).catch(e => rej(e));
    });
}

function fetchLocalJSON(URL, m = "same-origin") {
    return new Promise((res, rej) => {
        fetch(URL, {
            mode: m, // CORs not allowed
            credentials: m,
            method: "Get"
        }).then(r => {
            if (r.status < 200 || r.status > 299)
                r.json().then(rej);
            else
                r.json().then(res).catch(rej);
        }).catch(e => rej(e));
    });
}

function submitForm(URL, form_data, m = "same-origin") {
    return new Promise((res, rej) => {
        var form;

        if (form_data instanceof FormData)
            form = form_data;
        else {
            form = new FormData();
            for (let name in form_data)
                form.append(name, form_data[name] + "");
        }

        fetch(URL, {
            mode: m, // CORs not allowed
            credentials: m,
            method: "POST",
            body: form,
        }).then(r => {
            if (r.status < 200 || r.status > 299)
                r.text().then(rej);
            else
                r.json().then(res);
        }).catch(e => e.text().then(rej));
    });
}

function submitJSON(URL, json_data, m = "same-origin") {
    return new Promise((res, rej) => {
        fetch(URL, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            mode: m, // CORs not allowed
            credentials: m,
            method: "POST",
            body: JSON.stringify(json_data),
        }).then(r => {
            if (r.status < 200 || r.status > 299)
                r.json().then(rej);
            else
                r.json().then(res);
        }).catch(e => e.text().then(rej));
    });
}



/**
 * Used for processing URLs, handling `document.location`, and fetching data.
 * @param      {string}   url           The URL string to wrap.
 * @param      {boolean}  USE_LOCATION  If `true` missing URL parts are filled in with data from `document.location`. 
 * @return     {URL}   If a falsy value is passed to `url`, and `USE_LOCATION` is `true` a Global URL is returned. This is directly linked to the page and will _update_ the actual page URL when its values are change. Use with caution. 
 * @alias URL
 * @memberof module:wick.core.network
 */
class URL {

    static resolveRelative(URL_or_url_original, URL_or_url_new) {
        
        let URL_old = (URL_or_url_original instanceof URL) ? URL_or_url_original : new URL(URL_or_url_original);
        let URL_new = (URL_or_url_new instanceof URL) ? URL_or_url_new : new URL(URL_or_url_new);

        let new_path = "";
        if (URL_new.path[0] != "/") {

            let a = URL_old.path.split("/");
            let b = URL_new.path.split("/");


            if (b[0] == "..") a.splice(a.length - 1, 1);
            for (let i = 0; i < b.length; i++) {
                switch (b[i]) {
                    case "..":
                    case ".":
                        a.splice(a.length - 1, 1);
                        break;
                    default:
                        a.push(b[i]);
                }
            }
            URL_new.path = a.join("/");
        }


        return URL_new;
    }

    constructor(url = "", USE_LOCATION = false) {

        let IS_STRING = true;
        

        const location = (typeof(document) !== "undefined") ? document.location : STOCK_LOCATION;

        if (!url || typeof(url) != "string") {
            IS_STRING = false;
            if (URL.GLOBAL && USE_LOCATION)
                return URL.GLOBAL;
        }

        /**
         * URL protocol
         */
        this.protocol = "";

        /**
         * Username string
         */
        this.user = "";

        /**
         * Password string
         */
        this.pwd = "";

        /**
         * URL hostname
         */
        this.host = "";

        /**
         * URL network port number.
         */
        this.port = 0;

        /**
         * URL resource path
         */
        this.path = "";

        /**
         * URL query string.
         */
        this.query = "";

        /**
         * Hashtag string
         */
        this.hash = "";

        /**
         * Map of the query data
         */
        this.map = null;

        if (IS_STRING) {
            if (url instanceof URL) {
                this.protocol = url.protocol;
                this.user = url.user;
                this.pwd = url.pwd;
                this.host = url.host;
                this.port = url.port;
                this.path = url.path;
                this.query = url.query;
                this.hash = url.hash;
            } else {
                let part = url.match(uri_reg_ex);
                this.protocol = part[1] || ((USE_LOCATION) ? location.protocol : "");
                this.user = part[2] || "";
                this.pwd = part[3] || "";
                this.host = part[4] || part[5] || part[6] || ((USE_LOCATION) ? location.hostname : "");
                this.port = parseInt(part[7] || ((USE_LOCATION) ? location.port : 0));
                this.path = part[8] || ((USE_LOCATION) ? location.pathname : "");
                this.query = part[9] || ((USE_LOCATION) ? location.search.slice(1) : "");
                this.hash = part[10] || ((USE_LOCATION) ? location.hash.slice(1) : "");
            }
        } else if (USE_LOCATION) {

            URL.G = this;
            this.protocol = location.protocol;
            this.host = location.hostname;
            this.port = location.port;
            this.path = location.pathname;
            this.hash = location.hash.slice(1);
            this.query = location.search.slice(1);
            this._getQuery_(this.query);

            return URL.R;
        }
        this._getQuery_(this.query);
    }


    /**
    URL Query Syntax

    root => [root_class] [& [class_list]]
         => [class_list]

    root_class = key_list

    class_list [class [& key_list] [& class_list]]

    class => name & key_list

    key_list => [key_val [& key_list]]

    key_val => name = val

    name => ALPHANUMERIC_ID

    val => NUMBER
        => ALPHANUMERIC_ID
    */

    /**
     * Pulls query string info into this.map
     * @private
     */
    _getQuery_() {
        let map = (this.map) ? this.map : (this.map = new Map());

        let lex = whind(this.query);


        const get_map = (k, m) => (m.has(k)) ? m.get(k) : m.set(k, new Map).get(k);

        let key = 0,
            key_val = "",
            class_map = get_map(key_val, map),
            lfv = 0;

        while (!lex.END) {
            switch (lex.tx) {
                case "&": //At new class or value
                    if (lfv > 0)
                        key = (class_map.set(key_val, lex.s(lfv)), lfv = 0, lex.n.pos);
                    else {
                        key_val = lex.s(key);
                        key = (class_map = get_map(key_val, map), lex.n.pos);
                    }
                    continue;
                case "=":
                    //looking for a value now
                    key_val = lex.s(key);
                    lfv = lex.n.pos;
                    continue;
            }
            lex.n;
        }

        if (lfv > 0) class_map.set(key_val, lex.s(lfv));
    }

    setPath(path) {

        this.path = path;

        return new URL(this);
    }

    setLocation() {
        history.replaceState({}, "replaced state", `${this}`);
        window.onpopstate();
    }

    toString() {
        let str = [];

        if (this.protocol && this.host)
            str.push(`${this.protocol}://`);

        if (this.host)
            str.push(`${this.host}`);

        if (this.port)
            str.push(`:${this.port}`);

        if (this.path)
            str.push(`${this.path[0] == "/" ? "" : "/"}${this.path}`);

        if (this.query)
            str.push(this.query);

        return str.join("");
    }

    /**
     * Pulls data stored in query string into an object an returns that.
     * @param      {string}  class_name  The class name
     * @return     {object}  The data.
     */
    getData(class_name = "") {
        if (this.map) {
            let out = {};
            let _c = this.map.get(class_name);
            if (_c) {
                for (let [key, val] of _c.entries())
                    out[key] = val;
                return out;
            }
        }
        return null;
    }

    /**
     * Sets the data in the query string. Wick data is added after a second `?` character in the query field, and appended to the end of any existing data.
     * @param      {string}  class_name  Class name to use in query string. Defaults to root, no class 
     * @param      {object | Model | AnyModel}  data        The data
     */
    setData(data = null, class_name = "") {

        if (data) {

            let map = this.map = new Map();

            let store = (map.has(class_name)) ? map.get(class_name) : (map.set(class_name, new Map()).get(class_name));

            //If the data is a falsy value, delete the association.

            for (let n in data) {
                if (data[n] !== undefined && typeof data[n] !== "object")
                    store.set(n, data[n]);
                else
                    store.delete(n);
            }

            //set query
            let class_, null_class, str = "";

            if ((null_class = map.get(""))) {
                if (null_class.size > 0) {
                    for (let [key, val] of null_class.entries())
                        str += `&${key}=${val}`;

                }
            }

            for (let [key, class_] of map.entries()) {
                if (key === "")
                    continue;
                if (class_.size > 0) {
                    str += `&${key}`;
                    for (let [key, val] of class_.entries())
                        str += `&${key}=${val}`;
                }
            }

            str = str.slice(1);

            this.query = this.query.split("?")[0] + "?" + str;

            if (URL.G == this)
                this.goto();
        } else {
            this.query = "";
        }

        return this;

    }

    /**
     * Fetch a string value of the remote resource. 
     * Just uses path component of URL. Must be from the same origin.
     * @param      {boolean}  [ALLOW_CACHE=true]  If `true`, the return string will be cached. If it is already cached, that will be returned instead. If `false`, a network fetch will always occur , and the result will not be cached.
     * @return     {Promise}  A promise object that resolves to a string of the fetched value.
     */
    fetchText(ALLOW_CACHE = true) {

        if (ALLOW_CACHE) {

            let resource = URL.RC.get(this.path);

            if (resource)
                return new Promise((res) => {
                    res(resource);
                });
        }

        return fetchLocalText(this.path).then(res => (URL.RC.set(this.path, res), res));
    }

    /**
     * Fetch a JSON value of the remote resource. 
     * Just uses path component of URL. Must be from the same origin.
     * @param      {boolean}  [ALLOW_CACHE=true]  If `true`, the return string will be cached. If it is already cached, that will be returned instead. If `false`, a network fetch will always occur , and the result will not be cached.
     * @return     {Promise}  A promise object that resolves to a string of the fetched value.
     */
    fetchJSON(ALLOW_CACHE = true) {

        let string_url = this.toString();

        if (ALLOW_CACHE) {

            let resource = URL.RC.get(string_url);

            if (resource)
                return new Promise((res) => {
                    res(resource);
                });
        }

        return fetchLocalJSON(string_url).then(res => (URL.RC.set(this.path, res), res));
    }

    /**
     * Cache a local resource at the value 
     * @param    {object}  resource  The resource to store at this URL path value.
     * @returns {boolean} `true` if a resource was already cached for this URL, false otherwise.
     */
    cacheResource(resource) {

        let occupied = URL.RC.has(this.path);

        URL.RC.set(this.path, resource);

        return occupied;
    }

    submitForm(form_data) {
        return submitForm(this.toString(), form_data);
    }

    submitJSON(json_data) {
            return submitJSON(this.toString(), json_data);
        }
        /**
         * Goes to the current URL.
         */
    goto() {
        return;
        let url = this.toString();
        history.pushState({}, "ignored title", url);
        window.onpopstate();
        URL.G = this;
    }

    get pathname() {
        return this.path;
    }

    get href() {
        return this.toString();
    }
}

/**
 * The fetched resource cache.
 */
URL.RC = new Map();

/**
 * The Default Global URL object. 
 */
URL.G = null;

/**
 * The Global object Proxy.
 */
URL.R = {
    get protocol() {
        return URL.G.protocol;
    },
    set protocol(v) {
        return;
        URL.G.protocol = v;
    },
    get user() {
        return URL.G.user;
    },
    set user(v) {
        return;
        URL.G.user = v;
    },
    get pwd() {
        return URL.G.pwd;
    },
    set pwd(v) {
        return;
        URL.G.pwd = v;
    },
    get host() {
        return URL.G.host;
    },
    set host(v) {
        return;
        URL.G.host = v;
    },
    get port() {
        return URL.G.port;
    },
    set port(v) {
        return;
        URL.G.port = v;
    },
    get path() {
        return URL.G.path;
    },
    set path(v) {
        return;
        URL.G.path = v;
    },
    get query() {
        return URL.G.query;
    },
    set query(v) {
        return;
        URL.G.query = v;
    },
    get hash() {
        return URL.G.hash;
    },
    set hash(v) {
        return;
        URL.G.hash = v;
    },
    get map() {
        return URL.G.map;
    },
    set map(v) {
        return;
        URL.G.map = v;
    },
    setPath(path) {
        return URL.G.setPath(path);
    },
    setLocation() {
        return URL.G.setLocation();
    },
    toString() {
        return URL.G.toString();
    },
    getData(class_name = "") {
        return URL.G.getData(class_name = "");
    },
    setData(class_name = "", data = null) {
        return URL.G.setData(class_name, data);
    },
    fetchText(ALLOW_CACHE = true) {
        return URL.G.fetchText(ALLOW_CACHE);
    },
    cacheResource(resource) {
        return URL.G.cacheResource(resource);
    }
};
Object.freeze(URL.R);
Object.freeze(URL.RC);
Object.seal(URL);

/**
 * To be extended by objects needing linked list methods.
 */
const LinkedList = {

    props: {
        /**
         * Properties for horizontal graph traversal
         * @property {object}
         */
        defaults: {
            /**
             * Next sibling node
             * @property {object | null}
             */
            nxt: null,

            /**
             * Previous sibling node
             * @property {object | null}
             */
            prv: null
        },

        /**
         * Properties for vertical graph traversal
         * @property {object}
         */
        children: {
            /**
             * Number of children nodes.
             * @property {number}
             */
            noc: 0,
            /**
             * First child node
             * @property {object | null}
             */
            fch: null,
        },
        parent: {
            /**
             * Parent node
             * @property {object | null}
             */
            par: null
        }
    },

    methods: {
        /**
         * Default methods for Horizontal traversal
         */
        defaults: {

            insertBefore: function(node) {

                if (!this.nxt || !this.prv) {
                    this.nxt = this;
                    this.prv = this;
                }

                if (node.prv || node.nxt) {
                    node.prv.nxt = node.nxt;
                    node.nxt.prv = node.prv;
                }

                node.prv = this.prv;
                this.prv.nxt = node;
                node.nxt = this;
                this.prv = node;
            },

            insertAfter: function(node) {

                if (!this.nxt || !this.prv) {
                    this.nxt = this;
                    this.prv = this;
                }

                if (node.prv || node.nxt) {
                    node.prv.nxt = node.nxt;
                    node.nxt.prv = node.prv;
                }

                this.nxt.prv = node;
                node.nxt = this.nxt;
                this.nxt = node;
                node.prv = this;
            }
        },
        /**
         * Methods for both horizontal and vertical traversal.
         */
        parent_child: {
            /**
             *  Returns eve. 
             * @return     {<type>}  { description_of_the_return_value }
             */
            root() {
                return this.eve();
            },
            /**
             * Returns the root node. 
             * @return     {Object}  return the very first node in the linked list graph.
             */
            eve() {
                if (this.par)
                    return this.par.eve();
                return this;
            },

            push(node) {
                this.addChild(node);
            },

            unshift(node) {
                this.addChild(node, (this.fch) ? this.fch.pre : null);
            },

            replace(old_node, new_node) {
                if (old_node.par == this && old_node !== new_node) {
                    if (new_node.par) new_node.par.remove(new_node);

                    if (this.fch == old_node) this.fch = new_node;
                    new_node.par = this;


                    if (old_node.nxt == old_node) {
                        new_node.nxt = new_node;
                        new_node.prv = new_node;
                    } else {
                        new_node.prv = old_node.prv;
                        new_node.nxt = old_node.nxt;
                        old_node.nxt.prv = new_node;
                        old_node.prv.nxt = new_node;
                    }

                    old_node.par = null;
                    old_node.prv = null;
                    old_node.nxt = null;
                }
            },

            insertBefore: function(node) {
                if (this.par)
                    this.par.addChild(node, this.pre);
                else
                    LinkedList.methods.defaults.insertBefore.call(this, node);
            },

            insertAfter: function(node) {
                if (this.par)
                    this.par.addChild(node, this);
                else
                    LinkedList.methods.defaults.insertAfter.call(this, node);
            },

            addChild: function(child = null, prev = null) {

                if (!child) return;

                if (child.par)
                    child.par.removeChild(child);

                if (prev && prev.par && prev.par == this) {
                    if (child == prev) return;
                    child.prv = prev;
                    prev.nxt.prv = child;
                    child.nxt = prev.nxt;
                    prev.nxt = child;
                } else if (this.fch) {
                    child.prv = this.fch.prv;
                    this.fch.prv.nxt = child;
                    child.nxt = this.fch;
                    this.fch.prv = child;
                } else {
                    this.fch = child;
                    child.nxt = child;
                    child.prv = child;
                }

                child.par = this;
                this.noc++;
            },

            /**
             * Analogue to HTMLElement.removeChild()
             *
             * @param      {HTMLNode}  child   The child
             */
            removeChild: function(child) {
                if (child.par && child.par == this) {
                    child.prv.nxt = child.nxt;
                    child.nxt.prv = child.prv;

                    if (child.prv == child || child.nxt == child) {
                        if (this.fch == child)
                            this.fch = null;
                    } else if (this.fch == child)
                        this.fch = child.nxt;

                    child.prv = null;
                    child.nxt = null;
                    child.par = null;
                    this.noc--;
                }
            },

            /**
             * Gets the next node. 
             *
             * @param      {HTMLNode}  node    The node to get the sibling of.
             * @return {HTMLNode | TextNode | undefined}
             */
            getNextChild: function(node = this.fch) {
                if (node && node.nxt != this.fch && this.fch)
                    return node.nxt;
                return null;
            },

            /**
             * Gets the child at index.
             *
             * @param      {number}  index   The index
             */
            getChildAtIndex: function(index, node = this.fch) {
                if(node.par !== this)
                    node = this.fch;

                let first = node;
                let i = 0;
                while (node && node != first) {
                    if (i++ == index)
                        return node;
                    node = node.nxt;
                }

                return null;
            },
        }
    },

    gettersAndSetters : {
        peer : {
            next: {
                enumerable: true,
                configurable: true,
                get: function() {
                    return this.nxt;
                },
                set: function(n) {
                    this.insertAfter(n);
                }
            },
            previous: {
                enumerable: true,
                configurable: true,
                get: function() {
                    return this.prv;
                },
                set: function(n) {
                    this.insertBefore(n);
                }   
            }
        },
        tree : {
            children: {
                enumerable: true,
                configurable: true,
                /**
                 * @return {array} Returns an array of all children.
                 */
                get: function() {
                    for (var z = [], i = 0, node = this.fch; i++ < this.noc;)(
                        z.push(node), node = node.nxt
                    );
                    return z;
                },
                set: function(e) {
                    /* No OP */
                }
            },
            parent: {
                enumerable: true,
                configurable: true,
                /**
                 * @return parent node
                 */
                get: function() {
                    return this.par;
                },
                set: function(p) {
                    if(p && p.addChild)
                        p.addChild(this);
                    else if(p === null && this.par)
                        this.par.removeChild(this);
                }
            }
        }
    },


    mixin : (constructor)=>{
        const proto = (typeof(constructor) == "function") ? constructor.prototype : (typeof(constructor) == "object") ? constructor : null;
        if(proto){
            Object.assign(proto, 
                LinkedList.props.defaults, 
                LinkedList.methods.defaults
            );
        }
        Object.defineProperties(proto, LinkedList.gettersAndSetters.peer);
    },

    mixinTree : (constructor)=>{
        const proto = (typeof(constructor) == "function") ? constructor.prototype : (typeof(constructor) == "object") ? constructor : null;
        if(proto){
            Object.assign(proto, 
                LinkedList.props.defaults, 
                LinkedList.props.children, 
                LinkedList.props.parent, 
                LinkedList.methods.defaults, 
                LinkedList.methods.parent_child
                );
            Object.defineProperties(proto, LinkedList.gettersAndSetters.tree);
            Object.defineProperties(proto, LinkedList.gettersAndSetters.peer);
        }
    }
};

/** NODE TYPE IDENTIFIERS **/
const HTML = 0;
const TEXT = 1;
const offset = "    ";

/**
 * A node for text data.
 * @param  {string}  str     The text value of the node.
 */
class TextNode {

    constructor(str = "") {
        /**
         * The text value
         */
        this.txt = str;
    }

    /**
     * Returns the type of `1` (`TEXT`)
     */
    get type() {
        return TEXT;
    }

    /**
     * Returns a string representation of the object.
     * @param      {string}  str     Optional string passed down from calling method.
     * @return     {string}  String representation of the object.
     */
    toString(off = 0) {
        return `${offset.repeat(off)} ${this.txt}\n`;
    }

    /**
     * Builds a real DOM HTMLTextNode node. 
     * @param      {HTMLElement}  parent  The real html element.
     */
    build(parent) {
        parent.appendChild(document.createTextNode(this.txt));
    }

}

LinkedList.mixinTree(TextNode);


/**
 * A node for HTML data. 
 * Handles the parsing of HTML strings.
 */
class HTMLNode {

    constructor() {

        /**
         * Element attributes
         * @public
         */
        this.attributes = [];

        /**
         * Any Comment Lines found within.
         * @private
         */
        //this.dtd_nodes = [];

        /**
         * The tag name of the object.
         * @public
         */
        this.tag = "";

        /**
         * A URL instance when set.
         * @private
         */
        this.url = null;

        /**
         * Whether the node is a DTD, such as a comment.
         * @private
         */
        this.DTD = false;

        /**
         * True if the element is a single tag element. 
         */
        this.single = false;

    }

    /******************************************* ATTRIBUTE AND ELEMENT ACCESS ******************************************************************************************************************/

    /**
     * Returns the type of `0` (`HTML`)
     * @public
     */
    get type() {
        return HTML;
    }

    get tagName() {
        return this.tag.toUpperCase();
    }

    get classList() {
        let classes = this.getAttrib("class");
        if (typeof classes.value == "string")
            return classes.split(" ");
        return [];
    }

    getAttribute(name) {
        let attrib = this.getAttrib(name);
        return (attrib) ? attrib.value : void 0;
    }

    get parentElement() {
        return this.par;
    }

    get previousElementSibling() {
        if (this.par) {
            let guard = this.par.fch;

            if (this == guard) return null;

            let node = this.prv;

            while (node && node != gaurd) {
                if (node.type == HTML)
                    return node;
                node = node.prv;
            }

            if (node.type == HTML)
                return node;
        }
        return null;
    }

    get nextElementSibling() {
        if (this.par) {
            let guard = this.par.fch;

            let node = this.nxt;

            while (node && node != guard) {
                if (node.type == HTML)
                    return node;
                node = node.nxt;
            }
        }
        return null;
    }



    /**
     * Gets an attribute.
     * @param      {string}  prop    The attribute name to lookup;
     * @public
     */
    getAttrib(prop) {
        for (let i = -1, l = this.attributes.length; ++i < l;) {
            let attrib = this.attributes[i];
            if (attrib.name == prop) return attrib;
        }
        return null;
    }



    /**
     * Get Elements by the tag name.
     * @param      {string}   tag                  A string to match with the element's tag value.
     * @param      {boolean}  [INCLUDE_DESCENDANTS=false]  When `true` searching will recurse depth first into child elements.
     * @param      {Array}    array                Internal element store that is returned. 
     * @return     {Array}    An array of matched elements.
     * @public
     */
    getTag(tag, INCLUDE_DESCENDANTS = false, array = []) {
        for (let node = this.fch; node;
            (node = this.getNextChild(node))) {
            if (node.type == HTML) {
                if (node.tag == tag) array.push(node);
                if (INCLUDE_DESCENDANTS) node.getTag(tag, INCLUDE_DESCENDANTS, array);
            }
        }
        return array;
    }



    /**
     * Get Elements by the tag name.
     * @param      {string}   _class               A string to find with the element's class value.
     * @param      {boolean}  [INCLUDE_DESCENDANTS=false]  When `true` searching will recurse depth first into child elements.
     * @param      {Array}    array                Internal element store that is returned. 
     * @return     {Array}    An array of matched elements.
     * @public
     */
    getClass(_class, INCLUDE_DESCENDANTS = false, array = []) {
        for (let node = this.fch; node;
            (node = this.getNextChild(node))) {
            if (node.type == HTML) {
                if (node.class.includes(_class)) array.push(node);
                if (INCLUDE_DESCENDANTS) node.getClass(_class, INCLUDE_DESCENDANTS, array);
            }
        }
        return array;
    }



    /**
     * Get first element with matching id.
     * @param      {string}   id                   The identifier value to find.
     * @param      {boolean}  [INCLUDE_DESCENDANTS=false]  When `true` searching will recurse depth first into child elements.
     * @return     {HTMLNode}   The first element whose id matches.
     * @public
     */
    getID(id, INCLUDE_DESCENDANTS = false) {
        for (let node = this.fch, ch; node;
            (node = this.getNextChild(node))) {
            if (node.type == HTML) {
                if (node.id == id) return node;
                if (INCLUDE_DESCENDANTS && (ch = node.getID(id, INCLUDE_DESCENDANTS))) return ch;
            }
        }
        return null;
    }



    /**
     * The id attribute value.
     * @public
     */
    get id() {
        let id_attrib = this.getAttrib("id");
        return (id_attrib) ? id_attrib.value : "";
    }



    /**
     * The class attribute value.
     * @public
     */
    get class() {
        let id_attrib = this.getAttrib("class");
        return (id_attrib) ? id_attrib.value : "";
    }



    /**
     * Returns a string representation of the object.
     * @return     {string}  String representation of the object.
     * @public
     */
    toString(off = 0) {
        let o = offset.repeat(off);

        let str = `${o}<${this.tag}`,
            atr = this.attributes,
            i = -1,
            l = atr.length;

        while (++i < l) {
            let attr = atr[i];
           
            if(attr.name) 
                str += ` ${attr.name}="${attr.value}"`;
        }

        str += ">\n";
        
        if(this.single)
            return str;

        for (let node = this.fch; node;
            (node = this.getNextChild(node))) {
            str += node.toString(off+1);
        }

        return str + `${o}</${this.tag}>\n`;
    }



    /******************************************* PARSING ******************************************************************************************************************/



    /**
     * Creates a text node. 
     *
     * @param      {Lexer} - A Lexical tokenizing object supporting methods found in {@link Lexer}
     * @param      {start}  start   The starting point of the data slice
     * @private
     */
    createTextNode(lex, start, end) {
        if (end) {
            let other_lex = lex.copy();
            other_lex.IWS = true;
            other_lex.off = start - 1;
            other_lex.tl = 1;
            other_lex.sl = end;
            let text_node = this.processTextNodeHook(other_lex.n, true);
            if (text_node) this.addChild(text_node);
        } else if (start < lex.off) {
            let other_lex = lex.copy();
            other_lex.off = start;
            other_lex.END = false;
            other_lex.tl = 0;
            other_lex.fence(lex);
            other_lex.IWS = false;
            other_lex.n;
            other_lex.IWS = true;

            if ((other_lex.sl - other_lex.off) < 2){
                //TODO
                throw new Error("Unexpected end of input");
            }

            let text_node = this.processTextNodeHook(other_lex, false);
            if (text_node) this.addChild(text_node);
        }
    }



    /**
     * Parses an HTML open tag.
     * @param {Lexer} - A Lexical tokenizing object supporting methods found in {@link Lexer}  
     * @param {Object} attribs - An object which will receive the attribute keys and values. 
     * @private
     */
    parseOpenTag(lex, DTD, old_url) {
        let HAS_URL = false;

        while (!lex.END && lex.text !== ">" && lex.text !== "/") {


            if (DTD && lex.ch == "-" && lex.pk.ch == "-") {
                //parse comment

                let pk = lex.pk;
                if (!lex.text) throw Error("Unexpected end of input.");
                let a = pk.n.ch,
                    b = pk.n.ch;
                while (!pk.END && (b !== "-" || a !== "-")) {
                    a = b;
                    b = pk.n.tx;
                }
                lex.sync().n;
                continue;
            }

            lex.IWS = false;
            
            let pk = lex.pk;
            
            while (!pk.END && !(pk.ty & (pk.types.ws | pk.types.str | pk.types.nl)) && pk.ch !== "=" && pk.ch !== ">") { pk.n; }
            
            let attrib_name = pk.slice(lex).trim();
            
            lex.sync(); 
            
            lex.IWS = true;

            let out_lex = lex.copy();
            
            out_lex.sl = lex.off;

            if (lex.ch == "=") {
                let pk = lex.pk;

                let start = pk.off;

                pk.IWS = true;
                while (!(pk.ty & (pk.types.ws | pk.types.str | pk.types.nl)) && pk.ch !== ">") { pk.n; }
                pk.IWS = false;

                if (pk.off > start) {
                    out_lex = lex.n.copy();
                    out_lex.fence(pk);
                    lex.sync();
                } else {
                    //Have simple value
                    lex.sync(pk);
                    out_lex = lex.copy();
                    if (lex.pos < 0)
                        lex.throw(`Unexpected end of input. Expecting value for attribute "${attrib_name}"`);
                    else if (lex.type == lex.types.str) {
                        out_lex.tl = 1;
                        out_lex.n;
                        out_lex.sl = lex.pos + lex.tl - 1;
                        lex.n;
                    } else {
                        lex.next();
                        out_lex.fence(lex);
                    }
                }
            }

            if (attrib_name == "url") {
                this.url = URL.resolveRelative(old_url, out_lex.slice());
                HAS_URL = true;
            }

            let attrib = this.processAttributeHook(attrib_name, out_lex);

            if (attrib)
                this.attributes.push(attrib);
        }

        if (lex.text == "/") // Void Nodes
            lex.assert("/");

        return HAS_URL;
    }

    parseRunner(lex = null, OPENED = false, IGNORE_TEXT_TILL_CLOSE_TAG = false, parent = null, old_url = new URL(0, !!1)) {
        let start = lex.pos;
        let end = lex.pos;
        let HAS_INNER_TEXT = false;
        main_loop:
        while (!lex.END) {
            switch (lex.ch) {
                case "/":
                    if (lex.pk.ch == "<") { //ignore the white space.
                        lex.sync();
                        break;
                    }
                    break;

                case "<":
                    if (!IGNORE_TEXT_TILL_CLOSE_TAG) lex.IWS = true;

                    let pk = lex.pk;

                    if (pk.ch == "/") {
                        if (pk.pk.tx !== this.tag){
                             break main_loop;   
                        }

                        if (HAS_INNER_TEXT) {
                            if (IGNORE_TEXT_TILL_CLOSE_TAG)
                                this.createTextNode(lex, start);
                            else if ((end - start) > 0)
                                this.createTextNode(lex, start, end);
                        }

                        //Close tag
                        let name = lex.sync().n.tx;

                        //Close tag is not the one we are looking for. We'll create a new dummy node and close the tag with it. 
                        if (name !== this.tag) {
                            //Create new node with the open tag 
                            let insert = new HTMLNode();
                            insert.tag = name;
                            this.addChild(insert);
                        }

                        lex.n;
                        lex.IWS = false;
                        lex.a(">");

                        this.endOfElementHook(lex, parent);

                        return this;
                    }

                    if (pk.ch == "!") {
                        /* DTD - Doctype and Comment tags*/
                        //This type of tag is dropped
                        while (!lex.END && lex.n.ch !== ">") {}
                        lex.a(">");
                        continue;
                    }

                    if (!IGNORE_TEXT_TILL_CLOSE_TAG) {
                        //Open tag
                        if (!OPENED) {
                            let URL$$1 = false;
                            this.DTD = false;
                            this.attributes.length = 0;

                            //Expect tag name 
                            this.tag = lex.n.tx.toLowerCase();


                            URL$$1 = this.parseOpenTag(lex.n, false, old_url);
                            start = lex.pos + 1;
                            lex.IWS = false;
                            if (lex.ch == "/") lex.n;
                            lex.a(">");


                            OPENED = true;

                            HAS_INNER_TEXT = IGNORE_TEXT_TILL_CLOSE_TAG = this.ignoreTillHook(this.tag);

                            if (URL$$1) {

                                //Need to block against ill advised URL fetches. 

                                //Hook to pull in data from remote resource
                                let prom = this.processFetchHook(lex, true, IGNORE_TEXT_TILL_CLOSE_TAG, parent);

                                if (prom instanceof Promise) {
                                    return prom.then(() => {
                                        if (this.selfClosingTagHook(this.tag)) {
                                            return this;
                                        } // Tags without matching end tags.
                                        return this.parseRunner(lex, true, IGNORE_TEXT_TILL_CLOSE_TAG, this, old_url);
                                    });
                                }
                            }

                            if (this.selfClosingTagHook(this.tag)){
                                 // Tags without matching end tags.
                                this.single = true;
                                return this;
                            }

                            continue;
                        } else {
                            lex.IWS = false;
                            //Create text node;
                            if (HAS_INNER_TEXT) {
                                if (IGNORE_TEXT_TILL_CLOSE_TAG)
                                    this.createTextNode(lex, start);
                                else if ((end - start) > 0) {
                                    this.createTextNode(lex, start, end);
                                }
                            }

                            //New Child node found
                            let node = this.createHTMLNodeHook(lex.pk.tx, lex.off);

                            this.addChild(node);

                            let prom = node.parseRunner(lex, false, false, this, this.url || old_url);
                            
                            if(prom instanceof Promise){
                                return prom.then(child => {
                                    if (child.DTD) this.removeChild(child);
                                    return this.parseRunner(lex, OPENED, false, this, old_url);
                                });    
                            }else{
                                if (node.DTD) this.removeChild(node);
                                return this.parseRunner(lex, OPENED, false, this, old_url);
                            }
                            
                        }
                        //}
                    }
                    lex.IWS = false;
                    break;
            }

            if (!IGNORE_TEXT_TILL_CLOSE_TAG) {
                if (lex.ty == 8 && !HAS_INNER_TEXT) {
                    start = lex.pos;
                } else if (lex.ty == 256) {} else {
                    HAS_INNER_TEXT = true;
                    end = lex.off + lex.tl;
                }
            }

            lex.n;
        }

        if (OPENED && start < lex.off) {
            //Got here from an network import, need produce a text node;
            this.createTextNode(lex, start);
        }

        return this;
    }

    /**
     * Parses HTML string. Appends new nodes, or consumes first node if tag is an empty string.
     * @param      {Lexer} - A Lexical tokenizing object supporting methods found in {@link Lexer}
     * @param      {boolean}  OPENED       The opened
     * @param      {boolean}  IGNORE_TEXT_TILL_CLOSE_TAG  If `true`, parser will ignore all HTML syntax until the closing tag is found.
     * @return     {Promise}  
     * @private
     */
    parse(lex, url =  new URL(0, !!1)) {
        
        if(typeof(lex) == "string") lex = whind(lex);
        
        lex.IWS = false;
        
        return new Promise((res, rej) => {
            res(this.parseRunner(lex, false, false, null, url));
        });
    }

    /******************************************* HOOKS ******************************************************************************************************************/

    endOfElementHook() {}

    selfClosingTagHook(tag) {
        switch (tag) {
            case "input":
            case "br":
            case "img":
            //svg
            case "rect":
                return true;
        }

        return false;
    }

    ignoreTillHook(tag) {
        if (tag == "script" || tag == "style") // Special character escaping tags.
            return true;
        return false;
    }

    createHTMLNodeHook(tag, start) { return new HTMLNode(tag); }

    processFetchHook(lexer, OPENED, IGNORE_TEXT_TILL_CLOSE_TAG, parent, url) {
        let path = this.url.path,
            CAN_FETCH = true;

        //make sure URL is not already called by a parent.
        while (parent) {
            if (parent.url && parent.url.path == path) {
                console.warn(`Preventing recursion on resource ${this.url.path}`);
                CAN_FETCH = false;
                break;
            }
            parent = parent.par;
        }

        if (CAN_FETCH) {
            return this.url.fetchText().then((text) => {
                let lexer = whind(text);
                return this.parseRunner(lexer, true, IGNORE_TEXT_TILL_CLOSE_TAG, this, this.url);
            }).catch((e) => {
                console.error(e);
            });
        }
        return null;
    }

    processAttributeHook(name, lex) { return { name, value: lex.slice() }; }
    
    processTextNodeHook(lex, IS_INNER_HTML) {
        if (!IS_INNER_HTML)
            return new TextNode(lex.trim().slice());
        let txt = "";
        /*
        lex.IWS = true;

        while (!lex.END) {
            if (lex.ty == 8) {
                txt += " ";
            } else if (lex.ty == 256) {} else {
                txt += lex.tx;
            }
            lex.IWS = false;
            lex.n;
        }

        if(!(lex.ty & (8 | 256)))
            txt += lex.tx;
        */
        //if (txt.length > 0) {
            
            let t = lex.trim();
             debugger   
            if(t.string_length > 0)
                return new TextNode(t.slice());
            
        //}

        return null;
    }

    build(parent) {
        let ele = document.createElement(this.tag);

        for (let i = 0, l = this.attributes.length; i < l; i++) {
            let attr = this.attributes[i];
            ele.setAttribute(attr.name, attr.value);
        }
        //let passing_element = ele;
        let passing_element = (this.tag == "template") ? ele.content : ele;

        for (let node = this.fch; node;
            (node = this.getNextChild(node))) {
            node.build(passing_element);
        }

        if (parent) parent.appendChild(ele);

        return ele;
    }
}

 LinkedList.mixinTree(HTMLNode);


/**
 * Builds an HTML AST. 
 * @function
 * @param {string} html_string - A string containing HTML data.
 * @param {string} css_string - An existing CSSRootNode to merge with new `selectors` and `rules`.
 * @return {Promise} Returns a `Promise` that will return a new or existing CSSRootNode.
 * @memberof module:wick.core
 * @alias html
 */
const HTMLParser = (html_string, root = null, url) => (root = (!root || !(root instanceof HTMLNode)) ? new HTMLNode() : root, root.parse(whind(html_string.replace(/\&lt;/g, "<").replace(/\&gt;/g, ">"), url)));

exports.HTMLNode = HTMLNode;
exports.HTMLParser = HTMLParser;
exports.TextNode = TextNode;
exports.default = HTMLParser;
