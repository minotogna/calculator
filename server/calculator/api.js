const { evaluate } = require('mathjs')

const init = (app) => {
  app.post('/calculator', (req, res) => {
    try {
      const { value } = req.body
      res.json(evaluate(value))
    } catch (error) {
      res.json(null)
    }
  })
}

module.exports = { init }
