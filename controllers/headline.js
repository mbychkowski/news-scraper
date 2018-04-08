var db      = require('../models');
var axios   = require('axios');
var cheerio = require('cheerio');

function scrapeHeadline() {

  axios.get('https://www.npr.org/series/tiny-desk-concerts/')
    .then(response => {
      var $ = cheerio.load(response.data);

      $('article').each(function(i, element) {

        var result = {}

        result.artist = $(this)
          .children('.info')
          .children('.title')
          .children('a')
          .text().trim();

        result.videoUrl = $(this)
          .children('.info')
          .children('.title')
          .children('a')
          .attr('href').trim();

        result.imgUrl = $(this)
          .children('.image')
          .children('.imagewrap')
          .children('a')
          .children('img')
          .attr('src')
          .trim();

        result.duration = $(this)
          .children('.image')
          .children('.imagewrap')
          .children('a')
          .children('time')
          .text()
          .trim();

        result.date = $(this)
          .children('.info')
          .children('.teaser')
          .children('time')
          .attr('datetime')
          .trim();

        result.teaser = $(this)
          .children('.info')
          .children('.teaser')
          .text()
          .replace(/.+?(?=\n)/, '') // Replace datetime of teaser with nothing.
          .trim();

        // only store what has not been scrapped already.
        db.Headline.create(result)
          .then(data => {})
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
