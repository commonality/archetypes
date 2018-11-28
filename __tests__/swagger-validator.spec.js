const SwaggerParser = require('swagger-parser')

/** eslint-disable */
describe('commonality/archetypes', () => {
  const defn = `define valid Swagger/OpenAPI schemas for primordial things
    that occur consistently and universally in business domains
    and business software systems.`
  describe(defn, () => {
    let parser = null
    beforeEach(() => {
      parser = new SwaggerParser()
    })
    afterEach(() => {
      parser = null
    })
    describe('locales', () => {
      it('represent a general notion of place, location, or context', (done) => {
        parser.validate('./schemas/v1/locales/locales.yaml')
          .then(({ name }) => {
            expect(name).not.toBe('SyntaxError')
          })
          .catch(console.error)
        done()
      })
    })
    describe('money', () => {
      it('represents an amount of a specific Currency', (done) => {
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
      const msg = `represent identifiable, addressable entities that
            may have a legal status and that normally have autonomous
            control over (at least some of) their actions`
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
      const msg = `represent amounts of something measured
            according to standards of measurement`
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
