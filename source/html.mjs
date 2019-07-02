import whind from "@candlefw/whind";
import URL from "@candlefw/url";
import ll from "@candlefw/ll";

/** NODE TYPE IDENTIFIERS **/
const HTML = 0;
const TEXT = 1;
const offset = "    ";

// Pollyfill of HTMLElement classList
function classList(this_arg, list) {
    Object.assign(list, {
        add: (name) => {
            let attrib = this_arg.getAttrib("class")
            if (attrib) {
                attrib.value += " " + name;
                list.push(name);
            } else {
                this_arg.setAttribute("class", name);
            }
        }
    })
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

    set data(e) { this.txt = e }

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

ll.mixinTree(TextNode);


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
                            while (!lex.END && lex.n.ch !== ">") {};
                            lex.a(">");
                            lex.IWS = false;
                            continue;
                        }

                        if (!IGNORE_TEXT_TILL_CLOSE_TAG) {

                            //Open tag
                            if (!OPENED) {
                                let URL = false;
                                this.DTD = false;
                                this.attributes.length = 0;

                                //Expect tag name 
                                this.tag = lex.n.tx.toLowerCase();
                                


                                lex.PARSE_STRING = false;
                                URL = this.parseOpenTag(lex.n, false, old_url);
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

                                if (URL) {

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

    get parentElement(){
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
}

ll.mixinTree(HTMLNode);


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

export { HTMLNode, HTMLParser, TextNode };

HTMLParser.polyfill = function() {
    URL.polyfill();

    if (typeof(global) !== "undefined") {
        global.HTMLElement = HTMLNode;
        global.TextNode = TextNode;
        global.Text = TextNode;
        global.document = {};

        if (!global.document)
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
        })
    }



    HTMLNode.prototype.attachShadow = function(mode, blah) {

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
            ].includes(this.tag)) 
        {
            this.shadow = new HTMLNode
            this.shadow.tag = "SHADOW"
            this.shadow.parent = this;
            return this.shadow;
        } else {
            throw new Error(`NotSupportedError: Cannot attach a shadow DOM to a ${this.tag || "undefined"} element`);
        }
    }
    /*
    HTMLNode.prototype.insertBefore = function(newNode, referenceNode) {
        if (referenceNode.par == this) {
            referenceNode.insertBefore(newNode);
        }
    }
    */

     HTMLNode.prototype.replaceNode = function(newNode, oldNode) {
        if(oldNode.par == this){
            oldNode.insertBefore(newNode);
            oldNode.parent = null;
        }
        return newNode;
    }

    HTMLNode.prototype.hasChildNodes = function() {
        return !!this.fch;
    }


    HTMLNode.prototype.parentNode = function() {
        return this.par;

    }

    HTMLNode.prototype.previousSibling = function() {
        return this.pre;
    }

    HTMLNode.prototype.nextSibling = function() {
        return this.nxt;
    }

    HTMLNode.prototype.childNodes = function() {
        return new Proxy(this, {
            get: function(obj, prop) {

                if (!isNaN(prop)) {
                    return obj.children[prop];
                }

                if (prop == "length") {
                    return this.noc;
                }
            }
        })
    }



    HTMLNode.prototype.contains = function(otherNode) {
        let node = otherNode
        while (node.par) {
            if (node.par == this)
                return true
            node = node.par;
        }
        return false;
    }

    HTMLNode.prototype.appendChild = function(child) {
        this.addChild(child);
    }

    HTMLNode.prototype.getAttribute = function(name) {
        let attr = this.getAttrib(name)
        if (attr)
            return attr.value;
        return null;
    }

    HTMLNode.prototype.setAttribute = function(name, value) {
        let attr = this.getAttrib(name)
        if (attr)
            attr.value = value;
        else
            this.attributes.push({ name, value });
    }
}

export default HTMLParser;
