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
7, 	 	/* NULL */
7, 	 	/* START_OF_HEADER */
7, 	 	/* START_OF_TEXT */
7, 	 	/* END_OF_TXT */
7, 	 	/* END_OF_TRANSMISSION */
7, 	 	/* ENQUIRY */
7, 	 	/* ACKNOWLEDGE */
7, 	 	/* BELL */
7, 	 	/* BACKSPACE */
4, 	 	/* HORIZONTAL_TAB */
6, 	 	/* LINEFEED */
7, 	 	/* VERTICAL_TAB */
7, 	 	/* FORM_FEED */
5, 	 	/* CARRIAGE_RETURN */
7, 	 	/* SHIFT_OUT */
7, 		/* SHIFT_IN */
11,	 	/* DATA_LINK_ESCAPE */
7, 	 	/* DEVICE_CTRL_1 */
7, 	 	/* DEVICE_CTRL_2 */
7, 	 	/* DEVICE_CTRL_3 */
7, 	 	/* DEVICE_CTRL_4 */
7, 	 	/* NEGATIVE_ACKNOWLEDGE */
7, 	 	/* SYNCH_IDLE */
7, 	 	/* END_OF_TRANSMISSION_BLOCK */
7, 	 	/* CANCEL */
7, 	 	/* END_OF_MEDIUM */
7, 	 	/* SUBSTITUTE */
7, 	 	/* ESCAPE */
7, 	 	/* FILE_SEPERATOR */
7, 	 	/* GROUP_SEPERATOR */
7, 	 	/* RECORD_SEPERATOR */
7, 	 	/* UNIT_SEPERATOR */
3, 	 	/* SPACE */
8, 	 	/* EXCLAMATION */
2, 	 	/* DOUBLE_QUOTE */
7, 	 	/* HASH */
7, 	 	/* DOLLAR */
8, 	 	/* PERCENT */
8, 	 	/* AMPERSAND */
2, 	 	/* QUOTE */
9, 	 	/* OPEN_PARENTH */
10, 	 /* CLOSE_PARENTH */
8, 	 	/* ASTERISK */
8, 	 	/* PLUS */
7, 	 	/* COMMA */
7, 	 	/* HYPHEN */
7, 	 	/* PERIOD */
7, 	 	/* FORWARD_SLASH */
0, 	 	/* ZERO */
0, 	 	/* ONE */
0, 	 	/* TWO */
0, 	 	/* THREE */
0, 	 	/* FOUR */
0, 	 	/* FIVE */
0, 	 	/* SIX */
0, 	 	/* SEVEN */
0, 	 	/* EIGHT */
0, 	 	/* NINE */
8, 	 	/* COLON */
7, 	 	/* SEMICOLON */
8, 	 	/* LESS_THAN */
8, 	 	/* EQUAL */
8, 	 	/* GREATER_THAN */
7, 	 	/* QMARK */
7, 	 	/* AT */
1, 	 	/* A*/
1, 	 	/* B */
1, 	 	/* C */
1, 	 	/* D */
1, 	 	/* E */
1, 	 	/* F */
1, 	 	/* G */
1, 	 	/* H */
1, 	 	/* I */
1, 	 	/* J */
1, 	 	/* K */
1, 	 	/* L */
1, 	 	/* M */
1, 	 	/* N */
1, 	 	/* O */
1, 	 	/* P */
1, 	 	/* Q */
1, 	 	/* R */
1, 	 	/* S */
1, 	 	/* T */
1, 	 	/* U */
1, 	 	/* V */
1, 	 	/* W */
1, 	 	/* X */
1, 	 	/* Y */
1, 	 	/* Z */
9, 	 	/* OPEN_SQUARE */
7, 	 	/* TILDE */
10, 	/* CLOSE_SQUARE */
7, 	 	/* CARET */
7, 	 	/* UNDER_SCORE */
2, 	 	/* GRAVE */
1, 	 	/* a */
1, 	 	/* b */
1, 	 	/* c */
1, 	 	/* d */
1, 	 	/* e */
1, 	 	/* f */
1, 	 	/* g */
1, 	 	/* h */
1, 	 	/* i */
1, 	 	/* j */
1, 	 	/* k */
1, 	 	/* l */
1, 	 	/* m */
1, 	 	/* n */
1, 	 	/* o */
1, 	 	/* p */
1, 	 	/* q */
1, 	 	/* r */
1, 	 	/* s */
1, 	 	/* t */
1, 	 	/* u */
1, 	 	/* v */
1, 	 	/* w */
1, 	 	/* x */
1, 	 	/* y */
1, 	 	/* z */
9, 	 	/* OPEN_CURLY */
7, 	 	/* VERTICAL_BAR */
10,  	/* CLOSE_CURLY */
7,  	/* TILDE */
7 		/* DELETE */
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
0, 		/* NULL */
0, 		/* START_OF_HEADER */
0, 		/* START_OF_TEXT */
0, 		/* END_OF_TXT */
0, 		/* END_OF_TRANSMISSION */
0, 		/* ENQUIRY */
0,		/* ACKNOWLEDGE */
0,		/* BELL */
0,		/* BACKSPACE */
0,		/* HORIZONTAL_TAB */
0,		/* LINEFEED */
0,		/* VERTICAL_TAB */
0,		/* FORM_FEED */
0,		/* CARRIAGE_RETURN */
0,		/* SHIFT_OUT */
0,		/* SHIFT_IN */
0,		/* DATA_LINK_ESCAPE */
0,		/* DEVICE_CTRL_1 */
0,		/* DEVICE_CTRL_2 */
0,		/* DEVICE_CTRL_3 */
0,		/* DEVICE_CTRL_4 */
0,		/* NEGATIVE_ACKNOWLEDGE */
0,		/* SYNCH_IDLE */
0,		/* END_OF_TRANSMISSION_BLOCK */
0,		/* CANCEL */
0,		/* END_OF_MEDIUM */
0,		/* SUBSTITUTE */
0,		/* ESCAPE */
0,		/* FILE_SEPERATOR */
0,		/* GROUP_SEPERATOR */
0,		/* RECORD_SEPERATOR */
0,		/* UNIT_SEPERATOR */
0,		/* SPACE */
0,		/* EXCLAMATION */
0,		/* DOUBLE_QUOTE */
0,		/* HASH */
8,		/* DOLLAR */
0,		/* PERCENT */
0,		/* AMPERSAND */
2,		/* QUOTE */
0,		/* OPEN_PARENTH */
0,		 /* CLOSE_PARENTH */
0,		/* ASTERISK */
0,		/* PLUS */
0,		/* COMMA */
2,		/* HYPHEN */
4,		/* PERIOD */
0,		/* FORWARD_SLASH */
8,		/* ZERO */
8,		/* ONE */
8,		/* TWO */
8,		/* THREE */
8,		/* FOUR */
8,		/* FIVE */
8,		/* SIX */
8,		/* SEVEN */
8,		/* EIGHT */
8,		/* NINE */
0,		/* COLON */
0,		/* SEMICOLON */
0,		/* LESS_THAN */
0,		/* EQUAL */
0,		/* GREATER_THAN */
0,		/* QMARK */
0,		/* AT */
2,		/* A*/
8,		/* B */
2,		/* C */
2,		/* D */
8,		/* E */
2,		/* F */
2,		/* G */
2,		/* H */
2,		/* I */
2,		/* J */
2,		/* K */
2,		/* L */
2,		/* M */
2,		/* N */
8,		/* O */
2,		/* P */
2,		/* Q */
2,		/* R */
2,		/* S */
2,		/* T */
2,		/* U */
2,		/* V */
2,		/* W */
8,		/* X */
2,		/* Y */
2,		/* Z */
0,		/* OPEN_SQUARE */
0,		/* TILDE */
0,		/* CLOSE_SQUARE */
0,		/* CARET */
2,		/* UNDER_SCORE */
0,		/* GRAVE */
2,		/* a */
8,		/* b */
2,		/* c */
2,		/* d */
2,		/* e */
2,		/* f */
2,		/* g */
2,		/* h */
2,		/* i */
2,		/* j */
2,		/* k */
2,		/* l */
2,		/* m */
2,		/* n */
8,		/* o */
2,		/* p */
2,		/* q */
2,		/* r */
2,		/* s */
2,		/* t */
2,		/* u */
2,		/* v */
2,		/* w */
8,		/* x */
2,		/* y */
2,		/* z */
0,		/* OPEN_CURLY */
0,		/* VERTICAL_BAR */
0,		/* CLOSE_CURLY */
0,		/* TILDE */
0		/* DELETE */
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
    CHARACTERS_ONLY_MASK = 0x40,
    TOKEN_LENGTH_MASK = 0xFFFFFF80,

    //De Bruijn Sequence for finding index of right most bit set.
    //http://supertech.csail.mit.edu/papers/debruijn.pdf
    debruijnLUT = [
        0, 1, 28, 2, 29, 14, 24, 3, 30, 22, 20, 15, 25, 17, 4, 8,
        31, 27, 13, 23, 21, 19, 16, 7, 26, 12, 18, 6, 11, 5, 10, 9
    ];

