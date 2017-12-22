# riot-ani-search

[![build](https://travis-ci.org/neetjn/riot-ani-search.svg?branch=master)](https://travis-ci.org/neetjn/riot-ani-search/)

[![NPM](https://nodei.co/npm/riot-ani-search.png)](https://nodei.co/npm/riot-ani-search/)

Lightweight riot.js tag for searching for anime using anichart's api.

## About

**riot-anti-search** is a simple riot tag used for quickly searching for anime using the anilist api.

## Usage

To install via NPM:

```bash
npm install riot-view-router
```

For a quick start using jsdelivr:

```html
<script src="https://cdn.jsdelivr.net/npm/riot-ani-search/dist/riot-ani-search.js"></script>
```

This tag takes a total of 3 opts:

> **`*client_id`** ; `string` : Client id for anilist api.

> **`*client_secret`** ; `string` : Client secret key for anilist api.

> **`mature`** ; `void` : Will remove filtering for mature search results.

Once available, **riot-ani-search** can be used like so:

```html
<riot-ani-search
  client-id="neetjn"
  client-secret="*"
  mature />
```

### Contributors

* **John Nolette** (john@neetgroup.net)

---
Copyright (c) 2017 John Nolette Licensed under the MIT license.