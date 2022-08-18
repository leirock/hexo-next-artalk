/* global hexo */

'use strict';

const Util = require('@next-theme/utils');
const utils = new Util(hexo, __dirname);

// Add comment
hexo.extend.filter.register('theme_inject', (injects) => {
  const config = utils.defaultConfigFile('artalk', 'default.yaml');
  if (!config.enable) return;

  injects.comment.raw('artalk', '<div class="comments" id="comments"></div>', {}, { cache: true });
  injects.bodyEnd.raw('artalk', utils.getFileContent('artalk.njk'));
  injects.head.raw('artalk', `<link rel="preconnect" href="${config.server}">`, {}, {});
});

// Add post_meta
hexo.extend.filter.register('theme_inject', (injects) => {
  const config = utils.defaultConfigFile('artalk', 'default.yaml');
  if (!config.enable || !config.server) return;

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

    injects.postMeta.raw(
      'artalk_comment_count',
      `
        {% if post.comments and config.artalk.commentCount %}
          {%- set post_meta_comment = __('post.comments.artalk') %}
          {%- if post_meta_comment == 'post.comments.artalk' %}
            {%- set post_meta_comment = 'Artalk' %}
          {%- endif %}
          <span class="post-meta-item" title="{{ post_meta_comment }}">
            <span class="post-meta-item-icon">
              <i class="far fa-comment"></i>
            </span>
            <span class="post-meta-item-text">{{ post_meta_comment + __('symbol.colon') }}</span>
            <a href="{{ url_for(post.path) }}#comments" itemprop="discussionUrl">
              <span id="ArtalkCount" class="post-comments-count" data-page-key="{{ url_for(post.path) }}" itemprop="commentCount"></span>
            </a>
          </span>
        {% endif %}
      `,
      {},
      {}
    );

});
