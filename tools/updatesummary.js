"use strict";

const FS = require('fs');

const Path = require('path');

const FirstLine = require('firstline');

let summaryFile = Path.join(process.env.PWD, "SUMMARY.md");

let files = [];

process.argv.slice(2, process.argv.length).map((item) => {
  let p = Path.join(process.env.PWD, item);

  FS.readdir(p, function(err, items) {

      items.map((md) => {

        let fp = Path.join(p, md);

        let mp = Path.join(item, md);
        // console.log(fp);

        FirstLine(fp).then(title => {

          title = title.replace('#','');

          let line = `* [${title}](${mp}) \n`;

          // console.log(line);

          FS.appendFileSync(summaryFile, line);
        });
      })
  });
});
