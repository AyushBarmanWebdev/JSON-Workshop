---
title: "What is JSON? The Ultimate Guide to JavaScript Object Notation"
description: "Discover what JSON is, how its syntax works, data types supported, real-world examples, and best practices for modern web development."
pubDate: 2026-07-23
author: "JSON Workshop Team"
category: "JSON Basics"
readTime: "6 min read"
---

## Introduction to JSON

**JavaScript Object Notation (JSON)** is a lightweight, text-based, language-independent data-interchange format. Despite its origin in JavaScript, JSON is natively supported by virtually every modern programming language including Python, Java, C#, Go, PHP, and Ruby.

JSON has become the de facto standard for web APIs, configuration files, document-oriented databases (such as MongoDB), and client-server network payload communication.

---

## Why JSON Replaced XML in Web APIs

Before JSON became ubiquitous, **XML (Extensible Markup Language)** was the primary format for data transfer over the internet. However, XML suffered from several major drawbacks:

1. **Verbose Syntax:** Opening and closing tags in XML make payloads significantly larger in byte size.
2. **Parsing Overhead:** XML parsing requires DOM or SAX parsers, which are computationally heavier than native JSON parsing.
3. **Complex Data Structures:** Representing simple key-value pairs or arrays in XML requires custom tag definitions and attributes.

JSON solved these issues by providing a minimal, clean, human-readable structural format that maps directly to object structures in almost all modern programming languages.

---

## Core JSON Syntax Rules

To create valid JSON, you must strictly follow six syntax rules defined by **RFC 8259**:

1. **Data is represented in key/value pairs:** Each pair consists of a field name followed by a colon `:` and a valid JSON value.
2. **Keys must be enclosed in double quotes:** Unlike standard JavaScript objects where unquoted keys are allowed, JSON keys **must** use double quotes (`"key"`).
3. **Strings must use double quotes:** Single quotes (`'value'`) are invalid in standard JSON.
4. **Data elements are separated by commas:** Commas separate property pairs inside objects and items inside arrays.
5. **No trailing commas allowed:** A comma after the final key-value pair in an object or array will cause a syntax validation error.
6. **Curly braces `{}` hold objects; square brackets `[]` hold arrays.**

---

## Supported JSON Data Types

JSON supports six primitive and structured data types:

| Data Type | Description | Example |
| :--- | :--- | :--- |
| **String** | Unicode characters wrapped in double quotes | `"name": "JSON Workshop"` |
| **Number** | Integer or floating-point number (no quotes) | `"port": 8080`, `"pi": 3.14159` |
| **Boolean** | Literal `true` or `false` in lowercase | `"active": true` |
| **Null** | Represents empty or missing value | `"middleName": null` |
| **Object** | Unordered collection of key-value pairs | `{"city": "New York", "zip": "10001"}` |
| **Array** | Ordered list of zero or more values | `["apple", "banana", "cherry"]` |

> **Note:** Functions, dates, undefined, and binary data types are **not** natively supported by the standard JSON specification.

---

## Example of a Valid JSON Structure

Here is a practical example of a complex, nested JSON object representing a user profile with order history:

```json
{
  "userId": 102948,
  "username": "dev_alex",
  "isVerified": true,
  "accountDetails": {
    "email": "alex@example.com",
    "joinedDate": "2026-01-15",
    "subscriptionTier": "Premium"
  },
  "roles": ["developer", "administrator"],
  "recentOrders": [
    {
      "orderId": "ORD-9921",
      "amount": 49.99,
      "itemsCount": 2,
      "delivered": true
    },
    {
      "orderId": "ORD-9945",
      "amount": 12.50,
      "itemsCount": 1,
      "delivered": false
    }
  ]
}
```

---

## How to Work with JSON in Popular Languages

### 1. JavaScript / TypeScript
In JavaScript, parsing and stringifying JSON is built directly into the language runtime via the global `JSON` object:

```javascript
// Parsing a JSON string into a JavaScript Object
const jsonString = '{"name": "Alice", "age": 28}';
const userObject = JSON.parse(jsonString);
console.log(userObject.name); // Outputs: Alice

// Converting a JavaScript Object into a formatted JSON string
const prettyJSON = JSON.stringify(userObject, null, 2);
console.log(prettyJSON);
```

### 2. Python
Python uses the built-in `json` standard module:

```python
import json

# Parsing JSON string to Python dictionary
json_data = '{"status": "success", "code": 200}'
data = json.loads(json_data)
print(data["status"])  # Outputs: success

# Exporting Python dict to formatted JSON string
formatted_json = json.dumps(data, indent=4)
print(formatted_json)
```

---

## Common Mistakes That Lead to Invalid JSON

1. **Using Single Quotes:** Writing `'name': 'John'` instead of `"name": "John"`.
2. **Trailing Commas:** Leaving a comma at the end of an array or object like `{"a": 1, "b": 2,}`.
3. **Unquoted Object Keys:** Writing `{name: "John"}`.
4. **Comments inside JSON:** Standard RFC 8259 JSON does not support comments (`//` or `/* */`).
5. **Control Characters:** Forgetting to escape quotes or newlines within strings (`"line 1 \n line 2"`).

To validate, format, and debug your JSON payload instantly in your browser without sending any data over the network, use our client-side [JSON Formatter & Validator](https://jsonworkshop.com).
