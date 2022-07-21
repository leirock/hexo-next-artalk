# Artalk for Hexo NexT

[![NPM version](https://img.shields.io/npm/v/hexo-next-artalk?color=red&logo=npm&style=flat-square)](https://www.npmjs.com/package/hexo-next-artalk)
[![NPM downloads](https://img.shields.io/npm/dm/hexo-next-artalk?color=red&logo=npm&style=flat-square)](https://www.npmjs.com/package/hexo-next-artalk)
[![Theme Version](https://img.shields.io/badge/NexT-v7.3.0+-blue?style=flat-square)](https://github.com/next-theme/hexo-theme-next)
[![Artalk Version](https://img.shields.io/badge/Artalk-v2.3.1+-558fb5?style=flat-square)](https://github.com/ArtalkJS/Artalk)

[Artalk](https://artalk.js.org) comment plugin for Hexo NexT.

## Install

```bash
npm install hexo-next-artalk
```

## Configure

Set the value `enable` to `true`, add `server`, and edit other configurations in `artalk` section in the config file as following. You can config those in Hexo's root config file `_config.yml`:

```yaml
# Artalk Config File
# For more information: https://artalk.js.org

artalk:
  enable: false

  # Server address url, you should set this to your own link
  server: https://artalk.example.com

  # Site name, you can set this to specify site for server
  # or leave blank to use default site
  site:

  # JS CDN url, you can set this to your preferred CDN
  jsUrl: https://unpkg.com/artalk@2/dist/Artalk.js

  # CSS styles CDN url, you can set this to your preferred CDN
  cssUrl: https://unpkg.com/artalk@2/dist/Artalk.css

  # PV count
  pvCount: true

  # Comments count
  commentCount: true

  # Dark mode
  darkMode: auto

  # Use backend to config
  # useBackendConf: true
```