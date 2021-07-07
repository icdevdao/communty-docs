# Installing an mdbook on the Internet Computer

[mdBook](https://github.com/rust-lang/mdBook) is a utility to create modern online books from Markdown files.

This website is a mdBook website! It uses Markdown to generate the content and lives on the Internet Computer.

In this tutorial we will show you how to:

1. Install mdBook locally
2. Deploy your first mdBook onto a local replica
3. Deploy your first mdBook to the production Internet Computer network

## Install mdBook Locally

If you have your Rust and Cargo development environment already set up, installing `mdBook` is as easy as using Cargo:

```
cargo install mdbook
```

## Deploy your first mdBook onto a local replica

First, create a new `dfx` project `mymdbook`

```
dfx new mymdbook
```

`dfx` will then auto-generate the requisite files for your new dfx project:
```
% dfx new mymdbook
Fetching manifest https://sdk.dfinity.org/manifest.json
Creating new project "mymdbook"...
CREATE       mymdbook/src/mymdbook_assets/assets/sample-asset.txt (24B)...
CREATE       mymdbook/src/mymdbook/main.mo (107B)...
CREATE       mymdbook/dfx.json (478B)...
CREATE       mymdbook/.gitignore (165B)...
CREATE       mymdbook/README.md (1.16KB)...
CREATE       mymdbook/src/mymdbook_assets/src/index.js (521B)...
CREATE       mymdbook/src/mymdbook_assets/src/index.html (538B)...
CREATE       mymdbook/src/mymdbook_assets/assets/logo.png (24.80KB)...
CREATE       mymdbook/src/mymdbook_assets/assets/main.css (484B)...
CREATE       mymdbook/package.json (479B)...
CREATE       mymdbook/webpack.config.js (2.92KB)...
⠉ Installing node dependencies...
  Done.
Creating git repository...

===============================================================================
        Welcome to the internet computer developer community!
                        You're using dfx 0.7.2

            ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄                ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
          ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄          ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
        ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄      ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
       ▄▄▄▄▄▄▄▄▄▄▀▀▀▀▀▄▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄▄▀▀▀▀▀▀▄▄▄▄▄▄▄▄▄▄
      ▄▄▄▄▄▄▄▄▀         ▀▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▀         ▀▄▄▄▄▄▄▄▄▄
     ▄▄▄▄▄▄▄▄▀            ▀▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▀             ▄▄▄▄▄▄▄▄
     ▄▄▄▄▄▄▄▄               ▀▄▄▄▄▄▄▄▄▄▄▄▄▀                ▄▄▄▄▄▄▄
     ▄▄▄▄▄▄▄▄                ▄▄▄▄▄▄▄▄▄▄▄▄                 ▄▄▄▄▄▄▄
     ▄▄▄▄▄▄▄▄               ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄              ▄▄▄▄▄▄▄▄
      ▄▄▄▄▄▄▄▄           ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄          ▄▄▄▄▄▄▄▄▀
      ▀▄▄▄▄▄▄▄▄▄▄     ▄▄▄▄▄▄▄▄▄▄▄▄▀ ▀▄▄▄▄▄▄▄▄▄▄▄▄    ▄▄▄▄▄▄▄▄▄▄▄
       ▀▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▀     ▀▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▀
         ▀▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▀         ▀▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
           ▀▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▀▀             ▀▀▄▄▄▄▄▄▄▄▄▄▄▄▄▄▀
              ▀▀▀▀▀▀▀▀▀▀▀                    ▀▀▀▀▀▀▀▀▀▀▀



To learn more before you start coding, see the documentation available online:

- Quick Start: https://sdk.dfinity.org/docs/quickstart/quickstart-intro.html
- SDK Developer Tools: https://sdk.dfinity.org/docs/developers-guide/sdk-guide.html
- Motoko Language Guide: https://sdk.dfinity.org/docs/language-guide/motoko.html
- Motoko Quick Reference: https://sdk.dfinity.org/docs/language-guide/language-manual.html

If you want to work on programs right away, try the following commands to get started:

    cd mymdbook
    dfx help
    dfx new --help

===============================================================================
```

Change into your `mymdbook` directory and initialize the `mdbook`:

```
% cd mymdbook
% mdbook init

Do you want a .gitignore to be created? (y/n)
n
What title would you like to give the book?
mymdbook
[INFO] (mdbook::book::init): Creating a new book with stub content

All done, no errors...
```

You will not need the `dfx` generated Motoko or asset canister code for this tutorial, feel free to delete those

```
rm -rf src/mymdbook/
```

Delete all the contents in your `dfx.json` and create an entry for your `mdbook`:

```
{
  "canisters": {
      "book": {
          "type": "assets",
          "source": ["book"]
      }
  }
}
```

Build your `mdbook`:

```
% mdbook build
[INFO] (mdbook::book): Book building has started
[INFO] (mdbook::book): Running the html backend
```

Ensure that you have a replica running locally:

```
dfx start --background
```

Then `dfx deploy`!:

```
% dfx deploy
Creating a wallet canister on the local network.
The wallet canister on the "local" network for user "default" is "r7inp-6aaaa-aaaaa-aaabq-cai"
Deploying all canisters.
Creating canisters...
Creating canister "book"...
"book" canister created with canister id: "rkp4c-7iaaa-aaaaa-aaaca-cai"
Building canisters...
Building frontend...
Installing canisters...
Creating UI canister on the local network.
The UI canister on the "local" network is "rno2w-sqaaa-aaaaa-aaacq-cai"
Installing code for canister book, with canister_id rkp4c-7iaaa-aaaaa-aaaca-cai
Authorizing our identity (default) to the asset canister...
Uploading assets to asset canister...
  /mark.min.js 1/1 (17320 bytes)
  /mark.min.js (gzip) 1/1 (5950 bytes)
  /searcher.js 1/1 (18474 bytes)
  /searcher.js (gzip) 1/1 (5082 bytes)
  /highlight.css 1/1 (1215 bytes)
  /highlight.css (gzip) 1/1 (575 bytes)
  /index.html 1/1 (8405 bytes)
  /index.html (gzip) 1/1 (2125 bytes)
  /ayu-highlight.css 1/1 (947 bytes)
  /ayu-highlight.css (gzip) 1/1 (440 bytes)
  /FontAwesome/css/font-awesome.css 1/1 (31000 bytes)
  /FontAwesome/css/font-awesome.css (gzip) 1/1 (6995 bytes)
  /FontAwesome/fonts/fontawesome-webfont.svg 1/1 (444379 bytes)
  /FontAwesome/fonts/FontAwesome.ttf 1/1 (165548 bytes)
  /FontAwesome/fonts/fontawesome-webfont.woff2 1/1 (77160 bytes)
  /FontAwesome/fonts/fontawesome-webfont.ttf 1/1 (165548 bytes)
  /FontAwesome/fonts/fontawesome-webfont.woff 1/1 (98024 bytes)
  /FontAwesome/fonts/fontawesome-webfont.eot 1/1 (165742 bytes)
  /css/variables.css 1/1 (5944 bytes)
  /css/variables.css (gzip) 1/1 (1156 bytes)
  /css/general.css 1/1 (3915 bytes)
  /css/general.css (gzip) 1/1 (1522 bytes)
  /css/print.css 1/1 (757 bytes)
  /css/print.css (gzip) 1/1 (400 bytes)
  /css/chrome.css 1/1 (9324 bytes)
  /css/chrome.css (gzip) 1/1 (2351 bytes)
  /searchindex.js 1/1 (1377 bytes)
  /searchindex.js (gzip) 1/1 (444 bytes)
  /clipboard.min.js 1/1 (10754 bytes)
  /clipboard.min.js (gzip) 1/1 (3353 bytes)
  /404.html 1/1 (8538 bytes)
  /404.html (gzip) 1/1 (2206 bytes)
  /print.html 1/1 (8615 bytes)
  /print.html (gzip) 1/1 (2188 bytes)
  /favicon.png 1/1 (5679 bytes)
  /highlight.js 1/1 (135394 bytes)
  /highlight.js (gzip) 1/1 (46066 bytes)
  /tomorrow-night.css 1/1 (1741 bytes)
  /tomorrow-night.css (gzip) 1/1 (676 bytes)
  /chapter_1.html 1/1 (8420 bytes)
  /chapter_1.html (gzip) 1/1 (2132 bytes)
  /mymdbook/main.mo 1/1 (107 bytes)
  /elasticlunr.min.js 1/1 (18051 bytes)
  /elasticlunr.min.js (gzip) 1/1 (5510 bytes)
  /fonts/SOURCE-CODE-PRO-LICENSE.txt 1/1 (4528 bytes)
  /fonts/SOURCE-CODE-PRO-LICENSE.txt (gzip) 1/1 (2009 bytes)
  /fonts/open-sans-v17-all-charsets-800italic.woff2 1/1 (40812 bytes)
  /fonts/open-sans-v17-all-charsets-800.woff2 1/1 (44536 bytes)
  /fonts/OPEN-SANS-LICENSE.txt 1/1 (11358 bytes)
  /fonts/OPEN-SANS-LICENSE.txt (gzip) 1/1 (3972 bytes)
  /fonts/open-sans-v17-all-charsets-regular.woff2 1/1 (43236 bytes)
  /fonts/open-sans-v17-all-charsets-300.woff2 1/1 (44352 bytes)
  /fonts/open-sans-v17-all-charsets-600italic.woff2 1/1 (42120 bytes)
  /fonts/open-sans-v17-all-charsets-700italic.woff2 1/1 (40800 bytes)
  /fonts/open-sans-v17-all-charsets-300italic.woff2 1/1 (40656 bytes)
  /fonts/open-sans-v17-all-charsets-700.woff2 1/1 (44988 bytes)
  /fonts/open-sans-v17-all-charsets-600.woff2 1/1 (44936 bytes)
  /fonts/source-code-pro-v11-all-charsets-500.woff2 1/1 (59140 bytes)
  /fonts/open-sans-v17-all-charsets-italic.woff2 1/1 (41076 bytes)
  /fonts/fonts.css 1/1 (3620 bytes)
  /fonts/fonts.css (gzip) 1/1 (568 bytes)
  /book.js 1/1 (24328 bytes)
  /book.js (gzip) 1/1 (5572 bytes)
  /favicon.svg 1/1 (1835 bytes)
  /searchindex.json 1/1 (1346 bytes)
Deployed canisters.
```

Navigate to [http://rkp4c-7iaaa-aaaaa-aaaca-cai.localhost:8000/](http://rkp4c-7iaaa-aaaaa-aaaca-cai.localhost:8000/) (replacing the canister URL with the one that your console reported) and you should be able to see your mdbook! Huzzah!

## Deploy your first mdBook to the production Internet Computer network
If you've gone through the steps required to create your cycles wallet and to top it up, deploying will be as easy as:

```
dfx deploy --network ic
```