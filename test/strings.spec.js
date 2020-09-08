import html from "@candlefw/html";

html.server();

//"Avoids parsing of strings within elements. E.G <div> \"<div>\" </div>"

const domA = await html(`<script> "<miv>" <a><a/></script>`);
const domB = await html(`<pre> "<miv>" <a><a/></pre>`);
const domC = await html(`<style> "<miv>" <a><a/></style>`);

assert(domA.tag == "script");
assert(domA.children.length == 1);
assert(domA.fch.data == ' "<miv>" <a><a/>');

assert(domB.tag == "pre");
assert(domB.children.length == 1);
assert(domB.fch.data == ' "<miv>" <a><a/>');

assert(domC.tag == "style");
assert(domC.children.length == 1);
assert(domC.fch.data == ' "<miv>" <a><a/>');