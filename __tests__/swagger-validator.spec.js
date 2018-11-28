const SwaggerParser = require('swagger-parser')

/** eslint-disable */
describe('commonality/archetypes', () => {
  describe('defines valid Swagger/OpenAPI schemas for', () => {
    let parser = null
    beforeEach(() => {
      parser = new SwaggerParser()
    })
    afterEach(() => {
      parser = null
    })
    describe('locales', () => {
      it('which represents a general notion of place, location, or context', (done) => {
        parser.validate('./schemas/v1/locales/locales.yaml')
          .then(({ name }) => {
            expect(name).not.toBe('SyntaxError')
          })
          .catch(console.error)
        done()
      })
    })
    describe('money', () => {
      it('which represents an amount of a specific Currency', (done) => {
        parser.validate('./schemas/v1/money/money.yaml')
          .then(({ name }) => {
            expect(name).not.toBe('SyntaxError')
          })
          .catch(console.error)
        done()
      })
    })
    describe.skip('orders', () => {})
    describe('parties', () => {
      const msg = `represents an identifiable, addressable entity that
            may have a legal status and that normally has autonomous control over (at
            least some of) its actions`
      it(msg, (done) => {
        parser.validate('./schemas/v1/parties/parties.yaml')
          .then(({ name }) => {
            expect(name).not.toBe('SyntaxError')
          })
          .catch(console.error)
        done()
      })
    })
    describe.skip('party-relationships', () => {})
    describe.skip('products', () => {})
    describe('quantities', () => {
      const msg = `represents an amount of something measured
            according to some standard of measurement`
      it(msg, (done) => {
        parser.validate('./schemas/v1/quantities/quantities.yaml')
          .then(({ name }) => {
            expect(name).not.toBe('SyntaxError')
          })
          .catch(console.error)
        done()
      })
    })
    describe.skip('rules', () => {})
  })
})
