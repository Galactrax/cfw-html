import html from "@candlefw/html";

//Fill in required DOM objects needed by html
html.server();

const og = html(
    `<html type="truetype">
        <head screen="true">
            <!-- test -->
            <style>
                a{color:red}
            </style>
        </head>
        <script>sthis</script>
        <body>
            thisis some of my text
            <app>sdfsaf 
                <template>
                    this is my inner template.
                </template>
            </app>
        </body>
    </html>`
);

assert(og.tag == "html");
assert(og.children.length == 3);
assert(og.children[0].tag == "head");
assert(og.children[1].tag == "script");
assert(og.children[1].children.length == 1);
assert(og.children[1].children[0] == "sthis");
assert(og.children[2].tag == "body");


const rendered_string = await html(
    `<!DOCTYPE html><html type="truetype">
<head screen="true">
<!-- test -->
<style>
a{color:red}
</style>
</head>
<script> this </script>
<body>
This is some of my text
<app> sdfsaf 
<template>
    this is my inner template.
</template>
</app>
</body>
</html>`
).toString();

const expected_string =
    `
<html type="truetype">
    <head screen="true">
        <style>
a{color:red}
        </style>
    </head>

    <script> this     </script>

    <body>
This is some of my text
        <app> sdfsaf 
            <template> this is my inner template.            </template>
        </app>
    </body>
</html>
`;

assert(rendered_string == expected_string);
