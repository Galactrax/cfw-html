import whind from "@candlefw/whind";
import URL from "@candlefw/url";
import ll from "@candlefw/ll";

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
            if (attrib.name == prop && !attrib.IGNORE) return attrib;
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

        str += this.innerToString(off+1);

        return str + `${o}</${this.tag}>\n`;
    }

    innerToString(off){
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
                        while (!lex.END && lex.n.ch !== ">") {};
                        lex.a(">");
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


                            URL = this.parseOpenTag(lex.n, false, old_url);
                            start = lex.pos + 1;
                            lex.IWS = false;
                            if (lex.ch == "/") lex.n;
                            lex.a(">");


                            OPENED = true;

                            HAS_INNER_TEXT = IGNORE_TEXT_TILL_CLOSE_TAG = this.ignoreTillHook(this.tag);

                            if (URL) {

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

    processAttributeHook(name, lex) { return {IGNORE:false, name, value: lex.slice() }; }
    
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

export default HTMLParser;
