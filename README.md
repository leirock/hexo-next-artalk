# Artalk for Hexo NexT

> [中文](https://github.com/leirock/hexo-next-artalk/blob/main/README-CN.md)

[![NPM version](https://img.shields.io/npm/v/hexo-next-artalk?color=red&logo=npm&style=flat-square)](https://www.npmjs.com/package/hexo-next-artalk)
[![NPM downloads](https://img.shields.io/npm/dm/hexo-next-artalk?color=red&logo=npm&style=flat-square)](https://www.npmjs.com/package/hexo-next-artalk)
[![Theme Version](https://img.shields.io/badge/NexT-v7.3.0+-blue?style=flat-square)](https://github.com/next-theme/hexo-theme-next)
[![Artalk Version](https://img.shields.io/badge/Artalk-v2.3.1+-558fb5?style=flat-square)](https://github.com/ArtalkJS/Artalk)

This is an [Artalk](https://artalk.js.org) comment plugin for Hexo NexT.

## Install

```bash
npm install hexo-next-artalk
```

## Configure

Add the following configurations in Hexo's root config file `_config.yml`, set `enable` to `true`, and edit other configurations in `artalk` section as your own values.

```yaml
# Artalk Config File
## For more information: https://artalk.js.org

artalk:
  enable: false

  # Backend server API, you should set this to your own server API
  server: https://artalk.example.com

  # Site name, you can set this to specify site for server
  # or leave blank to use default site
  site:

  # Frontend resources CDN, you can set this to your preferred CDN
  ## Reference: https://artalk.js.org/guide/frontend/install.html
  jsUrl: https://unpkg.com/artalk@2/dist/Artalk.js
  cssUrl: https://unpkg.com/artalk@2/dist/Artalk.css

  # Page views count
  pvCount: true

  # Comments count
  commentCount: true

  # Dark mode
  darkMode: auto

  # Use backend to config
  ## Reference: https://artalk.js.org/guide/backend/fe-control.html
  useBackendConf: false
```

## Tips

The default text of comments count in post meta is "Artalk". If you would like to change it, for example, to simplified Chinese "评论数":

1. Create a file `/source/_data/languages.yml` in your Hexo blog folder;
2. Edit this file as follows and then save it.

```yaml
zh-CN:
  post:
    comments:
      artalk: 评论数
```