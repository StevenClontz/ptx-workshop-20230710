var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "colophon-1",
  "level": "1",
  "url": "colophon-1.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "   example.org   https:\/\/example.org   copyright  "
},
{
  "id": "section-title",
  "level": "1",
  "url": "section-title.html",
  "type": "Section",
  "number": "1.1",
  "title": "Section title",
  "body": " Section title  Hello    hello  heya     What is ?   Use arithmetic.        means take the successor ordinal. For ...     hello  heya      hello  heya     What is ?   Use arithmetic.        means take the successor ordinal. For ...   Hi mom   Green one   It's a green digit 1.    "
},
{
  "id": "lem-hi",
  "level": "2",
  "url": "section-title.html#lem-hi",
  "type": "Hot Fact",
  "number": "1.1.1",
  "title": "",
  "body": "  hello  heya   "
},
{
  "id": "exercise-1",
  "level": "2",
  "url": "section-title.html#exercise-1",
  "type": "Puzzle",
  "number": "1.1.2",
  "title": "",
  "body": " What is ?   Use arithmetic.        means take the successor ordinal. For ...  "
},
{
  "id": "lem-2",
  "level": "2",
  "url": "section-title.html#lem-2",
  "type": "Hot Fact",
  "number": "1.1.3",
  "title": "",
  "body": "  hello  heya   "
},
{
  "id": "lem-3",
  "level": "2",
  "url": "section-title.html#lem-3",
  "type": "Hot Fact",
  "number": "1.1.4",
  "title": "",
  "body": "  hello  heya   "
},
{
  "id": "exercise-2",
  "level": "2",
  "url": "section-title.html#exercise-2",
  "type": "Puzzle",
  "number": "1.1.5",
  "title": "",
  "body": " What is ?   Use arithmetic.        means take the successor ordinal. For ...  "
},
{
  "id": "green1",
  "level": "2",
  "url": "section-title.html#green1",
  "type": "Figure",
  "number": "1.1.6",
  "title": "",
  "body": " Green one   It's a green digit 1.   "
},
{
  "id": "colophon-2",
  "level": "1",
  "url": "colophon-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
