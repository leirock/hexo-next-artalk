/* global hexo */

'use strict';

const Util = require('@next-theme/utils');
const utils = new Util(hexo, __dirname);

// Add comment
hexo.extend.filter.register('theme_inject', (injects) => {
  const config = utils.defaultConfigFile('artalk', 'default.yaml');
  if (!config.enable) return;

  injects.comment.raw('artalk', '<div class="comments" id="artalk"></div>', {}, { cache: true });
  injects.bodyEnd.raw('artalk', utils.getFileContent('artalk.njk'));
  injects.head.raw('artalk', `<link rel="preconnect" href="${config.server}">`, {}, {});
});

// Add post_meta
const capitalize = (input) => input.toString().charAt(0).toUpperCase() + input.toString().substr(1);
const iconText = (icon, key, defaultValue = capitalize(key)) =>
  `
    <span class="post-meta-item-icon">
      <i class="${icon}"></i>
    </span>
    {%- set post_meta_comment = __('post.comments.${key}') %}
    {%- if post_meta_comment == 'post.comments.${key}' %}
      {%- set post_meta_comment = '${defaultValue}' %}
    {%- endif %}
    <span class="post-meta-item-text">{{ post_meta_comment + __('symbol.colon') }}</span>
  `;

hexo.extend.filter.register('theme_inject', (injects) => {
  const config = utils.defaultConfigFile('artalk', 'default.yaml');
  if (!config.enable || !config.server) return;

  if (config.pvCount) {

    injects.postMeta.raw(
      'artalk_comment_count',
      `
    {% if post.comments and config.artalk.commentCount %}
    <span class="post-meta-item">
      ${iconText('far fa-comment', 'artalk')}
      <a title="artalk" href="{{ url_for(post.path) }}#artalk" itemprop="discussionUrl">
        <span id="ArtalkCount" class="post-comments-count" data-page-key="{{ url_for(post.path) }}" itemprop="commentCount"></span>
      </a>
    </span>
    {% endif %}
    `,
      {},
      {}
    );

    injects.postMeta.raw(
      'artalk_pv_count',
      `
    {% if config.artalk.pvCount %}
    <span class="post-meta-item" title="{{ __('post.views') }}">
      <span class="post-meta-item-icon">
        <i class="far fa-eye"></i>
      </span>
      <span class="post-meta-item-text">{{ __('post.views') + __('symbol.colon') }}</span>
      <span id="ArtalkPV" data-page-key="{{ url_for(post.path) }}" ></span>
    </span>
    {% endif %}
  `,
      {},
      {}
    );

  }
});
