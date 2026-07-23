---
title: "10 Most Common JSON Syntax Errors and How to Fix Them"
description: "Learn how to identify and resolve common JSON syntax errors like trailing commas, unquoted keys, single quote misuse, and illegal control characters."
pubDate: 2026-07-23
author: "JSON Workshop Team"
category: "Debugging Guides"
readTime: "7 min read"
---

## Introduction

JSON (JavaScript Object Notation) is strict by design. Unlike HTML or JavaScript, which often fail silently or attempt to auto-correct syntax mistakes, a JSON parser will throw an immediate runtime error if even a single character violates the RFC 8259 specification.

Whether you are debugging a REST API response, writing a configuration file, or importing database fixtures, here are the **10 most common JSON syntax errors** and how to fix them quickly.

---

## 1. Trailing Commas in Objects or Arrays

### The Error
A trailing comma occurs when a comma is left after the final key-value pair in an object or after the last element in an array.

❌ **Incorrect:**
```json
{
  "hostname": "localhost",
  "port": 5432,
}
```

### The Fix
Remove the comma after the last property.

✅ **Correct:**
```json
{
  "hostname": "localhost",
  "port": 5432
}
```

---

## 2. Using Single Quotes Instead of Double Quotes

### The Error
In JavaScript, single quotes and double quotes are interchangeable for strings. In standard JSON, **only double quotes are valid**.

❌ **Incorrect:**
```json
{
  'title': 'Senior Developer',
  'department': 'Engineering'
}
```

### The Fix
Replace all single quotes around keys and values with double quotes.

✅ **Correct:**
```json
{
  "title": "Senior Developer",
  "department": "Engineering"
}
```

---

## 3. Unquoted Object Keys

### The Error
Writing object keys without quotes is common in JavaScript objects, but completely invalid in JSON.

❌ **Incorrect:**
```json
{
  name: "JSON Workshop",
  version: 1.0
}
```

### The Fix
Enclose every key in double quotation marks.

✅ **Correct:**
```json
{
  "name": "JSON Workshop",
  "version": 1.0
}
```

---

## 4. Including Comments Inside JSON

### The Error
Standard JSON specification does not support single-line (`//`) or multi-line (`/* */`) comments. Including them will crash standard JSON parsers like `JSON.parse()`.

❌ **Incorrect:**
```json
{
  // Database configuration
  "db_host": "127.0.0.1"
}
```

### The Fix
Remove comments entirely, or use JSON5 / JSONC if your framework explicitly supports commented JSON formats.

✅ **Correct:**
```json
{
  "db_host": "127.0.0.1"
}
```

---

## 5. Unescaped Double Quotes Inside String Values

### The Error
If a string value contains double quotes without backslash escaping, the parser assumes the string has ended prematurely.

❌ **Incorrect:**
```json
{
  "quote": "He said, "Hello World" before exiting."
}
```

### The Fix
Escape internal quotes with a backslash `\"`.

✅ **Correct:**
```json
{
  "quote": "He said, \"Hello World\" before exiting."
}
```

---

## 6. Invalid Number Formatting

### The Error
Leading zeros, fractions without digits, or hexadecimal values are not permitted in JSON numbers.

❌ **Incorrect:**
```json
{
  "code": 007,
  "price": .99,
  "hex": 0xFF
}
```

### The Fix
Format numbers as standard decimals or integers.

✅ **Correct:**
```json
{
  "code": 7,
  "price": 0.99,
  "hex": 255
}
```

---

## 7. Using `undefined` or Functions as Values

### The Error
JSON only accepts Strings, Numbers, Booleans, Null, Objects, and Arrays. Functions, `undefined`, Symbols, and Date objects cannot be serialized directly.

❌ **Incorrect:**
```json
{
  "status": undefined,
  "handler": function() {}
}
```

### The Fix
Use `null` for missing values, or format special types as strings.

✅ **Correct:**
```json
{
  "status": null,
  "handler": "disabled"
}
```

---

## 8. Misplaced Brackets or Braces

### The Error
Mismatched or missing closing brackets `}` or `]` will break the syntax structure of nested data.

❌ **Incorrect:**
```json
{
  "users": [
    {"name": "Alice"},
    {"name": "Bob"}
  
```

### The Fix
Ensure every opening brace `{` or `[` has a matching closing brace `}` or `]`.

✅ **Correct:**
```json
{
  "users": [
    {"name": "Alice"},
    {"name": "Bob"}
  ]
}
```

---

## 9. Raw Newline Characters Inside Strings

### The Error
Literal multiline breaks inside quotes are not allowed in JSON string literals.

❌ **Incorrect:**
```json
{
  "bio": "Developer by day.
Gamer by night."
}
```

### The Fix
Use the escape sequence `\n` to represent multiline strings.

✅ **Correct:**
```json
{
  "bio": "Developer by day.\nGamer by night."
}
```

---

## 10. NaN or Infinity Values

### The Error
Special floating-point values like `NaN`, `Infinity`, or `-Infinity` are not recognized in JSON syntax.

❌ **Incorrect:**
```json
{
  "score": NaN,
  "limit": Infinity
}
```

### The Fix
Represent missing calculation values as `null` or numerical strings.

✅ **Correct:**
```json
{
  "score": null,
  "limit": "Infinity"
}
```

---

## How to Debug JSON Errors Instantly

Instead of hunting down invisible trailing commas manually, paste your data into our free [JSON Formatter & Validator](https://jsonworkshop.com). The editor instantly highlights syntax error lines and displays exact character coordinates in real-time.
