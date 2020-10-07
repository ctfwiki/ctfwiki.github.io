"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Base16 =
/*#__PURE__*/
function () {
  function Base16() {
    _classCallCheck(this, Base16);
  }

  _createClass(Base16, null, [{
    key: "CharacterToBinary",
    value: function CharacterToBinary(character) {
      var ascii = character.charCodeAt();
      ascii = ascii.toString(2);

      while (ascii.length !== 8) {
        ascii = "0" + ascii;
      }

      var chunks = ascii.match(/(.|[\r\n]){1,4}/g);
      return chunks;
    }
  }, {
    key: "Encode",
    value: function Encode(string) {
      var characters = string.split("");
      var chunks = [];

      for (var i = 0; i < characters.length; i++) {
        var temp = this.CharacterToBinary(characters[i]);
        chunks.push(temp[0], temp[1]);
      }

      var result = "";

      for (var _i = 0; _i < chunks.length; _i++) {
        result += this.BinaryToCharactersTable[chunks[_i]];
      }

      return result;
    }
  }, {
    key: "Decode",
    value: function Decode(string) {
      if (string.length % 2 === 1) {
        return false;
      }

      var characters = string.split("");
      var chunks = [];

      for (var i = 0; i < characters.length; i++) {
        chunks.push(this.CharactersToBinaryTable[characters[i]]);
      }

      var result = "";

      for (var _i2 = 0; _i2 < chunks.length; _i2 += 2) {
        var bin = chunks[_i2] + chunks[_i2 + 1];
        var code = parseInt(bin, 2);
        result += String.fromCharCode(code);
      }

      return result;
    }
  }, {
    key: "CharactersToBinaryTable",
    get: function get() {
      return {
        "0": "0000",
        "1": "0001",
        "2": "0010",
        "3": "0011",
        "4": "0100",
        "5": "0101",
        "6": "0110",
        "7": "0111",
        "8": "1000",
        "9": "1001",
        "a": "1010",
        "b": "1011",
        "c": "1100",
        "d": "1101",
        "e": "1110",
        "f": "1111"
      };
    }
  }, {
    key: "BinaryToCharactersTable",
    get: function get() {
      return {
        "0000": "0",
        "0001": "1",
        "0010": "2",
        "0011": "3",
        "0100": "4",
        "0101": "5",
        "0110": "6",
        "0111": "7",
        "1000": "8",
        "1001": "9",
        "1010": "a",
        "1011": "b",
        "1100": "c",
        "1101": "d",
        "1110": "e",
        "1111": "f"
      };
    }
  }]);

  return Base16;
}();

module.exports = Base16;