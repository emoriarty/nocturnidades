#!/bin/bash
while read a ; do echo ${a//class=\"night-mode/class=\"} ; done < _layouts/default.html > _layouts/default.html.tmp ;  mv _layouts/default.html{.tmp,}
JEKYLL_ENV=production bundle exec jekyll build --config=_config.yml,_config.prod.yml
while read a ; do echo ${a//class=\"/class=\"night-mode} ; done < _layouts/default.html > _layouts/default.html.tmp ;  mv _layouts/default.html{.tmp,}
JEKYLL_ENV=production bundle exec jekyll build --config=_config.yml,_config.night.yml,_config.prod.yml
