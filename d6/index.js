const http = require("http");

function getVowels(str) {
  var m = str.match(/[aeiou]/gi);
  return m === null ? 0 : m.length;
}

function getConsonants(str) {
  var m = str.match(/[^a0eiou\s0-9]/gi);
  return m === null ? 0 : m.length;
}

const handler = (req, res) => {
  console.log(req.url);
  console.log(req.url.split("/"));
  const [_, ime, op] = req.url.split("/");

  function getEven() {
    return op.length % 2 == 0 ? "Da" : "Ne";
  }

  if (ime === "Ime") {
    switch (op) {
      case "Bojan":
        res.end(
          `Even: ${getEven()}, Character: ${op.length}, Vowel: ${getVowels(
            op
          )}, Consonants: ${getConsonants(op)}`
        );
        break;
      case "Nikola":
        res.end(
          `Even: ${getEven()}, Character: ${op.length}, Vowel: ${getVowels(
            op
          )}, Consonants: ${getConsonants(op)}`
        );
        break;
      case "Andrija":
        res.end(
          `Even: ${getEven()}, Character: ${op.length}, Vowel: ${getVowels(
            op
          )}, Consonants: ${getConsonants(op)}`
        );
        break;
      case "Marija":
        res.end(
          `Even: ${getEven()}, Character: ${op.length}, Vowel: ${getVowels(
            op
          )}, Consonants: ${getConsonants(op)}`
        );
        break;
      case "Dusan":
        res.end(
          `Even: ${getEven()}, Character: ${op.length}, Vowel: ${getVowels(
            op
          )}, Consonants: ${getConsonants(op)}`
        );
        break;
      case "Andrijana":
        res.end(
          `Even: ${getEven()}, Character: ${op.length}, Vowel: ${getVowels(
            op
          )}, Consonants: ${getConsonants(op)}`
        );
        break;
      case "Aleksej":
        res.end(
          `Even: ${getEven()}, Character: ${op.length}, Vowel: ${getVowels(
            op
          )}, Consonants: ${getConsonants(op)}`
        );
        break;
      case "Nevena":
        res.end(
          `Even: ${getEven()}, Character: ${op.length}, Vowel: ${getVowels(
            op
          )}, Consonants: ${getConsonants(op)}`
        );
        break;
      case "Tamara":
        res.end(
          `Even: ${getEven()}, Character: ${op.length}, Vowel: ${getVowels(
            op
          )}, Consonants: ${getConsonants(op)}`
        );
        break;
      case "Gasper":
        res.end(
          `Even: ${getEven()}, Character: ${op.length}, Vowel: ${getVowels(
            op
          )}, Consonants: ${getConsonants(op)}`
        );
        break;
      case "Senka":
        res.end(
          `Even: ${getEven()}, Character: ${op.length}, Vowel: ${getVowels(
            op
          )}, Consonants: ${getConsonants(op)}`
        );
        break;
      case "Duska":
        res.end(
          `Even: ${getEven()}, Character: ${op.length}, Vowel: ${getVowels(
            op
          )}, Consonants: ${getConsonants(op)}`
        );
        break;
      case "Goran":
        res.end(
          `Even: ${getEven()}, Character: ${op.length}, Vowel: ${getVowels(
            op
          )}, Consonants: ${getConsonants(op)}`
        );
        break;
      case "Marko":
        res.end(
          `Even: ${getEven()}, Character: ${op.length}, Vowel: ${getVowels(
            op
          )}, Consonants: ${getConsonants(op)}`
        );
        break;
      case "Atanas":
        res.end(
          `Even: ${getEven()}, Character: ${op.length}, Vowel: ${getVowels(
            op
          )}, Consonants: ${getConsonants(op)}`
        );
        break;

      default:
        res.end("Invalid Address");
    }
  } else {
    res.end("Please enter correct URL");
  }
};

const server = http.createServer(handler);

server.listen(10000, "127.0.0.1", (err) => {
  if (err) console.log("error");
  console.log("server started on port 10000");
});
