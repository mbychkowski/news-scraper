// scrape function
var axios       = require('axios');
var cheerio     = require('cheerio');

module.exports = {
  axios.get('https://www.npr.org/sections/news/');

  var $ = cheerio.load(response.data);

  $('article.item-info').each(function(i, element) {

    var result = {}

    result.title = $(this)
    .children('.title')
    .children('a')
    .text();

    result.tag = $(this)
    .children('.slug-wrap')
    .children('a')
    .text();

    result.teaser = $(this)
    .children('.teaser')
    .children('time')
    .text()

  });
}
