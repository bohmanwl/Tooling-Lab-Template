const { RockPaperScissors } = require(`../resources/scripts/rock_paper_scissors.js`);
const mathRandomSpy = jest.spyOn(Math, `random`);

describe(`RockPaperScissors class`, function () {
  describe(`determineWinner()`, function () {
    test(`win cases`, function () {
      const game = new RockPaperScissors();
      expect(game.determineWinner(`rock`, `scissors`)).toBe(`win`);
      expect(game.determineWinner(`scissors`, `paper`)).toBe(`win`);
      expect(game.determineWinner(`paper`, `rock`)).toBe(`win`);
      // Complete the test
    });

    test(`tie cases`, function () {
      const game = new RockPaperScissors();
      expect(game.determineWinner(`rock`, `rock`)).toBe(`tie`);
      expect(game.determineWinner(`scissors`, `scissors`)).toBe(`tie`);
      expect(game.determineWinner(`paper`, `paper`)).toBe(`tie`);
      // Write your test here
    });

    test(`lost cases`, function () {
      const game = new RockPaperScissors();
      expect(game.determineWinner(`scissors`, `rock`)).toBe(`lost`);
      expect(game.determineWinner(`paper`, `scissors`)).toBe(`lost`);
      expect(game.determineWinner(`rock`, `paper`)).toBe(`lost`);
      // Write your test here
    });
  });

  describe(`generateCPUResponse()`, function () {
    it(`Math.Random = 0.1 -> Rock`, function() {
      mathRandomSpy.mockImplementation(() => 0.1);
      const game = new RockPaperScissors();
      expect(game.generateCPUResponse()).toBe(`rock`);
    });

    it(`Math.Random = 0.5 -> Paper`, function() {
      mathRandomSpy.mockImplementation(() => 0.5);
      const game = new RockPaperScissors();
      expect(game.generateCPUResponse()).toBe(`paper`);
      // Write your test here
    });

    it(`Math.Random = 0.9 -> Scissors`, function() {
      mathRandomSpy.mockImplementation(() => 0.9);
      const game = new RockPaperScissors();
      expect(game.generateCPUResponse()).toBe(`scissors`);
      // Write your test here
    });

  });
});

