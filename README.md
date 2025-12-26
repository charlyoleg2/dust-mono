dust-mono
=========

Presentation
------------

This mono-repo contains the following npm-packages:
- dust-lib : the universal *typescript* library providing the core functions
- dust-app : the *svelte* component library (depending on *dust-lib*)
- dust-ui : the *astro-starlight* static website (depending on *dist-app*)
- dust-uis : a *nodejs-express* server serving locally *dust-ui*
- dust-cli : the CLI-tool exposing the same functionalities for the console (depending on *dist-lib*)


Links
-----

- [sources](https://github.com/charlyoleg2/dust-mono)
- [webui](https://charlyoleg2.github.io/dust-mono/)


Usage of dust-cli
-----------------

```shell
npx dust-cli -h
npx dust-uis
```


Development of dust
-------------------

```shell
git clone https://github.com/charlyoleg2/dust-mono.git
cd dust-mono
npm install
npm run ci
npm run preview
```


Upgrade dependencies
--------------------

```bash
npm outdated
npm update --save
git commit -am 'npm update --save'
```
or
```bash
npx npm-check-updates
npx npm-check-updates --upgrade
npm install
git commit -am 'npx npm-check-updates --upgrade'
```


Publish a new release
---------------------

```bash
npm run versions
git commit -am 'increment sub-package versions'
npm version patch
git push
git push origin v0.5.1
```


