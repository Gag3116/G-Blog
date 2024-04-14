# Markdown Feature Showcase

This document demonstrates various Markdown features that can be rendered by a Markdown compiler.

## Text Formatting
Here are some basic text formatting examples:

- **Bold Text**: **Markdown allows bold formatting**
- *Italic Text*: *You can also make text italic*
- ~~Strikethrough~~: ~~Text with strikethrough~~

## Lists

### Unordered List
- Item 1
- Item 2
    - Nested Item 2a
    - Nested Item 2b

### Ordered List
1. First Item
2. Second Item
    1. Nested Item 1
    2. Nested Item 2

## Tables

| Syntax      | Description |
| ----------- | ----------- |
| Header      | Title       |
| Paragraph   | Text        |

## Code Blocks

Here is an example of `inline code`.

```html
<template>
    <div>
        <h1>{{ message }}</h1>
        <button @click="reverseMessage">Reverse Message</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                message: 'Hello, Vue!'
            };
        },
        methods: {
            reverseMessage() {
                this.message = this.message.split('').reverse().join('');
            }
        }
    };
</script>
```

## Blockquotes

> Blockquotes can contain other Markdown elements, including headers, lists, and code blocks.

## Hyperlinks

Visit [OpenAI](https://www.openai.com) for more information.

## Images

![Markdown Logo](https://upload.wikimedia.org/wikipedia/commons/4/48/Markdown-mark.svg)

Thank you for viewing this Markdown showcase!
