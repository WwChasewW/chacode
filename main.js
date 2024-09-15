  function transformToCha() {
      const input = document.getElementById('input').value.toLowerCase();
      const output = document.getElementById('output');
      const chaMap = {
        'a': '\u200B\u200C\u200D', // Zero-width space, non-joiner, and joiner
        'b': '\u2060\u200B\u200C', // Word joiner, zero-width space, non-joiner
        'c': '\u200D\u200B\u2060', // Zero-width joiner, space, word joiner
        'd': '\u2061\u200B\u200C', // Function application, zero-width space, non-joiner
        'e': '\u2062\u200D\u2060', // Invisible times, zero-width joiner, word joiner
        'f': '\u2063\u200B\u2061', // Invisible separator, zero-width space, function application
        'g': '\u200B\u200C\u200D', // Repeated zero-width characters
        'h': '\u200E\u200B\u2062', // Left-to-right mark, zero-width space, invisible times
        'i': '\u2061\u200C\u200D', // Function application, non-joiner, joiner
        'j': '\u200D\u200F\u2060', // Joiner, right-to-left mark, word joiner
        'k': '\u200B\u2061\u2062', // Zero-width space, function application, invisible times
        'l': '\u2063\u2060\u200D', // Invisible separator, word joiner, joiner
        'm': '\u200E\u200B\u200C', // Left-to-right mark, zero-width space, non-joiner
        'n': '\u200C\u200F\u2061', // Non-joiner, right-to-left mark, function application
        'o': '\u2060\u2063\u200B', // Word joiner, invisible separator, zero-width space
        'p': '\u200D\u2062\u200C', // Zero-width joiner, invisible times, non-joiner
        'q': '\u200B\u2063\u200E', // Zero-width space, invisible separator, left-to-right mark
        'r': '\u200C\u2061\u2062', // Non-joiner, function application, invisible times
        's': '\u200F\u200D\u200B', // Right-to-left mark, zero-width joiner, space
        't': '\u200B\u2060\u200C', // Zero-width space, word joiner, non-joiner
        'u': '\u2063\u200D\u200F', // Invisible separator, joiner, right-to-left mark
        'v': '\u2061\u200B\u200E', // Function application, zero-width space, left-to-right mark
        'w': '\u200B\u200C\u2062', // Zero-width space, non-joiner, invisible times
        'x': '\u2060\u200F\u200D'   , // Word joiner, right-to-left mark, joiner
        'y': '\u200B\u2061\u2063', // Zero-width space, function application, invisible separator
        'z': '\u200C\u2062\u200F', // Non-joiner, invisible times, right-to-left mark
        ' ': '\u200B\u2060\u200D'  // Zero-width space, word joiner, joiner (for space)
    };

      const chaText = input.split('').map(char => {
          return chaMap[char] ? chaMap[char] + 'ᶜ' + '☆' + '\u200B' : char;
      }).join('');

      output.textContent = chaText;
  }

  function transformFromCha() {
      const input = document.getElementById('input').value.toLowerCase();
      const output = document.getElementById('output');
      const reverseMap = {
        '\u200B\u200C\u200D': 'a', '\u2060\u200B\u200C': 'b', '\u200D\u200B\u2060': 'c', 
        '\u2061\u200B\u200C': 'd', '\u2062\u200D\u2060': 'e', '\u2063\u200B\u2061': 'f', 
        '\u200B\u200C\u200D': 'g', '\u200E\u200B\u2062': 'h', '\u2061\u200C\u200D': 'i', 
        '\u200D\u200F\u2060': 'j', '\u200B\u2061\u2062': 'k', '\u2063\u2060\u200D': 'l', 
        '\u200E\u200B\u200C': 'm', '\u200C\u200F\u2061': 'n', '\u2060\u2063\u200B': 'o', 
        '\u200D\u2062\u200C': 'p', '\u200B\u2063\u200E': 'q', '\u200C\u2061\u2062': 'r', 
        '\u200F\u200D\u200B': 's', '\u200B\u2060\u200C': 't', '\u2063\u200D\u200F': 'u', 
        '\u2061\u200B\u200E': 'v', '\u200B\u200C\u2062': 'w', '\u2060\u200F\u200D': 'x', 
        '\u200B\u2061\u2063': 'y', '\u200C\u2062\u200F': 'z', '\u200B\u2060\u200D': ' '  // Space
    };

      const normalText = input.split('ᶜ☆\u200B').map(char => {
          return reverseMap[char] || char;
      }).join('');

      output.textContent = normalText;
  }