const  getNumbrOfTrailingZeroBitsFromPowerOf2 = (value) => debruijnLUT[(value * 0x077CB531) >>> 27];

class Lexer {

    constructor(string = "", INCLUDE_WHITE_SPACE_TOKENS = false, PEEKING = false) {

        if (typeof(string) !== "string") throw new Error(`String value must be passed to Lexer. A ${typeof(string)} was passed as the \`string\` argument.`);

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
    copy(destination = new Lexer(this.str, false, true)) {
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
    Creates and error message with a diagrame illustrating the location of the error. 
    */
    errorMessage(message = "") {
        const arrow = String.fromCharCode(0x2b89),
            trs = String.fromCharCode(0x2500),
            line = String.fromCharCode(0x2500),
            thick_line = String.fromCharCode(0x2501),
            line_number = "    " + this.line + ": ",
            line_fill = line_number.length,
            t$$1 = thick_line.repeat(line_fill + 48),
            is_iws = (!this.IWS) ? "\n The Lexer produced whitespace tokens" : "";
        const pk = this.copy();
        pk.IWS = false;
        while (!pk.END && pk.ty !== Types.nl) { pk.next(); }
        const end = (pk.END) ? this.str.length : pk.off ;

    //console.log(`"${this.str.slice(this.off-this.char+((this.line > 0) ? 2 :2), end).split("").map((e,i,s)=>e.charCodeAt(0))}"`)
    let v$$1 = "", length = 0;
    v$$1 = this.str.slice(this.off-this.char+((this.line > 0) ? 2 :1), end);
    length = this.char;
    return `${message} at ${this.line}:${this.char}
${t$$1}
${line_number+v$$1}
${line.repeat(length+line_fill-((this.line > 0) ? 2 :1))+arrow}
${t$$1}
${is_iws}`;
    }

    /**
     * Will throw a new Error, appending the parsed string line and position information to the the error message passed into the function.
     * @instance
     * @public
     * @param {String} message - The error message.
     * @param {Bool} DEFER - if true, returns an Error object instead of throwing.
     */
    throw (message, DEFER = false) {
        const error = new Error(this.errorMessage(message));
        if (DEFER)
            return error;
        throw error;
    }

    /**
     * Proxy for Lexer.prototype.reset
     * @public
     */
    r() { return this.reset() }

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

        if (marker.sl < 1) {
            marker.off = 0;
            marker.type = 32768;
            marker.tl = 0;
            marker.line = 0;
            marker.char = 0;
            return marker;
        }

        //Token builder
        const l$$1 = marker.sl,
            str = marker.str,
            IWS = marker.IWS;

        let length = marker.tl,
            off = marker.off + length,
            type = symbol,
            line = marker.line,
            base = off,
            char = marker.char,
            root = marker.off;

        if (off >= l$$1) {
            length = 0;
            base = l$$1;
            //char -= base - off;
            marker.char = char + (base - marker.off);
            marker.type = type;
            marker.off = base;
            marker.tl = 0;
            marker.line = line;
            return marker;
        }

        const USE_CUSTOM_SYMBOLS = !!this.symbol_map;
        let NORMAL_PARSE = true;

        if (USE_CUSTOM_SYMBOLS) {

            let code = str.charCodeAt(off);
            let off2 = off;
            let map = this.symbol_map,
                m$$1;
            let i$$1 = 0;

            while (code == 32 && IWS)
                (code = str.charCodeAt(++off2), off++);

            while ((m$$1 = map.get(code))) {
                map = m$$1;
                off2 += 1;
                code = str.charCodeAt(off2);
            }

            if (map.IS_SYM) {
                NORMAL_PARSE = false;
                base = off;
                length = off2 - off;
                //char += length;
            }
        }

        if (NORMAL_PARSE) {

            for (;;) {

                base = off;

                length = 1;

                const code = str.charCodeAt(off);

                if (code < 128) {

                    switch (jump_table[code]) {
                        case 0: //NUMBER
                            while (++off < l$$1 && (12 & number_and_identifier_table[str.charCodeAt(off)]));

                            if ((str[off] == "e" || str[off] == "E") && (12 & number_and_identifier_table[str.charCodeAt(off + 1)])) {
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
                            while (++off < l$$1 && ((10 & number_and_identifier_table[str.charCodeAt(off)])));
                            type = identifier;
                            length = off - base;
                            break;
                        case 2: //QUOTED STRING
                            if (this.PARSE_STRING) {
                                type = symbol;
                            } else {
                                while (++off < l$$1 && str.charCodeAt(off) !== code);
                                type = string;
                                length = off - base + 1;
                            }
                            break;
                        case 3: //SPACE SET
                            while (++off < l$$1 && str.charCodeAt(off) === SPACE);
                            type = white_space;
                            length = off - base;
                            break;
                        case 4: //TAB SET
                            while (++off < l$$1 && str[off] === HORIZONTAL_TAB);
                            type = white_space;
                            length = off - base;
                            break;
                        case 5: //CARIAGE RETURN
                            length = 2;
                        case 6: //LINEFEED
                            //Intentional
                            type = new_line;
                            line++;
                            base = off;
                            root = off;
                            off += length;
                            char = 0;
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
                }else{
                    break;
                }

                if (IWS && (type & white_space_new_line)) {
                    if (off < l$$1) {
                        type = symbol;
                        //off += length;
                        continue;
                    } else {
                        //Trim white space from end of string
                        //base = l - off;
                        //marker.sl -= off;
                        //length = 0;
                    }
                }
                break;
            }
        }

        marker.type = type;
        marker.off = base;
        marker.tl = (this.masked_values & CHARACTERS_ONLY_MASK) ? Math.min(1, length) : length;
        marker.char = char + base - root;
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
    aC(char) { return this.assertCharacter(char) }
    /**
     * Compares the character value of the current token to the value passed in. Advances to next token if the two are equal.
     * @public
     * @throws {Error} - `Expecting "${text}" got "${this.text}"`
     * @param {String} text - The string to compare.
     */
    assertCharacter(char) {

        if (this.off < 0) this.throw(`Expecting ${char[0]} got null`);

        if (this.ch == char[0])
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
    s(start) { return this.slice(start) }

    /**
     * Returns a slice of the parsed string beginning at `start` and ending at the current token.
     * @param {Number | LexerBeta} start - The offset in this.str to begin the slice. If this value is a LexerBeta, sets the start point to the value of start.off.
     * @return {String} A substring of the parsed string.
     * @public
     */
    slice(start = this.off) {

        if (start instanceof Lexer) start = start.off;

        return this.str.slice(start, (this.off <= start) ? this.sl : this.off);
    }

    /**
     * Skips to the end of a comment section.
     * @param {boolean} ASSERT - If set to true, will through an error if there is not a comment line or block to skip.
     * @param {Lexer} [marker=this] - If another Lexer is passed into this method, it will advance the token state of that Lexer.
     */
    comment(ASSERT = false, marker = this) {

        if (!(marker instanceof Lexer)) return marker;

        if (marker.ch == "/") {
            if (marker.pk.ch == "*") {
                marker.sync();
                while (!marker.END && (marker.next().ch != "*" || marker.pk.ch != "/")) { /* NO OP */ }
                marker.sync().assert("/");
            } else if (marker.pk.ch == "/") {
                const IWS = marker.IWS;
                while (marker.next().ty != Types.new_line && !marker.END) { /* NO OP */ }
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

    toString() {
        return this.slice();
    }

    /**
     * Returns new Whind Lexer that has leading and trailing whitespace characters removed from input. 
     * leave_leading_amount - Maximum amount of leading space caracters to leave behind. Default is zero
     * leave_trailing_amount - Maximum amount of trailing space caracters to leave behind. Default is zero
     */
    trim(leave_leading_amount = 0, leave_trailing_amount = leave_leading_amount) {
        const lex = this.copy();

        let space_count = 0,
            off = lex.off;

        for (; lex.off < lex.sl; lex.off++) {
            const c$$1 = jump_table[lex.string.charCodeAt(lex.off)];

            if (c$$1 > 2 && c$$1 < 7) {

                if (space_count >= leave_leading_amount) {
                    off++;
                } else {
                    space_count++;
                }
                continue;
            }

            break;
        }

        lex.off = off;
        space_count = 0;
        off = lex.sl;

        for (; lex.sl > lex.off; lex.sl--) {
            const c$$1 = jump_table[lex.string.charCodeAt(lex.sl - 1)];

            if (c$$1 > 2 && c$$1 < 7) {
                if (space_count >= leave_trailing_amount) {
                    off--;
                } else {
                    space_count++;
                }
                continue;
            }

            break;
        }

        lex.sl = off;

        if (leave_leading_amount > 0)
            lex.IWS = false;

        lex.token_length = 0;

        lex.next();

        return lex;
    }

    /** Adds symbol to symbol_map. This allows custom symbols to be defined and tokenized by parser. **/
    addSymbol(sym) {
        if (!this.symbol_map)
            this.symbol_map = new Map;


        let map = this.symbol_map;

        for (let i$$1 = 0; i$$1 < sym.length; i$$1++) {
            let code = sym.charCodeAt(i$$1);
            let m$$1 = map.get(code);
            if (!m$$1) {
                m$$1 = map.set(code, new Map).get(code);
            }
            map = m$$1;
        }
        map.IS_SYM = true;
    }

    /*** Getters and Setters ***/
    get string() {
        return this.str;
    }

    get string_length() {
        return this.sl - this.off;
    }

    set string_length(s$$1) {}

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
    get tx() { return this.text }

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
    get ty() { return this.type }

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
    get pk() { return this.peek() }

    /**
     * Proxy for Lexer.prototype.next
     * @public
     */
    get n() { return this.next() }

    get END() { return this.off >= this.sl }
    set END(v$$1) {}

    get type() {
        return 1 << (this.masked_values & TYPE_MASK);
    }

    set type(value) {
        //assuming power of 2 value.
        this.masked_values = (this.masked_values & ~TYPE_MASK) | ((getNumbrOfTrailingZeroBitsFromPowerOf2(value)) & TYPE_MASK);
    }

    get tl() {
        return this.token_length;
    }

    set tl(value) {
        this.token_length = value;
    }

    get token_length() {
        return ((this.masked_values & TOKEN_LENGTH_MASK) >> 7);
    }

    set token_length(value) {
        this.masked_values = (this.masked_values & ~TOKEN_LENGTH_MASK) | (((value << 7) | 0) & TOKEN_LENGTH_MASK);
    }

    get IGNORE_WHITE_SPACE() {
        return this.IWS;
    }

    set IGNORE_WHITE_SPACE(bool) {
        this.iws = !!bool;
    }

    get CHARACTERS_ONLY() {
        return !!(this.masked_values & CHARACTERS_ONLY_MASK);
    }

    set CHARACTERS_ONLY(boolean) {
        this.masked_values = (this.masked_values & ~CHARACTERS_ONLY_MASK) | ((boolean | 0) << 6);
    }

    get IWS() {
        return !!(this.masked_values & IGNORE_WHITESPACE_MASK);
    }

    set IWS(boolean) {
        this.masked_values = (this.masked_values & ~IGNORE_WHITESPACE_MASK) | ((boolean | 0) << 5);
    }

    get PARSE_STRING() {
        return !!(this.masked_values & PARSE_STRING_MASK);
    }

    set PARSE_STRING(boolean) {
        this.masked_values = (this.masked_values & ~PARSE_STRING_MASK) | ((boolean | 0) << 4);
    }

    /**
     * Reference to token id types.
     */
    get types() {
        return Types;
    }
}

Lexer.prototype.addCharacter = Lexer.prototype.addSymbol;

function whind(string, INCLUDE_WHITE_SPACE_TOKENS = false) { return new Lexer(string, INCLUDE_WHITE_SPACE_TOKENS) }

whind.constructor = Lexer;

Lexer.types = Types;
whind.types = Types;

const uri_reg_ex = /(?:([^\:\?\[\]\@\/\#\b\s][^\:\?\[\]\@\/\#\b\s]*)(?:\:\/\/))?(?:([^\:\?\[\]\@\/\#\b\s][^\:\?\[\]\@\/\#\b\s]*)(?:\:([^\:\?\[\]\@\/\#\b\s]*)?)?\@)?(?:(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})|((?:\[[0-9a-f]{1,4})+(?:\:[0-9a-f]{0,4}){2,7}\])|([^\:\?\[\]\@\/\#\b\s\.]{2,}(?:\.[^\:\?\[\]\@\/\#\b\s]*)*))?(?:\:(\d+))?((?:[^\?\[\]\#\s\b]*)+)?(?:\?([^\[\]\#\s\b]*))?(?:\#([^\#\s\b]*))?/i;

const STOCK_LOCATION = {
    protocol: "",
    host: "",
    port: "",
    path: "",
    hash: "",
    query: "",
    search: ""
};
function fetchLocalText(URL, m = "same-origin") {
    return new Promise((res, rej) => {
        fetch(URL, {
            mode: m, // CORs not allowed
            credentials: m,
            method: "GET"
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
            method: "GET"
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

    static resolveRelative(URL_or_url_new, URL_or_url_original = document.location.toString(), ) {

        let URL_old = (URL_or_url_original instanceof URL) ? URL_or_url_original : new URL(URL_or_url_original);
        let URL_new = (URL_or_url_new instanceof URL) ? URL_or_url_new : new URL(URL_or_url_new);
        
        if (!(URL_old + "") || !(URL_new + "")) return null;

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

        let IS_STRING = true,
            IS_LOCATION = false;


        let location = (typeof(document) !== "undefined") ? document.location : STOCK_LOCATION;

        if (typeof(Location) !== "undefined" && url instanceof Location) {
            location = url;
            url = "";
            IS_LOCATION = true;
        }
        if (!url || typeof(url) != "string") {
            IS_STRING = false;
            IS_LOCATION = true;
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

                //If the complete string is not matched than we are dealing with something other 
                //than a pure URL. Thus, no object is returned. 
                if (part[0] !== url) return null;

                this.protocol = part[1] || ((USE_LOCATION) ? location.protocol : "");
                this.user = part[2] || "";
                this.pwd = part[3] || "";
                this.host = part[4] || part[5] || part[6] || ((USE_LOCATION) ? location.hostname : "");
                this.port = parseInt(part[7] || ((USE_LOCATION) ? location.port : 0));
                this.path = part[8] || ((USE_LOCATION) ? location.pathname : "");
                this.query = part[9] || ((USE_LOCATION) ? location.search.slice(1) : "");
                this.hash = part[10] || ((USE_LOCATION) ? location.hash.slice(1) : "");

            }
        } else if (IS_LOCATION) {
            this.protocol = location.protocol.replace(/\:/g, "");
            this.host = location.hostname;
            this.port = location.port;
            this.path = location.pathname;
            this.hash = location.hash.slice(1);
            this.query = location.search.slice(1);
            this._getQuery_(this.query);

            if (USE_LOCATION) {
                URL.G = this;
                return URL.R;
            }
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

        if (this.host) {

            if (this.protocol)
                str.push(`${this.protocol}://`);

            str.push(`${this.host}`);
        }

        if (this.port)
            str.push(`:${this.port}`);

        if (this.path)
            str.push(`${this.path[0] == "/" ? "" : "/"}${this.path}`);

        if (this.query)
            str.push(((this.query[0] == "?" ? "" : "?") + this.query));

        if (this.hash)
            str.push("#" + this.hash);


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

    submitJSON(json_data, mode) {
        return submitJSON(this.toString(), json_data, mode);
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
    //Returns the last segment of the path
    get file(){
        return this.path.split("/").pop();
    }


    //Returns the all but the last segment of the path
    get dir(){
        return this.path.split("/").slice(0,-1).join("/") || "/";
    }

    get pathname() {
        return this.path;
    }

    get href() {
        return this.toString();
    }

    get ext() {
        const m = this.path.match(/\.([^\.]*)$/);
        return m ? m[1] : "";
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


/** Implement Basic Fetch Mechanism for NodeJS **/
if (typeof(fetch) == "undefined" && typeof(global) !== "undefined") {
    (async () => {
        console.log("Moonshot");
        
        global.fetch = (url, data) =>
            new Promise(async (res, rej) => {
                let p = await path.resolve(process.cwd(), (url[0] == ".") ? url + "" : "." + url);
                try {
                    let data = await fs.readFile(p, "utf8");
                    return res({
                        status: 200,
                        text: () => {
                            return {
                                then: (f) => f(data)
                            }
                        }
                    })
                } catch (err) {
                    return rej(err);
                }
            });
    })();
}


let SIMDATA = null;

/* Replaces the fetch actions with functions that simulate network fetches. Resources are added by the user to a Map object. */
URL.simulate = function(){
    SIMDATA = new Map;
    URL.prototype.fetchText = async d => ((d = this.toString()), SIMDATA.get(d)) ? SIMDATA.get(d) : "" ;
    URL.prototype.fetchJSON = async d => ((d = this.toString()), SIMDATA.get(d)) ? JSON.parse(SIMDATA.get(d).toString()) : {} ;
};

//Allows simulated resources to be added as a key value pair, were the key is a URI string and the value is string data.
URL.addResource = (n,v) => (n && v && (SIMDATA || (SIMDATA = new Map())) && SIMDATA.set(n.toString(), v.toString));

URL.polyfill = function() {    if (typeof(global) !== "undefined") {
    console.log("AAAAAAAAAAAAAAAAAAAAAA");
        const fs = (Promise.resolve(require("fs"))).promises;
        const path = (Promise.resolve(require("path")));


        global.Location =  (class extends URL{});
        
        global.document = global.document || {};

        global.document.location = new URL(process.env.PWD);
        /**
         * Global `fetch` polyfill - basic support
         */
        global.fetch = (url, data) =>
            new Promise((res, rej) => {
                let p = path.resolve(process.cwd(), (url[0] == ".") ? url + "" : "." + url);
                fs.readFile(p, "utf8", (err, data) => {
                    if (err) {
                        rej(err);
                    } else {
                        res({
                            status: 200,
                            text: () => {
                                return {
                                    then: (f) => f(data)
                                }
                            }
                        });
                    }
                });
            });
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

                if (!this.nxt && !this.prv) {
                    this.nxt = this;
                    this.prv = this;
                }

                if(node){
                    if (node.prv)
                       node.prv.nxt = node.nxt;
                    
                    if(node.nxt) 
                        node.nxt.prv = node.prv;
                
                    node.prv = this.prv;
                    node.nxt = this;
                    this.prv.nxt = node;
                    this.prv = node;
                }else{
                    if (this.prv)
                        this.prv.nxt = node;
                    this.prv = node;
                } 
            },

            insertAfter: function(node) {

                if (!this.nxt && !this.prv) {
                    this.nxt = this;
                    this.prv = this;
                }

                if(node){
                    if (node.prv)
                       node.prv.nxt = node.nxt;
                    
                    if(node.nxt) 
                        node.nxt.prv = node.prv;
                
                    node.nxt = this.nxt;
                    node.prv = this;
                    this.nxt.prv = node;
                    this.nxt = node;
                }else{
                    if (this.nxt)
                        this.nxt.prv = node;
                    this.nxt = node;
                } 
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

// Pollyfill of HTMLElement classList
function classList(this_arg, list) {
    Object.assign(list, {
        add: (name) => {
            let attrib = this_arg.getAttrib("class");
            if (attrib) {
                attrib.value += " " + name;
                list.push(name);
            } else {
                this_arg.setAttribute("class", name);
            }
        }
    });
    return list;
}

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

    set data(e) { this.txt = e; }

    get data() { return this.txt }

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


        //Charactar positional information from input.
        this.line = 0;
        this.char = 0;
        this.offset = 0;

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
        if (classes && typeof(classes.value) === "string")
            return classList(this, classes.value.split(" "));
        return classList(this, []);
    }

    getAttribute(name) {
        let attrib = this.getAttrib(name);
        return (attrib) ? attrib.value : void 0;
    }

    get parentElement() {
        return this.par;
    }

    get firstChild() {
        return this.fch;
    }

    get lastChild() {
        return this.fch ? this.fch.previous : null;
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
    getAttrib(prop, GET_IGNORED = false) {
        for (let i = -1, l = this.attributes.length; ++i < l;) {
            let attrib = this.attributes[i];
            if (attrib.name == prop && (!attrib.IGNORE || GET_IGNORED)) return attrib;
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

            if (attr.name)
                str += ` ${attr.name}="${attr.value}"`;
        }

        str += ">\n";

        if (this.single)
            return str;

        str += this.innerToString(off + 1);

        return str + `${o}</${this.tag}>\n`;
    }

    innerToString(off) {
        let str = "";
        for (let node = this.fch; node;
            (node = this.getNextChild(node))) {
            str += node.toString(off);
        }
        return str;
    }



    /******************************************* PARSING ******************************************************************************************************************/



    /**
     * Creates a text node. 
     *
     * @param      {Lexer} - A Lexical tokenizing object supporting methods found in {@link Lexer}
     * @param      {start}  start   The starting point of the data slice
     * @private
     */
    async createTextNode(lex, start, end) {

        if (end) {
            const other_lex = lex.copy();
            other_lex.off = start - 1;
            other_lex.tl = 1;
            other_lex.sl = end;
            other_lex.IWS = false;
            other_lex.next();
            const text_node = await this.processTextNodeHook(other_lex, true);
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
            if ((other_lex.sl - other_lex.off) < 2) {
                //No data
                //TODO
                //throw new Error("Unexpected end of input");
            } else {
                let text_node = await this.processTextNodeHook(other_lex, false);
                if (text_node) this.addChild(text_node);
            }

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
        lex.PARSE_STRING = false; // Want to make sure lex creates string tokens. 

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

                pk.IWS = false;
                
                while (!(pk.ty & (pk.types.ws | pk.types.str | pk.types.nl)) && pk.ch !== ">") { pk.n; }

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
                this.url = URL.resolveRelative(out_lex.slice(), old_url);
                HAS_URL = true;
            }

            let attrib = this.processAttributeHook(attrib_name, out_lex);

            if (attrib)
                this.attributes.push(attrib);
        }

        if (lex.ch == "/") // Void Nodes
            lex.next();

        lex.PARSE_STRING = true; // Reset lex to ignore string tokens.
        
        return HAS_URL;
    }

    async parseRunner(lex = null, OPENED = false, IGNORE_TEXT_TILL_CLOSE_TAG = false, parent = null, old_url = new URL(0, !!1)) {
        let start = lex.pos;
        let end = lex.pos;
        let HAS_INNER_TEXT = false;

        // The lexer Should not produce string tokens when parsing HTML tags. If it does, markup such as 
        //  
        // <div> The " Market Row <b> Clipers <\b> " </div>
        // 
        // Would be incorrectly parsed since the lexer would produce a token {type:"string", tx:" Market Row <b> Clipers <\b> "} 
        // that would prevent the <b> tag from being detected and parsed.

        lex.PARSE_STRING = true;
        
        main_loop:
            while (!lex.END) {
                switch (lex.ch) {
                    case "<":
                        if (!IGNORE_TEXT_TILL_CLOSE_TAG) lex.IWS = true;

                        let pk = lex.pk;

                        if (pk.ch == "/") {
                            if (pk.pk.tx !== this.tag) {
                                break main_loop;
                            }

                            if (HAS_INNER_TEXT) {
                                lex.PARSE_STRING = false;
                                if (IGNORE_TEXT_TILL_CLOSE_TAG)
                                    await this.createTextNode(lex, start);
                                else if ((end - start) > 0)
                                    await this.createTextNode(lex, start, end);
                                lex.PARSE_STRING = true;
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

                            lex.PARSE_STRING = false;
                            return await this.endOfElementHook(lex, parent);
                        }

                        if (pk.ch == "!") {
                            /* DTD - Doctype and Comment tags*/
                            //This type of tag is dropped
                            while (!lex.END && lex.n.ch !== ">") {}
                            lex.a(">");
                            lex.IWS = false;
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

                                lex.PARSE_STRING = false;
                                URL$$1 = this.parseOpenTag(lex.n, false, old_url);
                                lex.PARSE_STRING = true;

                                this.char = lex.char;
                                this.offset = lex.off;
                                this.line = lex.line;

                                start = lex.pos + 1;
                                lex.IWS = false;

                                let SELF_CLOSING = this.selfClosingTagHook(this.tag);

                                if (lex.ch == "/") {
                                    //This is a tag that should be closed 
                                    lex.n;

                                    SELF_CLOSING = true;

                                    //This element is self closing and does not have a body.
                                }else{
                                    HAS_INNER_TEXT = IGNORE_TEXT_TILL_CLOSE_TAG = (await this.ignoreTillHook(this.tag, lex));
                                    OPENED = true;
                                }

                                //End of Open Tag
                                lex.a(">");


                                if (HAS_INNER_TEXT){
                                    //Insure that string do not lead to 
                                    lex.PARSE_STRING = false;
                                    start = lex.pos;
                                }                                

                                if (URL$$1) {

                                    //Need to block against infinitely recursive URL fetches. 

                                    //Hook to pull in data from remote resource
                                    lex.PARSE_STRING = false;
                                    
                                    await this.processFetchHook(lex, true, IGNORE_TEXT_TILL_CLOSE_TAG, parent);
                                    
                                    lex.PARSE_STRING = true;
                                    
                                    if (this.selfClosingTagHook(this.tag))
                                        return this;

                                    // Tags without matching end tags.
                                    return this.parseRunner(lex, true, IGNORE_TEXT_TILL_CLOSE_TAG, this, old_url);
                                }

                                
                                if (SELF_CLOSING) {
                                    // Tags without matching end tags.
                                    this.single = true;

                                    return this;
                                }

                                continue;
                            } else {
                                lex.IWS = false;
                                //Create text node;
                                if (HAS_INNER_TEXT) {
                                    lex.PARSE_STRING = false;
                                    if (IGNORE_TEXT_TILL_CLOSE_TAG)
                                        await this.createTextNode(lex, start);
                                    else if ((end - start) > 0) {
                                        await this.createTextNode(lex, start, end);
                                    }
                                    lex.PARSE_STRING = true;
                                }

                                //New Child node found
                                let node = await this.createHTMLNodeHook(lex.pk.tx, lex.off, lex, this);

                                if (node) {

                                    node.par = this;

                                    node = await node.parseRunner(lex, false, false, this, this.url || old_url);

                                    node.par = null;

                                    node.parent = this;


                                    if (!this.url)
                                        this.url = old_url;

                                    if (node.DTD) this.removeChild(node);
                                }

                                if (!this.url)
                                    this.url = old_url;
                                lex.IWS = false;
                                start = lex.pos;
                                end = lex.pos;
                                HAS_INNER_TEXT = false;
                                IGNORE_TEXT_TILL_CLOSE_TAG = false;

                                continue main_loop;
                            }
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
            if (lex.off - start > 0) {
                //Got here from a network import, need produce a text node;
                await this.createTextNode(lex, start);
            }
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
    async parse(lex, url = new URL(0, !!1)) {

        if (typeof(lex) == "string") lex = whind(lex);

        lex.IWS = false;

        return await this.parseRunner(lex, false, false, null, url);
    }

    /******************************************* HOOKS ******************************************************************************************************************/

    endOfElementHook() { return this; }

    selfClosingTagHook(tag) {
        return ["input", "br" ,"img", "rect"].includes(tag);
    }

    async ignoreTillHook(tag) {
        // Special character escaping tags.
        return ["script", "style" ,"pre"].includes(tag);
    }

    async createHTMLNodeHook(tag, start) { return new HTMLNode(tag); }

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
                return this;
            });
        }
        return null;
    }

    processAttributeHook(name, lex) { return { IGNORE: false, name, value: lex.slice() }; }

    async processTextNodeHook(lex, IS_INNER_HTML) {
        if (!IS_INNER_HTML)
            return new TextNode(lex.trim(1).slice());

        let t = lex.trim(1);

        if (t.string_length > 0)
            return new TextNode(t.slice());

        return null;
    }

    /**
        Deep Clone of Element
    */
    clone() {
        const clone = new this.constructor();

        clone.tag = this.tag;

        clone.parse(this.toString());

        return clone;
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

HTMLParser.polyfill = function() {
    URL.polyfill();

    if (typeof(global) !== "undefined") {
        global.HTMLElement = HTMLNode;
        global.TextNode = TextNode;

        if(!global.document)
            global.document = {};

        Object.assign(global.document, {
            createElement: function(tag) {
                let node = new HTMLElement();
                node.tag = tag.toString().toLowerCase();
                return node;
            },
            createTextNode: function(text) {
                let node = new TextNode(text);
                return node;
            }
        });
    }

    HTMLNode.prototype.appendChild = function(child) {
        this.addChild(child);
    };

    HTMLNode.prototype.removeChild = function(child) {
        this.removeChild(child);
    };

    HTMLNode.prototype.setAttribute = function(name, value) {
        let attr = this.getAttrib(name);
        if (attr)
            attr.value = value;
        else
            this.attributes.push({ name, value });
    };
};

exports.HTMLNode = HTMLNode;
exports.HTMLParser = HTMLParser;
exports.TextNode = TextNode;
exports.default = HTMLParser;
