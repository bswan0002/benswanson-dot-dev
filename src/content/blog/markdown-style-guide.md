---
title: "Markdown Style Guide"
description: "Here is a sample of some basic Markdown syntax that can be used when writing Markdown content in Astro."
pubDate: "Jul 01 2022"
heroImage: "/blog-placeholder-1.jpg"
---

Here is a sample of some basic Markdown syntax that can be used when writing Markdown content in Astro.

## Table of Contents <!-- omit from toc -->

- [Headings](#headings)
- [Paragraph](#paragraph)
- [Images](#images)
  - [Syntax](#syntax)
  - [Output](#output)
- [Blockquotes](#blockquotes)
  - [Blockquote without attribution](#blockquote-without-attribution)
  - [Blockquote with attribution](#blockquote-with-attribution)
- [Tables](#tables)
- [Code Blocks](#code-blocks)
- [Lists](#lists)
  - [Ordered List](#ordered-list)
  - [Unordered List](#unordered-list)
  - [Nested list](#nested-list)
- [Other Elements — abbr, sub, sup, kbd, mark](#other-elements--abbr-sub-sup-kbd-mark)

## Headings

The following HTML `<h1>`-`<h6>` elements represent six levels of section headings. `<h1>` is the highest section level while `<h6>` is the lowest.

# H1 <!-- omit from toc -->

## H2 <!-- omit from toc -->

### H3 <!-- omit from toc -->

#### H4 <!-- omit from toc -->

##### H5 <!-- omit from toc -->

###### H6 <!-- omit from toc -->

## Paragraph

Xerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum, voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma dolestendit peritin re plis aut quas inctum laceat est volestemque commosa as cus endigna tectur, offic to cor sequas etum rerum idem sintibus eiur? Quianimin porecus evelectur, cum que nis nust voloribus ratem aut omnimi, sitatur? Quiatem. Nam, omnis sum am facea corem alique molestrunt et eos evelece arcillit ut aut eos eos nus, sin conecerem erum fuga. Ri oditatquam, ad quibus unda veliamenimin cusam et facea ipsamus es exerum sitate dolores editium rerore eost, temped molorro ratiae volorro te reribus dolorer sperchicium faceata tiustia prat.

Itatur? Quiatae cullecum rem ent aut odis in re eossequodi nonsequ idebis ne sapicia is sinveli squiatum, core et que aut hariosam ex eat.

## Images

#### Syntax

```markdown
![Alt text](./full/or/relative/path/of/image)
```

#### Output

![blog placeholder](/blog-placeholder-about.jpg)

## Blockquotes

The blockquote element represents content that is quoted from another source, optionally with a citation which must be within a `footer` or `cite` element, and optionally with in-line changes such as annotations and abbreviations.

### Blockquote without attribution

#### Syntax <!-- omit from toc -->

```markdown
> Tiam, ad mint andaepu dandae nostion secatur sequo quae.  
> **Note** that you can use _Markdown syntax_ within a blockquote.
```

#### Output <!-- omit from toc -->

> Tiam, ad mint andaepu dandae nostion secatur sequo quae.  
> **Note** that you can use _Markdown syntax_ within a blockquote.

### Blockquote with attribution

#### Syntax <!-- omit from toc -->

```markdown
> Don't communicate by sharing memory, share memory by communicating.<br>
> — <cite>Rob Pike[^1]</cite>
```

#### Output <!-- omit from toc -->

> Don't communicate by sharing memory, share memory by communicating.<br>
> — <cite>Rob Pike[^1]</cite>

[^1]: The above quote is excerpted from Rob Pike's [talk](https://www.youtube.com/watch?v=PAAkCSZUG1c) during Gopherfest, November 18, 2015.

## Tables

#### Syntax <!-- omit from toc -->

```markdown
| Italics   | Bold     | Code   |
| --------- | -------- | ------ |
| _italics_ | **bold** | `code` |
```

#### Output <!-- omit from toc -->

| Italics   | Bold     | Code   |
| --------- | -------- | ------ |
| _italics_ | **bold** | `code` |

## Code Blocks

#### Syntax <!-- omit from toc -->

we can use 3 backticks ``` in new line and write snippet and close with 3 backticks on new line and to highlight language specific syntac, write one word of language name after first 3 backticks, for eg. html, javascript, css, markdown, typescript, txt, bash

````markdown
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Example HTML5 Document</title>
  </head>
  <body>
    <p>Test</p>
  </body>
</html>
```
````

#### Output <!-- omit from toc -->

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Example HTML5 Document</title>
  </head>
  <body>
    <p>Test</p>
  </body>
</html>
```

## [Lists](#lists)

### Ordered List

#### Syntax <!-- omit from toc -->

```markdown
1. First item
2. Second item
3. Third item
```

#### Output <!-- omit from toc -->

1. First item
2. Second item
3. Third item

### Unordered List

#### Syntax <!-- omit from toc -->

```markdown
- List item
- Another item
- And another item
```

#### Output <!-- omit from toc -->

- List item
- Another item
- And another item

### Nested list

#### Syntax <!-- omit from toc -->

```markdown
- Fruit
  - Apple
  - Orange
  - Banana
- Dairy
  - Milk
  - Cheese
```

#### Output <!-- omit from toc -->

- Fruit
  - Apple
  - Orange
  - Banana
- Dairy
  - Milk
  - Cheese

## Other Elements — abbr, sub, sup, kbd, mark

#### Syntax <!-- omit from toc -->

```markdown
<abbr title="Graphics Interchange Format">GIF</abbr> is a bitmap image format.

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

Press <kbd><kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Delete</kbd></kbd> to end the session.

Most <mark>salamanders</mark> are nocturnal, and hunt for insects, worms, and other small creatures.
```

#### Output <!-- omit from toc -->

<abbr title="Graphics Interchange Format">GIF</abbr> is a bitmap image format.

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

Press <kbd><kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Delete</kbd></kbd> to end the session.

Most <mark>salamanders</mark> are nocturnal, and hunt for insects, worms, and other small creatures.
