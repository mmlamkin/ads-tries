class TrieNode {
  constructor() {
    this.words = [];
    this.children = {};
  }
}

class Trie {
  constructor(words, buildCode, Node=TrieNode) {
    this.Node = Node;
    this.buildCode = buildCode;
    this._root = new this.Node();
    this._count = 0;
    const uniqueWords = words.filter((v, i, a) => a.indexOf(v) === i);
    uniqueWords.forEach(word => this.addWord(word));
  }

  addWord(word) {
    const code = this.buildCode(word);
    let node = this._root;
    debugger;

    for (let c of code) {
      if (!node.children[c]) {
        node.children[c] = new TrieNode();
      }
        node = node.children[c];
        if (!node.words.includes(word)) {
          node.words.push(word);
        }
    }
    this._count += 1;
  }

  lookupCode(code) {
    let node = this._root;
    for (let c of code) {
      node = node.children[c]
      if (!node) {
        return [];
      }
    }
    return node.words
  }

  lookupPrefix(codePrefix) {
    let node = this._root;
    for (let c of codePrefix) {
      node = node.children[c]
      if (!node) {
        return [];
      }
    }
    return node.words
  }

  count() {
    return this._count;
  }
}

export default Trie;