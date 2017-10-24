#!/bin/bash
while read a ; do echo ${a//class=\"night-mode/class=\"} ; done < _layouts/default.html > _layouts/default.html.tmp ;  mv _layouts/default.html{.tmp,}
bundle exec jekyll build
while read a ; do echo ${a//class=\"/class=\"night-mode} ; done < _layouts/default.html > _layouts/default.html.tmp ;  mv _layouts/default.html{.tmp,}
bundle exec jekyll build --config _config.yml,_config.night.yml
bundle exec jekyll serve --skip-initial-build --no-watch
