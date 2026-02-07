/**
 * 将数字转换为缩写格式的字符串
 * @param {number} num - 要转换的数字
 * @returns {string} 缩写后的字符串，保留一位小数
 * @example
 * formatNumberAbbr(1560) // "1.6K"
 * formatNumberAbbr(2570000) // "2.6M"
 * formatNumberAbbr(1234567890) // "1.2B"
 */
export function formatNumberAbbr(num) {
  if (num === null || num === undefined || isNaN(num)) {
    return '0'
  }

  const absNum = Math.abs(num)
  const sign = num < 0 ? '-' : ''

  if (absNum >= 1000000000) {
    // 十亿及以上 (Billion)
    return sign + (absNum / 1000000000).toFixed(1) + 'B'
  } else if (absNum >= 1000000) {
    // 百万及以上 (Million)
    return sign + (absNum / 1000000).toFixed(1) + 'M'
  } else if (absNum >= 1000) {
    // 千及以上 (Thousand)
    return sign + (absNum / 1000).toFixed(1) + 'K'
  } else {
    // 小于1000，直接返回
    return num.toString()
  }
}
