var db      = require('../models');
var axios   = require('axios');
var cheerio = require('cheerio');

function scrapeHeadline() {

  axios.get('https://www.npr.org/sections/news/')
    .then(response => {
      var $ = cheerio.load(response.data);

      $('article div.item-info').each(function(i, element) {

        var result = {}

        result.title = $(this)
          .children('.title')
          .text();

        // result.link = $(this)
        //   .children('.title')
        //   .children('a')
        //   .attr('href');
        //
        // result.tag = $(this)
        //   .children('.slug-wrap')
        //   .children('a')
        //   .text();
        //
        // result.teaser = $(this)
        //   .children('.teaser')
        //   .children('time')
        //   .text();

        db.Headline.create(result)
          .then(articleData => {})
          .catch(err => {
            console.log(err);

            return res.json(err);
          });

      });

      console.log('scrape complete');

    });
}

module.exports = {
  scrapeHeadline: scrapeHeadline
}
