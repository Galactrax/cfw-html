var html = (function (exports) {
	'use strict';

	const uni_id_start=[170,181,186,748,750,895,902,908,1369,1749,1791,1808,1969,2042,2074,2084,2088,2365,2384,2482,2493,2510,2556,2654,2749,2768,2809,2877,2929,2947,2972,3024,3133,3200,3261,3294,3389,3406,3517,3716,3749,3773,3782,3840,4159,4193,4238,4295,4301,4696,4800,6103,6108,6314,6823,7418,8025,8027,8029,8126,8305,8319,8450,8455,8469,8484,8486,8488,8526,11559,11565,11631,11823,13312,19893,19968,40943,43259,43471,43642,43697,43712,43714,44032,55203,64285,64318,67592,67644,68096,69415,69956,70006,70106,70108,70280,70461,70480,70751,70855,71236,71352,71935,72161,72163,72192,72250,72272,72349,72768,73030,73112,94032,94179,94208,100343,119970,119995,120134,123214,125259,126500,126503,126521,126523,126530,126535,126537,126539,126548,126551,126553,126555,126557,126559,126564,126590,131072,173782,173824,177972,177984,178205,178208,183969,183984,191456];
	const uni_id_start_r=[65,90,97,122,192,214,216,246,248,705,710,721,736,740,880,884,886,887,890,893,904,906,910,929,931,1013,1015,1153,1162,1327,1329,1366,1376,1416,1488,1514,1519,1522,1568,1610,1646,1647,1649,1747,1765,1766,1774,1775,1786,1788,1810,1839,1869,1957,1994,2026,2036,2037,2048,2069,2112,2136,2144,2154,2208,2228,2230,2237,2308,2361,2392,2401,2417,2432,2437,2444,2447,2448,2451,2472,2474,2480,2486,2489,2524,2525,2527,2529,2544,2545,2565,2570,2575,2576,2579,2600,2602,2608,2610,2611,2613,2614,2616,2617,2649,2652,2674,2676,2693,2701,2703,2705,2707,2728,2730,2736,2738,2739,2741,2745,2784,2785,2821,2828,2831,2832,2835,2856,2858,2864,2866,2867,2869,2873,2908,2909,2911,2913,2949,2954,2958,2960,2962,2965,2969,2970,2974,2975,2979,2980,2984,2986,2990,3001,3077,3084,3086,3088,3090,3112,3114,3129,3160,3162,3168,3169,3205,3212,3214,3216,3218,3240,3242,3251,3253,3257,3296,3297,3313,3314,3333,3340,3342,3344,3346,3386,3412,3414,3423,3425,3450,3455,3461,3478,3482,3505,3507,3515,3520,3526,3585,3632,3634,3635,3648,3654,3713,3714,3718,3722,3724,3747,3751,3760,3762,3763,3776,3780,3804,3807,3904,3911,3913,3948,3976,3980,4096,4138,4176,4181,4186,4189,4197,4198,4206,4208,4213,4225,4256,4293,4304,4346,4348,4680,4682,4685,4688,4694,4698,4701,4704,4744,4746,4749,4752,4784,4786,4789,4792,4798,4802,4805,4808,4822,4824,4880,4882,4885,4888,4954,4992,5007,5024,5109,5112,5117,5121,5740,5743,5759,5761,5786,5792,5866,5870,5880,5888,5900,5902,5905,5920,5937,5952,5969,5984,5996,5998,6000,6016,6067,6176,6264,6272,6276,6279,6312,6320,6389,6400,6430,6480,6509,6512,6516,6528,6571,6576,6601,6656,6678,6688,6740,6917,6963,6981,6987,7043,7072,7086,7087,7098,7141,7168,7203,7245,7247,7258,7293,7296,7304,7312,7354,7357,7359,7401,7404,7406,7411,7413,7414,7424,7615,7680,7957,7960,7965,7968,8005,8008,8013,8016,8023,8031,8061,8064,8116,8118,8124,8130,8132,8134,8140,8144,8147,8150,8155,8160,8172,8178,8180,8182,8188,8336,8348,8458,8467,8473,8477,8490,8493,8495,8505,8508,8511,8517,8521,8544,8584,11264,11310,11312,11358,11360,11492,11499,11502,11506,11507,11520,11557,11568,11623,11648,11670,11680,11686,11688,11694,11696,11702,11704,11710,11712,11718,11720,11726,11728,11734,11736,11742,12293,12295,12321,12329,12337,12341,12344,12348,12353,12438,12445,12447,12449,12538,12540,12543,12549,12591,12593,12686,12704,12730,12784,12799,40960,42124,42192,42237,42240,42508,42512,42527,42538,42539,42560,42606,42623,42653,42656,42735,42775,42783,42786,42888,42891,42943,42946,42950,42999,43009,43011,43013,43015,43018,43020,43042,43072,43123,43138,43187,43250,43255,43261,43262,43274,43301,43312,43334,43360,43388,43396,43442,43488,43492,43494,43503,43514,43518,43520,43560,43584,43586,43588,43595,43616,43638,43646,43695,43701,43702,43705,43709,43739,43741,43744,43754,43762,43764,43777,43782,43785,43790,43793,43798,43808,43814,43816,43822,43824,43866,43868,43879,43888,44002,55216,55238,55243,55291,63744,64109,64112,64217,64256,64262,64275,64279,64287,64296,64298,64310,64312,64316,64320,64321,64323,64324,64326,64433,64467,64829,64848,64911,64914,64967,65008,65019,65136,65140,65142,65276,65313,65338,65345,65370,65382,65470,65474,65479,65482,65487,65490,65495,65498,65500,65536,65547,65549,65574,65576,65594,65596,65597,65599,65613,65616,65629,65664,65786,65856,65908,66176,66204,66208,66256,66304,66335,66349,66378,66384,66421,66432,66461,66464,66499,66504,66511,66513,66517,66560,66717,66736,66771,66776,66811,66816,66855,66864,66915,67072,67382,67392,67413,67424,67431,67584,67589,67594,67637,67639,67640,67647,67669,67680,67702,67712,67742,67808,67826,67828,67829,67840,67861,67872,67897,67968,68023,68030,68031,68112,68115,68117,68119,68121,68149,68192,68220,68224,68252,68288,68295,68297,68324,68352,68405,68416,68437,68448,68466,68480,68497,68608,68680,68736,68786,68800,68850,68864,68899,69376,69404,69424,69445,69600,69622,69635,69687,69763,69807,69840,69864,69891,69926,69968,70002,70019,70066,70081,70084,70144,70161,70163,70187,70272,70278,70282,70285,70287,70301,70303,70312,70320,70366,70405,70412,70415,70416,70419,70440,70442,70448,70450,70451,70453,70457,70493,70497,70656,70708,70727,70730,70784,70831,70852,70853,71040,71086,71128,71131,71168,71215,71296,71338,71424,71450,71680,71723,71840,71903,72096,72103,72106,72144,72203,72242,72284,72329,72384,72440,72704,72712,72714,72750,72818,72847,72960,72966,72968,72969,72971,73008,73056,73061,73063,73064,73066,73097,73440,73458,73728,74649,74752,74862,74880,75075,77824,78894,82944,83526,92160,92728,92736,92766,92880,92909,92928,92975,92992,92995,93027,93047,93053,93071,93760,93823,93952,94026,94099,94111,94176,94177,100352,101106,110592,110878,110928,110930,110948,110951,110960,111355,113664,113770,113776,113788,113792,113800,113808,113817,119808,119892,119894,119964,119966,119967,119973,119974,119977,119980,119982,119993,119997,120003,120005,120069,120071,120074,120077,120084,120086,120092,120094,120121,120123,120126,120128,120132,120138,120144,120146,120485,120488,120512,120514,120538,120540,120570,120572,120596,120598,120628,120630,120654,120656,120686,120688,120712,120714,120744,120746,120770,120772,120779,123136,123180,123191,123197,123584,123627,124928,125124,125184,125251,126464,126467,126469,126495,126497,126498,126505,126514,126516,126519,126541,126543,126545,126546,126561,126562,126567,126570,126572,126578,126580,126583,126585,126588,126592,126601,126603,126619,126625,126627,126629,126633,126635,126651];
	const uni_id_cont=[95,1471,1479,1648,1809,2045,2492,2519,2558,2620,2641,2677,2748,2876,2946,3031,3260,3415,3530,3542,3633,3761,3893,3895,3897,4038,6109,6313,7405,7412,8276,8417,11647,42607,43010,43014,43019,43493,43587,43696,43713,64286,65343,66045,66272,68159,70003,70206,70487,70750,72164,72263,73018,73031,94031,121461,121476];
	const uni_id_cont_r=[48,57,768,879,1155,1159,1425,1469,1473,1474,1476,1477,1552,1562,1611,1641,1750,1756,1759,1764,1767,1768,1770,1773,1776,1785,1840,1866,1958,1968,1984,1993,2027,2035,2070,2073,2075,2083,2085,2087,2089,2093,2137,2139,2259,2273,2275,2307,2362,2364,2366,2383,2385,2391,2402,2403,2406,2415,2433,2435,2494,2500,2503,2504,2507,2509,2530,2531,2534,2543,2561,2563,2622,2626,2631,2632,2635,2637,2662,2673,2689,2691,2750,2757,2759,2761,2763,2765,2786,2787,2790,2799,2810,2815,2817,2819,2878,2884,2887,2888,2891,2893,2902,2903,2914,2915,2918,2927,3006,3010,3014,3016,3018,3021,3046,3055,3072,3076,3134,3140,3142,3144,3146,3149,3157,3158,3170,3171,3174,3183,3201,3203,3262,3268,3270,3272,3274,3277,3285,3286,3298,3299,3302,3311,3328,3331,3387,3388,3390,3396,3398,3400,3402,3405,3426,3427,3430,3439,3458,3459,3535,3540,3544,3551,3558,3567,3570,3571,3636,3642,3655,3662,3664,3673,3764,3772,3784,3789,3792,3801,3864,3865,3872,3881,3902,3903,3953,3972,3974,3975,3981,3991,3993,4028,4139,4158,4160,4169,4182,4185,4190,4192,4194,4196,4199,4205,4209,4212,4226,4237,4239,4253,4957,4959,5906,5908,5938,5940,5970,5971,6002,6003,6068,6099,6112,6121,6155,6157,6160,6169,6277,6278,6432,6443,6448,6459,6470,6479,6608,6617,6679,6683,6741,6750,6752,6780,6783,6793,6800,6809,6832,6845,6912,6916,6964,6980,6992,7001,7019,7027,7040,7042,7073,7085,7088,7097,7142,7155,7204,7223,7232,7241,7248,7257,7376,7378,7380,7400,7415,7417,7616,7673,7675,7679,8255,8256,8400,8412,8421,8432,11503,11505,11744,11775,12330,12335,12441,12442,42528,42537,42612,42621,42654,42655,42736,42737,43043,43047,43136,43137,43188,43205,43216,43225,43232,43249,43263,43273,43302,43309,43335,43347,43392,43395,43443,43456,43472,43481,43504,43513,43561,43574,43596,43597,43600,43609,43643,43645,43698,43700,43703,43704,43710,43711,43755,43759,43765,43766,44003,44010,44012,44013,44016,44025,65024,65039,65056,65071,65075,65076,65101,65103,65296,65305,66422,66426,66720,66729,68097,68099,68101,68102,68108,68111,68152,68154,68325,68326,68900,68903,68912,68921,69446,69456,69632,69634,69688,69702,69734,69743,69759,69762,69808,69818,69872,69881,69888,69890,69927,69940,69942,69951,69957,69958,70016,70018,70067,70080,70089,70092,70096,70105,70188,70199,70367,70378,70384,70393,70400,70403,70459,70460,70462,70468,70471,70472,70475,70477,70498,70499,70502,70508,70512,70516,70709,70726,70736,70745,70832,70851,70864,70873,71087,71093,71096,71104,71132,71133,71216,71232,71248,71257,71339,71351,71360,71369,71453,71467,71472,71481,71724,71738,71904,71913,72145,72151,72154,72160,72193,72202,72243,72249,72251,72254,72273,72283,72330,72345,72751,72758,72760,72767,72784,72793,72850,72871,72873,72886,73009,73014,73020,73021,73023,73029,73040,73049,73098,73102,73104,73105,73107,73111,73120,73129,73459,73462,92768,92777,92912,92916,92976,92982,93008,93017,94033,94087,94095,94098,113821,113822,119141,119145,119149,119154,119163,119170,119173,119179,119210,119213,119362,119364,120782,120831,121344,121398,121403,121452,121499,121503,121505,121519,122880,122886,122888,122904,122907,122913,122915,122916,122918,122922,123184,123190,123200,123209,123628,123641,125136,125142,125252,125258,125264,125273];

	///*
	const j = new Uint16Array(100000);

	j.fill(0);

	//Add value to individual indexes
	function aii(table, value, ...indices) {
		for (const i of indices)
			table[i] |= value;
	}

	//Add value to index ranges
	function air(t, v, ...i_r) {
		for (const r of i_r.reduce((r, v, i) => (((i % 2) ? (r[r.length - 1].push(v)) : r.push([v])), r), [])) {
			const size = r[1] + 1 - r[0],
				a = [];
			for (let i = 0; i < size; i++)
				a[i] = r[0] + i;
			aii(t, v, ...a);
		}
	}


	//7. Symbol
	// Default Value

	//1. Identifier
	air(j, 1, ...uni_id_start_r);
	aii(j, 1, ...uni_id_start);

	//2. QUOTE STRING
	aii(j, 2, 34, 39, 96);

	//3. SPACE SET
	aii(j, 3, 32, 0xA0, 0x2002, 0x2003, 0x2004, 0x3000);

	//4. TAB SET
	aii(j, 4, 9);

	//5. CARIAGE RETURN 
	aii(j, 5, 13);

	//6. CARIAGE RETURN 
	aii(j, 6, 10);

	//7. Number
	air(j, 7, 48, 57);

	//8. Operator
	aii(j, 8, 33, 37, 38, 42, 43, 58, 60, 61, 62);

	//9. Open Bracket
	aii(j, 9, 40, 91, 123);

	//10. Close Bracket
	aii(j, 10, 41, 93, 125);

	//10. Close Bracket
	aii(j, 11, 16);


	/**
	 * Lexer Number and Identifier jump table reference
	 * Number are masked by 12(4|8) and Identifiers are masked by 10(2|8)
	 * entries marked as `0` are not evaluated as either being in the number set or the identifier set.
	 * entries marked as `2` are in the identifier set but not the number set
	 * entries marked as `4` are in the number set but not the identifier set
	 * entries marked as `8` are in both number and identifier sets
	 */

	/**
	 * LExer Number and Identifier jump table reference
	 * Number are masked by 12(4|8) and Identifiers are masked by 10(2|8)
	 */

	// entries marked as `2` are in the identifier set but not the number set
	air(j, 2 << 8, 65, 90, 97, 122);
	air(j, 2 << 8, ...uni_id_start_r);
	aii(j, 2 << 8, ...uni_id_start);
	air(j, 2 << 8, ...uni_id_cont_r);
	aii(j, 2 << 8, ...uni_id_cont);

	// entries marked as `8` are in both number and identifier sets
	air(j, 8 << 8, 48, 57);

	const HORIZONTAL_TAB = 9;
	const SPACE = 32;


	const extended_jump_table = j.slice();
	extended_jump_table[45] |= 2 << 8;
	extended_jump_table[95] |= 2 << 8;

	const
	    number = 1,
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

	const getNumbrOfTrailingZeroBitsFromPowerOf2 = (value) => debruijnLUT[(value * 0x077CB531) >>> 27];

	const arrow = String.fromCharCode(0x2b89);
	const line = String.fromCharCode(0x2500);
	const thick_line = String.fromCharCode(0x2501);

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

	        this.USE_EXTENDED_ID = false;

	        /**
	         * Flag to force the lexer to parse string contents
	         */
	        this.PARSE_STRING = false;

	        this.id_lu = j;

	        if (!PEEKING) this.next();
	    }

	    useExtendedId() {
	        this.id_lu = extended_jump_table;
	        this.tl = 0;
	        this.next();
	        return this;
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
	        destination.id_lu = this.id_lu;
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
	        Looks for the string within the text and returns a new lexer at the location of the first occurance of the token or 
	    */
	    find(string) {
	        const cp = this.pk,
	            match = this.copy();

	        match.resetHead();
	        match.str = string;
	        match.sl = string.length;
	        cp.tl = 0;
	        const char_cache = cp.CHARACTERS_ONLY;
	        match.CHARACTERS_ONLY = true;
	        cp.CHARACTERS_ONLY = true;

	        while (!cp.END) {

	            const
	                mpk = match.pk,
	                cpk = cp.pk;

	            while (!mpk.END && !cpk.END && cpk.tx == mpk.tx) {
	                cpk.next();
	                mpk.next();
	            }

	            if (mpk.END) {
	                cp.CHARACTERS_ONLY = char_cache;
	                return cp.next();
	            }

	            cp.next();
	        }

	        return cp;
	    }

	    /**
	    Creates an error message with a diagram illustrating the location of the error. 
	    */
	    errorMessage(message = "", window_size = 40, tab_size = 4) {

	        //Get the text from the proceeding and the following lines; 
	        //If current line is at index 0 then there will be no proceeeding line;
	        //Likewise for the following line if current line is the last one in the string.

	        const line_start = this.off - this.char,
	            char = this.char,
	            l = this.line,
	            str = this.str,
	            len = str.length,
	            sp = " ";

	        let prev_start = 0,
	            next_start = 0,
	            next_end = 0,
	            i = 0;


	        //get the start of the proceeding line
	        for (i = char; --i > 0 && j[str.codePointAt(i)] !== 6;);
	        prev_start = i;

	        //get the end of the current line...
	        for (i = this.off + this.tl; i++ < len && j[str.codePointAt(i)] !== 6;);
	        next_start = i;

	        //and the next line
	        for (; i++ < len && j[str.codePointAt(i)] !== 6;);
	        next_end = i;

	        let pointer_pos = char - (line_start > 0 ? 1 : 0);

	        for (i = line_start; ++i < this.off;)
	            if (str.codePointAt(i) == HORIZONTAL_TAB)
	                pointer_pos += tab_size - 1;

	        //find the location of the offending symbol
	        const
	            prev_line = str.slice(prev_start + (prev_start > 0 ? 1 : 0), line_start).replace(/\t/g, sp.repeat(tab_size)),
	            curr_line = str.slice(line_start + (line_start > 0 ? 1 : 0), next_start).replace(/\t/g, sp.repeat(tab_size)),
	            next_line = str.slice(next_start + 1, next_end).replace(/\t/g, " "),

	            //get the max line length;
	        
	            max_length = Math.max(prev_line.length, curr_line.length, next_line.length),
	            min_length = Math.min(prev_line.length, curr_line.length, next_line.length),
	            length_diff = max_length - min_length,

	            //Get the window size;
	            w_size = window_size,
	            w_start = Math.max(0, Math.min(pointer_pos - w_size / 2, max_length)),
	            w_end = Math.max(0, Math.min(pointer_pos + w_size / 2, max_length)),
	            w_pointer_pos = Math.max(0, Math.min(pointer_pos, max_length)) - w_start,


	            //append the difference of line lengths to the end of the lines as space characers;

	            prev_line_o = (prev_line + sp.repeat(length_diff)).slice(w_start, w_end),
	            curr_line_o = (curr_line + sp.repeat(length_diff)).slice(w_start, w_end),
	            next_line_o = (next_line + sp.repeat(length_diff)).slice(w_start, w_end),

	            trunc = w_start !== 0 ? "... " : "",

	            line_number = n => ` ${(sp.repeat(3)+n).slice(-(l+1+"").length)}: `,

	            error_border = thick_line.repeat(curr_line_o.length + line_number.length + 8 + trunc.length);

	        return [
	                `${message} at ${l}:${char - ((l > 0) ? 1 : 0)}`,
	                `${error_border}`,
	                `${prev_line ?  line_number(l-1)+trunc+prev_line_o+(prev_line_o.length < prev_line.length ?  " ..." : "") : ""}`,
	                `${curr_line ?  line_number(l)+trunc+curr_line_o+(curr_line_o.length < curr_line.length ?  " ..." : "") : ""}`,
	                `${line.repeat(w_pointer_pos +trunc.length+ line_number(l+1).length)+arrow}`,
	                `${next_line ? line_number(l+1)+trunc+next_line_o+(next_line_o.length < next_line.length ?  " ..." : "") : ""}`,
	                `${error_border}`
	            ]
	            .filter(e => !!e)
	            .join("\n");
	    }

	    errorMessageWithIWS(...v) {
	        return this.errorMessage(...v) + "\n" + (!this.IWS) ? "\n The Lexer produced whitespace tokens" : "";
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
	    next(marker = this, USE_CUSTOM_SYMBOLS = !!this.symbol_map) {

	        if (marker.sl < 1) {
	            marker.off = 0;
	            marker.type = 32768;
	            marker.tl = 0;
	            marker.line = 0;
	            marker.char = 0;
	            return marker;
	        }

	        //Token builder
	        const l = marker.sl,
	            str = marker.str,
	            jump_table = this.id_lu,
	            IWS = marker.IWS;

	        let length = marker.tl,
	            off = marker.off + length,
	            type = symbol,
	            line = marker.line,
	            base = off,
	            char = marker.char,
	            root = marker.off;

	        if (off >= l) {
	            length = 0;
	            base = l;
	            //char -= base - off;
	            marker.char = char + (base - marker.off);
	            marker.type = type;
	            marker.off = base;
	            marker.tl = 0;
	            marker.line = line;
	            return marker;
	        }

	        let NORMAL_PARSE = true;

	        if (USE_CUSTOM_SYMBOLS) {

	            let code = str.charCodeAt(off);
	            let off2 = off;
	            let map = this.symbol_map,
	                m;
	            let i = 0;

	            while (code == 32 && IWS)
	                (code = str.charCodeAt(++off2), off++);

	            while ((m = map.get(code))) {
	                map = m;
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

	        while (NORMAL_PARSE) {

	            base = off;

	            length = 1;

	            const code = str.codePointAt(off);

	            switch (jump_table[code] & 255) {
	                case 0: //SYMBOL
	                    type = symbol;
	                    break;
	                case 1: //IDENTIFIER
	                    while (++off < l && ((10 & (jump_table[str.codePointAt(off)] >> 8))));
	                    type = identifier;
	                    length = off - base;
	                    break;
	                case 2: //QUOTED STRING
	                    if (this.PARSE_STRING) {
	                        type = symbol;
	                    } else {
	                        while (++off < l && str.codePointAt(off) !== code);
	                        type = string;
	                        length = off - base + 1;
	                    }
	                    break;
	                case 3: //SPACE SET
	                    while (++off < l && str.codePointAt(off) === SPACE);
	                    type = white_space;
	                    length = off - base;
	                    break;
	                case 4: //TAB SET
	                    while (++off < l && str[off] === "\t");
	                    type = white_space;
	                    length = off - base;
	                    break;
	                case 5: //CARIAGE RETURN
	                    length = 2;
	                    //intentional
	                case 6: //LINEFEED
	                    type = new_line;
	                    line++;
	                    base = off;
	                    root = off;
	                    off += length;
	                    char = 0;
	                    break;
	                case 7: //NUMBER
	                    while (++off < l && (12 & (jump_table[str.codePointAt(off)] >> 8)));

	                    if ((str[off] == "e" || str[off] == "E") && (12 & (jump_table[str.codePointAt(off + 1)] >> 8))) {
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

	            if (IWS && (type & white_space_new_line)) {
	                if (off < l) {
	                    type = symbol;
	                    //off += length;
	                    continue;
	                } else {
	                    //Trim white space from end of string
	                    base = l - off;
	                    marker.sl -= off;
	                    length = 0;
	                }
	            }
	            break;
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
	            const c = j[lex.string.charCodeAt(lex.off)];

	            if (c > 2 && c < 7) {

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
	            const c = j[lex.string.charCodeAt(lex.sl - 1)];

	            if (c > 2 && c < 7) {
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

	        for (let i = 0; i < sym.length; i++) {
	            let code = sym.charCodeAt(i);
	            let m = map.get(code);
	            if (!m) {
	                m = map.set(code, new Map).get(code);
	            }
	            map = m;
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

	    set string_length(s) {}

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
	    set END(v) {}

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

	const uni_id_start$1 = [170, 181, 186, 748, 750, 895, 902, 908, 1369, 1749, 1791, 1808, 1969, 2042, 2074, 2084, 2088, 2365, 2384, 2482, 2493, 2510, 2556, 2654, 2749, 2768, 2809, 2877, 2929, 2947, 2972, 3024, 3133, 3200, 3261, 3294, 3389, 3406, 3517, 3716, 3749, 3773, 3782, 3840, 4159, 4193, 4238, 4295, 4301, 4696, 4800, 6103, 6108, 6314, 6823, 7418, 8025, 8027, 8029, 8126, 8305, 8319, 8450, 8455, 8469, 8484, 8486, 8488, 8526, 11559, 11565, 11631, 11823, 13312, 19893, 19968, 40943, 43259, 43471, 43642, 43697, 43712, 43714, 44032, 55203, 64285, 64318, 67592, 67644, 68096, 69415, 69956, 70006, 70106, 70108, 70280, 70461, 70480, 70751, 70855, 71236, 71352, 71935, 72161, 72163, 72192, 72250, 72272, 72349, 72768, 73030, 73112, 94032, 94179, 94208, 100343, 119970, 119995, 120134, 123214, 125259, 126500, 126503, 126521, 126523, 126530, 126535, 126537, 126539, 126548, 126551, 126553, 126555, 126557, 126559, 126564, 126590, 131072, 173782, 173824, 177972, 177984, 178205, 178208, 183969, 183984, 191456];
	const uni_id_start_r$1 = [65, 90, 97, 122, 192, 214, 216, 246, 248, 705, 710, 721, 736, 740, 880, 884, 886, 887, 890, 893, 904, 906, 910, 929, 931, 1013, 1015, 1153, 1162, 1327, 1329, 1366, 1376, 1416, 1488, 1514, 1519, 1522, 1568, 1610, 1646, 1647, 1649, 1747, 1765, 1766, 1774, 1775, 1786, 1788, 1810, 1839, 1869, 1957, 1994, 2026, 2036, 2037, 2048, 2069, 2112, 2136, 2144, 2154, 2208, 2228, 2230, 2237, 2308, 2361, 2392, 2401, 2417, 2432, 2437, 2444, 2447, 2448, 2451, 2472, 2474, 2480, 2486, 2489, 2524, 2525, 2527, 2529, 2544, 2545, 2565, 2570, 2575, 2576, 2579, 2600, 2602, 2608, 2610, 2611, 2613, 2614, 2616, 2617, 2649, 2652, 2674, 2676, 2693, 2701, 2703, 2705, 2707, 2728, 2730, 2736, 2738, 2739, 2741, 2745, 2784, 2785, 2821, 2828, 2831, 2832, 2835, 2856, 2858, 2864, 2866, 2867, 2869, 2873, 2908, 2909, 2911, 2913, 2949, 2954, 2958, 2960, 2962, 2965, 2969, 2970, 2974, 2975, 2979, 2980, 2984, 2986, 2990, 3001, 3077, 3084, 3086, 3088, 3090, 3112, 3114, 3129, 3160, 3162, 3168, 3169, 3205, 3212, 3214, 3216, 3218, 3240, 3242, 3251, 3253, 3257, 3296, 3297, 3313, 3314, 3333, 3340, 3342, 3344, 3346, 3386, 3412, 3414, 3423, 3425, 3450, 3455, 3461, 3478, 3482, 3505, 3507, 3515, 3520, 3526, 3585, 3632, 3634, 3635, 3648, 3654, 3713, 3714, 3718, 3722, 3724, 3747, 3751, 3760, 3762, 3763, 3776, 3780, 3804, 3807, 3904, 3911, 3913, 3948, 3976, 3980, 4096, 4138, 4176, 4181, 4186, 4189, 4197, 4198, 4206, 4208, 4213, 4225, 4256, 4293, 4304, 4346, 4348, 4680, 4682, 4685, 4688, 4694, 4698, 4701, 4704, 4744, 4746, 4749, 4752, 4784, 4786, 4789, 4792, 4798, 4802, 4805, 4808, 4822, 4824, 4880, 4882, 4885, 4888, 4954, 4992, 5007, 5024, 5109, 5112, 5117, 5121, 5740, 5743, 5759, 5761, 5786, 5792, 5866, 5870, 5880, 5888, 5900, 5902, 5905, 5920, 5937, 5952, 5969, 5984, 5996, 5998, 6000, 6016, 6067, 6176, 6264, 6272, 6276, 6279, 6312, 6320, 6389, 6400, 6430, 6480, 6509, 6512, 6516, 6528, 6571, 6576, 6601, 6656, 6678, 6688, 6740, 6917, 6963, 6981, 6987, 7043, 7072, 7086, 7087, 7098, 7141, 7168, 7203, 7245, 7247, 7258, 7293, 7296, 7304, 7312, 7354, 7357, 7359, 7401, 7404, 7406, 7411, 7413, 7414, 7424, 7615, 7680, 7957, 7960, 7965, 7968, 8005, 8008, 8013, 8016, 8023, 8031, 8061, 8064, 8116, 8118, 8124, 8130, 8132, 8134, 8140, 8144, 8147, 8150, 8155, 8160, 8172, 8178, 8180, 8182, 8188, 8336, 8348, 8458, 8467, 8473, 8477, 8490, 8493, 8495, 8505, 8508, 8511, 8517, 8521, 8544, 8584, 11264, 11310, 11312, 11358, 11360, 11492, 11499, 11502, 11506, 11507, 11520, 11557, 11568, 11623, 11648, 11670, 11680, 11686, 11688, 11694, 11696, 11702, 11704, 11710, 11712, 11718, 11720, 11726, 11728, 11734, 11736, 11742, 12293, 12295, 12321, 12329, 12337, 12341, 12344, 12348, 12353, 12438, 12445, 12447, 12449, 12538, 12540, 12543, 12549, 12591, 12593, 12686, 12704, 12730, 12784, 12799, 40960, 42124, 42192, 42237, 42240, 42508, 42512, 42527, 42538, 42539, 42560, 42606, 42623, 42653, 42656, 42735, 42775, 42783, 42786, 42888, 42891, 42943, 42946, 42950, 42999, 43009, 43011, 43013, 43015, 43018, 43020, 43042, 43072, 43123, 43138, 43187, 43250, 43255, 43261, 43262, 43274, 43301, 43312, 43334, 43360, 43388, 43396, 43442, 43488, 43492, 43494, 43503, 43514, 43518, 43520, 43560, 43584, 43586, 43588, 43595, 43616, 43638, 43646, 43695, 43701, 43702, 43705, 43709, 43739, 43741, 43744, 43754, 43762, 43764, 43777, 43782, 43785, 43790, 43793, 43798, 43808, 43814, 43816, 43822, 43824, 43866, 43868, 43879, 43888, 44002, 55216, 55238, 55243, 55291, 63744, 64109, 64112, 64217, 64256, 64262, 64275, 64279, 64287, 64296, 64298, 64310, 64312, 64316, 64320, 64321, 64323, 64324, 64326, 64433, 64467, 64829, 64848, 64911, 64914, 64967, 65008, 65019, 65136, 65140, 65142, 65276, 65313, 65338, 65345, 65370, 65382, 65470, 65474, 65479, 65482, 65487, 65490, 65495, 65498, 65500, 65536, 65547, 65549, 65574, 65576, 65594, 65596, 65597, 65599, 65613, 65616, 65629, 65664, 65786, 65856, 65908, 66176, 66204, 66208, 66256, 66304, 66335, 66349, 66378, 66384, 66421, 66432, 66461, 66464, 66499, 66504, 66511, 66513, 66517, 66560, 66717, 66736, 66771, 66776, 66811, 66816, 66855, 66864, 66915, 67072, 67382, 67392, 67413, 67424, 67431, 67584, 67589, 67594, 67637, 67639, 67640, 67647, 67669, 67680, 67702, 67712, 67742, 67808, 67826, 67828, 67829, 67840, 67861, 67872, 67897, 67968, 68023, 68030, 68031, 68112, 68115, 68117, 68119, 68121, 68149, 68192, 68220, 68224, 68252, 68288, 68295, 68297, 68324, 68352, 68405, 68416, 68437, 68448, 68466, 68480, 68497, 68608, 68680, 68736, 68786, 68800, 68850, 68864, 68899, 69376, 69404, 69424, 69445, 69600, 69622, 69635, 69687, 69763, 69807, 69840, 69864, 69891, 69926, 69968, 70002, 70019, 70066, 70081, 70084, 70144, 70161, 70163, 70187, 70272, 70278, 70282, 70285, 70287, 70301, 70303, 70312, 70320, 70366, 70405, 70412, 70415, 70416, 70419, 70440, 70442, 70448, 70450, 70451, 70453, 70457, 70493, 70497, 70656, 70708, 70727, 70730, 70784, 70831, 70852, 70853, 71040, 71086, 71128, 71131, 71168, 71215, 71296, 71338, 71424, 71450, 71680, 71723, 71840, 71903, 72096, 72103, 72106, 72144, 72203, 72242, 72284, 72329, 72384, 72440, 72704, 72712, 72714, 72750, 72818, 72847, 72960, 72966, 72968, 72969, 72971, 73008, 73056, 73061, 73063, 73064, 73066, 73097, 73440, 73458, 73728, 74649, 74752, 74862, 74880, 75075, 77824, 78894, 82944, 83526, 92160, 92728, 92736, 92766, 92880, 92909, 92928, 92975, 92992, 92995, 93027, 93047, 93053, 93071, 93760, 93823, 93952, 94026, 94099, 94111, 94176, 94177, 100352, 101106, 110592, 110878, 110928, 110930, 110948, 110951, 110960, 111355, 113664, 113770, 113776, 113788, 113792, 113800, 113808, 113817, 119808, 119892, 119894, 119964, 119966, 119967, 119973, 119974, 119977, 119980, 119982, 119993, 119997, 120003, 120005, 120069, 120071, 120074, 120077, 120084, 120086, 120092, 120094, 120121, 120123, 120126, 120128, 120132, 120138, 120144, 120146, 120485, 120488, 120512, 120514, 120538, 120540, 120570, 120572, 120596, 120598, 120628, 120630, 120654, 120656, 120686, 120688, 120712, 120714, 120744, 120746, 120770, 120772, 120779, 123136, 123180, 123191, 123197, 123584, 123627, 124928, 125124, 125184, 125251, 126464, 126467, 126469, 126495, 126497, 126498, 126505, 126514, 126516, 126519, 126541, 126543, 126545, 126546, 126561, 126562, 126567, 126570, 126572, 126578, 126580, 126583, 126585, 126588, 126592, 126601, 126603, 126619, 126625, 126627, 126629, 126633, 126635, 126651];
	const uni_id_cont$1 = [95, 1471, 1479, 1648, 1809, 2045, 2492, 2519, 2558, 2620, 2641, 2677, 2748, 2876, 2946, 3031, 3260, 3415, 3530, 3542, 3633, 3761, 3893, 3895, 3897, 4038, 6109, 6313, 7405, 7412, 8276, 8417, 11647, 42607, 43010, 43014, 43019, 43493, 43587, 43696, 43713, 64286, 65343, 66045, 66272, 68159, 70003, 70206, 70487, 70750, 72164, 72263, 73018, 73031, 94031, 121461, 121476];
	const uni_id_cont_r$1 = [48, 57, 768, 879, 1155, 1159, 1425, 1469, 1473, 1474, 1476, 1477, 1552, 1562, 1611, 1641, 1750, 1756, 1759, 1764, 1767, 1768, 1770, 1773, 1776, 1785, 1840, 1866, 1958, 1968, 1984, 1993, 2027, 2035, 2070, 2073, 2075, 2083, 2085, 2087, 2089, 2093, 2137, 2139, 2259, 2273, 2275, 2307, 2362, 2364, 2366, 2383, 2385, 2391, 2402, 2403, 2406, 2415, 2433, 2435, 2494, 2500, 2503, 2504, 2507, 2509, 2530, 2531, 2534, 2543, 2561, 2563, 2622, 2626, 2631, 2632, 2635, 2637, 2662, 2673, 2689, 2691, 2750, 2757, 2759, 2761, 2763, 2765, 2786, 2787, 2790, 2799, 2810, 2815, 2817, 2819, 2878, 2884, 2887, 2888, 2891, 2893, 2902, 2903, 2914, 2915, 2918, 2927, 3006, 3010, 3014, 3016, 3018, 3021, 3046, 3055, 3072, 3076, 3134, 3140, 3142, 3144, 3146, 3149, 3157, 3158, 3170, 3171, 3174, 3183, 3201, 3203, 3262, 3268, 3270, 3272, 3274, 3277, 3285, 3286, 3298, 3299, 3302, 3311, 3328, 3331, 3387, 3388, 3390, 3396, 3398, 3400, 3402, 3405, 3426, 3427, 3430, 3439, 3458, 3459, 3535, 3540, 3544, 3551, 3558, 3567, 3570, 3571, 3636, 3642, 3655, 3662, 3664, 3673, 3764, 3772, 3784, 3789, 3792, 3801, 3864, 3865, 3872, 3881, 3902, 3903, 3953, 3972, 3974, 3975, 3981, 3991, 3993, 4028, 4139, 4158, 4160, 4169, 4182, 4185, 4190, 4192, 4194, 4196, 4199, 4205, 4209, 4212, 4226, 4237, 4239, 4253, 4957, 4959, 5906, 5908, 5938, 5940, 5970, 5971, 6002, 6003, 6068, 6099, 6112, 6121, 6155, 6157, 6160, 6169, 6277, 6278, 6432, 6443, 6448, 6459, 6470, 6479, 6608, 6617, 6679, 6683, 6741, 6750, 6752, 6780, 6783, 6793, 6800, 6809, 6832, 6845, 6912, 6916, 6964, 6980, 6992, 7001, 7019, 7027, 7040, 7042, 7073, 7085, 7088, 7097, 7142, 7155, 7204, 7223, 7232, 7241, 7248, 7257, 7376, 7378, 7380, 7400, 7415, 7417, 7616, 7673, 7675, 7679, 8255, 8256, 8400, 8412, 8421, 8432, 11503, 11505, 11744, 11775, 12330, 12335, 12441, 12442, 42528, 42537, 42612, 42621, 42654, 42655, 42736, 42737, 43043, 43047, 43136, 43137, 43188, 43205, 43216, 43225, 43232, 43249, 43263, 43273, 43302, 43309, 43335, 43347, 43392, 43395, 43443, 43456, 43472, 43481, 43504, 43513, 43561, 43574, 43596, 43597, 43600, 43609, 43643, 43645, 43698, 43700, 43703, 43704, 43710, 43711, 43755, 43759, 43765, 43766, 44003, 44010, 44012, 44013, 44016, 44025, 65024, 65039, 65056, 65071, 65075, 65076, 65101, 65103, 65296, 65305, 66422, 66426, 66720, 66729, 68097, 68099, 68101, 68102, 68108, 68111, 68152, 68154, 68325, 68326, 68900, 68903, 68912, 68921, 69446, 69456, 69632, 69634, 69688, 69702, 69734, 69743, 69759, 69762, 69808, 69818, 69872, 69881, 69888, 69890, 69927, 69940, 69942, 69951, 69957, 69958, 70016, 70018, 70067, 70080, 70089, 70092, 70096, 70105, 70188, 70199, 70367, 70378, 70384, 70393, 70400, 70403, 70459, 70460, 70462, 70468, 70471, 70472, 70475, 70477, 70498, 70499, 70502, 70508, 70512, 70516, 70709, 70726, 70736, 70745, 70832, 70851, 70864, 70873, 71087, 71093, 71096, 71104, 71132, 71133, 71216, 71232, 71248, 71257, 71339, 71351, 71360, 71369, 71453, 71467, 71472, 71481, 71724, 71738, 71904, 71913, 72145, 72151, 72154, 72160, 72193, 72202, 72243, 72249, 72251, 72254, 72273, 72283, 72330, 72345, 72751, 72758, 72760, 72767, 72784, 72793, 72850, 72871, 72873, 72886, 73009, 73014, 73020, 73021, 73023, 73029, 73040, 73049, 73098, 73102, 73104, 73105, 73107, 73111, 73120, 73129, 73459, 73462, 92768, 92777, 92912, 92916, 92976, 92982, 93008, 93017, 94033, 94087, 94095, 94098, 113821, 113822, 119141, 119145, 119149, 119154, 119163, 119170, 119173, 119179, 119210, 119213, 119362, 119364, 120782, 120831, 121344, 121398, 121403, 121452, 121499, 121503, 121505, 121519, 122880, 122886, 122888, 122904, 122907, 122913, 122915, 122916, 122918, 122922, 123184, 123190, 123200, 123209, 123628, 123641, 125136, 125142, 125252, 125258, 125264, 125273];
	///*
	const j$1 = new Uint16Array(100000);
	j$1.fill(0);
	//Add value to individual indexes
	function aii$1(table, value, ...indices) {
	    for (const i of indices)
	        table[i] |= value;
	}
	//Add value to index ranges
	function air$1(t, v, ...i_r) {
	    for (const r of i_r.reduce((r, v, i) => (((i % 2) ? (r[r.length - 1].push(v)) : r.push([v])), r), [])) {
	        const size = r[1] + 1 - r[0], a = [];
	        for (let i = 0; i < size; i++)
	            a[i] = r[0] + i;
	        aii$1(t, v, ...a);
	    }
	}
	//7. Symbol
	// Default Value
	//1. Identifier
	air$1(j$1, 1, ...uni_id_start_r$1);
	aii$1(j$1, 1, ...uni_id_start$1);
	//2. QUOTE STRING
	aii$1(j$1, 2, 34, 39, 96);
	//3. SPACE SET
	aii$1(j$1, 3, 32, 0xA0, 0x2002, 0x2003, 0x2004, 0x3000);
	//4. TAB SET
	aii$1(j$1, 4, 9);
	//5. CARIAGE RETURN 
	aii$1(j$1, 5, 13);
	//6. CARIAGE RETURN 
	aii$1(j$1, 6, 10);
	//7. Number
	air$1(j$1, 7, 48, 57);
	//8. Operator
	aii$1(j$1, 8, 33, 37, 38, 42, 43, 58, 60, 61, 62);
	//9. Open Bracket
	aii$1(j$1, 9, 40, 91, 123);
	//10. Close Bracket
	aii$1(j$1, 10, 41, 93, 125);
	//10. Close Bracket
	aii$1(j$1, 11, 16);
	/**
	 * Lexer Number and Identifier jump table reference
	 * Number are masked by 12(4|8) and Identifiers are masked by 10(2|8)
	 * entries marked as `0` are not evaluated as either being in the number set or the identifier set.
	 * entries marked as `2` are in the identifier set but not the number set
	 * entries marked as `4` are in the number set but not the identifier set
	 * entries marked as `8` are in both number and identifier sets
	 * entries marked as `8` are in number, identifier, hex, bin, and oct sets;
	 */
	const id = 2, num = 4, hex = 16, oct = 32, bin = 64;
	/**
	 * LExer Number and Identifier jump table reference
	 * Number are masked by [ 4 ] and Identifiers are masked by 6 [ 2 | 4 ]
	 */
	// entries marked as `2` are in the identifier set but not the number set
	air$1(j$1, id << 8, 65, 90, 97, 122);
	air$1(j$1, id << 8, ...uni_id_start_r$1);
	aii$1(j$1, id << 8, ...uni_id_start$1);
	air$1(j$1, id << 8, ...uni_id_cont_r$1);
	aii$1(j$1, id << 8, ...uni_id_cont$1);
	//For hex numbers [AF] and [af]
	air$1(j$1, hex << 8, 65, 70, 97, 122);
	//For bin numbers [01]
	air$1(j$1, bin << 8, 48, 49);
	//For oct numbers [07]
	air$1(j$1, oct << 8, 48, 55);
	//For the whole natural digit range
	air$1(j$1, (num | hex) << 8, 48, 57);

	/**
	 * Error Object produced by wind.errorMessage
	 */
	class WindSyntaxError extends SyntaxError {
	    constructor(message = "", lex) {
	        super();
	        this.name = "WindSyntaxError";
	        this.lex = lex;
	        this.file = "";
	        this.line = lex.column;
	        this.column = lex.line;
	        this.post_peek_lines = 1;
	        this.pre_peek_lines = 1;
	        this.window = 50;
	    }
	    get message() {
	        const lex = this.lex, tab_size = 4, window_size = 400, message = "test message", file = "";
	        // Get the text from the proceeding and the following lines; 
	        // If current line is at index 0 then there will be no proceeding line;
	        // Likewise for the following line if current line is the last one in the string.
	        const line_start = lex.off - lex.char, char = lex.char, l$$1 = lex.line, str = lex.str, len = str.length, sp = " ";
	        let prev_start = 0, next_start = 0, next_end = 0, i$$1 = 0;
	        //get the start of the proceeding line
	        for (i$$1 = line_start; --i$$1 > 0 && j$1[str.codePointAt(i$$1)] !== 6;)
	            ;
	        prev_start = i$$1;
	        //get the end of the current line...
	        for (i$$1 = lex.off + lex.tl; i$$1++ < len && j$1[str.codePointAt(i$$1)] !== 6;)
	            ;
	        next_start = i$$1;
	        //and the next line
	        for (; i$$1++ < len && j$1[str.codePointAt(i$$1)] !== 6;)
	            ;
	        next_end = i$$1;
	        let pointer_pos = char - (line_start > 0 ? 1 : 0);
	        for (i$$1 = line_start; ++i$$1 < lex.off;)
	            if (str.codePointAt(i$$1) == HORIZONTAL_TAB$2)
	                pointer_pos += tab_size - 1;
	        //find the location of the offending symbol
	        const prev_line = str.slice(prev_start + (prev_start > 0 ? 1 : 0), line_start).replace(/\t/g, sp.repeat(tab_size)), curr_line = str.slice(line_start + (line_start > 0 ? 1 : 0), next_start).replace(/\t/g, sp.repeat(tab_size)), next_line = str.slice(next_start + (next_start > 0 ? 1 : 0), next_end).replace(/\t/g, " "), 
	        //get the max line length;
	        max_length = Math.max(prev_line.length, curr_line.length, next_line.length), min_length = Math.min(prev_line.length, curr_line.length, next_line.length), length_diff = max_length - min_length, 
	        //Get the window size;
	        w_size = window_size, w_start = Math.max(0, Math.min(pointer_pos - w_size / 2, max_length)), w_end = Math.max(0, Math.min(pointer_pos + w_size / 2, max_length)), w_pointer_pos = Math.max(0, Math.min(pointer_pos, max_length)) - w_start, 
	        //append the difference of line lengths to the end of the lines as space characters;
	        prev_line_o = (prev_line + sp.repeat(length_diff)).slice(w_start, w_end), curr_line_o = (curr_line + sp.repeat(length_diff)).slice(w_start, w_end), next_line_o = (next_line + sp.repeat(length_diff)).slice(w_start, w_end), trunc = w_start !== 0 ? "... " : "", line_number = n$$1 => ` ${(sp.repeat(3) + (n$$1 + 1)).slice(-(l$$1 + 1 + "").length)}: `, error_border = thick_line$1.repeat(curr_line_o.length + line_number.length + 8 + trunc.length);
	        return [
	            `${message} at ${file ? file + ":" : ""}${l$$1 + 1}:${char + 1 - ((l$$1 > 0) ? 1 : 0)}`,
	            `${error_border}`,
	            `${l$$1 - 1 > -1 ? line_number(l$$1 - 1) + trunc + prev_line_o + (prev_line_o.length < prev_line.length ? " ..." : "") : ""}`,
	            `${true ? line_number(l$$1) + trunc + curr_line_o + (curr_line_o.length < curr_line.length ? " ..." : "") : ""}`,
	            `${line$1.repeat(w_pointer_pos + trunc.length + line_number(l$$1 + 1).length) + arrow$1}`,
	            `${next_start < str.length ? line_number(l$$1 + 1) + trunc + next_line_o + (next_line_o.length < next_line.length ? " ..." : "") : ""}`,
	            `${error_border}`
	        ]
	            .filter(e$$1 => !!e$$1)
	            .join("\n");
	    }
	}

	const NULL = 0;
	const START_OF_HEADER = 1;
	const START_OF_TEXT = 2;
	const END_OF_TXT = 3;
	const END_OF_TRANSMISSION = 4;
	const ENQUIRY = 5;
	const ACKNOWLEDGE = 6;
	const BELL = 7;
	const BACKSPACE = 8;
	const HORIZONTAL_TAB$1 = 9;
	const LINE_FEED = 10;
	const VERTICAL_TAB = 11;
	const FORM_FEED = 12;
	const CARRIAGE_RETURN = 13;
	const SHIFT_OUT = 14;
	const SHIFT_IN = 15;
	const DATA_LINK_ESCAPE = 16;
	const DEVICE_CTRL_1 = 17;
	const DEVICE_CTRL_2 = 18;
	const DEVICE_CTRL_3 = 19;
	const DEVICE_CTRL_4 = 20;
	const NEGATIVE_ACKNOWLEDGE = 21;
	const SYNCH_IDLE = 22;
	const END_OF_TRANSMISSION_BLOCK = 23;
	const CANCEL = 24;
	const END_OF_MEDIUM = 25;
	const SUBSTITUTE = 26;
	const ESCAPE = 27;
	const FILE_SEPERATOR = 28;
	const GROUP_SEPERATOR = 29;
	const RECORD_SEPERATOR = 30;
	const UNIT_SEPERATOR = 31;
	const SPACE$1 = 32;
	const EXCLAMATION = 33;
	const DOUBLE_QUOTE = 34;
	const HASH = 35;
	const DOLLAR = 36;
	const PERCENT = 37;
	const AMPERSAND = 38;
	const QUOTE = 39;
	const OPEN_PARENTH = 40;
	const CLOSE_PARENTH = 41;
	const ASTERISK = 42;
	const PLUS = 43;
	const COMMA = 44;
	const HYPHEN = 45;
	const PERIOD = 46;
	const FORWARD_SLASH = 47;
	const ZERO = 48;
	const ONE = 49;
	const TWO = 50;
	const THREE = 51;
	const FOUR = 52;
	const FIVE = 53;
	const SIX = 54;
	const SEVEN = 55;
	const EIGHT = 56;
	const NINE = 57;
	const COLON = 58;
	const SEMICOLON = 59;
	const LESS_THAN = 60;
	const EQUAL = 61;
	const GREATER_THAN = 62;
	const QMARK = 63;
	const AT = 64;
	const A = 65;
	const B = 66;
	const C = 67;
	const D = 68;
	const E = 69;
	const F = 70;
	const G = 71;
	const H = 72;
	const I = 73;
	const J = 74;
	const K = 75;
	const L = 76;
	const M = 77;
	const N = 78;
	const O = 79;
	const P = 80;
	const Q = 81;
	const R = 82;
	const S = 83;
	const T = 84;
	const U = 85;
	const V = 86;
	const W = 87;
	const X = 88;
	const Y = 89;
	const Z = 90;
	const OPEN_SQUARE = 91;
	const BACKSLASH = 92;
	const CLOSE_SQUARE = 93;
	const CARET = 94;
	const UNDER_SCORE = 95;
	const GRAVE = 96;
	const a = 97;
	const b = 98;
	const c = 99;
	const d = 100;
	const e = 101;
	const f = 102;
	const g = 103;
	const h = 104;
	const i = 105;
	const j$2 = 106;
	const k = 107;
	const l = 108;
	const m = 109;
	const n = 110;
	const o = 111;
	const p = 112;
	const q = 113;
	const r = 114;
	const s = 115;
	const t = 116;
	const u = 117;
	const v = 118;
	const w = 119;
	const x = 120;
	const y = 121;
	const z = 122;
	const OPEN_CURLY = 123;
	const VERTICAL_BAR = 124;
	const CLOSE_CURLY = 125;
	const TILDE = 126;
	const DELETE = 127;

	var TokenType;
	(function (TokenType) {
	    TokenType[TokenType["number"] = 1] = "number";
	    TokenType[TokenType["num"] = 1] = "num";
	    TokenType[TokenType["identifier"] = 2] = "identifier";
	    TokenType[TokenType["string"] = 4] = "string";
	    TokenType[TokenType["white_space"] = 8] = "white_space";
	    TokenType[TokenType["open_bracket"] = 16] = "open_bracket";
	    TokenType[TokenType["close_bracket"] = 32] = "close_bracket";
	    TokenType[TokenType["operator"] = 64] = "operator";
	    TokenType[TokenType["symbol"] = 128] = "symbol";
	    TokenType[TokenType["new_line"] = 256] = "new_line";
	    TokenType[TokenType["data_link"] = 512] = "data_link";
	    TokenType[TokenType["number_bin"] = 1025] = "number_bin";
	    TokenType[TokenType["number_oct"] = 2049] = "number_oct";
	    TokenType[TokenType["number_hex"] = 4097] = "number_hex";
	    TokenType[TokenType["number_int"] = 8193] = "number_int";
	    TokenType[TokenType["number_sci"] = 16385] = "number_sci";
	    TokenType[TokenType["number_flt"] = 32769] = "number_flt";
	    TokenType[TokenType["alpha_numeric"] = 3] = "alpha_numeric";
	    TokenType[TokenType["white_space_new_line"] = 264] = "white_space_new_line";
	    TokenType[TokenType["id"] = 2] = "id";
	    TokenType[TokenType["str"] = 4] = "str";
	    TokenType[TokenType["ws"] = 8] = "ws";
	    TokenType[TokenType["ob"] = 16] = "ob";
	    TokenType[TokenType["cb"] = 32] = "cb";
	    TokenType[TokenType["op"] = 64] = "op";
	    TokenType[TokenType["sym"] = 128] = "sym";
	    TokenType[TokenType["nl"] = 256] = "nl";
	    TokenType[TokenType["dl"] = 512] = "dl";
	    TokenType[TokenType["int"] = 8193] = "int";
	    TokenType[TokenType["integer"] = 8193] = "integer";
	    TokenType[TokenType["bin"] = 1025] = "bin";
	    TokenType[TokenType["binary"] = 1025] = "binary";
	    TokenType[TokenType["oct"] = 2049] = "oct";
	    TokenType[TokenType["octal"] = 2049] = "octal";
	    TokenType[TokenType["hex"] = 4097] = "hex";
	    TokenType[TokenType["hexadecimal"] = 4097] = "hexadecimal";
	    TokenType[TokenType["flt"] = 32769] = "flt";
	    TokenType[TokenType["float"] = 32769] = "float";
	    TokenType[TokenType["sci"] = 16385] = "sci";
	    TokenType[TokenType["scientific"] = 16385] = "scientific";
	})(TokenType || (TokenType = {}));
	var Masks;
	(function (Masks) {
	    Masks[Masks["TYPE_MASK"] = 15] = "TYPE_MASK";
	    Masks[Masks["PARSE_STRING_MASK"] = 16] = "PARSE_STRING_MASK";
	    Masks[Masks["USE_EXTENDED_NUMBER_TYPES_MASK"] = 4] = "USE_EXTENDED_NUMBER_TYPES_MASK";
	    Masks[Masks["IGNORE_WHITESPACE_MASK"] = 32] = "IGNORE_WHITESPACE_MASK";
	    Masks[Masks["CHARACTERS_ONLY_MASK"] = 64] = "CHARACTERS_ONLY_MASK";
	    Masks[Masks["USE_EXTENDED_ID_MASK"] = 128] = "USE_EXTENDED_ID_MASK";
	    Masks[Masks["TOKEN_LENGTH_MASK"] = 4294967040] = "TOKEN_LENGTH_MASK";
	})(Masks || (Masks = {}));
	//De Bruijn Sequence for finding index of right most bit set.
	//http://supertech.csail.mit.edu/papers/debruijn.pdf
	const debruijnLUT$1 = [
	    0, 1, 28, 2, 29, 14, 24, 3, 30, 22, 20, 15, 25, 17, 4, 8,
	    31, 27, 13, 23, 21, 19, 16, 7, 26, 12, 18, 6, 11, 5, 10, 9
	], getNumbrOfTrailingZeroBitsFromPowerOf2$1 = (value) => debruijnLUT$1[(value * 0x077CB531) >>> 27], arrow$1 = String.fromCharCode(0x2b89), line$1 = String.fromCharCode(0x2500), thick_line$1 = String.fromCharCode(0x2501), HORIZONTAL_TAB$2 = 9, SPACE$2 = 32, extended_jump_table$1 = j$1.slice();
	extended_jump_table$1[45] |= 2 << 8;
	extended_jump_table$1[95] |= 2 << 8;
	/**
	 * Token Producing Lexer.
	 */
	class Lexer$1 {
	    /**
	     *
	     * @param string
	     * @param INCLUDE_WHITE_SPACE_TOKENS
	     * @param PEEKING
	     */
	    constructor(string = "", INCLUDE_WHITE_SPACE_TOKENS = false, PEEKING = false) {
	        if (typeof (string) !== "string")
	            throw new Error(`String value must be passed to Lexer. A ${typeof (string)} was passed as the 'string' argument.`);
	        Object.defineProperties(this, {
	            symbol_map: {
	                writable: true,
	                value: null
	            },
	            // Reference to the peeking Lexer.
	            p: {
	                writable: true,
	                value: null
	            },
	            /**
	             * Stores values accessed through binary operations
	             */
	            masked_values: {
	                writable: true,
	                value: 0
	            },
	            //  The length of the string being parsed. Can be adjusted to virtually shorten the screen. 
	            sl: {
	                writable: true,
	                enumerable: true,
	                value: string.length
	            },
	            //  The string that the Lexer will tokenize.
	            str: {
	                writable: false,
	                value: string
	            }
	        });
	        this.type = 262144; //Default "non-value" for types is 1<<18;
	        this.off = 0;
	        this.column = 0;
	        this.line = 0;
	        this.tl = 0;
	        /**
	         * Flag to ignore white spaced.
	         */
	        this.IWS = !INCLUDE_WHITE_SPACE_TOKENS;
	        this.USE_EXTENDED_ID = false;
	        /**
	         * Flag to force the lexer to parse string contents
	         * instead of producing a token that is a substring matched
	         * by /["''].*["'']/
	         */
	        this.PARSE_STRING = false;
	        if (!PEEKING)
	            this.next();
	    }
	    /**
	     * Restore the Lexer back to it's initial state.
	     * @public
	     */
	    reset() {
	        this.resetHead();
	        this.next();
	        return this;
	    }
	    resetHead() {
	        this.off = 0;
	        this.tl = 0;
	        this.column = 0;
	        this.line = 0;
	        this.p = null;
	        this.type = 32768;
	    }
	    ;
	    /**
	     * Copies the data to a new Lexer object.
	     * @return {Lexer}  Returns a new Lexer instance with the same property values.
	     */
	    copy(destination = new Lexer$1(this.str, false, true)) {
	        destination.off = this.off;
	        destination.column = this.column;
	        destination.line = this.line;
	        destination.sl = this.sl;
	        destination.tl = this.tl;
	        destination.type = this.type;
	        destination.symbol_map = this.symbol_map;
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
	        if (marker instanceof Lexer$1) {
	            if (marker.str !== this.str)
	                throw new Error("Cannot sync Lexers with different strings!");
	            this.off = marker.off;
	            this.column = marker.column;
	            this.line = marker.line;
	            this.tl = marker.tl;
	            this.type = marker.type;
	            this.masked_values = marker.masked_values;
	        }
	        return this;
	    }
	    /**
	     * Sets the internal state to point to the next token. Sets Lexer.prototype.END to `true` if the end of the string is hit.
	     * @public
	     * @param {Lexer} [marker=this] - If another Lexer is passed into this method, it will advance the token state of that Lexer.
	     */
	    next(marker = this, USE_CUSTOM_SYMBOLS = !!this.symbol_map) {
	        if (marker.sl < 1) {
	            marker.off = 0;
	            marker.type = 32768;
	            marker.tl = 0;
	            marker.line = 0;
	            marker.column = 0;
	            return marker;
	        }
	        //Token builder
	        const l$$1 = marker.sl, str = marker.str, jump_table = this.id_lu, IWS = marker.IWS;
	        let length = marker.tl, off = marker.off + length, type = TokenType.symbol, line = marker.line, base = off, char = marker.column, root = marker.off;
	        if (off >= l$$1) {
	            length = 0;
	            base = l$$1;
	            //char -= base - off;
	            marker.column = char + (base - marker.off);
	            marker.type = type;
	            marker.off = base;
	            marker.tl = 0;
	            marker.line = line;
	            return marker;
	        }
	        let NORMAL_PARSE = true;
	        if (USE_CUSTOM_SYMBOLS) {
	            let code = str.charCodeAt(off);
	            let off2 = off;
	            let map = this.symbol_map, m$$1;
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
	            }
	        }
	        while (NORMAL_PARSE) {
	            base = off;
	            length = 1;
	            const code = str.codePointAt(off);
	            switch (jump_table[code] & 255) {
	                case 0: //SYMBOL
	                    type = TokenType.symbol;
	                    break;
	                case 1: //IDENTIFIER
	                    while (++off < l$$1 && (((id | num) & (jump_table[str.codePointAt(off)] >> 8))))
	                        ;
	                    type = TokenType.identifier;
	                    length = off - base;
	                    break;
	                case 2: //QUOTED STRING
	                    if (this.PARSE_STRING) {
	                        type = TokenType.symbol;
	                    }
	                    else {
	                        while (++off < l$$1 && str.codePointAt(off) !== code)
	                            ;
	                        type = TokenType.string;
	                        length = off - base + 1;
	                    }
	                    break;
	                case 3: //SPACE SET
	                    while (++off < l$$1 && str.codePointAt(off) === SPACE$2)
	                        ;
	                    type = TokenType.white_space;
	                    length = off - base;
	                    break;
	                case 4: //TAB SET
	                    while (++off < l$$1 && str[off] === "\t")
	                        ;
	                    type = TokenType.white_space;
	                    length = off - base;
	                    break;
	                case 5: //CARRIAGE RETURN
	                    length = 2;
	                //intentional
	                case 6: //LINEFEED
	                    type = TokenType.new_line;
	                    line++;
	                    base = off;
	                    root = off;
	                    off += length;
	                    char = 0;
	                    break;
	                case 7: //NUMBER
	                    type = TokenType.number;
	                    //Check for binary, hexadecimal, and octal representation
	                    if (code == 48) { // 0 - ZERO
	                        off++;
	                        if (("oxbOXB").includes(str[off])) {
	                            const lups = {
	                                b: { lu: bin, ty: TokenType.number_bin },
	                                o: { lu: oct, ty: TokenType.number_oct },
	                                x: { lu: hex, ty: TokenType.number_hex }
	                            };
	                            const { lu, ty } = lups[str[off].toLowerCase()];
	                            //Code of first char after the letter should
	                            // be within the range of the respective lu type : hex, oct, or bin
	                            if ((lu & (jump_table[str.codePointAt(off + 1)] >> 8))) {
	                                while (++off < l$$1 && (lu & (jump_table[str.codePointAt(off)] >> 8)))
	                                    ;
	                                type = ty;
	                                if (!this.USE_EXTENDED_NUMBER_TYPES)
	                                    type = TokenType.number;
	                                //harness.inspect(this.USE_EXTENDED_NUMBER_TYPES))
	                                length = off - base;
	                                break;
	                            }
	                        }
	                        //The number is just 0. Do not allow 0221, 00007, etc. 
	                        //But need to allow 0.1, 0.12 etc
	                        //and also detect .12354
	                    }
	                    else {
	                        while (++off < l$$1 && (num & (jump_table[str.codePointAt(off)] >> 8)))
	                            ;
	                    }
	                    //type = number_int;
	                    if (str[off] == ".") {
	                        while (++off < l$$1 && (num & (jump_table[str.codePointAt(off)] >> 8)))
	                            ;
	                        //float
	                        type = TokenType.number_flt;
	                    }
	                    if (("Ee").includes(str[off])) {
	                        const ori_off = off;
	                        //Add e to the number string
	                        off++;
	                        if (("-+").includes(str[off]))
	                            off++;
	                        if (!(num & (jump_table[str.codePointAt(off)] >> 8))) {
	                            off = ori_off;
	                        }
	                        else {
	                            while (++off < l$$1 && (num & (jump_table[str.codePointAt(off)] >> 8)))
	                                ;
	                            type = TokenType.number_sci;
	                        }
	                        //scientific 
	                    }
	                    if (!this.USE_EXTENDED_NUMBER_TYPES)
	                        type = TokenType.number;
	                    length = off - base;
	                    break;
	                case 8: //OPERATOR
	                    type = TokenType.operator;
	                    break;
	                case 9: //OPEN BRACKET
	                    type = TokenType.open_bracket;
	                    break;
	                case 10: //CLOSE BRACKET
	                    type = TokenType.close_bracket;
	                    break;
	                case 11: //Data Link Escape
	                    type = TokenType.data_link;
	                    length = 4; //Stores two UTF16 values and a data link sentinel
	                    break;
	            }
	            if (IWS && (type & TokenType.white_space_new_line)) {
	                if (off < l$$1) {
	                    type = TokenType.symbol;
	                    //off += length;
	                    continue;
	                }
	                else {
	                    //Trim white space from end of string
	                    base = l$$1 - off;
	                    marker.sl -= off;
	                    length = 0;
	                }
	            }
	            break;
	        }
	        marker.type = type;
	        marker.off = base;
	        marker.tl = (this.masked_values & Masks.CHARACTERS_ONLY_MASK) ? Math.min(1, length) : length;
	        marker.column = char + base - root;
	        marker.line = line;
	        return marker;
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
	        Looks for the string within the text and returns a new lexer at the location of the first occurrence of the token or
	    */
	    find(string) {
	        const cp = this.pk, match = new Lexer$1(string);
	        match.resetHead();
	        cp.tl = 0;
	        const char_cache = cp.CHARACTERS_ONLY;
	        match.CHARACTERS_ONLY = true;
	        cp.CHARACTERS_ONLY = true;
	        while (!cp.END) {
	            const mpk = match.pk, cpk = cp.pk;
	            while (!mpk.END && !cpk.END && cpk.tx == mpk.tx) {
	                cpk.next();
	                mpk.next();
	            }
	            if (mpk.END) {
	                cp.CHARACTERS_ONLY = char_cache;
	                return cp.next();
	            }
	            cp.next();
	        }
	        return cp;
	    }
	    createWindSyntaxError(message) {
	        return new WindSyntaxError(message, this);
	    }
	    /**
	     * Creates an error message with a diagram illustrating the location of the error.
	     */
	    errorMessage(message = "", file = "", window_size = 120, tab_size = 2) {
	        window_size = 20;
	        // Get the text from the proceeding and the following lines; 
	        // If current line is at index 0 then there will be no proceeeding line;
	        // Likewise for the following line if current line is the last one in the string.
	        const line_start = this.off - this.column, char = this.column, l$$1 = this.line, str = this.str, len = str.length, sp = " ";
	        let prev_start = 0, next_start = 0, next_end = 0, i$$1 = 0;
	        //get the start of the proceeding line
	        for (i$$1 = line_start; --i$$1 > 0 && j$1[str.codePointAt(i$$1)] !== 6;)
	            ;
	        prev_start = i$$1;
	        //get the end of the current line...
	        for (i$$1 = this.off + this.tl; i$$1++ < len && j$1[str.codePointAt(i$$1)] !== 6;)
	            ;
	        next_start = i$$1;
	        //and the next line
	        for (; i$$1++ < len && j$1[str.codePointAt(i$$1)] !== 6;)
	            ;
	        next_end = i$$1;
	        let pointer_pos = char - (line_start > 0 ? 1 : 0);
	        for (i$$1 = line_start; ++i$$1 < this.off;)
	            if (str.codePointAt(i$$1) == HORIZONTAL_TAB$2)
	                pointer_pos += tab_size - 1;
	        //find the location of the offending symbol
	        const prev_line = str.slice(prev_start + (prev_start > 0 ? 1 : 0), line_start).replace(/\t/g, sp.repeat(tab_size)), curr_line = str.slice(line_start + (line_start > 0 ? 1 : 0), next_start).replace(/\t/g, sp.repeat(tab_size)), next_line = str.slice(next_start + (next_start > 0 ? 1 : 0), next_end).replace(/\t/g, " "), 
	        //get the max line length;
	        max_length = Math.max(prev_line.length, curr_line.length, next_line.length), min_length = Math.min(prev_line.length, curr_line.length, next_line.length), length_diff = max_length - min_length, 
	        //Get the window size;
	        w_size = window_size, w_start = Math.max(0, Math.min(pointer_pos - w_size / 0.75, max_length)), w_end = Math.max(0, Math.min(pointer_pos + w_size / 0.25, max_length)), w_pointer_pos = Math.max(0, Math.min(pointer_pos, max_length)) - w_start, 
	        //append the difference of line lengths to the end of the lines as space characters;
	        prev_line_o = (prev_line + sp.repeat(length_diff)).slice(w_start, w_end), curr_line_o = (curr_line + sp.repeat(length_diff)).slice(w_start, w_end), next_line_o = (next_line + sp.repeat(length_diff)).slice(w_start, w_end), trunc = w_start !== 0 ? "... " : "", line_number = n$$1 => ` ${(sp.repeat(3) + (n$$1 + 1)).slice(-(l$$1 + 1 + "").length)}: `, error_border = thick_line$1.repeat(curr_line_o.length + line_number.length + 8 + trunc.length);
	        return [
	            `${message} at ${file ? file + ":" : ""}${l$$1 + 1}:${char + 1 - ((l$$1 > 0) ? 1 : 0)}`,
	            `${error_border}`,
	            `${l$$1 - 1 > -1 ? line_number(l$$1 - 1) + trunc + prev_line_o + (prev_line_o.length < prev_line.length ? " ..." : "") : ""}`,
	            `${true ? line_number(l$$1) + trunc + curr_line_o + (curr_line_o.length < curr_line.length ? " ..." : "") : ""}`,
	            `${line$1.repeat(w_pointer_pos + trunc.length + line_number(l$$1 + 1).length) + arrow$1}`,
	            `${next_start < str.length ? line_number(l$$1 + 1) + trunc + next_line_o + (next_line_o.length < next_line.length ? " ..." : "") : ""}`,
	            `${error_border}`
	        ]
	            .filter(e$$1 => !!e$$1)
	            .join("\n");
	    }
	    errorMessageWithIWS(...v$$1) {
	        return this.errorMessage(...v$$1) + "\n" + (!this.IWS) ? "\n The Lexer produced whitespace tokens" : "";
	    }
	    /**
	     * Will throw a new Error, appending the parsed string line and position information to the the error message passed into the function.
	     * @instance
	     * @public
	     * @param {String} message - The error message.
	     */
	    throw(message) {
	        throw new Error(this.errorMessage(message));
	        
	    }
	    ;
	    /**
	     * Proxy for Lexer.prototype.reset
	     * @public
	     */
	    r() { return this.reset(); }
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
	        if (this.off < 0 || this.END)
	            this.throw(`Expecting [${text}] but encountered end of string.`);
	        if (this.text == text)
	            this.next();
	        else
	            this.throw(`Expecting [${text}] but encountered [${this.text}]`);
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
	        if (this.off < 0 || this.END)
	            this.throw(`Expecting [${char[0]}] but encountered end of string.`);
	        if (this.ch == char[0])
	            this.next();
	        else
	            this.throw(`Expecting [${char[0]}] but encountered [${this.ch}]`);
	        return this;
	    }
	    /**
	     * Returns the Lexer bound to Lexer.prototype.p, or creates and binds a new Lexer to Lexer.prototype.p. Advences the other Lexer to the token ahead of the calling Lexer.
	     * @public
	     * @type {Lexer}
	     * @param {Lexer} [marker=this] - The marker to originate the peek from.
	     * @param {Lexer} [peeking_marker=this.p] - The Lexer to set to the next token state.
	     * @return {Lexer} - The Lexer that contains the peeked at token.
	     */
	    peek(marker = this, peeking_marker = this.p) {
	        if (!peeking_marker) {
	            if (!marker)
	                return null;
	            if (!this.p) {
	                this.p = new Lexer$1(this.str, false, true);
	                peeking_marker = this.p;
	            }
	        }
	        peeking_marker.masked_values = marker.masked_values;
	        peeking_marker.type = marker.type;
	        peeking_marker.off = marker.off;
	        peeking_marker.tl = marker.tl;
	        peeking_marker.column = marker.column;
	        peeking_marker.line = marker.line;
	        this.next(peeking_marker);
	        return peeking_marker;
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
	    slice(start = this.off) {
	        if (start instanceof Lexer$1)
	            start = start.off;
	        return this.str.slice(start, (this.off <= start) ? this.sl : this.off);
	    }
	    /**
	     * Skips to the end of a comment section.
	     * @param {boolean} ASSERT - If set to true, will through an error if there is not a comment line or block to skip.
	     * @param {Lexer} [marker=this] - If another Lexer is passed into this method, it will advance the token state of that Lexer.
	     */
	    comment(ASSERT = false, marker = this) {
	        if (!(marker instanceof Lexer$1))
	            return marker;
	        if (marker.ch == "/") {
	            if (marker.pk.ch == "*") {
	                marker.sync();
	                //@ts-ignore
	                while (!marker.END && (marker.next().ch !== "*" || marker.pk.ch !== "/")) { /** NO OP */ }
	                marker.sync().assert("/");
	            }
	            else if (marker.pk.ch == "/") {
	                const IWS = marker.IWS;
	                while (marker.next().ty != TokenType.new_line && !marker.END) { /** NO OP */ }
	                marker.IWS = IWS;
	                marker.next();
	            }
	            else if (ASSERT)
	                marker.throw("Expecting the start of a comment");
	        }
	        return marker;
	    }
	    /**
	     * Replaces the string the Lexer is tokenizing.
	     * @param string - New string to replace the existing one with.
	     * @param RESET - Flag that if set true will reset the Lexers position to the start of the string
	     */
	    setString(string, RESET = true) {
	        this.str = string;
	        this.sl = string.length;
	        if (RESET)
	            this.resetHead();
	    }
	    ;
	    toString() {
	        return this.slice();
	    }
	    /**
	     * Returns new Whind Lexer that has leading and trailing whitespace characters removed from input.
	     * @param leave_leading_amount - Maximum amount of leading space caracters to leave behind. Default is zero
	     * @param leave_trailing_amount - Maximum amount of trailing space caracters to leave behind. Default is zero
	     */
	    trim(leave_leading_amount = 0, leave_trailing_amount = leave_leading_amount) {
	        const lex = this.copy();
	        let space_count = 0, off = lex.off;
	        for (; lex.off < lex.sl; lex.off++) {
	            const c$$1 = j$1[lex.string.charCodeAt(lex.off)];
	            if (c$$1 > 2 && c$$1 < 7) {
	                if (space_count >= leave_leading_amount) {
	                    off++;
	                }
	                else {
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
	            const c$$1 = j$1[lex.string.charCodeAt(lex.sl - 1)];
	            if (c$$1 > 2 && c$$1 < 7) {
	                if (space_count >= leave_trailing_amount) {
	                    off--;
	                }
	                else {
	                    space_count++;
	                }
	                continue;
	            }
	            break;
	        }
	        lex.sl = off;
	        if (leave_leading_amount > 0)
	            lex.IWS = false;
	        lex.tl = 0;
	        lex.next();
	        return lex;
	    }
	    /**
	     * Alias for lexer.column
	     */
	    get char() {
	        return this.column;
	    }
	    /**
	     * Adds symbol to symbol_map. This allows custom symbols to be defined and tokenized by parser.
	    */
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
	    /** Getters and Setters ***/
	    get string() {
	        return this.str;
	    }
	    get string_length() {
	        return this.sl - this.off;
	    }
	    set string_length(s$$1) { }
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
	     * @type {string}
	     * @public
	     * @readonly
	     */
	    get text() {
	        return (this.off < 0) ? "" : this.str.slice(this.off, this.off + this.tl);
	    }
	    /**
	     * The type id of the current token.
	     * @type {TokenType}
	     * @public
	     * @readonly
	     */
	    get ty() { return this.type; }
	    ;
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
	    /**
	     * Boolean value set to true if position of Lexer is at the end of the string.
	     */
	    get END() { return this.off >= this.sl; }
	    set END(v$$1) { }
	    get IGNORE_WHITE_SPACE() {
	        return this.IWS;
	    }
	    set IGNORE_WHITE_SPACE(bool) {
	        this.IWS = !!bool;
	    }
	    get CHARACTERS_ONLY() {
	        return !!(this.masked_values & Masks.CHARACTERS_ONLY_MASK);
	    }
	    set CHARACTERS_ONLY(boolean) {
	        this.masked_values = (this.masked_values & ~Masks.CHARACTERS_ONLY_MASK) | ((+boolean | 0) << 6);
	    }
	    get IWS() {
	        return !!(this.masked_values & Masks.IGNORE_WHITESPACE_MASK);
	    }
	    set IWS(boolean) {
	        this.masked_values = (this.masked_values & ~Masks.IGNORE_WHITESPACE_MASK) | ((+boolean | 0) << 5);
	    }
	    get PARSE_STRING() {
	        return !!(this.masked_values & Masks.PARSE_STRING_MASK);
	    }
	    set PARSE_STRING(boolean) {
	        this.masked_values = (this.masked_values & ~Masks.PARSE_STRING_MASK) | ((+boolean | 0) << 4);
	    }
	    get USE_EXTENDED_ID() {
	        return !!(this.masked_values & Masks.USE_EXTENDED_ID_MASK);
	    }
	    set USE_EXTENDED_ID(boolean) {
	        this.masked_values = (this.masked_values & ~Masks.USE_EXTENDED_ID_MASK) | ((+boolean | 0) << 8);
	    }
	    get USE_EXTENDED_NUMBER_TYPES() {
	        return !!(this.masked_values & Masks.USE_EXTENDED_NUMBER_TYPES_MASK);
	    }
	    set USE_EXTENDED_NUMBER_TYPES(boolean) {
	        this.masked_values = (this.masked_values & ~Masks.USE_EXTENDED_NUMBER_TYPES_MASK) | ((+boolean | 0) << 2);
	    }
	    /**
	     * Reference to token id types.
	     */
	    get types() {
	        return TokenType;
	    }
	}
	Lexer$1.prototype.id_lu = j$1;
	Lexer$1.prototype.addCharacter = Lexer$1.prototype.addSymbol;
	function whind$1(string, INCLUDE_WHITE_SPACE_TOKENS = false) { return new Lexer$1(string, INCLUDE_WHITE_SPACE_TOKENS); }
	whind$1.constructor = Lexer$1;
	Lexer$1.types = TokenType;
	whind$1.types = TokenType;

	let fetch = (typeof window !== "undefined") ? window.fetch : null;
	const uri_reg_ex = /(?:([a-zA-Z][\dA-Za-z\+\.\-]*)(?:\:\/\/))?(?:([a-zA-Z][\dA-Za-z\+\.\-]*)(?:\:([^\<\>\:\?\[\]\@\/\#\b\s]*)?)?\@)?(?:(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})|((?:\[[0-9a-f]{1,4})+(?:\:[0-9a-f]{0,4}){2,7}\])|([^\<\>\:\?\[\]\@\/\#\b\s\.]{2,}(?:\.[^\<\>\:\?\[\]\@\/\#\b\s]*)*))?(?:\:(\d+))?((?:[^\?\[\]\#\s\b]*)+)?(?:\?([^\[\]\#\s\b]*))?(?:\#([^\#\s\b]*))?/i;
	const STOCK_LOCATION = {
	    protocol: "",
	    host: "",
	    port: "",
	    path: "",
	    hash: "",
	    query: "",
	    search: "",
	    hostname: "",
	    pathname: ""
	};
	function getCORSModes(url) {
	    const IS_CORS = (URL.GLOBAL.host !== url.host && !!url.host);
	    return {
	        IS_CORS,
	        mode: IS_CORS ? "cors" : "same-origin",
	        credentials: IS_CORS ? "omit" : "include",
	    };
	}
	function fetchLocalText(url, m$$1 = "cors") {
	    return new Promise((res, rej) => {
	        fetch(url + "", Object.assign({
	            method: "GET"
	        }, getCORSModes(url))).then(r$$1 => {
	            if (r$$1.status < 200 || r$$1.status > 299)
	                r$$1.text().then(rej);
	            else
	                r$$1.text().then(res);
	        }).catch(e$$1 => rej(e$$1));
	    });
	}
	function fetchLocalJSON(url, m$$1 = "cors") {
	    return new Promise((res, rej) => {
	        fetch(url + "", Object.assign({
	            method: "GET"
	        }, getCORSModes(url))).then(r$$1 => {
	            if (r$$1.status < 200 || r$$1.status > 299)
	                r$$1.json().then(rej);
	            else
	                r$$1.json().then(res).catch(rej);
	        }).catch(e$$1 => rej(e$$1));
	    });
	}
	function submitForm(url, form_data, m$$1 = "same-origin") {
	    return new Promise((res, rej) => {
	        var form;
	        if (form_data instanceof FormData)
	            form = form_data;
	        else {
	            form = new FormData();
	            for (let name in form_data)
	                form.append(name, form_data[name] + "");
	        }
	        fetch(url + "", Object.assign({
	            method: "POST",
	            body: form
	        }, getCORSModes(url))).then(r$$1 => {
	            if (r$$1.status < 200 || r$$1.status > 299)
	                r$$1.text().then(rej);
	            else
	                r$$1.json().then(res);
	        }).catch(e$$1 => e$$1.text().then(rej));
	    });
	}
	function submitJSON(url, json_data, m$$1 = "same-origin") {
	    return new Promise((res, rej) => {
	        fetch(url + "", Object.assign({
	            method: "POST",
	            body: JSON.stringify(json_data),
	            headers: {
	                'Content-Type': 'application/json',
	                'Accept': 'application/json',
	            }
	        }, getCORSModes(url))).then(r$$1 => {
	            if (r$$1.status < 200 || r$$1.status > 299)
	                r$$1.json().then(rej);
	            else
	                r$$1.json().then(res);
	        }).catch(e$$1 => e$$1.text().then(rej));
	    });
	}
	/**
	 *  Used for processing URLs, handling `document.location`, and fetching data.
	 */
	class URL {
	    constructor(url = "", USE_LOCATION = false) {
	        let IS_STRING = true, IS_LOCATION = false, location = (typeof (document) !== "undefined") ? document.location : STOCK_LOCATION;
	        if (typeof (Location) !== "undefined" && url instanceof Location) {
	            location = url;
	            url = "";
	            IS_LOCATION = true;
	        }
	        if (!url || typeof (url) != "string") {
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
	        if (url instanceof URL) {
	            this.protocol = url.protocol;
	            this.user = url.user;
	            this.pwd = url.pwd;
	            this.host = url.host;
	            this.port = url.port;
	            this.path = url.path;
	            this.query = url.query;
	            this.hash = url.hash;
	        }
	        else if (IS_STRING) {
	            let part = url.match(uri_reg_ex);
	            //If the complete string is not matched than we are dealing with something other 
	            //than a pure URL. Thus, no object is returned. 
	            if (part[0] !== url)
	                return null;
	            this.protocol = part[1] || ((USE_LOCATION) ? location.protocol : "");
	            this.user = part[2] || "";
	            this.pwd = part[3] || "";
	            this.host = part[4] || part[5] || part[6] || ((USE_LOCATION) ? location.hostname : "");
	            this.port = parseInt(part[7]) || ((USE_LOCATION) ? parseInt(location.port) : 0);
	            this.path = part[8] || ((USE_LOCATION) ? location.pathname : "");
	            this.query = part[9] || ((USE_LOCATION) ? location.search.slice(1) : "");
	            this.hash = part[10] || ((USE_LOCATION) ? location.hash.slice(1) : "");
	        }
	        else if (IS_LOCATION && location) {
	            this.protocol = location.protocol.replace(/\:/g, "");
	            this.host = location.hostname;
	            this.port = parseInt(location.port);
	            this.path = location.pathname;
	            this.hash = location.hash.slice(1);
	            this.query = location.search.slice(1);
	            this._getQuery_();
	            if (USE_LOCATION) {
	                URL.GLOBAL = this;
	                return URL.GLOBAL;
	            }
	        }
	        this._getQuery_();
	    }
	    /**
	     * Resolves a URL relative to an original url. If the environment is NodeJS,
	     * then node_module resolution may be used if the relative path
	     * does not begin with a ./ or ../.
	     * @param URL_or_url_new
	     * @param URL_or_url_original
	     */
	    static resolveRelative(URL_or_url_new, URL_or_url_original = (URL.GLOBAL)
	        ? URL.GLOBAL
	        : (typeof document != "undefined" && typeof document.location != "undefined")
	            ? document.location.toString()
	            : null) {
	        const URL_old = new URL(URL_or_url_original), URL_new = new URL(URL_or_url_new);
	        if (!(URL_old + "") || !(URL_new + ""))
	            return null;
	        if (URL_new.path[0] != "/") {
	            let a$$1 = URL_old.path.split("/");
	            let b$$1 = URL_new.path.split("/");
	            if (b$$1[0] == "..")
	                a$$1.splice(a$$1.length - 1, 1);
	            for (let i$$1 = 0; i$$1 < b$$1.length; i$$1++) {
	                switch (b$$1[i$$1]) {
	                    case ".": a$$1.splice(a$$1.length - 1, 0);
	                    case "..":
	                        a$$1.splice(a$$1.length - 1, 1);
	                        break;
	                    default:
	                        a$$1.push(b$$1[i$$1]);
	                }
	            }
	            URL_new.path = a$$1.join("/");
	        }
	        return URL_new;
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
	        let lex = new Lexer$1(this.query);
	        const get_map = (k$$1, m$$1) => (m$$1.has(k$$1)) ? m$$1.get(k$$1) : m$$1.set(k$$1, new Map).get(k$$1);
	        let key = 0, key_val = "", class_map = get_map(key_val, map), lfv = 0;
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
	        if (lfv > 0)
	            class_map.set(key_val, lex.s(lfv));
	    }
	    setPath(path) {
	        this.path = path;
	        return new URL(this);
	    }
	    setLocation() {
	        history.replaceState({}, "replaced state", `${this}`);
	        //window.onpopstate();
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
	            str.push(`${this.path[0] == "/" || this.path[0] == "." ? "" : "/"}${this.path}`);
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
	     * Sets the data in the query string. Wick data is added after a second `?` character in the query field,
	     * and appended to the end of any existing data.
	     * @param     {object | Model | AnyModel}  data The data
	     * @param     {string}  class_name  Class name to use in query string. Defaults to root, no class
	     */
	    setData(data = null, class_name = "") {
	        if (data) {
	            let map = this.map = new Map();
	            let store = (map.has(class_name)) ? map.get(class_name) : (map.set(class_name, new Map()).get(class_name));
	            //If the data is a falsy value, delete the association.
	            for (let n$$1 in data) {
	                if (data[n$$1] !== undefined && typeof data[n$$1] !== "object")
	                    store.set(n$$1, data[n$$1]);
	                else
	                    store.delete(n$$1);
	            }
	            //set query
	            let null_class, str = "";
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
	            if (URL.GLOBAL == this)
	                this.goto();
	        }
	        else {
	            this.query = "";
	        }
	        return this;
	    }
	    /**
	     * Fetch a string value of the remote resource.
	     * Just uses path component of URL. Must be from the same origin.
	     * @param      {boolean}  [ALLOW_CACHE=true]  If `true`, the return string will be cached.
	     * If it is already cached, that will be returned instead. If `false`, a network fetch will always occur , and the result will not be cached.
	     * @return     {Promise}  A promise object that resolves to a string of the fetched value.
	     */
	    fetchText(ALLOW_CACHE = false) {
	        if (ALLOW_CACHE) {
	            let resource = URL.RC.get(this.path);
	            if (resource)
	                return new Promise((res) => {
	                    res(resource);
	                });
	        }
	        return fetchLocalText(this).then(res => (URL.RC.set(this.path, res), res));
	    }
	    /**
	     * Fetch a JSON value of the remote resource.
	     * Just uses path component of URL. Must be from the same origin.
	     * @param      {boolean}  [ALLOW_CACHE=true]  If `true`, the return string will be cached. If it is already cached,
	     * that will be returned instead. If `false`, a network fetch will always occur , and the result will not be cached.
	     * @return     {Promise}  A promise object that resolves to a string of the fetched value.
	     */
	    fetchJSON(ALLOW_CACHE = false) {
	        if (ALLOW_CACHE) {
	            let resource = URL.RC.get(this.path);
	            if (resource)
	                return new Promise((res) => {
	                    res(resource);
	                });
	        }
	        return fetchLocalJSON(this).then(res => (URL.RC.set(this.path, res), res));
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
	        return submitForm(this, form_data);
	    }
	    submitJSON(json_data, mode) {
	        return submitJSON(this, json_data, mode);
	    }
	    /**
	     * Goes to the current URL.
	     */
	    goto() {
	        return;
	        //let url = this.toString();
	        //history.pushState({}, "ignored title", url);
	        //window.onpopstate();
	        //URL.GLOBAL = this;
	    }
	    //Returns the last segment of the path
	    get file() {
	        return this.path.split("/").pop();
	    }
	    //returns the name of the file less the extension
	    get filename() {
	        return this.file.split(".").shift();
	    }
	    //Returns the all but the last segment of the path
	    get dir() {
	        return this.path.split("/").slice(0, -1).join("/") || "/";
	    }
	    get pathname() {
	        return this.path;
	    }
	    get href() {
	        return this.toString();
	    }
	    get ext() {
	        const m$$1 = this.path.match(/\.([^\.]*)$/);
	        return m$$1 ? m$$1[1] : "";
	    }
	    get search() {
	        return this.query;
	    }
	    /**
	     * True if the path is a relative path.
	     *
	     * Path must begin with `../` or `./` to be
	     * considered relative.
	     */
	    get IS_RELATIVE() {
	        return this.path.slice(0, 3) == "../" || this.path.slice(0, 2) == "./";
	    }
	}
	/**
	 * The fetched resource cache.
	 */
	URL.RC = new Map();
	/**
	 * The Default Global URL object.
	 */
	URL.GLOBAL = (typeof location != "undefined") ? new URL(location) : new URL;
	let SIMDATA = null;
	/** Replaces the fetch actions with functions that simulate network fetches. Resources are added by the user to a Map object. */
	URL.simulate = function () {
	    SIMDATA = new Map;
	    URL.prototype.fetchText = async (d$$1) => ((d$$1 = this.toString()), SIMDATA.get(d$$1)) ? SIMDATA.get(d$$1) : "";
	    URL.prototype.fetchJSON = async (d$$1) => ((d$$1 = this.toString()), SIMDATA.get(d$$1)) ? JSON.parse(SIMDATA.get(d$$1).toString()) : {};
	};
	URL.addResource = (n$$1, v$$1) => (n$$1 && v$$1 && (SIMDATA || (SIMDATA = new Map())) && SIMDATA.set(n$$1.toString(), v$$1.toString));
	let POLLYFILLED = false;
	URL.polyfill = async function () {
	    if (typeof (global) !== "undefined" && !POLLYFILLED) {
	        POLLYFILLED = true;
	        const fsr = (await import("fs")), fs = fsr.promises, path = (await import("path")), http = (await import("http")), 
	        //@ts-ignore
	        g$$1 = global;
	        URL.GLOBAL = new URL(process.cwd() + "/");
	        g$$1.document = g$$1.document || {};
	        g$$1.document.location = URL.GLOBAL;
	        g$$1.location = URL.GLOBAL;
	        const cached = URL.resolveRelative;
	        URL.resolveRelative = function (new_url, old_url) {
	            let URL_old = new URL(old_url), URL_new = new URL(new_url);
	            const first_char = URL_new.path[0];
	            if (first_char == "/") {
	                //Prevent traversal outside the CWD for security purposes.
	                URL_new.path = path.join(process.cwd(), URL_new.path);
	                return URL_new;
	            }
	            else if (!URL_new.IS_RELATIVE) {
	                //Attempt to resolve the file from the node_modules directories.
	                /**
	                 * TODO handle resolution of modules with a more general method.
	                 * See yarn Plug'n'Play: https://yarnpkg.com/features/pnp
	                 */
	                const base_path = URL_old.path.split("/").filter(s$$1 => s$$1 !== ".."), new_path = URL_new.path;
	                let i$$1 = base_path.length;
	                while (i$$1-- >= 0) {
	                    try {
	                        let search_path = "";
	                        if (base_path[i$$1] == "node_modules")
	                            search_path = path.join(base_path.slice(0, i$$1 + 1).join("/"), new_path);
	                        else
	                            search_path = path.join(base_path.slice(0, i$$1 + 1).join("/"), "node_modules", new_path);
	                        const stats = fsr.statSync(search_path);
	                        if (stats)
	                            return new URL(search_path);
	                    }
	                    catch (e$$1) {
	                        //Suppress errors - Don't really care if there is no file found. That can be handled by the consumer.
	                    }
	                }
	            }
	            return cached(URL_new, URL_old);
	        };
	        /**
	         * Global `fetch` polyfill - basic support
	         */
	        fetch = g$$1.fetch = async (url, data) => {
	            if (data.IS_CORS) { // HTTP Fetch
	                return new Promise((res, rej) => {
	                    try {
	                        http.get(url, data, req => {
	                            let body = "";
	                            req.setEncoding('utf8');
	                            req.on("data", d$$1 => {
	                                body += d$$1;
	                            });
	                            req.on("end", () => {
	                                res({
	                                    status: 200,
	                                    text: () => {
	                                        return {
	                                            then: (f$$1) => f$$1(body)
	                                        };
	                                    },
	                                    json: () => {
	                                        return {
	                                            then: (f$$1) => f$$1(JSON.stringify(body))
	                                        };
	                                    }
	                                });
	                            });
	                        });
	                    }
	                    catch (e$$1) {
	                        rej(e$$1);
	                    }
	                });
	            }
	            else { //FileSystem Fetch
	                let p$$1 = path.resolve(process.cwd(), "" + url), d$$1 = await fs.readFile(p$$1, "utf8");
	                try {
	                    return {
	                        status: 200,
	                        text: () => {
	                            return {
	                                then: (f$$1) => f$$1(d$$1)
	                            };
	                        },
	                        json: () => {
	                            return {
	                                then: (f$$1) => f$$1(JSON.parse(d$$1))
	                            };
	                        }
	                    };
	                }
	                catch (err) {
	                    throw err;
	                }
	            }
	        };
	    }
	};
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

	            traverse : function * (){
	                yield this;
	                for(const child of this.children)
	                    yield * child.traverse();
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

	    get parentElement() {
	        return this.par;
	    }

	    set data(e) { this.txt = e; }

	    get data() { return this.txt; }

	    /**
	     * Returns a string representation of the object.
	     * @param      {string}  str     Optional string passed down from calling method.
	     * @return     {string}  String representation of the object.
	     */
	    toString(off = 0) {
	        return `${this.txt}`;
	    }

	    /**
	     * Builds a real DOM HTMLTextNode node. 
	     * @param      {HTMLElement}  parent  The real html element.
	     */
	    build(parent) {
	        parent.appendChild(document.createTextNode(this.txt));
	    }

	    set type(e) {

	    }

	    get innerText() {
	        return this.toString();
	    }

	    set innerText(e) {

	    }

	}

	LinkedList.mixinTree(TextNode);


	/**
	 * A node for HTML data. 
	 * Handles the parsing of HTML strings.
	 */
	class HTMLNode {
	    set type(e) {

	    }
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
	        if (classes && typeof (classes.value) === "string")
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

	        let str = `\n${o}<${this.tag}`,
	            atr = this.attributes,
	            i = -1,
	            l = atr.length;

	        while (++i < l) {
	            let attr = atr[i];

	            if (attr.name)
	                str += ` ${attr.name}="${attr.value}"`;
	        }

	        str += ">";

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
	    createTextNode(lex, start, end) {

	        if (end) {
	            const other_lex = lex.copy();
	            other_lex.off = start - 1;
	            other_lex.tl = 1;
	            other_lex.sl = end;
	            other_lex.IWS = false;
	            other_lex.next();
	            const text_node = this.processTextNodeHook(other_lex, true);
	            if (text_node) this.addChild(text_node);
	        } else if (start <= lex.off) {
	            let other_lex = lex.copy();

	            other_lex.off = start;
	            other_lex.END = false;
	            other_lex.tl = 0;
	            other_lex.fence(lex);
	            other_lex.IWS = false;
	            other_lex.n;
	            other_lex.IWS = true;
	            //if ((other_lex.sl - other_lex.off) < 2) {
	            //No data
	            //TODO
	            //throw new Error("Unexpected end of input");
	            //} else {
	            let text_node = this.processTextNodeHook(other_lex, false);
	            if (text_node) this.addChild(text_node);
	            //}

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

	        //if (lex.ch == "/") // Void Nodes
	        //    lex.next();

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
	                                this.createTextNode(lex, start);
	                            else if ((end - start) > 0)
	                                this.createTextNode(lex, start, end);
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
	                        while (!lex.END && lex.n.ch !== ">") { }
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
	                                lex.next();

	                                SELF_CLOSING = true;

	                                //This element is self closing and does not have a body.
	                            } else {
	                                HAS_INNER_TEXT = IGNORE_TEXT_TILL_CLOSE_TAG = (await this.ignoreTillHook(this.tag, lex));
	                                OPENED = true;
	                            }

	                            //End of Open Tag
	                            lex.a(">");


	                            if (HAS_INNER_TEXT) {
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

	                                return (await this.endOfElementHook(lex, parent)) || this;
	                            }

	                            continue;
	                        } else {
	                            lex.IWS = false;
	                            //Create text node;
	                            if (HAS_INNER_TEXT) {
	                                lex.PARSE_STRING = false;
	                                if (IGNORE_TEXT_TILL_CLOSE_TAG)
	                                    this.createTextNode(lex, start);
	                                else if ((end - start) > 0) {
	                                    this.createTextNode(lex, start, end);
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
	                } else if (lex.ty == 256) { } else {
	                    HAS_INNER_TEXT = true;
	                    end = lex.off + lex.tl;
	                }
	            }

	            lex.n;
	        }

	        if (OPENED && start < lex.off) {
	            if (lex.off - start > 0) {
	                //Got here from a network import, need produce a text node;
	                this.createTextNode(lex, start);
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

	        if (typeof (lex) == "string") lex = whind(lex);

	        lex.IWS = false;

	        return await this.parseRunner(lex, false, false, null, url);
	    }

	    /******************************************* HOOKS ******************************************************************************************************************/

	    endOfElementHook() { return this; }

	    selfClosingTagHook(tag) {
	        return ["input", "br", "img", "rect"].includes(tag);
	    }

	    async ignoreTillHook(tag) {
	        // Special character escaping tags.
	        return ["script", "style", "pre"].includes(tag);
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

	    processTextNodeHook(lex, IS_INNER_HTML) {
	        if (!IS_INNER_HTML)
	            return new TextNode(lex.slice());

	        let t = lex.trim(1);

	        //if (t.string_length > 0)
	        return new TextNode(lex.slice());

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

	    get innerText() {
	        return this.innerToTextString();
	    }


	    get innerHTML() {
	        return this.innerToString();
	    }

	    set innerHTML(text) {
	        this.fch = null;

	        if (text)
	            this.parseRunner(whind(text + ""), true, true, this.par);
	    }

	    get innerText() {
	        let str = "";
	        for (let node = this.fch; node;
	            (node = this.getNextChild(node))) {
	            str += node.innerText;
	        }
	        return str;
	    }

	    set innerText(e) { }

	    get parentElement() {
	        return this.par;
	    }

	    get parentNode() {
	        return this.par;
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

	    get style() {
	        return this.getStyleObject();
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

	HTMLParser.polyfill = function () {

	    URL.polyfill();

	    if (typeof (global) !== "undefined") {
	        global.HTMLElement = HTMLNode;
	        global.TextNode = TextNode;
	        global.Text = TextNode;

	        if (!global.document)
	            global.document = {};

	        Object.assign(global.document, {

	            createElement: function (tag) {
	                let node = new HTMLElement();
	                node.tag = tag.toString().toLowerCase();
	                return node;
	            },
	            createTextNode: function (text) {
	                let node = new TextNode(text);
	                return node;
	            }
	        });
	    }



	    HTMLNode.prototype.attachShadow = function (mode, blah) {

	        if (this.shadow)
	            throw new Error(`InvalidStateError: Cannot attach a shadow DOM to an element that already has a shadow DOM`);

	        if ([
	            "article",
	            "aside",
	            "blockquote",
	            "body",
	            "div",
	            "footer",
	            "h1",
	            "h2",
	            "h3",
	            "h4",
	            "h5",
	            "h6",
	            "header",
	            "main",
	            "nav",
	            "p",
	            "section",
	            "span"
	        ].includes(this.tag)) {
	            this.shadow = new HTMLNode;
	            this.shadow.tag = "SHADOW";
	            this.shadow.parent = this;
	            return this.shadow;
	        } else {
	            throw new Error(`NotSupportedError: Cannot attach a shadow DOM to a ${this.tag || "undefined"} element`);
	        }
	    };
	    /*
	    HTMLNode.prototype.insertBefore = function(newNode, referenceNode) {
	        if (referenceNode.par == this) {
	            referenceNode.insertBefore(newNode);
	        }
	    }
	    */

	    HTMLNode.prototype.replaceNode = function (newNode, oldNode) {
	        if (oldNode.par == this) {
	            oldNode.insertBefore(newNode);
	            oldNode.parent = null;
	        }
	        return newNode;
	    };

	    HTMLNode.prototype.replaceChild = function (newNode, oldNode) {
	        if (oldNode.par == this) {
	            oldNode.insertBefore(newNode);
	            oldNode.parent = null;
	        }
	        return newNode;
	    };

	    HTMLNode.prototype.hasChildNodes = function () {
	        return !!this.fch;
	    };

	    HTMLNode.prototype.previousSibling = function () {
	        return this.pre;
	    };

	    HTMLNode.prototype.nextSibling = function () {
	        return this.nxt;
	    };

	    HTMLNode.prototype.children = function () {
	        return new Proxy(this, {
	            get: function (obj, prop) {

	                if (!isNaN(prop)) {
	                    console.log("ASDASDA");
	                    return LinkedList.children.call(obj).filter(e => e instanceof HTMLNode)[prop];
	                }

	                if (prop == "length") {
	                    return this.noc;
	                }
	            }
	        });
	    };


	    HTMLNode.prototype.childNodes = function () {
	        return new Proxy(this, {
	            get: function (obj, prop) {

	                if (!isNaN(prop)) {
	                    return obj.children[prop];
	                }

	                if (prop == "length") {
	                    return this.noc;
	                }
	            }
	        });
	    };

	    HTMLNode.prototype.getStyleObject = function () {
	        return {};
	    };

	    HTMLNode.prototype.addEventListener = function (event, func) {
	        event = event + "";
	        if (!this.__events__)
	            this.__events__ = new Map();

	        if (!this.__events__.has(event))
	            this.__events__.set(event, new Set);

	        this.__events__.get(event).add(func);
	    };

	    HTMLNode.prototype.removeEventListener = function (event, func) {
	        event = event + "";
	        if (!this.__events__) return;
	        if (this.__events__.has(event))
	            this.__events__.get(event).delete(func);
	    };

	    HTMLNode.prototype.runEvent = function (event_name, event_object) {

	        if (this.__events__ && this.__events__.has(event_name + ""))
	            for (const funct of this.__events__.get(event_name + "").values())
	                funct(event_object);
	    };

	    HTMLNode.prototype.contains = function (otherNode) {
	        let node = otherNode;
	        while (node.par) {
	            if (node.par == this)
	                return true;
	            node = node.par;
	        }
	        return false;
	    };

	    HTMLNode.prototype.appendChild = function (child) {
	        this.addChild(child);
	    };

	    HTMLNode.prototype.getAttribute = function (name) {
	        let attr = this.getAttrib(name);
	        if (attr)
	            return attr.value;
	        return null;
	    };

	    HTMLNode.prototype.setAttribute = function (name, value) {
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

	return exports;

}({}));
