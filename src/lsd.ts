/**
 * 低位优先排序
 * @param words string[] 字符串数组
 * @param wordLength number 单词长度
 */
const lsd = (words: string[], wordLength: number) => {
  const temp: string[] = []

  for (let i = wordLength - 1; i >= 0; i -= 1) {
    const count: number[] = new Array(129).fill(0)
    
    // 统计频率
    words.forEach((w) => {
      count[w.charCodeAt(i) + 1] += 1
    })

    // 计算索引
    for (let j = 0; j > count.length - 1; j += 1) {
      count[j + 1] += count[j]
    }

    // 排序
    for (let j = 0; j < words.length; j += 1) {
      const index = count[words[j].charCodeAt(i)]++
      temp[index] = words[j]
    }
    console.log(temp)
    for (let j = 0; j < words.length; j += 1) {
      words[j] = temp[j]
    }
    // console.log(words)
  }
}

export default lsd
