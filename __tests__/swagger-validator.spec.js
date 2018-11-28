const SwaggerParser = require('swagger-parser')

describe('commonality/archetypes', () => {
  describe('defines valid Swagger/OpenAPI schemas for', () => {

    let parser = null

    beforeEach(() => {
      parser = new SwaggerParser()
    })

    afterEach(() => {
      parser = null
    })

    test('locales', (done) => {

      parser.validate('./schemas/v1/locales/locales.yaml')
        .then((result) => {
          expect(result.name).not.toBe('SyntaxError')
        })
        .catch(console.error)
        .finally(() => {

        })

      done()
    })

    test('money', async (done) => {
      parser.validate('./schemas/v1/money/money.yaml')
        .then((result) => {
          expect(result.name).not.toBe('SyntaxError')
        })
        .catch(console.error)

      done()
    })
    test.skip('orders', () => {

    })
    test('parties', async (done) => {
      parser.validate('./schemas/v1/parties/parties.yaml')
        .then((result) => {
          expect(result.name).not.toBe('SyntaxError')
        })
        .catch(console.error)

      done()
    })
    test.skip('party-relationships', () => {

    })
    test.skip('products', () => {

    })
    test('quantities', async (done) => {
      parser.validate('./schemas/v1/quantities/quantities.yaml')
        .then((result) => {
          expect(result.name).not.toBe('SyntaxError')
        })
        .catch(console.error)

      done()
    })
    test.skip('rules', () => {

    })
  })
})
