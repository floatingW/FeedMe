// RSS源接口
// name: 信息源名称
// url: RSS URL地址
// category: 分类名称

/**
 * @typedef {object} RssSource
 * @property {string} name - 信息源名称
 * @property {string} url - RSS URL地址
 * @property {string} category - 分类名称
 */

// 默认配置
export const config = {
  sources: [
    {
      name: "Armin Ronacher's Thoughts and Writings",
      url: "https://lucumr.pocoo.org/feed.atom",
      category: "blog",
    },
    {
      name: "Skywind Inside",
      url: "https://skywind.me/blog/feed",
      category: "blog",
    },
    {
      name: "Huahua’s Tech Road",
      url: "https://zxi.mytechroad.com/blog/feed/",
      category: "blog",
    },
    {
      name: "Sutter’s Mill",
      url: "https://herbsutter.com/feed/",
      category: "blog",
    }
  ],
  maxItemsPerFeed: 30,
  dataPath: "./data",
}

export const defaultSource = config.sources[0]

/**
 * @param {string} url
 * @returns {RssSource | undefined}
 */
export function findSourceByUrl(url) {
  return config.sources.find((source) => source.url === url)
}

export function getSourcesByCategory() {
  return config.sources.reduce((acc, source) => {
    if (!acc[source.category]) {
      acc[source.category] = []
    }
    acc[source.category].push(source)
    return acc
  }, {})
}
